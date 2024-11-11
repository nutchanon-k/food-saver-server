const prisma = require("../configs/prisma");




module.exports.createUserService = async (data) => {
    return await prisma.user.create({
        data:data,
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
            updatedAt: true,            
        }
    })
}



