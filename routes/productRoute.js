const express = require("express");
const authorize = require("../middlewares/roleAuthorize");
const { authenticate } = require("../middlewares/authenticate");
const productRoute = express.Router();
const {createProductValidator, updateProductValidator} = require("../middlewares/validator");
const { createProduct, getProductArray, deleteProduct, addProductCategories, addAllergensCategories, addProductAllergens, updateProduct } = require("../controllers/productController");
const upload = require("../middlewares/upload");

// POST /products (Seller Only)
productRoute.post('/',authenticate,authorize(['SELLER']),upload.single('imageUrl'),createProductValidator,createProduct)
// GET /products
productRoute.get('/',getProductArray)
// PUT /products/:id (Owner Only)
productRoute.patch('/:id',authenticate,authorize(['SELLER']),upload.single('imageUrl'),updateProductValidator,updateProduct)
// DELETE /products/:id (Admin/Owner Only)
productRoute.delete('/:id',authenticate,authorize(['ADMIN','SELLER']),deleteProduct)
// POST /products/:id/categories (Owner Only)
productRoute.post('/:id/categories',authenticate,authorize(['SELLER']),addProductCategories)
// POST /products/:id/allergens (Owner Only)
productRoute.post('/:id/allergens',authenticate,authorize(['SELLER']),addProductAllergens)

module.exports = productRoute

