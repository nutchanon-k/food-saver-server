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
        const userData = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
            profilePicture: user.profilePicture,
            address: user.address,
            phoneNumber: user.phoneNumber,
            isActive: user.isActive,
            store : user.store
        }

        //generate token
        const payload = { id: user.id }
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '30d' })


        //send token
        res.status(200).json({
            message: 'login success',
            user: userData,
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
            return createError(409, "User already exist")
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

module.exports.googleAuth = async (req, res, next) => {
    try{
        const {email, given_name, family_name, picture } = req.body

        const user = await getUserByEmail(email)
        
        let newUser = null
        if(user){
            data = {
                firstName: given_name,
                lastName: family_name,
                email,
                profilePicture: picture
            }        
            newUser = await updateUserService(user.id, data)
        }else{
            data = {
                firstName: given_name,
                lastName: family_name,
                email,
                profilePicture: picture
            }
            newUser = await createUserService(data)
        }
        
        const userData = {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            role: newUser.role,
            profilePicture: newUser.profilePicture,
            address: newUser.address,
            phoneNumber: newUser.phoneNumber,
            isActive: newUser.isActive,
            store : user?.store ? user.store : null 
        }

        //generate token
        const payload = { id: newUser.id }
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '30d' })


        //send token
        res.status(200).json({
            message: 'login success',
            user: userData,
            token,
        })
        


    }catch (err) {
        next(err)
    }


  };
  
module.exports.forgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body

        if (!email) {
            return createError(400, 'email is required') //ไม่ควรมี เพราะอาจเกิดการสุ่มได้
        }
        
        const user = await getUserByEmail(email)

        if (!user) {
            return res.status(200).json({ message: 'email sent' });
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '5m' });
        const resetURL = `http://localhost:5173/forgetPassword/${token}`;
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL, // อีเมลขอคนที่จะส่ง
                pass: process.env.PASSWORD // รหัสผ่านสำหรับ app (เอามาจาก gmail)
            }
        });

        const mailOptions = {
            from: `"Food Saver Team" <${process.env.EMAIL}>`, // เพิ่มชื่อบริษัท
            to: user.email,
            subject: 'Reset Your Password',
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                    <h2>Password Reset Request</h2>
                    <p>Hi ${user.firstName} ${user.lastName},</p>
                    <p>You recently requested to reset your password for your account. Click the button below to reset it.</p>
                    <a href="${resetURL}" style="
                        display: inline-block;
                        padding: 10px 20px;
                        font-size: 16px;
                        color: #ffffff;
                        background-color: #007BFF;
                        text-decoration: none;
                        border-radius: 5px;
                    ">Reset Password</a>
                    <p>If you did not request a password reset, please ignore this email or reply to let us know.</p>
                    <p>Thanks,<br/>Food Saver Team</p>
                    <hr/>
                    <p style="font-size: 12px; color: #777;">
                        If you're having trouble clicking the "Reset Password" button, copy and paste the URL below into your web browser:
                        <br/>
                        <a href="${resetURL}" style="color: #007BFF;">${resetURL}</a>
                    </p>
                </div>
            `,
            text: `Hi ${user.firstName} ${user.lastName},
        
        You recently requested to reset your password for your account. Use the link below to set a new password:
        
        ${resetURL}
        
        If you did not request a password reset, please ignore this email or reply to let us know.
        
        Thanks,
        Food Saver Team
        `
        };
        

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'email sent' });

    } catch (err) {
        next(err)
    }
}

module.exports.resetPassword = async (req, res, next) => {
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
        const result =  await updateUserService(+id, {password : hashedPassword}) 

        res.status(200).json({ message: 'reset password success' })

    } catch (err) {
        next(err)
    }
}