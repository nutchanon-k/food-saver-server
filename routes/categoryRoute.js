const express = require("express");
const categoryRoute = express.Router();
const { authenticate } = require("../middlewares/authenticate");
const upload = require("../middlewares/upload");
const authorize = require("../middlewares/roleAuthorize");
const { createCategoryValidator, updateCategoryValidator } = require("../middlewares/validator");
const { createCategory, updateCategory, deleteCategory, getCategory } = require("../controllers/categoryController");



// สร้าง Category ใหม่ (Admin Only) พร้อม Validation
categoryRoute.post('/', authenticate, authorize(['ADMIN']),upload.single('imageUrl'),createCategoryValidator, createCategory);

// ดึง Categories ทั้งหมด (Public) รองรับการค้นหา, จำกัดจำนวน, จัดเรียง
categoryRoute.get('/',authenticate, getCategory);

// // อัปเดต Category ตาม ID (Admin Only) พร้อม Validation
categoryRoute.patch('/:id', authenticate, authorize(['ADMIN']),upload.single('imageUrl'), updateCategoryValidator, updateCategory);

// // ลบ Category ตาม ID (Admin Only)
categoryRoute.delete( '/:id', authenticate, authorize(['ADMIN']), deleteCategory);





// model Category {
//     id          Int     @id @default(autoincrement())
//     name        String  @unique
//     description String? @map("description")
//     imageUrl    String  @map("image_url")

//     // Relations
//     productCategories ProductCategories[]
//   }


//   model ProductCategories {
//     productId  Int @map("product_id")
//     categoryId Int @map("category_id")

//     // Relations
//     product  Product  @relation(fields: [productId], references: [id])
//     category Category @relation(fields: [categoryId], references: [id])

//     @@id([productId, categoryId])
//   }

module.exports = categoryRoute