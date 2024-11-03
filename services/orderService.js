const prisma = require("../configs/prisma");




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
}

module.exports.getAllOrdersService = async () => {
  const orders = await prisma.order.findMany({
    include: {
      orderItems: true,
    },
  });
  return orders;
}

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
}

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
}

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
}

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
}

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
}
