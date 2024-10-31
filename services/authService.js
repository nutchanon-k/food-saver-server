const prisma = require('../models/prisma')



module.exports.createUserService = async (data) => {
    return await prisma.user.create({data:data})
}

