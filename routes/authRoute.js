const express = require("express");
const authRoute = express.Router();

// authRoute.post("/login",loginValidator, login)
authRoute.post("/register",registerValidator, register)

// authRoute.post('/forgot-password', forgotPassword)
// authRoute.patch('/reset-password',authenticate, resetPassword)

module.exports = authRoute