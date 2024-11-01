require("dotenv").config();
const jwt = require('jsonwebtoken')
const createError = require('../utils/createError')
const nodemailer = require('nodemailer')
const bcrypt = require('bcryptjs');

const { getUserByEmail, getUserById, updateUserService } = require("../services/userService");
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

        //hash password
        const hashedPassword = await bcrypt.hash(password, 10)

        const data = {
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role,
            address,
            phoneNumber
        }

        const user = await createUserService(data)
        
        res.json({message: "Register success", user})
    
    }catch (err) {
        next(err)
    }

}

exports.forgotPassword = async (req, res, next) => {
    try {
        const { emailForgetPassword } = req.body

        if (!emailForgetPassword) {
            return createError(400, 'email is required') //ไม่ควรมี เพราะอาจเกิดการสุ่มได้
        }
        
        const user = await getUserByEmail(emailForgetPassword)

        if (!user) {
            return res.status(200).json({ message: 'email sent' });
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '5m' });
        const resetURL = `http://localhost:5173/reset-password/${token}`;
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL, // อีเมลขอคนที่จะส่ง
                pass: process.env.PASSWORD // รหัสผ่านสำหรับ app (เอามาจาก gmail)
            }
        });

        const mailOptions = {
            to: user.email,
            from: process.env.EMAIL,
            subject: 'Reset Password',
            text: `You have requested to reset your password. Click the link below to reset your password: ${resetURL}`
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'email sent' });

    } catch (err) {
        next(err)
    }
}

exports.resetPassword = async (req, res, next) => {
    try {
        const { password, confirmPassword } = req.body
        const { id } = req.user
        if (password !== confirmPassword) {
            return createError(400, 'password is not match')
        }

        const user = await getUserById(id)
        if (!user) {    
            return createError(400, 'email is not registered')
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const result =  await updateUserService(id, {password : hashedPassword}) 

        res.status(200).json({ message: 'reset password success' })

    } catch (err) {
        next(err)
    }
}