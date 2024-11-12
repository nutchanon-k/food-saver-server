
const prisma = require("../configs/prisma");


// /**
//  * ดึงข้อมูล KPIs หลัก
//  * @returns {Object} ข้อมูล KPIs หลัก
//  */
const getKPIs = async () => {
  const totalRevenue = await prisma.order.aggregate({
    _sum: {
      totalPrice: true,
    },
    where: {
      paymentStatus: 'COMPLETED',
    },
  });

  const totalOrders = await prisma.order.count();

  const totalUsers = await prisma.user.groupBy({
    by: ['role'],
    _count: {
      role: true,
    },
  });

  const totalProducts = await prisma.product.count();

  return {
    totalRevenue: totalRevenue._sum.totalPrice || 0,
    totalOrders,
    totalUsers,
    totalProducts,
  };
};

//   /**
//    * ดึงข้อมูลยอดขายตามเวลา
//    * @returns {Array} ข้อมูลยอดขายตามเดือน
//    */
const getSalesOverTime = async () => {
  try {
    const salesData = await prisma.$queryRaw`
      SELECT 
        DATE_FORMAT(created_at, '%b %Y') AS month, 
        SUM(total_price) AS totalRevenue, 
        MONTH(created_at) AS monthNumber
      FROM \`Order\`
      WHERE payment_status = 'COMPLETED'
      GROUP BY month, monthNumber
      ORDER BY monthNumber ASC
    `;

    console.log('Raw Sales Data:', salesData); // สำหรับการดีบัก

    const formattedData = salesData.map(item => ({
      month: item.month, // 'Nov 2024' เป็นต้น
      totalRevenue: Number(item.totalRevenue),
      monthNumber: Number(item.monthNumber),
    }));

    return formattedData;
  } catch (error) {
    console.error('Error in getSalesOverTime:', error);
    throw new Error('Failed to fetch sales over time');
  }
};

//   /**
//    * ดึงข้อมูลจำนวนคำสั่งซื้อตามเวลา
//    * @returns {Array} ข้อมูลคำสั่งซื้อตามเดือน
//    */
const getOrdersOverTime = async () => {
  try {
    const ordersData = await prisma.$queryRaw`
      SELECT DATE_FORMAT(created_at, '%b %Y') AS month, COUNT(*) AS totalOrders
      FROM \`Order\`
      GROUP BY month
      ORDER BY month ASC
    `;

    const formattedData = ordersData.map(item => ({
      month: item.month, // 'Nov 2024' เป็นต้น
      totalOrders: Number(item.totalOrders),
    }));

    return formattedData;
  } catch (error) {
    console.error('Error in getOrdersOverTime:', error);
    throw new Error('Failed to fetch orders over time');
  }
};


//   /**
//    * ดึงข้อมูลยอดขายตามหมวดหมู่สินค้า
//    * @returns {Array} ข้อมูลยอดขายตามหมวดหมู่
//    */
const getSalesByCategory = async () => {
  const categories = await prisma.category.findMany({
    include: {
      productCategories: {
        include: {
          product: {
            include: {
              orderItems: {
                where: {
                  order: {
                    paymentStatus: 'COMPLETED',
                  },
                },
                select: {
                  quantity: true,
                  unitPrice: true, // ใช้ unitPrice แทน price
                },
              },
            },
          },
        },
      },
    },
  });

  // ประมวลผลข้อมูลเพื่อคำนวณยอดขายตามหมวดหมู่
  const categorySales = categories.map(category => {
    let totalRevenue = 0;

    category.productCategories.forEach(productCategory => {
      productCategory.product.orderItems.forEach(orderItem => {
        totalRevenue += orderItem.quantity * parseFloat(orderItem.unitPrice);
      });
    });

    return {
      categoryName: category.name,
      totalRevenue: parseFloat(totalRevenue.toFixed(2)), // ปัดเศษเป็น 2 ตำแหน่งทศนิยม
    };
  });

  return categorySales;
};

