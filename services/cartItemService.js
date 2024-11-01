const prisma = require("../configs/prisma");


module.exports.createCartItemService = async (data) => {
    const cartItem = await prisma.cartItem.create({
        data: data
    })
    return cartItem
}

module.exports.getCartItemForCheckService = async (data) => {
    const cartItem = await prisma.cartItem.findFirst(data)
    return cartItem
}


module.exports.updateQuantityService = async (id, quantity) => {
    const cartItem = await prisma.cartItem.update({
        where: {
            id: id
        },
        data: quantity
    })
    return cartItem
}

module.exports.getCartItemsService = async (data) => {
    const cartItems = await prisma.cartItem.findMany(data)
    return cartItems
}


module.exports.updateQuantityService = async (id, quantity) => {
    const cartItem = await prisma.cartItem.update({
        where: {
            id: id
        },
        data: quantity
    })
    return cartItem
}


module.exports.deleteCartItemService = async (id) => {
    const cartItem = await prisma.cartItem.delete({
        where: {
            id: id
        }
    })
    return cartItem
}