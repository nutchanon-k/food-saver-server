require("dotenv").config();
const jwt = require('jsonwebtoken')
const createError = require('../utils/createError')
const prisma = require('../configs/prisma')
const nodemailer = require('nodemailer')
const bcrypt = require('bcrypt');    
const { getUserByEmail } = require("../services/userService");
const { createUserService } = require("../services/authService");



// module.exports.login = async (req, res, next) => {
//     try {
//         const { email, password } = req.body
        
//         //check user by email
//         const user = await getUserByEmail(email)
//         if (!user) {
//             return createError(400, 'email is not registered')
//         }
        

//         //compare password
//         const passwordIsMatch = await bcrypt.compare(password, user.password)
//         if (!passwordIsMatch) {
//             return createError(400, 'email or password is incorrect')
//         }

//         //generate token
//         const payload = { id: user.id }
//         const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '30d' })


//         //send token
//         res.status(200).json({
//             message: 'login success',
//             token,
//             user: {
//                 id: user.id,
//                 firstName: user.firstName,
//                 lastName: user.lastName,
//                 email: user.email,
//                 role: user.role,
//                 level: user.level,
//                 picture: user.picture
//             }
//         })

//     } catch (err) {
//         next(err)
//     }
// }



module.exports.register = async (req, res, next) => {
    try {
        const { firstName, lastName, email, password, confirmPassword, role, profilePicture ,address, phoneNumber} = req.body
       
        
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
            profilePicture,
            address,
            phoneNumber
        }

        const user = await createUserService(data)
        
        res.json({message: "Register success", user})
    
    }catch (err) {
        next(err)
    }

}