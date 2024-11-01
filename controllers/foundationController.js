require("dotenv").config();
const createError = require('../utils/createError')
const nodemailer = require('nodemailer')
const bcrypt = require('bcryptjs');
const path = require('path')
const fs = require('fs/promises')
const cloudinary = require('../configs/cloudinary')
const getPublicId = require('../utils/getPublicId')
const { createFoundationService, getFoundationByName, getAllFoundationsService,getFoundationByIdService, updateFoundationService, deleteFoundationService } = require("../services/foundationService");


// model Foundation {
//     id             Int      @id @default(autoincrement())
//     name           String   @unique
//     contactInfo    String?  @map("contact_info")
//     address        String?  @map("address")
//     profilePicture String?  @map("profile_picture")
//     createdAt      DateTime @default(now()) @map("created_at")
//     updatedAt      DateTime @default(now()) @updatedAt @map("updated_at")

module.exports.createFoundation = async (req, res, next) => {
    try {
    const { name, contactInfo, address} = req.body;
        // console.log("name",name)
     const existingFoundation = await getFoundationByName(name.trim());
      if (existingFoundation) {
        return createError(409, 'Foundation already exists'); // Conflict
      }

     const haveFile = !!req.file
        let uploadResult = {}
        if (haveFile) {
            uploadResult = await cloudinary.uploader.upload(req.file.path, {
                overwrite: true,
                public_id: path.parse(req.file.path).name
            })
            fs.unlink(req.file.path)
        }

     const data = {
            name : name.trim(),
            contactInfo : contactInfo,
            address : address,
            profilePicture: uploadResult.secure_url || "",   
        }

        const foundation = await createFoundationService(data);
        res.status(201).json(foundation);
    } catch (err) {
      next(err);
    }
  };
  
module.exports.getAllFoundations = async (req, res, next) => {
    try {
      const foundations = await getAllFoundationsService();
      res.status(200).json(foundations);
    } catch (err) {
      next(err);
    }
  };
  
module.exports.getFoundationById = async (req, res, next) => {
    try {
      const id = parseInt(req.params.id);

      if(isNaN(id) || id <= 0) {
        createError(400, 'Invalid ID')
      }

      const foundation = await getFoundationByIdService(id);
      if (!foundation) {
        return createError(404, 'Foundation not found');
      }

      res.status(200).json(foundation);
    } catch (err) {
      next(err);
    }
  };
  
module.exports.updateFoundation = async (req, res, next) => {
    try {
        const { name, contactInfo, address} = req.body;
        const id = Number(req.params.id);
        if (isNaN(id) || id <= 0 || id%1 !== 0) {
            return createError(400, 'Invalid ID');
        }

        const foundation = await getFoundationByIdService(id);
        if (!foundation) {
        return createError(404, 'Foundation not found');
         }

        const fieldsToUpdate = { 
            name : name.trim(), 
            contactInfo, 
            address
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
            if (foundation.profilePicture) {
                cloudinary.uploader.destroy(getPublicId(foundation.profilePicture))
            }
            cleanFieldsToUpdate.profilePicture = uploadResult.secure_url || ''
        }


      const updatedFoundation = await updateFoundationService(id, cleanFieldsToUpdate);
      res.status(200).json(updatedFoundation);
    } catch (err) {
      next(err);
    }
  };
  
module.exports.deleteFoundation = async (req, res, next) => {
    try {
      const id = Number(req.params.id);

      if (isNaN(id) || id <= 0 || id%1 !== 0) {
          return createError(400, 'Invalid ID');
      }

      const foundation = await getFoundationByIdService(id);
      if (!foundation) {
      return createError(404, 'Foundation not found');
       }

      const deletedFoundation = await deleteFoundationService(id);
      res.status(200).json({ message: `Foundation "${deletedFoundation.name}" deleted successfully` });
    } catch (err) {
      next(err);
    }
  };

