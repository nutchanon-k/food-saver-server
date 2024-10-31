const express = require("express");
const { authenticate } = require("../middlewares/authenticate");
const authorize = require("../middlewares/roleAuthorize");
const userRoute = express.Router();
const {getUserById,updateUserProfile} = require("../services/userService")
const {updateUserValidator} = require("../middlewares/validator");
const upload = require("../middlewares/upload");
const { currentUser, updateUser, deleteUser, getUserByQuery } = require("../controllers/userController");


userRoute.get("/me",authenticate,currentUser)

userRoute.patch("/me",authenticate,upload.single('profilePicture'),updateUserValidator,updateUser)

userRoute.delete("/:id",authenticate, deleteUser)


// get user by query
userRoute.get("/",authenticate,authorize(['ADMIN']),getUserByQuery)



module.exports = userRoute