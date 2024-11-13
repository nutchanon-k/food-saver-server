const express = require("express");
const { authenticate } = require("../middlewares/authenticate");
const { getNotifications, markAsRead } = require("../controllers/notificationController");

const notificationRoute = express.Router();

// GET /notifications - ดึง Notifications ของผู้ใช้งาน (Authenticated Users)
notificationRoute.get('/',authenticate, getNotifications);

// PATCH /notifications/:id/read - มาร์ค Notification ว่าอ่านแล้ว (Owner Only)
notificationRoute.patch('/:id/read',authenticate,markAsRead);

module.exports = notificationRoute