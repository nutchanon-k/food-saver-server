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
      order: true,
      product: true,
    },
  });
  return orders;
};
