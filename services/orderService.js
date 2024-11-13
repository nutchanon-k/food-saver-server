const prisma = require("../configs/prisma");
const stripe = require("../configs/stripe");


// Order creation service with Prisma
module.exports.createOrderService = async (data) => {
  const { userId, paymentMethod, totalPrice, orderItems } = data;
  const order = await prisma.order.create({
    data: {
      userId,
      paymentMethod,
      totalPrice,
      orderItems: {
        create: orderItems.map(item => ({
          productId: +item.productId,
          quantity: +item.quantity,
          unitPrice: +item.unitPrice,
        })),
      },
    },
    include: {
      orderItems: true,
    },
  });
  return order;
};

// Updated service to create a Stripe checkout session
module.exports.createStripeSession = async (items, orderId, paymentMethod) => {
  // Check if each item has the required fields
  console.log("Creating Stripe session with items:", items);  // Debugging statement

  const line_items = items.map(item => ({
    price_data: {
      currency: 'thb', 
      product_data: { name: item.name || `Product ${item.productId}` },  // Fallback if name is missing
      unit_amount: Math.round(item.unitPrice * 100),  // Convert to smallest currency unit
    },
    quantity: item.quantity,
  }));

  console.log("Formatted line_items for Stripe:", line_items);  // Debugging statement

  // Determine payment methods based on user’s choice
  const payment_method_types = paymentMethod === 'PROMPTPAY' ? ['promptpay'] : ['card'];

  const session = await stripe.checkout.sessions.create({
    payment_method_types,
    line_items,
    mode: 'payment',
    success_url: `${process.env.FRONTEND_URL}/verify?success=true&orderId=${orderId}`,
    cancel_url: `${process.env.FRONTEND_URL}/verify?success=false&orderId=${orderId}`,
  });

  return session;
};


// Service to update an order's payment status
module.exports.updateOrderStatus = async (orderId, status) => {
  console.log("Updating order status for orderId:", orderId, "with status:", status); // Log for debugging
  return await prisma.order.update({
      where: { id: orderId }, // Ensure `orderId` is an integer
      data: { paymentStatus: status },
  });
};


// Existing services for order management
module.exports.getAllOrdersService = async () => {
  const orders = await prisma.order.findMany({
    include: {
      orderItems: true,
    },
  });
  return orders;
};

module.exports.getOrderByIdService = async (id) => {
  const order = await prisma.order.findUnique({
    where: {
      id,
    },
    include: {
      orderItems: true,
    },
  });
  return order;
};

module.exports.updateOrderService = async (id, data) => {
  const order = await prisma.order.update({
    where: {
      id,
    },
    data,
    include: {
      orderItems: true,
    },
  });
  return order;
};

module.exports.deleteOrderService = async (id) => {
  const order = await prisma.order.delete({
    where: {
      id,
    },
    include: {
      orderItems: true,
    },
  });
  return order;
};

module.exports.getOrderByUserIdService = async (userId) => {
  const orders = await prisma.order.findMany({
    where: {
      userId,
    },
    include: {
      orderItems: true,
    },
  });
  return orders;
};

module.exports.getOrderItemsBySellerIdService = async (sellerId) => {
  const orders = await prisma.orderItem.findMany({
    where: {
      product : {
        store : {
          userId : +sellerId
        }
      }
    },
    include: {
      order: {
        include: {
          user: true // เพิ่ม include user จาก order
        }
      },
      product: true,
    },
  });
  return orders;
};

// All Order for Slip

module.exports.getOrderDetailsWithStoreService = async (orderId) => {
  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: {
      orderItems: {
        include: {
          product: {
            include: {
              store: true, // Fetch store information related to each product
            },
          },
        },
      },
      user: true, // Fetch buyer/user information if needed
    },
  });
  return order;
};

// Service to fetch order history for a specific user with detailed information
module.exports.getOrderHistoryByUserIdService = async (userId) => {
  try {
    const orders = await prisma.order.findMany({
      where: { userId: +userId },
      include: {
        orderItems: {
          include: {
            product: {
              select: {
                name: true,
                imageUrl: true,
                store: {
                  select: {
                    storeName: true,
                    storeAddress: true,
                    phoneNumber: true,
                    timeOpen: true,
                    timeClose: true,
                  },
                },
              },
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' }, // Order by newest orders first
    });
    
    return orders;
  } catch (error) {
    console.error("Error in getOrderHistoryByUserIdService:", error);
    throw new Error("Failed to fetch order history");
  }
};



module.exports.getOrdersBySellerService = async (sellerId) => {
  try {
    console.log('Fetching store for seller ID:', sellerId);

    const store = await prisma.store.findUnique({
      where: {
        userId: +sellerId,
      },
      select: {
        id: true,
      },
    });

    console.log('Store found:', store);

    if (!store) {
      console.log('No store found for seller.');
      return [];
    }

    const storeId = store.id;

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
        orderItems: {
          include: {
            product: {
              select: {
                name: true,
                imageUrl: true,
                storeId: true,
                store: {
                  select: {
                    storeName: true,
                    storeAddress: true,
                    phoneNumber: true,
                    timeOpen: true,
                    timeClose: true,
                  },
                },
              },
            },
          },
        },
        user: {
          select: {
            firstName: true,
            lastName: true,
            phoneNumber: true,
            email: true,
            profilePicture: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    console.log('Orders found:', orders);

    return orders;
  } catch (error) {
    console.error("Error in getOrdersBySellerService:", error);
    throw error; // Rethrow the original error for better debugging
  }
};

module.exports.acceptOrderService = async (orderId, sellerId, userRole) => {
  // Fetch the order
  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

  if (!order) {
    throw new Error("Order not found");
  }

  // Verify ownership
  const isSellerOfOrder = order.orderItems.some(
    (item) => item.product.storeId === sellerId
  );

  if (!isSellerOfOrder && userRole !== 'SELLER') {
    throw new Error("Unauthorized");
  }

  // Update the order
  const updatedOrder = await prisma.order.update({
    where: { id: orderId },
    data: { isPickUpped: true },
  });

  return updatedOrder;
};


