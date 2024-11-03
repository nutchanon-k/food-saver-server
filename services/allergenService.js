const prisma = require("../configs/prisma");


module.exports.getAllergenByName = async (name) => {
    return await prisma.allergen.findFirst({
        where: {
            name: {
                contains: name
            }
        }
    })
}

module.exports.createAllergenService = async (name, description) => {
    return await prisma.allergen.create({
        data: {
            name,
            description
        }
    })
}

module.exports.getAllergenServices = async (data) => {
    return await prisma.allergen.findMany(data)
}


module.exports.updateAllergenService = async (id, name, description) => {
    return await prisma.allergen.update({
        where: {
            id
        },
        data: {
            name,
            description
        }
    })
}

module.exports.deleteAllergenService = async (id) => {
    return await prisma.allergen.delete({
        where: {
            id
        }
    })
}


module.exports.getAllergenByIdService = async (id) => {
    return await prisma.allergen.findUnique({
        where: {
            id
        }
    })
}