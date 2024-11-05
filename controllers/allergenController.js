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


// model Allergen {
//     id          Int     @id @default(autoincrement())
//     name        String  @unique
//     description String? @map("description")
  
//     // Relations
//     productAllergens ProductAllergen[]
//   }
  
module.exports.createAllergen = async (req, res, next) => {
    try {
        const { name, description } = req.body

        const existingAllergen = await getAllergenByName(name.trim())

        if (existingAllergen) {
            return createError(409, 'Allergen already exists')
        }

        const newAllergen = await createAllergenService(name.trim(), description)

        res.status(201).json({
            message: 'Allergen created successfully',
            allergen : newAllergen
        })

    } catch (error) {
        next(error)
    }
}

module.exports.getAllergens = async (req, res, next) => {
    try {
        const { error, value } = searchAllergenSchema.validate(req.query, { abortEarly: false });
        if (error) {
            return next(createError(400, error.details.map(detail => detail.message).join(', ')));
        }
        const { id ,name, description, sortBy, sortOrder, page, limit } = req.query
        
        const where = {}
        if (id) {
            where.id = +id
        }

        if (name) {
            where.name = {
                contains: name,
            }
        }
        if (description) {
            where.description = {
                contains: description,
            }
        }

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
   
   
        const data = {
            where,
            orderBy: sortBy ? orderBy : undefined,
            skip,
            take,
        }

        const allergens = await getAllergenServices(data)
        if (!allergens || allergens.length === 0) {
            return res.status(404).json({
                message: 'Allergens not found',
            })
        }
        res.status(200).json({
            message: 'Allergens retrieved successfully',
            data: allergens,
        })
    } catch (error) {
        next(error)
    }
}

module.exports.updateAllergen = async (req, res, next) => {
    try {
        const { id } = req.params
        const { name, description } = req.body

        if (isNaN(id) || id <= 0 || id % 1 !== 0) {
            return createError(400, 'Invalid allergen id')
        }
        
        
        const existingAllergen = await getAllergenServices({where : {id: +id}})
        if(!existingAllergen || existingAllergen.length === 0) {
            return createError(404, 'Allergen not found')
        }
        
        const checkAllergenNameExist = await getAllergenByName(name.trim())
        if (checkAllergenNameExist) {
            if (checkAllergenNameExist.id !== +id) {
                return createError(409, 'Allergen already exists')
            }
        }

        const updateAllergen = await updateAllergenService(+id, name.trim(), description)
        res.status(200).json({
            message: 'Allergen updated successfully',
            data: updateAllergen
        })
    }catch (error) {
        next(error)
    }
}

module.exports.deleteAllergen = async (req, res, next) => {
    try {
        const { id } = req.params
        if (isNaN(id) || id <= 0 || id % 1 !== 0) {
            return createError(400, 'Invalid allergen id')
        }
        const existingAllergen = await getAllergenServices({where : {id: +id}})
        if(!existingAllergen || existingAllergen.length === 0) {
            return createError(404, 'Allergen not found')
        }
        const deleteAllergen = await deleteAllergenService(+id)
        res.status(200).json({
            message: 'Allergen deleted successfully',
        })
    }catch (error) {
        next(error)
    }
}