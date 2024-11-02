const express = require("express");
const { authenticate } = require("../middlewares/authenticate");
const upload = require("../middlewares/upload");
const authorize = require("../middlewares/roleAuthorize");
const { createDonationValidator } = require("../middlewares/validator");
const { createDonation, getDonations, updateVerifyDonation, deleteDonation } = require("../controllers/donationController");
const donationRoute = express.Router();

// สร้าง Donation ใหม่ (Seller Only) พร้อม Validation
donationRoute.post('/', authenticate, authorize(['SELLER','ADMIN']),upload.single('imageUrl'), createDonationValidator, createDonation);

// ดึง Donations ทั้งหมด (Admin/Foundation Related) พร้อม Authorization
donationRoute.get('/', authenticate, getDonations);

// อัปเดต Donation ตาม ID (Admin/Seller Only) พร้อม Validation
donationRoute.patch('/:id', authenticate, authorize(['ADMIN']), updateVerifyDonation);

// ลบ Donation ตาม ID (Admin Only)
donationRoute.delete('/:id', authenticate, authorize(['ADMIN']), deleteDonation);


module.exports = donationRoute