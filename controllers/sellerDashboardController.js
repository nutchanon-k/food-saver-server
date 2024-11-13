// controllers/dashboardController.js

const prisma = require('../configs/prisma');

// ดึงข้อมูล KPI
const getKPI = async (req, res) => {
    const sellerId = req.user.id; // จาก JWT
  
    try {
      // ดึง Store ของผู้ขาย
      const store = await prisma.store.findUnique({
        where: { userId: +sellerId },
      });
  
      if (!store) {
        return res.status(404).json({ error: 'Store not found' });
      }
  
      const storeId = store.id;
  
      // Total Revenue: Sum of totalPrice from Orders with paymentStatus COMPLETED and related to the store
      const totalRevenueResult = await prisma.order.aggregate({
        _sum: {
          totalPrice: true,
        },
        where: {
          paymentStatus: 'COMPLETED',
          orderItems: {
            some: {
              product: {
                storeId: storeId,
              },
            },
          },
        },
      });
  
      const totalRevenue = totalRevenueResult._sum.totalPrice || 0;
  
      // Total Dish Ordered: Sum of quantities from OrderItems related to store's products
      const totalDishOrderedResult = await prisma.orderItem.aggregate({
        _sum: {
          quantity: true,
        },
        where: {
          order: {
            paymentStatus: 'COMPLETED',
            orderItems: {
              some: {
                product: {
                  storeId: storeId,
                },
              },
            },
          },
        },
      });
  
      const totalDishOrdered = totalDishOrderedResult._sum.quantity || 0;
  
      // Total Customer: Count of distinct userIds from Orders related to store's products
      const totalCustomerResult = await prisma.order.findMany({
        where: {
          paymentStatus: 'COMPLETED',
          orderItems: {
            some: {
              product: {
                storeId: storeId,
              },
            },
          },
        },
        select: {
          userId: true,
        },
        distinct: ['userId'],
      });
  
      const totalCustomer = totalCustomerResult.length;
  
      res.json({
        totalRevenue,
        totalDishOrdered,
        totalCustomer,
      });
    } catch (error) {
      console.error('Error fetching KPI:', error);
      res.status(500).json({ error: 'Failed to fetch KPI data' });
    }
  };
  
