const prisma = require("../configs/prisma");


module.exports.gerCategoryByName = async(name) => {
    return  await prisma.category.findFirst({where: {name}})
}

module.exports.createCategoryService = async (data) => {
    return await prisma.category.create({data})
}

module.exports.getCategoryService = async (query) => {
    return await prisma.category.findMany(query)
}

module.exports.updateCategoryService = async (id, data) => {
    return await prisma.category.update({where: {id}, data})
}

module.exports.deleteCategoryService = async (id) => {
    return await prisma.category.delete({where: {id}})
}