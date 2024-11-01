const prisma = require("../configs/prisma");


module.exports.getFoundationByName = async (name) => {
    const foundation = await prisma.foundation.findFirst({
        where: {
            name: name
        }
    })
    return foundation
}

module.exports.createFoundationService = async (data) => {
    const foundation = await prisma.foundation.create({
        data: data
    })
    return foundation
}

module.exports.getAllFoundationsService = async () => {
    const foundations = await prisma.foundation.findMany({})
    return foundations
}

module.exports.getFoundationByIdService = async (id) => {
    const foundation = await prisma.foundation.findUnique({
        where: {
            id: id
        }
    })
    return foundation
}

module.exports.updateFoundationService = async (id, data) => {
    const foundation = await prisma.foundation.update({
        where: {
            id: id
        },
        data: data
    })
    return foundation
}

module.exports.deleteFoundationService = async (id) => {
    const foundation = await prisma.foundation.delete({
        where: {
            id: id
        }
    })
    return foundation
}