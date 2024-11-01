const express = require("express");
const { createUserValidator, loginValidator } = require("../middlewares/validator");
const { register, login, forgotPassword, resetPassword } = require("../controllers/authController");
const authRoute = express.Router();
const upload = require("../middlewares/upload");
const { authenticate } = require("../middlewares/authenticate");


authRoute.post("/login",loginValidator, login)
authRoute.post("/register",createUserValidator, register)

authRoute.post('/forgot-password', forgotPassword)
authRoute.patch('/reset-password',authenticate, resetPassword)

module.exports = authRoute