const express = require("express");
const { authenticate } = require("../middlewares/authenticate");
const authorize = require("../middlewares/roleAuthorize");
const storeRoute = express.Router();
const {createStore, updateStore} = require('../controllers/storeController');
const { createStoreValidator, updateStoreValidator } = require("../middlewares/validator");
module.exports = storeRoute

// POST /stores (Seller Only)
storeRoute.post('/',authenticate,authorize(['SELLER']),createStoreValidator,createStore)
// GET /stores
// GET /stores/:id
// PATCH /stores/:id (Owner Only)
storeRoute.patch('/:id',authenticate,authorize(['SELLER']),updateStoreValidator,updateStore) //To make update store validator
// DELETE /stores/:id (Admin/Owner Only)
storeRoute.delete('/:id',authenticate,authorize(['SELLER','ADMIN']))  //To make controller