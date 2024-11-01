const prisma = require("../configs/prisma");


module.exports.createNewDonationService = async (data) => {
    const donation = await prisma.donation.create({
        data: data
    })
    return donation
}


module.exports.createNewProductDonationService = async (dataProductDonation) => {
    // console.log(dataProductDonation)
    const productDonation = await prisma.productDonation.createMany({
        data: dataProductDonation
    })
    return productDonation
}

module.exports.getDonationsService = async (data) => {
    const donations = await prisma.donation.findMany(data)
    return donations
}

module.exports.updateVerifyDonationService = async (id, isVerify) => {
    const donation = await prisma.donation.update({
        where: {
            id: id
        },
        data: {
            isVerify: isVerify
        }
    })
    return donation
}


module.exports.deleteDonationService = async (id) => {
    const donation = await prisma.donation.delete({
        where: {
            id: id
        }
    })
    return donation
}