const express = require("express");
const authorize = require("../middlewares/roleAuthorize");
const { authenticate } = require("../middlewares/authenticate");
const { createOrderValidator, updateOrderValidator } = require("../middlewares/validator");
const { createOrder, getOrderById, getAllOrders, updateOrder, deleteOrder, getBuyerOrders, getOrderItemBySellerId,placeOrder,verifyOrder,getOrderDetailsWithStore,getOrderHistoryByUserId,getOrdersBySeller,acceptOrder } = require("../controllers/orderController");
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

// New: Place Order Route (Authenticated Users - Buyer Only)
orderRoute.post('/place', authenticate, authorize(['BUYER']), placeOrder);

// New: Verify Order Route (Authenticated Users - Buyer Only)
orderRoute.post('/verify', authenticate, authorize(['BUYER']), verifyOrder);

// // New: Stripe Webhook Route (No Authentication or Authorization)
// orderRoute.post('/webhook', express.raw({ type: 'application/json' }), handleStripeWebhook);

// Route for fetching order details with store information for Buyer, Seller, and Admin
orderRoute.get('/details/:id', authenticate, authorize(['BUYER', 'SELLER', 'ADMIN']), getOrderDetailsWithStore);

// This route fetches all past orders of the user with detailed information about each order
orderRoute.get('/history/:userId', authenticate, authorize(['BUYER','SELLER', 'ADMIN']), getOrderHistoryByUserId);

// Route for fetching orders for the seller's store(s)
orderRoute.get('/seller/orders', authenticate, authorize(['SELLER', 'ADMIN']), getOrdersBySeller);

// New Route: Accept Order (Mark as Picked Up) - Seller/Admin Only
orderRoute.patch('/:id/pickup',authenticate,authorize(['SELLER', 'ADMIN']),acceptOrder);
  
  module.exports = orderRoute;

module.exports = orderRoute