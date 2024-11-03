const express = require("express");
const authorize = require("../middlewares/roleAuthorize");
const { authenticate } = require("../middlewares/authenticate");
const { createOrderValidator, updateOrderValidator } = require("../middlewares/validator");
const { createOrder, getOrderById, getAllOrders, updateOrder, deleteOrder, getBuyerOrders, getOrderItemBySellerId } = require("../controllers/orderController");
const orderRoute = express.Router();

// สร้าง Order ใหม่ (Authenticated Users - Buyer Only) พร้อม Validation
orderRoute.post('/', authenticate, authorize(['BUYER']), createOrderValidator, createOrder);

// ดึง Orders ทั้งหมด (Admin Only)
orderRoute.get('/', authenticate, authorize(['ADMIN']), getAllOrders);

// ดึง Order ตาม ID (Authenticated Users - Buyer และ Admin)
orderRoute.get('/:id', authenticate, authorize(['BUYER', 'ADMIN']), getOrderById);

// ดึง Orders ของผู้ใช้งาน (Authenticated Users - Buyer Only)
orderRoute.get('/:buyerId/buyer', authenticate, authorize(['BUYER']), getBuyerOrders);

//ดึง order item สำหรับสินค้าที่ถูกสั่งซื้อ
orderRoute.get('/:sellerId/orderItems',authenticate,authorize(['SELLER']),getOrderItemBySellerId);

// // อัปเดต Order ตาม ID (Admin Only) พร้อม Validation
orderRoute.patch('/:id',authenticate,authorize(['ADMIN']),updateOrderValidator,updateOrder);

// // ลบ Order ตาม ID (Admin Only)
orderRoute.delete('/:id',authenticate,authorize(['ADMIN']),deleteOrder);


module.exports = orderRoute