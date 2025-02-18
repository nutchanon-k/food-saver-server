require("dotenv").config();
const createError = require('../utils/createError')
const path = require('path')
const fs = require('fs/promises')
const cloudinary = require('../configs/cloudinary')
const getPublicId = require('../utils/getPublicId');
const { getFoundationByIdService } = require("../services/foundationService");
const { product, message } = require("../configs/prisma");
const { createNewProductDonationService, createNewDonationService, getDonationsService, deleteDonationService, updateVerifyDonationService } = require("../services/donationService");
const { getUserById, getUserByQueryService, getUserByRoleService } = require("../services/userService");
const { searchDonationSchema } = require("../middlewares/validator");
const { getProductService, updateProductService } = require("../services/productService");
const { createNotification } = require("../services/notificationService");


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
        const  sellerId = req.user.id
        const { foundationId, totalPrice, productDonation } = req.body

        const isSellerExist = await getUserById(Number(sellerId))
        if (!isSellerExist) {
            return createError(404, `User with id ${sellerId} not found`)
        }

        const isFoundationExist = await getFoundationByIdService(Number(foundationId))
        if (!isFoundationExist) {
            return createError(404, `Foundation with id ${foundationId} not found`)
        }

        // const checkProductExist = productDonation.map(async (item) => {
        //     try {
        //         const product = await getProductService(Number(item.productId));
        //         console.log(product)
        //         if (!product || product === null) {
        //             return createError(404, 'Product not found');
        //         }
        //     } catch (err) {
        //         next(err);
        //     }
        // })
        for (const item of productDonation) {
            try {
                const product = await getProductService(Number(item.productId));
                
                if (!product) {                    
                    return next(createError(400, `Product with ID ${item.productId} not found`));
                }
                
                if (Number(product.quantity) < Number(item.quantity)) {
                    return next(createError(400, `Insufficient quantity for product ID ${item.productId}`));
                }

                // หักสินค้าจาก stock
                await updateProductService(product.id, { quantity: product.quantity - item.quantity });
                
            } catch (err) {
                return next(err);
            }
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
            productDonation: productDonation
        }


        const newDonation = await createNewDonationService(data)


        if (newDonation) {
            // ดึง Sellers ที่เกี่ยวข้องกับ OrderItems
            const admin = await getUserByRoleService('ADMIN')
            console.log("admin", admin)

            // สร้าง Notification สำหรับแต่ละ Seller
            const notifications = await Promise.all(admin.map(admin => {
                return createNotification(admin.id, 'Donation Created', `Donation Id #${newDonation.id} has been created please check.`);
            }));
        }





        // console.log(productDonation)
        // const dataProductDonation = productDonation.map((productDonation) => ({
        //     productId: Number(productDonation.productId),
        //     quantity: Number(productDonation.quantity),
        //     donationId: Number(newDonation.id)
        // }))
        // console.log(dataProductDonation)

        // const newProductDonation = await createNewProductDonationService(dataProductDonation)
    
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
                productDonations: true    
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

        if (isVerify !== true && isVerify !== false) {
            return createError(400, "isVerify must be true or false")
        }

        let upDateVerify = false
        if (isVerify === "true" || isVerify === true) {
            upDateVerify = true
        } else if (isVerify === "false" || isVerify === false) {
            upDateVerify = false
        }
        

        const updatedDonation = await updateVerifyDonationService(Number(id), upDateVerify)
        // console.log("testxxxxxxxxxxxx",updatedDonation.isVerify)
        // console.log("isDonationExist",isDonationExist[0].isVerify)
        const isVerifyComplete = updatedDonation.isVerify === true && isDonationExist[0].isVerify === false

        if (isVerifyComplete) {
            // const transporter = nodemailer.createTransport({
            //     service: 'gmail',
            //     auth: {
            //         user: process.env.MAILER_EMAIL,
            //         pass: process.env.MAILER_PASSWORD
            //     }
            // })

            // const mailOptions = {
            //     from: process.env.MAILER_EMAIL,
            //     to: updatedDonation.seller.email,
            //     subject: 'Donation Verified',
            //     text: 'Your donation has been verified. Thank you!'
            // }

            const notifications = await createNotification(updatedDonation.sellerId, 'Donation Verified', `Donation Id #${updatedDonation.id} has been verified.`);
            // console.log("test55555",notifications)
        }

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




