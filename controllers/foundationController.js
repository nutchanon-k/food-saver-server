require("dotenv").config();
const createError = require('../utils/createError')
const nodemailer = require('nodemailer')
const bcrypt = require('bcryptjs');
const path = require('path')
const fs = require('fs/promises')
const cloudinary = require('../configs/cloudinary')
const getPublicId = require('../utils/getPublicId')
const { createFoundationService, getFoundationByName, getAllFoundationsService,getFoundationByIdService, updateFoundationService, deleteFoundationService, getFoundationService } = require("../services/foundationService");
const { donation } = require("../configs/prisma");
const prisma = require("../configs/prisma");


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
  
// module.exports.getAllFoundations = async (req, res, next) => {
//     try {
//       const foundations = await getAllFoundationsService();
//       res.status(200).json(foundations);
//     } catch (err) {
//       next(err);
//     }
//   };
  

// module.exports.getFoundationById = async (req, res, next) => {
//     try {
//       const id = parseInt(req.params.id);

//       if(isNaN(id) || id <= 0) {
//         createError(400, 'Invalid ID')
//       }

//       const foundation = await getFoundationByIdService(id);
//       if (!foundation) {
//         return createError(404, 'Foundation not found');
//       }

//       res.status(200).json(foundation);
//     } catch (err) {
//       next(err);
//     }
//   };
  
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

module.exports.getFoundation = async (req, res, next) => {
  console.log("test") /donation
    try {
      const {id, name, contactInfo, address, sortBy, sortOrder, page, limit, search } = req.query;
      const where = {};

    if (id) {
        where.id = Number(id);
    }

    if (name) {
        where.name = {
            contains: name,
        };
    }

    if (contactInfo) {
        where.contactInfo = {
            contains: contactInfo,
        };
    }

    if (address) {
        where.address = {
            contains: address,
        };
    }

     // กำหนดการเรียงลำดับ
     const orderBy = {};
     if (sortBy) {
         orderBy[sortBy] = sortOrder === 'asc' ? 'asc' : 'desc';
     }

     // กำหนดการแบ่งหน้าแบบเงื่อนไข
     let take;
     let skip;

     if (page && limit) {
         take = +limit;
         skip = (page - 1) * +take;
     }
     // ถ้าไม่มีการกำหนด page และ limit จะไม่กำหนด take และ skip ซึ่งจะส่งข้อมูลทั้งหมด

     id, name, contactInfo, address
     if (search) {
      const searchConditions = [
          { name: { contains: search } },
          { contactInfo: { contains: search } },
          { address: { contains: search } },
      ];

      // searchConditions.push({ role: { equals: search } });

      // หากต้องการรวม id ในการค้นหา ถ้า search เป็นตัวเลข
      if (!isNaN(search)) {
          searchConditions.push({ id: Number(search) });
      }
      where.OR = searchConditions;
  }


     const data = {
         where,
         orderBy: sortBy ? orderBy : undefined,
         skip,
         take,
         include: {
           donations: true,
         }
     }
     const dataForCount = {
      where,
  }
      // console.log("data",data)

      const foundation = await getFoundationService(data);

      
      const countFoundation = await prisma.foundation.count(dataForCount) 
      let totalPages = 1
      
      if(limit) {
           totalPages = Math.ceil(countFoundation / limit);   
      }
      // if(foundation.length === 0) {
      //   return createError(404, 'Foundation not found');
      // }

      res.status(200).json({
        message: 'Get foundation successfully',
        foundation,
        countFoundation,
        totalPages,
      });
    } catch (err) {
      next(err);
    }
  };

