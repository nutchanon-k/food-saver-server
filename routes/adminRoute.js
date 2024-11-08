const express = require("express");


const { authenticate } = require("../middlewares/authenticate");
const upload = require("../middlewares/upload");
const authorize = require("../middlewares/roleAuthorize");
const { createCategoryValidator, updateCategoryValidator, createAllergenValidator, updateAllergenValidator } = require("../middlewares/validator");
const { createCategory, updateCategory, deleteCategory, getCategory } = require("../controllers/categoryController");
const { createAllergen, getAllergens, updateAllergen, deleteAllergen } = require("../controllers/allergenController");
const adminRouter = express.Router()
const adminController = require('../controllers/adminController');


// ดึงข้อมูล KPIs หลัก (Admin Only)
adminRouter.get('/metrics', authenticate, authorize(['ADMIN']), adminController.getKPIs);
// {
//     "totalRevenue": "2500",
//     "totalOrders": 4,
//     "totalUsers": [
//         {
//             "_count": {
//                 "role": 1
//             },
//             "role": "ADMIN"
//         },
//         {
//             "_count": {
//                 "role": 50
//             },
//             "role": "BUYER"
//         },
//         {
//             "_count": {
//                 "role": 50
//             },
//             "role": "SELLER"
//         }
//     ],
//     "totalProducts": 250
// }

adminRouter.get('/sales-over-time',authenticate,authorize(['ADMIN']),adminController.getSalesOverTime);
// [
//     {
//         "month": "Nov 2024",
//         "totalRevenue": 2000
//     },
//     {
//         "month": "Oct 2024",
//         "totalRevenue": 500
//     }
// ]


adminRouter.get('/orders-over-time',authenticate,authorize(['ADMIN']),adminController.getOrdersOverTime); //ok  รอ mock data ให้ order created at updated at ไม่เท่ากัน
// [
//     {
//         "month": "Nov 2024",
//         "totalOrders": 3
//     },
//     {
//         "month": "Oct 2024",
//         "totalOrders": 1
//     }
// ]


adminRouter.get('/sales-by-category',authenticate,authorize(['ADMIN']),adminController.getSalesByCategory);// ok รอ mock data
// [
//     {
//         "categoryName": "อาหารตามสั่ง",
//         "totalRevenue": 2000
//     },
//     {
//         "categoryName": "ฟาสต์ฟู้ด",
//         "totalRevenue": 0
//     },
//     {
//         "categoryName": "แฮมเบอร์เกอร์",
//         "totalRevenue": 0
//     },
// ]

adminRouter.get('/sales-by-seller',authenticate,authorize(['ADMIN']),adminController.getSalesBySeller); // ok รอ mock data
// [
//     {
//         "sellerName": "ก้องภพ ศรีสุข",
//         "totalRevenue": 2000
//     },
//     {
//         "sellerName": "ธนภพ พงษ์สวัสดิ์",
//         "totalRevenue": 0
//     },
// ]

adminRouter.get('/new-user-registrations',authenticate,authorize(['ADMIN']),adminController.getNewUserRegistrations); //ok  รอ mock data ให้ user created at ไม่เท่ากันนับเป็นเดือน
// [
//     {
//         "month": "Oct 2024",
//         "newUsers": 5
//     },
//     {
//         "month": "Nov 2024",
//         "newUsers": 96
//     }
// ]

adminRouter.get('/orders-by-status',authenticate,authorize(['ADMIN']),adminController.getOrdersByStatus); //ok  รอ mock data ให้มีหลายสถานะ
// [
//     {
//         "status": "COMPLETED",
//         "count": 3
//     },
//     {
//         "status": "PENDING",
//         "count": 1
//     }
// ]

adminRouter.get('/order-processing-time',authenticate,authorize(['ADMIN']),adminController.getOrderProcessingTime); //ok  รอ mock data ให้ order created at updated at ไม่เท่ากัน
// {
//     "averageProcessingTime": "47.50",
//     "unit": "minutes"
// }

module.exports = adminRouter