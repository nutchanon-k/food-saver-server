require("dotenv").config();
const createError = require('../utils/createError')
const path = require('path')
const fs = require('fs/promises')
const cloudinary = require('../configs/cloudinary')
const getPublicId = require('../utils/getPublicId');
const { getFoundationByIdService } = require("../services/foundationService");
const { product, message } = require("../configs/prisma");
const { createNewProductDonationService, createNewDonationService, getDonationsService, deleteDonationService, updateVerifyDonationService } = require("../services/donationService");
const { getUserById } = require("../services/userService");
const { searchDonationSchema } = require("../middlewares/validator");


// model Donation {
//     id           Int      @id @default(autoincrement())
//     sellerId     Int      @map("seller_id")
//     foundationId Int      @map("foundation_id")
//     imageUrl     String   @map("image_url")
//     isVerify     Boolean  @default(false) @map("is_verify")
//     donationDate DateTime @default(now()) @map("donation_date")
//     totalPrice   Decimal  @map("total_price") @db.Decimal(10, 2)

// model Product_Donation {
//     productId  Int @map("product_id")
//     donationId Int @map("donation_id")
//     quantity   Int


// ยกตัวอย่างข้อมูลที่ต้องส่งมา
// {
//     sellerId: 1,
//     foundationId: 1,
//     totalPrice: 1000,
//     productDonation: [
//         { productId: 1, quantity: 1 },
//         { productId: 2, quantity: 2 },
//         { productId: 3, quantity: 3 },
//     ],
// }

module.exports.createDonation = async (req, res, next) => {
    try {
        const { sellerId, foundationId, totalPrice, productDonation } = req.body

        const isSellerExist = await getUserById(Number(sellerId))
        if (!isSellerExist) {
            return createError(404, `User with id ${sellerId} not found`)
        }

        const isFoundationExist = await getFoundationByIdService(Number(foundationId))
        if (!isFoundationExist) {
            return createError(404, `Foundation with id ${foundationId} not found`)
        }


        const haveFile = !!req.file
        let uploadResult = {}
        if (haveFile) {
            uploadResult = await cloudinary.uploader.upload(req.file.path, {
                overwrite: true,
                public_id: path.parse(req.file.path).name
            })
            fs.unlink(req.file.path)
        }

        const data = {
            sellerId: Number(sellerId),
            foundationId: Number(foundationId),
            imageUrl: uploadResult.secure_url || "",
            totalPrice: Number(totalPrice),
        }

        const newDonation = await createNewDonationService(data)
        // console.log(productDonation)
        const dataProductDonation = productDonation.map((productDonation) => ({
            productId: Number(productDonation.productId),
            quantity: Number(productDonation.quantity),
            donationId: Number(newDonation.id)
        }))
        // console.log(dataProductDonation)

        const newProductDonation = await createNewProductDonationService(dataProductDonation)
    
        res.status(201).json({
            message: "Donation created successfully",
            newDonation,
        })


    } catch (err) {
        next(err)
    }
}

module.exports.getDonations = async (req, res, next) => {
    try {
        const { error, value } = searchDonationSchema.validate(req.query, { abortEarly: false });
        if (error) {
            return next(createError(400, error.details.map(detail => detail.message).join(', ')));
        }
        // const {id, sellerId, foundationId, isVerify} = req.query
        const { id, sellerId, foundationId, isVerify, minTotalPrice, maxTotalPrice, startDate, endDate, sortBy, sortOrder, page, limit } = req.query;
        // กำหนดเงื่อนไขการค้นหา
        const where = {};

        if (id) {
            where.id = parseInt(id, 10);
        }
        if (sellerId) {
            where.sellerId = parseInt(sellerId, 10);
        }
        if (foundationId) {
            where.foundationId = parseInt(foundationId, 10);
        }

        if (isVerify !== undefined) {
            if (isVerify.toLowerCase() === 'true') {
                where.isVerify = true;
            } else if (isVerify.toLowerCase() === 'false') {
                where.isVerify = false;
            }
        }

        if (minTotalPrice || maxTotalPrice) {
            where.totalPrice = {};
            if (minTotalPrice) {
                where.totalPrice.gte = parseFloat(minTotalPrice);
            }
            if (maxTotalPrice) {
                where.totalPrice.lte = parseFloat(maxTotalPrice);
            }
        }

        if (startDate || endDate) {
            where.donationDate = {};
            if (startDate) {
                where.donationDate.gte = new Date(startDate);
            }
            if (endDate) {
                where.donationDate.lte = new Date(endDate);
            }
        }

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


        const data = {
            where,
            orderBy: sortBy ? orderBy : undefined,
            skip,
            take,
            include: {
                seller: {
                    select: {
                        firstName: true,
                        lastName: true,
                        email: true,
                    }
                },        
                foundation: true,    
            },
        }

        // ทำการค้นหา
        const donations = await getDonationsService(data)

        res.json(donations);
    } catch (err) {
        next(err)
    }
}

module.exports.updateVerifyDonation = async (req, res, next) => {
    try {
        const { id } = req.params
        const { isVerify } = req.body

        const isDonationExist = await getDonationsService({where : {id: Number(id)}})

        if (!isDonationExist || isDonationExist.length === 0) {
            return createError(404, `Donation with id ${id} not found`)
        }

        if (isVerify === undefined) {
            return createError(400, "isVerify is required")
        }

        const updatedDonation = await updateVerifyDonationService(Number(id), isVerify)
        res.json({
            message: "Donation verified successfully",
            updatedDonation,
        })
    } catch (err) {
        next(err)
    }
}

module.exports.deleteDonation = async (req, res, next) => {
    try {
        const { id } = req.params

        const isDonationExist = await getDonationsService({where : {id: Number(id)}})

        if (!isDonationExist || isDonationExist.length === 0) {
            return createError(404, `Donation with id ${id} not found`)
        }

        const deletedDonation = await deleteDonationService(Number(id))
        res.json({
            message: `Donation with id ${id} deleted successfully`,
        })
    } catch (err) {
        next(err)
    }
}




