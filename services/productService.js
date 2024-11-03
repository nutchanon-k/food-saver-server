const prisma = require("../configs/prisma")

module.exports.createProductService =  async (data) => {
  const dateString = data.expirationDate
  const expDateTime = new Date(dateString)
  data.expirationDate = expDateTime
  return  await prisma.product.create({
    data : data,
    select : {
      storeId : true,
      name : true,
      description : true,
      originalPrice : true,
      salePrice : true,
      expirationDate : true,
      imageUrl : true,
      quantity : true,
    }
  })
}

module.exports.getProductArrayService = async(filters)  => {
  const whereClause = {};

  // Add filters to the whereClause based on provided filters
  if (filters.id){
    whereClause.id = +filters.id
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
        equals: '', // Optional: If you want to exclude empty strings
      }
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
  });
}

module.exports.deleteProductService = async(productId) => {
  return await prisma.product.delete({
    where : {
      id : +productId
    }
  })
}

module.exports.addCategory = async(data) => {
  return await prisma.productCategories.createMany({
    data : data
  })
}

module.exports.addAllergen = async(data) => {
  return await prisma.productAllergen.createMany({
    data : data
  })
}

module.exports.updateProductService = async (productId,productData) => {
  return  await prisma.product.update({
    where : {
      id : +productId
    },
    data : productData
  })
}

module.exports.getProductService = (productId) => {
  return prisma.product.findUnique({
    where : {
      id : +productId
    }
  })
}


module.exports.getProductByOrderItems = async(orderItems) => {
  return await prisma.product.findMany({
    where : {
      id : {
        in : orderItems.map(item => item.productId)
      }
    },
    select: {
      store: true,
    },
  })
}

module.exports.getProductByOrderItems = async(productDonations) => {
  return await prisma.product.findMany({
    where : {
      id : {
        in : productDonations.map(item => item.productId)
      }
    },
    select: {
      store: true,
    },
  })
}