// ดึง Order Report
const getOrderReport = async (req, res) => {
    const sellerId = req.user.id; // จาก JWT
  
    try {
      // ดึง Store ของผู้ขาย
      const store = await prisma.store.findUnique({
        where: { userId: +sellerId },
      });
  
      if (!store) {
        return res.status(404).json({ error: 'Store not found' });
      }
  
      const storeId = store.id;
  
      // ดึง Orders ของ Store ที่มีคำสั่งซื้อจบแล้ว
      const orders = await prisma.order.findMany({
        where: {
          
          orderItems: {
            some: {
              product: {
                storeId: storeId,
              },
            },
          },
        },
        include: {
          user: {
            select: {
              firstName: true,
              lastName: true,
              email: true,
              profilePicture: true,
            },
          },
          orderItems: {
            include: {
              product: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
        take: 10,
      });
      console.log(orders)
      // แปลงข้อมูลให้อยู่ในรูปแบบที่ต้องการ
      const report = orders.map(order => ({
        customer: `${order.user.firstName || ''} ${order.user.lastName || order.user.email}`,
        profilePicture: order.user.profilePicture,
        menu: order.orderItems.map(oi => `${oi.product.name} x ${oi.quantity}`).join(', '),
        totalPayment: parseFloat(order.totalPrice),
        status: order.paymentStatus,
        createdAt: order.createdAt,
      }));
  
      res.json(report);
    } catch (error) {
      console.error('Error fetching order report:', error);
      res.status(500).json({ error: 'Failed to fetch order report' });
    }
  };
  
  // ดึง Most Ordered Dishes
  const getMostOrderedDishes = async (req, res) => {
    const sellerId = req.user.id; // จาก JWT
  
    try {
      // ดึง Store ของผู้ขาย
      const store = await prisma.store.findUnique({
        where: { userId: +sellerId },
      });
  
      if (!store) {
        return res.status(404).json({ error: 'Store not found' });
      }
  
      const storeId = store.id;
  
      // ดึง OrderItems และจัดกลุ่มตาม productId โดยใช้ groupBy
      const mostOrdered = await prisma.orderItem.groupBy({
        by: ['productId'],
        _sum: {
          quantity: true,
        },
        where: {
          order: {
            paymentStatus: 'COMPLETED',
            orderItems: {
              some: {
                product: {
                  storeId: storeId,
                },
              },
            },
          },
        },
        orderBy: {
          _sum: {
            quantity: 'desc',
          },
        },
        take: 5, // แสดง 10 อันดับแรก
      });
  
      // ดึงชื่อผลิตภัณฑ์และ imageUrl จาก productId ที่ได้จาก groupBy
      const productIds = mostOrdered.map(item => item.productId);
  
      const products = await prisma.product.findMany({
        where: {
          id: { in: productIds },
        },
        select: {
          id: true,
          name: true,
          imageUrl: true,
        },
      });
  
      // สร้างแผนที่เพื่อให้สามารถค้นหาชื่อและ imageUrl ผลิตภัณฑ์ได้ง่ายขึ้น
      const productMap = {};
      products.forEach(product => {
        productMap[product.id] = {
          name: product.name,
          imageUrl: product.imageUrl,
        };
      });
  
      // แปลงผลลัพธ์เพื่อรวมชื่อและ imageUrl ผลิตภัณฑ์
      const result = mostOrdered.map(item => ({
        dish: productMap[item.productId]?.name || 'Unknown Product',
        imageUrl: productMap[item.productId]?.imageUrl || '',
        totalOrdered: item._sum.quantity,
      }));
  
      res.json(result);
    } catch (error) {
      console.error('Error fetching most ordered dishes:', error);
      res.status(500).json({ error: 'Failed to fetch most ordered dishes' });
    }
  };
  
  // ดึง Most Type of Order (Category)
  const getMostTypeOfOrder = async (req, res) => {
    const sellerId = req.user.id; // จาก JWT
  
    try {
      // ดึง Store ของผู้ขาย
      const store = await prisma.store.findUnique({
        where: { userId: sellerId },
      });
  
      if (!store) {
        return res.status(404).json({ error: 'Store not found' });
      }
  
      const storeId = store.id;
  
      // ดึง OrderItems ที่เชื่อมโยงกับ Store
      const orderItems = await prisma.orderItem.findMany({
        where: {
          order: {
            paymentStatus: 'COMPLETED',
            orderItems: {
              some: {
                product: {
                  storeId: storeId,
                },
              },
            },
          },
        },
        include: {
          product: {
            select: {
              productCategories: {
                select: {
                  category: {
                    select: {
                      name: true,
                      imageUrl: true
                    },
                  },
                },
              },
            },
          },          
        },
      });
  
      // สร้างแผนที่สำหรับเก็บผลลัพธ์
      const categoryMap = {};
      
      orderItems.forEach(oi => {
          oi.product.productCategories.forEach(pc => {
              const category = pc.category.name;
              if (categoryMap[category]) {
                  categoryMap[category] += oi.quantity;
                } else {
                    categoryMap[category] = oi.quantity;
                    
                }
                
            });
        });
        // console.log(orderItems[1].product.productCategories[0].category.imageUrl)
  
      // แปลงเป็น array
      const result = Object.keys(categoryMap).map(category => ({
        category,
        totalOrdered: categoryMap[category],
      }));
  
      res.json(result);
    } catch (error) {
      console.error('Error fetching most type of order:', error);
      res.status(500).json({ error: 'Failed to fetch most type of order' });
    }
  };
  
  module.exports = {
    getKPI,
    getOrderReport,
    getMostOrderedDishes,
    getMostTypeOfOrder,
  };