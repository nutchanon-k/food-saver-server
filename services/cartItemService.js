const prisma = require("../configs/prisma");


module.exports.createCartItemService = async (data) => {
    const cartItem = await prisma.cartItem.create({
        data: data
    })
    return cartItem
}