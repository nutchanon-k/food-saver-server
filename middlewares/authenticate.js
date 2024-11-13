const createError = require('../utils/createError')
const jwt = require('jsonwebtoken')
const prisma = require('../configs/prisma')

module.exports.authenticate = async (req, res, next) => {
    try{
        const authHeader = req.headers.authorization
        
        if(!authHeader){
            return createError(401, 'Unauthorized Header missing') 
        }

        const token = authHeader.split(' ')[1]

        if(!token){
            return createError(401, 'Unauthorized Token missing')
            
        }

        const verifyUser = jwt.verify(token, process.env.JWT_SECRET,(err, user) => {
            if(err){
                return createError(401, 'Unauthorized Token invalid')
            }
            return user
        })

        // console.log("verifyUser", verifyUser)
        const user = await prisma.user.findFirst({
            where: {
                id: verifyUser.id
            },

        })
        if(!user){
            return createError(401, 'Unauthorized User invalid')
        }
        // console.log(user)

        req.user = user
        
        next()
    }catch(err){ 
        next(err)
    }
}