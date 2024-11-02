require("dotenv").config();
const createError = require('../utils/createError')
const { getUserById } = require("../services/userService");
const { createCartItemService, updateQuantityService, getCartItemForCheckService, getCartItemsService, deleteCartItemService } = require("../services/cartItemService");
const { getProductService } = require("../services/productService");
const { searchCartItemSchema } = require("../middlewares/validator");



// model CartItem {
//     id        Int @id @default(autoincrement())
//     userId    Int @map("user_id")
//     productId Int @map("product_id")
//     quantity  Int

//     // Relations
//     user    User    @relation(fields: [userId], references: [id])
//     product Product @relation(fields: [productId], references: [id])
//   }

module.exports.addToCart = async (req, res, next) => {
    try {
        const buyerId = req.user.id
        const { userId, productId, quantity } = req.body

        if (Number(buyerId) !== Number(userId)) {
            createError(401, 'Unauthorized')
        }

        const user = await getUserById(Number(buyerId))
        if (!user) {
            createError(400, 'User not found')
        }

        const product = await getProductService(productId)
        if (!product) {
            createError(400, 'Product not found')
        }

        const checkProductInCart = await getCartItemForCheckService({ where: { productId: Number(productId), userId: Number(userId) } })
        // console.log(checkProductInCart)
        if (checkProductInCart) {
            const updateQuantity = await updateQuantityService(Number(checkProductInCart.id), { quantity: Number(checkProductInCart.quantity) + Number(quantity) })
            res.status(200).json({ "message": "Update quantity success", "data": updateQuantity })
            return
        }

        const data = {
            userId: Number(buyerId),
            productId: Number(productId),
            quantity: Number(quantity)
        }

        const cartItem = await createCartItemService(data)

        res.status(201).json({
            status: 'Add to cart success',
            data: cartItem
        })

    } catch (err) {
        next(err)
    }

}

module.exports.getCartItems = async (req, res, next) => {
    try {
        const { error, value } = searchCartItemSchema.validate(req.query, { abortEarly: false });
        if (error) {
            return next(createError(400, error.details.map(detail => detail.message).join(', ')));
        }
        const { id, userId, productId, minQuantity, maxQuantity, sortBy, sortOrder, page, limit } = req.query;
        const where = {};

        if (id !== undefined) {
            where.id = Number(id);
        }

        if (userId !== undefined) {
            where.userId = Number(userId);
        }

        if (productId !== undefined) {
            where.productId = Number(productId);
        }

        if (minQuantity || maxQuantity) {
            where.quantity = {};
            if (minQuantity) {
                where.quantity.gte = parseFloat(minQuantity);
            }
            if (maxTotalPrice) {
                where.quantity.lte = parseFloat(maxQuantity);
            }
        }
        //GET http://localhost:8000/cart-items?userId=1&quantity[gte]=2&quantity[lte]=5&page=1&limit=5

        // กำหนดการเรียงลำดับ
        const orderBy = {};
        if (sortBy) {
            orderBy[sortBy] = sortOrder === 'asc' ? 'asc' : 'desc';
        }

        // กำหนดการแบ่งหน้าแบบเงื่อนไข
        let take;
        let skip;

        if (page && limit) {
            take = +limit;
            skip = (+page - 1) * take;
        }
        // ถ้าไม่มีการกำหนด page และ limit จะไม่กำหนด take และ skip ซึ่งจะส่งข้อมูลทั้งหมด

        // ทำการค้นหา
        const cartItems = {
            where,
            orderBy: sortBy ? orderBy : undefined,
            skip,
            take,
            include: {
                user: {
                    select: {
                        firstName: true,
                        lastName: true
                    }
                },
                product: true,
            },
        }
        // console.log(cartItems)
        const getCartItems = await getCartItemsService(cartItems)
        if(!getCartItems || getCartItems.length === 0) {
            return createError(404, 'Cart items not found')
        }

        res.status(200).json({ "message": "Get cart items success", "data": getCartItems })
    } catch (err) {
        next(err)
    }
}

module.exports.updateCartItem = async (req, res, next) => {
    try {
        const { id } = req.params
        const userId = req.user.id
        const { quantity } = req.body

        const cartItem = await getCartItemForCheckService({ where: { id: Number(id) } })
        if (!cartItem) {
            createError(400, 'Cart item not found')
        }
        if (Number(userId) !== Number(cartItem.userId)) {
            createError(400, 'Not owned user can not update cart item')
        }
        const updateQuantity = await updateQuantityService(Number(id), {quantity: Number(quantity)})

        res.status(200).json({ "message": `Update quantity for cart item ${id} success`, "data": updateQuantity })
        return
    } catch (err) {
        next(err)
    }
}

module.exports.deleteCartItem = async (req, res, next) => {
    try {
        const { id } = req.params
        const userId = req.user.id
        const cartItem = await getCartItemForCheckService({ where: { id: Number(id) } })
        if (!cartItem) {
            createError(400, 'Cart item not found')
        }
        if (Number(userId) !== Number(cartItem.userId)) {
            createError(400, 'Not owned user can not delete cart item')
        }
        const deleteCartItem = await deleteCartItemService(Number(id))
        res.status(200).json({ "message": `Delete cart item ${id} success`})
        return
    } catch (err) {
        next(err)
    }
}