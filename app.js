require("dotenv").config();
//libraries
const rateLimit = require('express-rate-limit');
const express = require("express");
const cors = require("cors");
const Morgan = require("morgan");

//middlewares
const errorMiddleware = require("./middlewares/error");
const notFound = require("./middlewares/notFound");


const app = express();

app.use(express.json());
app.use(cors());
app.use(Morgan("dev"));



//import routes
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const categoryRoute = require("./routes/categoryRoute");
const productRoute = require("./routes/productRoute");
const chatRoute = require("./routes/chatRoute");
const donationRoute = require("./routes/donationRoute");
const favoriteRoute = require("./routes/favoriteRoute");
const foundationRoute = require("./routes/foundationRoute");
const orderRoute = require("./routes/orderRoute");
const reviewRoute = require("./routes/reviewRoute");
const storeRoute = require("./routes/storeRoute");
const allergenRoute = require("./routes/allergenRoute");
const cartItemRoute = require("./routes/cartItemRoute");
const notificationRoute = require("./routes/notificationRoute");
const searchRoute = require("./routes/searchRoute");
const { authenticate } = require("./middlewares/authenticate");


// ตั้งค่า Rate Limiting

// Rate Limiting เป็นเทคนิคในการจำกัดจำนวนคำขอ (Requests) ที่ผู้ใช้หรือไอพีหนึ่ง ๆ สามารถทำได้ในช่วงเวลาที่กำหนด เพื่อป้องกันการโจมตีประเภทต่าง ๆ เช่น:

// Distributed Denial of Service (DDoS): การโจมตีที่มุ่งหมายทำให้เซิร์ฟเวอร์ไม่สามารถให้บริการได้
// Brute-Force Attacks: การพยายามเดารหัสผ่านหรือข้อมูลอื่น ๆ ด้วยการส่งคำขอจำนวนมาก
// API Abuse: การใช้งาน API อย่างไม่ถูกต้องหรือเกินขอบเขตที่กำหนด
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 100, 
    message: "You have made a request beyond the allowed limits. Please try again later.",
    headers: true, 
});

app.use(limiter);


// routes
app.use('/auth', authRoute);
app.use('/users', userRoute);
app.use('/stores', storeRoute);
app.use('/products', productRoute);
app.use('/donations', donationRoute);
app.use('/foundations',foundationRoute);
app.use('/reviews', reviewRoute);
app.use('/chats', chatRoute);
app.use('/favorite-stores', favoriteRoute);
app.use('/cart-items', cartItemRoute);
app.use('/orders', orderRoute);
app.use('/notifications', notificationRoute);
app.use('/categories', categoryRoute);
app.use('/allergens', allergenRoute);
app.use('/search', searchRoute);

// error/not found
app.use(errorMiddleware);
app.use("*", notFound);



module.exports = app;