//   /**
//    * ดึงข้อมูลยอดขายตามผู้ขาย
//    * @returns {Array} ข้อมูลยอดขายตามผู้ขาย
//    */
const getSalesBySeller = async () => {
  const salesData = await prisma.user.findMany({
    where: {
      role: 'SELLER', // ตรวจสอบว่า role เป็น 'SELLER' (ตามข้อมูลที่คุณให้มาเป็น 'SELLER' ไม่ใช่ 'Seller')
    },
    include: {
      store: { // ใช้ 'store' ไม่ใช่ 'stores'
        include: {
          products: {
            include: {
              orderItems: {
                where: {
                  order: {
                    paymentStatus: 'COMPLETED',
                  },
                },
                select: {
                  quantity: true,
                  unitPrice: true, // ตรวจสอบว่าคุณมี field 'unitPrice' ใน orderItems
                },
              },
            },
          },
        },
      },
    },
  });

  // ประมวลผลข้อมูลเพื่อคำนวณยอดขายตามผู้ขาย
  const sellerSales = salesData.map(user => {
    const { firstName, lastName, store } = user;
    let totalRevenue = 0;

    if (store && store.products) {
      store.products.forEach(product => {
        if (product.orderItems) {
          product.orderItems.forEach(orderItem => {
            totalRevenue += orderItem.quantity * parseFloat(orderItem.unitPrice);
          });
        }
      });
    }

    return {
      sellerName: `${firstName} ${lastName}`,
      totalRevenue: parseFloat(totalRevenue.toFixed(2)), // ปัดเศษเป็น 2 ตำแหน่งทศนิยม
      store: store ? store : null,
    };
  });

  return sellerSales;
};

//   /**
//    * ดึงข้อมูลการลงทะเบียนผู้ใช้งานใหม่ตามเวลา
//    * @returns {Array} ข้อมูลการลงทะเบียนผู้ใช้งานใหม่ตามเดือน
//    */
const getNewUserRegistrations = async () => {
  const userData = await prisma.user.groupBy({
    by: ['createdAt'],
    _count: {
      id: true,
    },
    orderBy: {
      createdAt: 'asc',
    },
  });

  const formattedData = userData.map(item => ({
    month: new Date(item.createdAt).toLocaleString('default', { month: 'short', year: 'numeric' }),
    newUsers: item._count.id,
  }));

  return formattedData;
};

//   /**
//    * ดึงข้อมูลผู้ใช้งานที่ใช้งานอยู่
//    * @returns {Array} ข้อมูลผู้ใช้งานที่ใช้งานอยู่
//    */


//   /**
//    * ดึงข้อมูลคำสั่งซื้อตามสถานะ
//    * @returns {Array} ข้อมูลคำสั่งซื้อตามสถานะ
//    */
const getOrdersByStatus = async () => {
  const ordersData = await prisma.order.groupBy({
    by: ['paymentStatus'],
    _count: {
      id: true,
    },
  });

  return ordersData.map(item => ({
    status: item.paymentStatus,
    count: item._count.id,
  }));
};

//   /**
//    * ดึงข้อมูลระยะเวลาการดำเนินการคำสั่งซื้อ
//    * @returns {Array} ข้อมูลระยะเวลาการดำเนินการคำสั่งซื้อ
//    */
const getOrderProcessingTime = async () => {
  const orders = await prisma.order.findMany({
    where: {
      paymentStatus: 'COMPLETED',
    },
    select: {
      createdAt: true,
      updatedAt: true,
    },
  });

  const processingTimes = orders.map(order => {
    const processingTime = (new Date(order.updatedAt) - new Date(order.createdAt)) / (1000  * 60); // เวลาต่อชั่วโมง
    return processingTime;
  });

  const averageProcessingTime = processingTimes.reduce((acc, time) => acc + time, 0) / processingTimes.length || 0;

  return averageProcessingTime.toFixed(2); // เวลาดำเนินการเฉลี่ย
};

module.exports = {
  getKPIs,
  getSalesOverTime,
  getOrdersOverTime,
  getSalesByCategory,
  getSalesBySeller,
  getNewUserRegistrations,

  getOrdersByStatus,
  getOrderProcessingTime,
};