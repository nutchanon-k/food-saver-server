const express = require("express");
const { createFoundation, getAllFoundations, getFoundationById, updateFoundation, deleteFoundation } = require("../controllers/foundationController");
const { authenticate } = require("../middlewares/authenticate");
const upload = require("../middlewares/upload");
const authorize = require("../middlewares/roleAuthorize");
const { createFoundationValidator, updateFoundationValidator, createReviewValidator } = require("../middlewares/validator");
const { createReview } = require("../controllers/reviewController");

const reviewRoute = express.Router();


// สร้าง Review ใหม่ (Authenticated Users) พร้อม Validation
reviewRoute.post('/', authenticate, upload.single('image'), createReviewValidator, createReview);

// // ดึง Reviews ทั้งหมด (Public)
// reviewRoute.get('/', getAllReviews);

// // ดึง Review ตาม ID (Public)
// reviewRoute.get('/:id', getReviewById);

// // อัปเดต Review ตาม ID (Owner Only) พร้อม Validation
// reviewRoute.put('/:id', authenticate, validate(reviewSchema), updateReview);

// // ลบ Review ตาม ID (Owner/Admin Only)
// reviewRoute.delete('/:id', authenticate, deleteReview);




// Reviews
// POST /reviews (Authenticated Users)
// GET /reviews
// GET /reviews/:id
// PUT /reviews/:id (Owner Only)
// DELETE /reviews/:id (Owner/Admin Only)



// model Review {
//     id         Int      @id @default(autoincrement())
//     userId     Int      @map("user_id")
//     storeId    Int?     @map("store_id")
//     productId  Int?     @map("product_id")
//     rating     Int
//     reviewText String?  @map("review_text")
//     image      String?  @map("image")
//     createdAt  DateTime @default(now()) @map("created_at")
//     updatedAt  DateTime @updatedAt @map("updated_at")
  
//     // Relations
//     user    User     @relation(fields: [userId], references: [id])
//     store   Store?   @relation(fields: [storeId], references: [id])
//     product Product? @relation(fields: [productId], references: [id])
//   }




module.exports = reviewRoute