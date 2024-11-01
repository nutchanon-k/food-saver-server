const prisma = require("../configs/prisma");

module.exports.getStoreByUserId = (userId) => {
  return prisma.store.findUnique({
    where : {
      userId : +userId
    }
  })
}

module.exports.createStoreService = async(data) => {
  return await prisma.store.create({
    data : data
  })
}

module.exports.getStoreById = async(id) => {
  return await prisma.store.findUnique({
    where : {
      id : +id
    }
  })
}

module.exports.updateStoreService = (storeId,storeData) => {
  return prisma.store.update({
    where : {
      id : +storeId
    },
    data : storeData
  })
}

// module.exports.getStoreArrayService = () => {
//   return prisma.store.findMany()
// }
module.exports.getStoreArrayService = async (filters) => {
  const whereClause = {};

  // Add filters to the whereClause based on provided filters
  if (filters.id) {
    whereClause.id = +filters.id;
  }

  if (filters.userId) {
    whereClause.userId = parseInt(filters.userId);
  }

  if (filters.storeName) {
    // Using a case-insensitive search workaround
    whereClause.storeName = {
      contains: filters.storeName,
      not: {
        equals: '', // Optional: If you want to exclude empty strings
      },
    };
  }

  if (filters.storeAddress) {
    whereClause.storeAddress = {
      contains: filters.storeAddress,
      not: {
        equals: '',
      },
    };
  }

  if (filters.status) {
    whereClause.status = filters.status;
  }

  if (filters.latitude) {
    whereClause.latitude = {
      lte: parseFloat(filters.latitude),
    };
  }

  if (filters.longitude) {
    whereClause.longitude = {
      lte: parseFloat(filters.longitude),
    };
  }

  return await prisma.store.findMany({
    where: whereClause,
  });
};

module.exports.getStoreService = (storeId) => {
  return prisma.store.findUnique({
    where : {
      id : +storeId
    },
    select : {
      userId : true,
      storeName : true,
      storeAddress : true,
      storeDetails : true,
      profilePicture : true,
      status : true,
      phoneNumber : true,
      timeOpen : true,
      timeClose : true,
      latitude : true,
      longitude : true,
    }
  })
}