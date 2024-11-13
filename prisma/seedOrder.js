
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const  fs = require('fs');



async function main() {
  const data = JSON.parse(fs.readFileSync('./prisma/order_seed_data.json', 'utf-8'));

  await prisma.order.createMany({
    data: data.map((order) => ({
      id: order.id,
      userId: order.userId,
      totalPrice: order.totalPrice,
      paymentStatus: order.paymentStatus ,
      paymentMethod: order.paymentMethod ,
      createdAt: new Date(order.createdAt),
      updatedAt: new Date(order.updatedAt),
      isPickUpped: order.isPickUpped,
    })),
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });