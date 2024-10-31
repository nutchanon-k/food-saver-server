require("dotenv").config();
const createError = require('../utils/createError')
const nodemailer = require('nodemailer')
const bcrypt = require('bcryptjs');
const path = require('path')
const fs = require('fs/promises')
const cloudinary = require('../configs/cloudinary')
const getPublicId = require('../utils/getPublicId')
const { getUserById, updateUserProfile, deleteUserService, getUserByQueryService, updateUserService } = require("../services/userService");




module.exports.currentUser = async (req, res, next) => {
    try {
        const id = req.user.id
        const user = await getUserById(id)
        res.json(user)
    } catch (err) {
        next(err)
    }
}
module.exports.updateUser = async (req, res, next) => {
    try {
        const id = req.user.id
        const {
            firstName,
            lastName,
            email,
            password,
            role,
            address,
            phoneNumber,
            isActive,
        } = req.body;

        const user = await getUserById(Number(id))
        if (!user) {
            return createError(400, "User not found")
        }

        const fieldsToUpdate = {
            firstName,
            lastName,
            email,
            password,
            role,
            address,
            phoneNumber,
            isActive,
        }
        const cleanFieldsToUpdate = Object.fromEntries(
            Object.entries(fieldsToUpdate).filter(([key, value]) => value !== undefined)
        );

        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10)
            cleanFieldsToUpdate.password = hashedPassword
        }


        const haveFile = !!req.file
        let uploadResult = {}
        if (haveFile) {
            uploadResult = await cloudinary.uploader.upload(req.file.path, {
                public_id: path.parse(req.file.path).name
            })
            fs.unlink(req.file.path)
            if (user.profilePicture) {
                cloudinary.uploader.destroy(getPublicId(user.profilePicture))
            }
            cleanFieldsToUpdate.profilePicture = uploadResult.secure_url || ''
        }

        const updateUser = await updateUserService(Number(id), cleanFieldsToUpdate)

        res.status(200).json({
            message: 'Update user profile success',
            data: updateUser
        })



    } catch (err) {
        next(err)
    }
}
module.exports.deleteUser = async (req, res, next) => {
    try {
        const id = req.params.id
        const userId = req.user.id
        const userRole = req.user.role

        // admin ลบได้ทุกคน ถ้าไม่ใช่ admin ลบได้แค่ตัวเอง
        if (userRole !== 'ADMIN') {
            if (id !== userId) {
                return createError(403, "Forbidden")
            }
        }

        const user = await getUserById(id)
        if (!user) {
            return createError(400, "User not found")
        }
        const deletedUser = await deleteUserService(id)
        res.status(200).json({
            message: 'Delete user success',
        })
    } catch (err) {
        next(err)
    }
}
module.exports.getUserByQuery = async (req, res, next) => {
    try {
        const {
            id,
            firstName,
            lastName,
            email,
            role,
            phoneNumber,
            isActive } = req.query

        const fieldsToQuery = {
            id : id? Number(id) : undefined,
            firstName,
            lastName,
            email,
            role,
            phoneNumber,
            isActive 
        }
        const cleanFieldsToQuery = Object.fromEntries(
            Object.entries(fieldsToQuery).filter(([key, value]) => value !== undefined)
        );
        console.log("test",cleanFieldsToQuery)
        const user = await getUserByQueryService(cleanFieldsToQuery)

        if (!user || user.length === 0) {
            return createError(400, "User not found")
        }

        res.status(200).json({
            message: 'Get user data success',
            data: user
        })
    } catch (err) {
        next(err)
    }
}






// GET /api/users/me
// PUT /api/users/me
// GET /api/users/:id (Admin Only)
// DELETE /api/users/:id (Admin Only)