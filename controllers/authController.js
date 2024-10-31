require("dotenv").config();
const jwt = require('jsonwebtoken')
const createError = require('../utils/createError')
const prisma = require('../configs/prisma')
const nodemailer = require('nodemailer')
const bcrypt = require('bcrypt');
const path = require('path')
const fs = require('fs/promises') 
const cloudinary = require('../config/cloudinary')
const getPublicId = require('../utils/getPublicId')
const { getUserByEmail } = require("../services/userService");
const { createUserService } = require("../services/authService");



module.exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        
        //check user by email
        const user = await getUserByEmail(email)
        if (!user) {
            return createError(400, 'email is not registered')
        }
        

        //compare password
        const passwordIsMatch = await bcrypt.compare(password, user.password)
        if (!passwordIsMatch) {
            return createError(400, 'email or password is incorrect')
        }

        //generate token
        const payload = { id: user.id }
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '30d' })


        //send token
        res.status(200).json({
            message: 'login success',
            token,
        })

    } catch (err) {
        next(err)
    }
}



module.exports.register = async (req, res, next) => {
    try {
        const { firstName, lastName, email, password, confirmPassword, role ,address, phoneNumber} = req.body
        
        if(password !== confirmPassword){
            return createError(400, 'password is not match')
        }
        
        //check user exist
        const isUserExist = await getUserByEmail(email)        
        if(isUserExist){
            return createError(400, "User already exist")
        }

        const haveFile = !!req.file
        let uploadResult = {}
        if (haveFile) {
            uploadResult = await cloudinary.uploader.upload(req.file.path, {
                overwrite: true,
                public_id: path.parse(req.file.path).name
                // public_id : req.file.filename
            })
            fs.unlink(req.file.path)
        }

        //hash password
        const hashedPassword = await bcrypt.hash(password, 10)

        const data = {
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role,
            profilePicture : haveFile ? uploadResult.secure_url : "",
            address,
            phoneNumber
        }

        const user = await createUserService(data)
        
        res.json({message: "Register success", user})
    
    }catch (err) {
        next(err)
    }

}