const express = require("express");
const { authenticate } = require("../middlewares/authenticate");
const authorize = require("../middlewares/roleAuthorize");
const userRoute = express.Router();
const {getUserById,updateUserProfile} = require("../services/userService")
const {updateUserValidator} = require("../middlewares/validator");
const upload = require("../middlewares/upload");

userRoute.get("/me",authenticate,getUserById)

// Check
userRoute.patch("/me",authenticate,upload.single('image'),updateUserValidator,updateUserProfile)


// GET /api/users/me
// PUT /api/users/me
// GET /api/users/:id (Admin Only)
// DELETE /api/users/:id (Admin Only)

module.exports = userRoute