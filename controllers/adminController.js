require("dotenv").config();
const createError = require('../utils/createError')
const path = require('path')
const fs = require('fs/promises')
const cloudinary = require('../configs/cloudinary')
const getPublicId = require('../utils/getPublicId');
const { getAllergenByName, createAllergenService, getAllergenServices, updateAllergenService, deleteAllergenService } = require("../services/allergenService");
const { create } = require("domain");
const { message } = require("../configs/prisma");
const { searchAllergenSchema } = require("../middlewares/validator"); 


const adminService = require('../services/adminService');

/**
 * ดึงข้อมูล KPIs หลัก
 * Endpoint: GET /api/admin/metrics
 * Access: Admin Only
 */
const getKPIs = async (req, res) => {
  try {
    const metrics = await adminService.getKPIs();
    res.status(200).json(metrics);
  } catch (err) {
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในการดึงข้อมูล KPIs' });
  }
};

/**
 * ดึงข้อมูลยอดขายตามเวลา
 * Endpoint: GET /api/admin/sales-over-time
 * Access: Admin Only
 */
const getSalesOverTime = async (req, res) => {
  try {
    const salesData = await adminService.getSalesOverTime();
    res.status(200).json(salesData);
  } catch (err) {
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในการดึงข้อมูลยอดขายตามเวลา' });
  }
};

/**
 * ดึงข้อมูลจำนวนคำสั่งซื้อตามเวลา
 * Endpoint: GET /api/admin/orders-over-time
 * Access: Admin Only
 */
const getOrdersOverTime = async (req, res) => {
  try {
    const ordersData = await adminService.getOrdersOverTime();
    res.status(200).json(ordersData);
  } catch (err) {
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในการดึงข้อมูลคำสั่งซื้อตามเวลา' });
  }
};

/**
 * ดึงข้อมูลยอดขายตามหมวดหมู่สินค้า
 * Endpoint: GET /api/admin/sales-by-category
 * Access: Admin Only
 */
const getSalesByCategory = async (req, res) => {
  try {
    const salesByCategory = await adminService.getSalesByCategory();
    res.status(200).json(salesByCategory);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในการดึงข้อมูลยอดขายตามหมวดหมู่สินค้า' });
  }
};

/**
 * ดึงข้อมูลยอดขายตามผู้ขาย
 * Endpoint: GET /api/admin/sales-by-seller
 * Access: Admin Only
 */
const getSalesBySeller = async (req, res) => {
  try {
    const salesBySeller = await adminService.getSalesBySeller();
    res.status(200).json(salesBySeller);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในการดึงข้อมูลยอดขายตามผู้ขาย' });
  }
};

/**
 * ดึงข้อมูลการลงทะเบียนผู้ใช้งานใหม่ตามเวลา
 * Endpoint: GET /api/admin/new-user-registrations
 * Access: Admin Only
 */
const getNewUserRegistrations = async (req, res) => {
  try {
    const newUserRegistrations = await adminService.getNewUserRegistrations();
    res.status(200).json(newUserRegistrations);
  } catch (err) {
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในการดึงข้อมูลการลงทะเบียนผู้ใช้งานใหม่' });
  }
};



/**
 * ดึงข้อมูลคำสั่งซื้อตามสถานะ
 * Endpoint: GET /api/admin/orders-by-status
 * Access: Admin Only
 */
const getOrdersByStatus = async (req, res) => {
  try {
    const ordersByStatus = await adminService.getOrdersByStatus();
    res.status(200).json(ordersByStatus);
  } catch (err) {
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในการดึงข้อมูลคำสั่งซื้อตามสถานะ' });
  }
};

/**
 * ดึงข้อมูลระยะเวลาการดำเนินการคำสั่งซื้อ
 * Endpoint: GET /api/admin/order-processing-time
 * Access: Admin Only
 */
const getOrderProcessingTime = async (req, res) => {
  try {
    const averageProcessingTime = await adminService.getOrderProcessingTime();
    res.status(200).json({
      averageProcessingTime,
      unit: "minutes"
    });
  } catch (err) {
    res.status(500).json({ message: 'เกิดข้อผิดพลาดในการดึงข้อมูลระยะเวลาการดำเนินการคำสั่งซื้อ' });
  }
};

module.exports = {
  getKPIs,
  getSalesOverTime,
  getOrdersOverTime,
  getSalesByCategory,
  getSalesBySeller,
  getNewUserRegistrations,

  getOrdersByStatus,
  getOrderProcessingTime,
};