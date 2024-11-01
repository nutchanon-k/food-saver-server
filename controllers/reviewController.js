require("dotenv").config();
const createError = require('../utils/createError')
const nodemailer = require('nodemailer')
const bcrypt = require('bcryptjs');
const path = require('path')
const fs = require('fs/promises')
const cloudinary = require('../configs/cloudinary')
const getPublicId = require('../utils/getPublicId')
const { createFoundationService, getFoundationByName, getAllFoundationsService,getFoundationByIdService, updateFoundationService, deleteFoundationService } = require("../services/foundationService");



// model Review {
//     id         Int      @id @default(autoincrement())
//     userId     Int      @map("user_id")
//     storeId    Int?     @map("store_id")
//     productId  Int?     @map("product_id")
//     rating     Int
//     reviewText String?  @map("review_text")
//     image      String?  @map("image")
//     createdAt  DateTime @default(now()) @map("created_at")
//     updatedAt  DateTime @updatedAt @map("updated_at")
  
//     // Relations
//     user    User     @relation(fields: [userId], references: [id])
//     store   Store?   @relation(fields: [storeId], references: [id])
//     product Product? @relation(fields: [productId], references: [id])
//   }

module.exports.createReview = async (req, res, next) => {

    try {
        const {userId, storeId, productId, rating, reviewText} = req.body;

        

    }catch (err) {
        next(err)    
    }
    
}