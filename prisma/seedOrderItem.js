const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const  fs = require('fs');

async function main() {
    const data = JSON.parse(fs.readFileSync('./prisma/order_item_seed_data.json', 'utf-8'));
  
    await prisma.orderItem.createMany({
    
      data: data.map((item) => ({
        id: item.id,
        orderId: +item.orderId,
        productId: +item.productId,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
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