const express = require("express");


const { authenticate } = require("../middlewares/authenticate");
const upload = require("../middlewares/upload");
const authorize = require("../middlewares/roleAuthorize");
const { createCategoryValidator, updateCategoryValidator, createAllergenValidator, updateAllergenValidator } = require("../middlewares/validator");
const { createCategory, updateCategory, deleteCategory, getCategory } = require("../controllers/categoryController");
const { createAllergen, getAllergens, updateAllergen, deleteAllergen } = require("../controllers/allergenController");
const allergenRoute = express.Router()

// สร้าง Allergen ใหม่ (Admin Only) พร้อม Validation
allergenRoute.post('/', authenticate, authorize(['ADMIN']), createAllergenValidator, createAllergen);

// // ดึง Allergens ทั้งหมด (Public) รองรับการค้นหา, จำกัดจำนวน, จัดเรียง
allergenRoute.get('/', authenticate, getAllergens);

// // อัปเดต Allergen ตาม ID (Admin Only) พร้อม Validation
allergenRoute.patch('/:id', authenticate, authorize(['ADMIN']), updateAllergenValidator, updateAllergen);

// // ลบ Allergen ตาม ID (Admin Only)
allergenRoute.delete('/:id', authenticate, authorize(['ADMIN']), deleteAllergen);



module.exports = allergenRoute