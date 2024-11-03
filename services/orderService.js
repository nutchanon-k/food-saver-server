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