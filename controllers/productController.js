require("dotenv").config();
const { message } = require("../configs/prisma");
const { createProductService, getProductArrayService, deleteProductService, addCategory, addAllergen, updateProductService, getProductService } = require("../services/productService");
const { getStoreByUserId, getStoreService } = require("../services/storeService");
const createError = require("../utils/createError");
const path = require('path')
const fs = require('fs/promises')
const cloudinary = require('../configs/cloudinary');
const { updateFoundationService } = require("../services/foundationService");
const { getStoreById } = require("./storeController");
const getPublicId = require("../utils/getPublicId");

module.exports.createProduct = async (req, res, next) => {
  try {
    const {
      name,
      description,
      originalPrice,
      salePrice,
      expirationDate,
      quantity,
    } = req.body;
    const userId = req.user.id
    // Check if store exist
    const isStoreExist = await getStoreByUserId(userId)
    if (!isStoreExist){
      return createError(404,"Store not found")
    }
    const storeId = isStoreExist.id
    console.log(storeId)
    // Preparing data for creating
    const haveFile = !!req.file;
    let uploadResult = {};
    if (haveFile) {
      uploadResult = await cloudinary.uploader.upload(req.file.path, {
        overwrite: true,
        public_id: path.parse(req.file.path).name,
      });
      fs.unlink(req.file.path);
    }
    const image = uploadResult.secure_url || ""

    const data = {
      storeId : storeId,
      name,
      description,
      originalPrice,
      salePrice,
      expirationDate,
      imageUrl : image,
      quantity : +quantity,
    }

    const product = await createProductService(data)
    res.status(200).json({
      message : "created product successfully",
      data : product
    })
  } catch (err) {
    console.log(err);
  }
};

module.exports.getProductArray = async(req,res,next) => {
  try {
    const productArray = await getProductArrayService(req.query)
    res.status(200).json({
      message : "Get all product",
      data : productArray
    })
  } catch (err) {
    console.log(err)
    next(err)
  }
}

module.exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params; // Get the product ID from the request parameters
    const { role, id: userId } = req.user; // Extract the user's role and ID from the request user

    // Find the store associated with the user
    const userStore = await getStoreByUserId(userId);
    const storeId = userStore.id;

    // Retrieve products in the user's store
    const storeProducts = await getProductArrayService({ storeId: +storeId });
    console.log(storeProducts);

    // Create an array of product IDs owned by the user
    const userProductIds = storeProducts.map(product => product.id);

    // Check if the user is allowed to delete the product
    if (role !== "ADMIN") {
      if (role === 'SELLER' && !userProductIds.includes(+id)) {
        console.log(userProductIds, id);
        console.log(role === 'SELLER', userProductIds.includes(+id));
        return createError(403, "You are not allowed to delete this product");
      }
    }

    // Delete the product if authorized
    const deletedProduct = await deleteProductService(id);
    res.status(200).json({
      message: "Deleted product successfully",
      data: deletedProduct
    });
  } catch (err) {
    next(err); // Pass the error to the next middleware
  }
};

module.exports.addProductCategories = async(req,res,next) => {
  try {
    const { id } = req.params; // Get the product ID from the request parameters
    const categories = req.body
    const { role, id: userId } = req.user; // Extract the user's role and ID from the request user
    // Find the store associated with the user
    const userStore = await getStoreByUserId(userId);
    const storeId = userStore.id;

    // Retrieve products in the user's store
    const storeProducts = await getProductArrayService({ storeId: +storeId });
    console.log(storeProducts);

    // Create an array of product IDs owned by the user
    const userProductIds = storeProducts.map(product => product.id);

    // Check if the user is allowed to delete the product
    if (role === 'SELLER' && !userProductIds.includes(+id)) {
      console.log(userProductIds,id)
      console.log(role === 'SELLER', userProductIds.includes(+id));
      return createError(403, "You are not allowed to add category to this product");
    }
    
    const categoryData = categories.map(category => ({
      productId: +id,
      categoryId: +category // Assuming category has an id property
    }));

    const addedCategory = await addCategory(categoryData)
    res.status(200).json({
      message : "Categories added",
      data : categoryData
    })
    
  } catch (err) {
    console.log(err)
    res.status(500).json({
      error: "An error occurred while adding categories",
      details: err.message // Optional, include this only if you want to expose the error message
    });
  }
}

module.exports.addProductAllergens = async(req,res,next) => {
  try {
    const { id } = req.params; // Get the product ID from the request parameters
    const allergens = req.body
    const { role, id: userId } = req.user; // Extract the user's role and ID from the request user
    // Find the store associated with the user
    const userStore = await getStoreByUserId(userId);
    const storeId = userStore.id;

    // Retrieve products in the user's store
    const storeProducts = await getProductArrayService({ storeId: +storeId });
    console.log(storeProducts);

    // Create an array of product IDs owned by the user
    const userProductIds = storeProducts.map(product => product.id);

    // 
    if (role === 'SELLER' && !userProductIds.includes(+id)) {
      console.log(userProductIds,id)
      console.log(role === 'SELLER', userProductIds.includes(+id));
      return createError(403, "You are not allowed to add allergen to this product");
    }
    
    const allergenData = allergens.map(allergen => ({
      productId: +id,
      allergenId: +allergen // Assuming category has an id property
    }));
  
    const addedAllergen = await addAllergen(allergenData)
    res.status(200).json({
      message : "allergens added",
      data : addedAllergen
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      error: "An error occurred while adding allergens",
      details: err.message // Optional, include this only if you want to expose the error message
    });
  }
}

module.exports.updateProduct = async(req,res,next) => {
  try {
    const {id} = req.params
    const userId = req.user.id
    const {
      name,
      description,
      originalPrice,
      salePrice,
      expirationDate,
      quantity,
    } = req.body
    const product = await getProductService(id)
    if (!product) {
      return createError(404,"product not found")
    }
    // ----------
    const fieldsToUpdate = {
      name,
      description,
      originalPrice,
      salePrice,
      expirationDate,
      quantity,
    }
    const cleanFieldsToUpdate = Object.fromEntries(
      Object.entries(fieldsToUpdate).filter(([key, value]) => value !== undefined)
    );
    
    const haveFile = !!req.file
    let uploadResult = {}
    if (haveFile) {
        uploadResult = await cloudinary.uploader.upload(req.file.path, {
            public_id: path.parse(req.file.path).name
        })
        fs.unlink(req.file.path)
        if (product.imageUrl) {
            cloudinary.uploader.destroy(getPublicId(product.imageUrl))
        }
        cleanFieldsToUpdate.imageUrl = uploadResult.secure_url || ''
    }
    const updatedProduct = await updateProductService(+id,cleanFieldsToUpdate)
    res.status(200).json({
      message: 'Update product success',
      data: updatedProduct
  })

  } catch (err) {
    next(err)
    console.log(err)
  }

}