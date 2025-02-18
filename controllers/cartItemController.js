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
        const { productId, quantity } = req.body
        console.log(req.body)


        const product = await getProductService(productId)
        if (!product) {
            createError(400, 'Product not found')
        }
        
        // check if product already in cart
        const checkProductInCart = await getCartItemForCheckService({ where: { productId: Number(productId), userId: Number(buyerId) } })
        
        if (checkProductInCart) {
            //check quantity
            if(Number(checkProductInCart.quantity) + Number(quantity) > Number(product.quantity)) {
                console.log("Quantity must be less than ", Number(product.quantity) - Number(checkProductInCart.quantity))
                createError(400, `Quantity must be less than ${Number(product.quantity) - Number(checkProductInCart.quantity)}`)
            }
            const updateQuantity = await updateQuantityService(Number(checkProductInCart.id), { quantity: Number(checkProductInCart.quantity) + Number(quantity) })
            res.status(200).json({ "message": "Update quantity success", "data": updateQuantity })
            return
        }
        
        if (Number(product.quantity) < Number(quantity)) {
            createError(400, `Quantity must be less than ${product.quantity}`)
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
            if (maxQuantity) {
                where.quantity.lte = parseFloat(maxQuantity);
            }
        }
        //GET http://localhost:8000/cart-items?userId=2&minQuantity=2&maxQuantity=60&page=1&limit=5

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
        // if(!getCartItems || getCartItems.length === 0) {
        //     return createError(404, 'Cart items not found')
        // }

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

        console.log("id from params", id)
        const cartItem = await getCartItemForCheckService({ where: { id: Number(id) } })
        if (!cartItem) {
            createError(400, 'Cart item not found')
        }

        console.log('xxxxxx',cartItem)
        if (Number(userId) !== Number(cartItem.userId)) {
            createError(400, 'Not owned user can not update cart item')
        }
        const product = await getProductService(cartItem.productId)
        if (!product) {
            createError(400, 'Product not found')
        }
        if (Number(product.quantity) < Number(quantity)) {
            createError(400, `Quantity must be less than ${product.quantity}`)
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
        console.log(userId)
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