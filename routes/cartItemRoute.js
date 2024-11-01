const express = require("express");
const { createCartItemValidator, updateCartItemValidator } = require("../middlewares/validator");
const { addToCart } = require("../controllers/cartItemController");
const { authenticate } = require("../middlewares/authenticate");
const authorize = require("../middlewares/roleAuthorize");
const cartItemRoute = express.Router();

  // สร้าง CartItem ใหม่ (Authenticated Users - Buyer Only) พร้อม Validation
  cartItemRoute.post('/', authenticate, authorize(['BUYER']),createCartItemValidator,addToCart);
  
  // // ดึง CartItems ของผู้ใช้งาน (Authenticated Users - Buyer Only)
  // router.get('/',authenticate,authorize(['Buyer']),getCartItems);
  
  // // อัปเดต CartItem ตาม ID (Owner Only) พร้อม Validation
  // router.patch('/:id',authenticate,authorize(['Buyer']),updateCartItemValidator,updateCartItem);
  
  // // ลบ CartItem ตาม ID (Owner Only)
  // router.delete('/:id',authenticate,authorize(['Buyer']),deleteCartItem);



module.exports = cartItemRoute;