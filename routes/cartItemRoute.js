const express = require("express");
const { createCartItemValidator, updateCartItemValidator } = require("../middlewares/validator");
const { addToCart, getCartItems, updateCartItem, deleteCartItem } = require("../controllers/cartItemController");
const { authenticate } = require("../middlewares/authenticate");
const authorize = require("../middlewares/roleAuthorize");
const cartItemRoute = express.Router();

  // สร้าง CartItem ใหม่ (Authenticated Users - Buyer Only) พร้อม Validation
cartItemRoute.post('/', authenticate, authorize(['BUYER']),createCartItemValidator,addToCart);
  
  // // ดึง CartItems ของผู้ใช้งาน (Authenticated Users - Buyer Only)
cartItemRoute.get('/',authenticate,authorize(['ADMIN','BUYER']),getCartItems);
  
  // // อัปเดต CartItem ตาม ID (Owner Only) พร้อม Validation
cartItemRoute.patch('/:id',authenticate,authorize(['BUYER']),updateCartItemValidator,updateCartItem);
  
  // // ลบ CartItem ตาม ID (Owner Only)
cartItemRoute.delete('/:id',authenticate,authorize(['BUYER']),deleteCartItem);


module.exports = cartItemRoute;