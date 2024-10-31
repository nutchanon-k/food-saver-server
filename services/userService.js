const prisma = require('../models/prisma')

module.exports.getUserByEmail = (email) => {
    const user = prisma.user.findFirst({
        where: {
            email
        }
    })
    return user
}

