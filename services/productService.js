const prisma = require("../configs/prisma");

module.exports.createProductService = async (data) => {
  const dateString = data.expirationDate;
  const expDateTime = new Date(dateString);
  data.expirationDate = expDateTime;
  return await prisma.product.create({
    data: data,
    select: {
      storeId: true,
      name: true,
      description: true,
      originalPrice: true,
      salePrice: true,
      expirationDate: true,
      imageUrl: true,
      quantity: true,
    },
  });
};

module.exports.getPopularProductService = async () => {
  const products = await prisma.product.findMany({
    take: 10,
    include: {
      orderItems: {
        select: {
          quantity: true,
          orderId: true,
        },
      },
      store: true,
      productCategories: {
        include: {
          category: true,
        },
      },
      productAllergens: {
        include: {
          allergen: true,
        },
      },
    },
    where: {
      orderItems: {
        some: {},
      },
    },
  });

  const productsWithSales = products.map((product) => {
    const totalQuantitySold = product.orderItems.reduce((sum, item) => {
      return sum + item.quantity;
    }, 0);

    return {
      ...product,
      totalQuantitySold,
    };
  });

  return productsWithSales.sort(
    (a, b) => b.totalQuantitySold - a.totalQuantitySold
  );
};

module.exports.getProductArrayService = async (filters) => {
  const whereClause = {};

  // Add filters to the whereClause based on provided filters
  if (filters.id) {
    whereClause.id = +filters.id;
  }

  if (filters.storeId) {
    whereClause.storeId = parseInt(filters.storeId);
  }
  if (filters.name) {
    // Using a case-insensitive search workaround
    whereClause.name = {
      contains: filters.name,
      // Convert both the field and input to lower case for case-insensitive comparison
      not: {
        equals: "", // Optional: If you want to exclude empty strings
      },
    };
  }
  if (filters.salePrice) {
    whereClause.salePrice = {
      lte: parseFloat(filters.salePrice), // Less than or equal to
    };
  }
  // Add more filters as necessary

  return await prisma.product.findMany({
    where: whereClause,
    include: {

      productCategories: {
        include : {
          category : {
            select : {
              name : true
            }
          }
        }
      },
      productAllergens: {
        include : {
          allergen : {
            select : {
              name : true
            }
          }
        }
      }
    },
      store: {
        select: {
          storeName: true,
          profilePicture: true,
        },
      },
    },

  });
};

module.exports.deleteProductService = async (productId) => {
  return await prisma.product.delete({
    where: {
      id: +productId,
    },
  });
};

module.exports.addCategory = async (data) => {
  return await prisma.productCategories.createMany({
    data: data,
  });
};

module.exports.addAllergen = async (data) => {
  return await prisma.productAllergen.createMany({
    data: data,
  });
};

module.exports.updateProductService = async (productId, productData) => {
  return await prisma.product.update({
    where: {
      id: +productId,
    },
    data: productData,
  });
};

module.exports.getProductService = (productId) => {
  return prisma.product.findUnique({
    where: {
      id: +productId,
    },
  });
};

module.exports.getProductByOrderItems = async (orderItems) => {
  return await prisma.product.findMany({
    where: {
      id: {
        in: orderItems.map((item) => item.productId),
      },
    },
    select: {
      store: true,
    },
  });
};

// module.exports.getProductByOrderItems = async (productDonations) => {
//   return await prisma.product.findMany({
//     where: {
//       id: {
//         in: productDonations.map(item => item.productId)
//       }
//     },
//     select: {
//       store: true,
//     },
//   })
// }

module.exports.createProductAllService = async (data) => {
  const {
    storeId,
    name,
    description,
    originalPrice,
    salePrice,
    expirationDate,
    imageUrl,
    quantity,
    productCategories,
    productAllergens,
  } = data;
  const dateString = expirationDate;
  const expDateTime = new Date(dateString);

  return await prisma.product.create({
    data: {
      storeId: storeId,
      name: name,
      description: description,
      originalPrice: +originalPrice,
      salePrice: +salePrice,
      expirationDate: expDateTime,
      imageUrl: imageUrl,
      quantity: +quantity,
      productCategories: productCategories
        ? {
            create: productCategories.map((categoryId) => ({
              categoryId: +categoryId,
            })),
          }
        : undefined,
      productAllergens: productAllergens
        ? {
            create: productAllergens.map((allergenId) => ({
              allergenId: +allergenId,
            })),
          }
        : undefined,
    },
    include: {
      productCategories: true,
      productAllergens: true,
    },
  });
};

module.exports.updateProductAllService = async (id, data) => {
  const {
    storeId,
    name,
    description,
    originalPrice,
    salePrice,
    expirationDate,
    imageUrl,
    quantity,
    productCategories,
    productAllergens,
  } = data;

  const updateData = {
    storeId: +storeId,
    name: name,
    description,
    originalPrice: +originalPrice,
    salePrice: +salePrice,
    expirationDate,
    imageUrl,
    quantity: +quantity,
    productCategories: productCategories
      ? {
          deleteMany: {}, // Remove existing categories
          create: productCategories.map((categoryId) => ({
            categoryId: +categoryId,
          })),
        }
      : undefined,
    productAllergens: productAllergens
      ? {
          deleteMany: {}, // Remove existing allergens
          create: productAllergens.map((allergenId) => ({
            allergenId: +allergenId,
          })),
        }
      : undefined,
  };
  const updatedProduct = await prisma.product.update({
    where: { id },
    data: updateData,
    include: {
      productCategories: true,
      productAllergens: true,
    },
  });

  return updatedProduct;
};

module.exports.getProductByStoreId = async (storeId) => {
  return await prisma.product.findMany({
    where: {
      storeId: +storeId,
    },
  });
};
