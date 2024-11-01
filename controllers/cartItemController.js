require("dotenv").config();
const createError = require('../utils/createError')
const path = require('path')
const fs = require('fs/promises')
const cloudinary = require('../configs/cloudinary')

const { getFoundationByIdService } = require("../services/foundationService");

const { getUserById } = require("../services/userService");
const { createCartItemService } = require("../services/cartItemService");


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
    try{ 
        const buyerId = req.user.id
        const {userId, productId, quantity} = req.body

        if(Number(buyerId) !== Number(userId)){
            createError(401, 'Unauthorized')
        }

        const user = await getUserById(Number(buyerId))
        if(!user){
            createError(400, 'User not found')
        }

        // const product = await getFoundationByIdService(productId)
        // if(!product){
        //     createError(400, 'Product not found')
        // }
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

    }catch(err){
        next(err)
    }

}