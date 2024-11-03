const prisma = require("../configs/prisma");


module.exports.getUserByEmail = (email) => {
  const user = prisma.user.findFirst({
    where: {
      email,
    },
  });
  return user;
};

module.exports.getUserById = (id) => {
  // console.log("id from service", id)
  return prisma.user.findUnique({
    where: {
      id: +id,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      role: true,
      profilePicture: true,
      address: true,
      phoneNumber: true,
      isActive: true,
      createdAt: true,
      updatedAt: true
    }
  });
 
};

module.exports.updateUserService = (userId,userData) => {
  return prisma.user.update({
      where: {
          id: Number(userId)
      },
      data: userData,
      select :{
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          role: true,
          profilePicture: true,
          address: true,
          phoneNumber: true,
          isActive: true,
          createdAt: true,
          updatedAt: true
      }
  })
}

module.exports.deleteUserService = (userId) => {
  return prisma.user.delete({
      where: {
          id: Number(userId)
      }
  })
}


module.exports.getUserByQueryService = (query) => {
  // console.log("query from service", query)
  return prisma.user.findMany(query)
}


module.exports.getUserByRoleService = (role) => {
  return prisma.user.findMany({
    where: {
      role: role,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      role: true,
      profilePicture: true,
      address: true,
      phoneNumber: true,
      isActive: true,
      createdAt: true,
      updatedAt: true
    }
  });
};