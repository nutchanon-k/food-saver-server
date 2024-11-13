const express = require("express");
const { createFoundation, getFoundationById, updateFoundation, deleteFoundation, getFoundation } = require("../controllers/foundationController");
const { authenticate } = require("../middlewares/authenticate");
const upload = require("../middlewares/upload");
const authorize = require("../middlewares/roleAuthorize");
const { createFoundationValidator, updateFoundationValidator } = require("../middlewares/validator");
const foundationRoute = express.Router();



// สร้าง Foundation ใหม่ (Admin Only)
foundationRoute.post('/', authenticate, authorize(["ADMIN"]),  upload.single('profilePicture'),createFoundationValidator, createFoundation);

// // ดึง Foundation ทั้งหมด (Public)
foundationRoute.get('/', getFoundation);

// // ดึง Foundation ตาม ID (Public)
// foundationRoute.get('/:id', getFoundationById);

// // อัปเดต Foundation ตาม ID (Admin Only)
foundationRoute.patch('/:id', authenticate, authorize(["ADMIN"]),upload.single('profilePicture'), updateFoundationValidator,updateFoundation);

// // ลบ Foundation ตาม ID (Admin Only)
foundationRoute.delete('/:id', authenticate, authorize(["ADMIN"]), deleteFoundation);



module.exports = foundationRoute