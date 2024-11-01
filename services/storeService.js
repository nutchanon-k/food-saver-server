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