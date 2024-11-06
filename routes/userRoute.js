const express = require("express");
const { authenticate } = require("../middlewares/authenticate");
const authorize = require("../middlewares/roleAuthorize");
const userRoute = express.Router();
const {getUserById,updateUserProfile} = require("../services/userService")
const {updateUserValidator} = require("../middlewares/validator");
const upload = require("../middlewares/upload");
const { currentUser, updateUser, deleteUser, getUser, updateUserActivate } = require("../controllers/userController");


userRoute.get("/me",authenticate,currentUser)

userRoute.patch("/me",authenticate,upload.single('image'),updateUserValidator,updateUser)

userRoute.delete("/:id",authenticate, deleteUser)

userRoute.get("/",authenticate,authorize(['ADMIN']),getUser)



userRoute.patch("/isActive/:id",authenticate,authorize(['ADMIN']),updateUserActivate)



module.exports = userRoute