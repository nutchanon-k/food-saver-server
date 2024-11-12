const express = require("express");
const { authenticate } = require("../middlewares/authenticate");
const authorize = require("../middlewares/roleAuthorize");
const { getKPI, getOrderReport, getMostOrderedDishes, getMostTypeOfOrder } = require("../controllers/sellerDashboardController");
const sellerDashboardRoute = express.Router();

sellerDashboardRoute.get("/kpi", authenticate, authorize(['SELLER']), getKPI) //ok
// {
//     "totalRevenue": "2000",
//     "totalDishOrdered": 20,
//     "totalCustomer": 1
// }

sellerDashboardRoute.get("/order-report", authenticate, authorize(['SELLER']), getOrderReport) //ok
// [
//     {
//         "customer": "ก้องภพ ศรีสุข",
//         "menu": "ข้าวผัดหมู x 10",
//         "totalPayment": 1000,
//         "status": "COMPLETED",
//         "createdAt": "2024-03-08T06:20:40.333Z"
//     },
//     {
//         "customer": "ก้องภพ ศรีสุข",
//         "menu": "ผัดซีอิ๊ว x 5",
//         "totalPayment": 500,
//         "status": "COMPLETED",
//         "createdAt": "2024-02-08T06:20:16.156Z"
//     },
//     {
//         "customer": "ก้องภพ ศรีสุข",
//         "menu": "ผัดซีอิ๊ว x 2, ต้มยำกุ้ง x 3",
//         "totalPayment": 500,
//         "status": "COMPLETED",
//         "createdAt": "2024-01-08T06:09:43.517Z"
//     }
// ]getMostOrderedDishes
sellerDashboardRoute.get("/most-ordered", authenticate, authorize(['SELLER']), getMostOrderedDishes) //ok
// [
//     {
//         "dish": "ข้าวผัดหมู",
//         "totalOrdered": 10
//     },
//     {
//         "dish": "ผัดซีอิ๊ว",
//         "totalOrdered": 7
//     },
//     {
//         "dish": "ต้มยำกุ้ง",
//         "totalOrdered": 3
//     }
// ]getMostTypeOfOrder

sellerDashboardRoute.get("/most-type-order", authenticate, authorize(['SELLER']), getMostTypeOfOrder) //ok
// [
//     {
//         "category": "อาหารตามสั่ง",
//         "totalOrdered": 20
//     },
//     {
//         "category": "อาหารเส้น",
//         "totalOrdered": 7
//     },
//     {
//         "category": "อาหารทะเล",
//         "totalOrdered": 3
//     },
//     {
//         "category": "ข้าวหน้า",
//         "totalOrdered": 10
//     }
// ]


module.exports = sellerDashboardRoute