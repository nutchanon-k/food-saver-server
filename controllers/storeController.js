const { message } = require('../configs/prisma')
const {getStoreByUserId, getStoreService, createStoreService, getStoreById,getStoreArrayService, updateStoreService,} = require('../services/storeService')
const createError = require('../utils/createError')
const path = require('path')
const fs = require('fs/promises')
const cloudinary = require('../configs/cloudinary')

module.exports.createStore = async(req,res,next) => {
  try {
    const {storeName,storeAddress,storeDetails,phoneNumber,timeOpen,timeClose,latitude,longitude,} = req.body
    const userId = req.user.id
    // Find if user already created store
    const isStoreExist = await getStoreByUserId(userId)
    if(isStoreExist){
      return createError(400,"You have already created store")
    }
    
    // Check if there's image in request body
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

    // Create store
    const data = {
      userId,
      storeName,
      storeAddress,
      storeDetails,
      phoneNumber,
      timeOpen,
      timeClose,
      latitude,
      longitude,
      profilePicture : image
    }
    const store = await createStoreService(data)
    res.status(200).json({
      message : 'Created store successfully',
      data : store
    })
  } catch (err) {
    next(err)
  }
}

module.exports.updateStore = async(req,res,next) => {
  try {
    const {id} = req.params
    const userId = req.user.id
    const {
      storeName,
      storeAddress,
      storeDetails,
      status,
      phoneNumber,
      timeOpen,
      timeClose,
      latitude,
      longitude,
    } = req.body

    // Find store
    const store = await getStoreById(id)
    if (!store) {
      return createError(404,"Store not found")
    }
    if (userId != store.userId){
      return createError(403,"Unauthorized")
    }
    const fieldsToUpdate = {
      storeName,
      storeAddress,
      storeDetails,
      status,
      phoneNumber,
      timeOpen,
      timeClose,
      latitude,
      longitude,
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
        if (store.profilePicture) {
            cloudinary.uploader.destroy(getPublicId(store.profilePicture))
        }
        cleanFieldsToUpdate.profilePicture = uploadResult.secure_url || ''
    }
    const updatedStore = await updateStoreService(+id,cleanFieldsToUpdate)
    res.status(200).json({
      message: 'Update store profile success',
      data: updatedStore
  })
  } catch (err) {
    next(err)
  }
}

module.exports.deleteStore = async(req,res,next) => {
  try {
    const {id} = req.params
    const userId = req.user.id
    const role = req.user.role

    const store = await getStoreById(id)
    
    // If not owner or not admin return
    if (role !== "ADMIN" && userId !== store.userId){
      return createError(403,"Unauthorized")
    }
    // 

  } catch (err) {
    console.log(err)
    next(err)
  }
}

module.exports.getStoreArray = async(req,res,next) => {
  try {
    console.log('This runs')
    const storeArray = await getStoreArrayService(req.query)
    res.status(200).json({
      'message' : "Get all store",
      'data' : storeArray.stores,
      'totalPage' : storeArray.totalPage,
      'countStore': storeArray.countStore
    })
  } catch (err) {
    console.log(err)
    next(err)
  }

}

module.exports.getStoreById = async(req,res,next) => {
  try {
    const {id} = req.params
    const store = await getStoreService(id)
    if (!store){
      return createError(404,"Store not found")
    }
    res.status(200).json({
      'message' : "Get store",
      'data' : store
    })
  } catch (err) {
    console.log(err)
    next(err)
  }
}