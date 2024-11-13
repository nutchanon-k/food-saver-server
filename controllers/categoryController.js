require("dotenv").config();
const createError = require('../utils/createError')
const path = require('path')
const fs = require('fs/promises')
const cloudinary = require('../configs/cloudinary')
const getPublicId = require('../utils/getPublicId');
const { gerCategoryByName, createCategoryService, updateCategoryService, getCategory, deleteCategoryService, getCategoryService } = require("../services/categoryService");
const { searchCategorySchema } = require("../middlewares/validator");



module.exports.createCategory = async (req, res, next) => {
    try {
        const { name, description } = req.body

        const existingCategory = await gerCategoryByName(name.trim())

        if (existingCategory) {
            return createError(409, 'Category already exists')
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
            name: name.trim(),
            description,
            imageUrl: uploadResult.secure_url || "",
        }

        const category = await createCategoryService(data)

        res.status(200).json(category)
    } catch (error) {
        next(error)
    }
}

module.exports.updateCategory = async (req, res, next) => {
    try {
        const { id } = req.params
        const { name, description } = req.body

        if (isNaN(id) || id <= 0 || id % 1 !== 0) {
            return createError(400, 'Invalid category id')
        }

        if (name) {
            const checkCategoryNameExist = await gerCategoryByName(name.trim())
            if (checkCategoryNameExist) {
                if (checkCategoryNameExist.id !== +id) {
                    return createError(409, 'Category already exists')
                }
            }
        }

        const existingCategory = await getCategoryService({ where: { id: +id } })
        if (!existingCategory || existingCategory.length === 0) {
            return createError(404, 'Category not found')
        }

        const haveFile = !!req.file
        let uploadResult = {}
        if (haveFile) {
            uploadResult = await cloudinary.uploader.upload(req.file.path, {
                public_id: path.parse(req.file.path).name
            })
            fs.unlink(req.file.path)
            if (existingCategory.imageUrl) {
                cloudinary.uploader.destroy(getPublicId(existingCategory.imageUrl))
            }
        }

        const data = {
            name: name ? name.trim() : existingCategory.name,
            description: description ? description.trim() : existingCategory.description,
            imageUrl: uploadResult.secure_url || existingCategory.imageUrl,
        }

        const UpdateCategory = await updateCategoryService(+id, data)

        res.status(200).json({
            message: 'Category updated successfully',
            UpdateCategory,
        })


    } catch (error) {
        next(error)
    }
}

module.exports.deleteCategory = async (req, res, next) => {
    try {
        const { id } = req.params
        if (isNaN(id) || id <= 0 || id % 1 !== 0) {
            return createError(400, 'Invalid category id')
        }

        const existingCategory = await getCategory({ where: { id: +id } })
        if (!existingCategory) {
            return createError(404, 'Category not found')
        }

        const deletedCategory = await deleteCategoryService(+id)
        res.status(200).json({
            message: 'Category deleted successfully',
        })

    } catch (error) {
        next(error)
    }
}

module.exports.getCategory = async (req, res, next) => {
    try {
        const { error, value } = searchCategorySchema.validate(req.query, { abortEarly: false });
        if (error) {
            return next(createError(400, error.details.map(detail => detail.message).join(', ')));
        }

        const { id, name, description, sortBy, sortOrder, page, limit } = req.query

        const where = {}
        if (id) {

            where.id = +id
        }
        if (name) {
            where.name = {
                contains: name
            }
        }
        if (description) {
            where.description = {
                contains: description
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
        const categories = await getCategoryService(data)
        if (!categories || categories.length === 0) {
            return createError(404, 'Category not found')
        }
        res.status(200).json(categories)
    } catch (error) {
        next(error)
    }
}
// model Category {
//     id          Int     @id @default(autoincrement())
//     name        String  @unique
//     description String? @map("description")
//     imageUrl    String  @map("image_url")

//     // Relationships

//     // Relations
//     productCategories ProductCategories[]
//   }
