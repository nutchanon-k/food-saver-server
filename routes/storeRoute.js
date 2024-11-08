const express = require("express");
const { authenticate } = require("../middlewares/authenticate");
const authorize = require("../middlewares/roleAuthorize");
const storeRoute = express.Router();

const {createStore, updateStore, deleteStore, getStoreArray, getStoreById, getStoreArrayNoCount, updateStoreVerify} = require('../controllers/storeController');
const { createStoreValidator, updateStoreValidator } = require("../middlewares/validator");
const upload = require("../middlewares/upload");
module.exports = storeRoute

// POST /stores (Seller Only)
storeRoute.post('/',authenticate,authorize(['SELLER']),upload.single('profilePicture'),createStoreValidator,createStore)
// GET /stores
storeRoute.get('/',getStoreArray)
// GET /stores/filter
storeRoute.get('/filter',getStoreArrayNoCount)
// GET /stores/:id
storeRoute.get('/:id',getStoreById)
// PATCH /stores/:id (Owner Only)
storeRoute.patch('/:id',authenticate,authorize(['SELLER']),updateStoreValidator,updateStore) //To make update store validator
// DELETE /stores/:id (Admin/Owner Only)
storeRoute.delete('/:id',authenticate,authorize(['SELLER','ADMIN']),deleteStore)  //To make controller



storeRoute.patch('/:id/isVerify',authenticate,authorize(['ADMIN']),updateStoreVerify)