require('dotenv').config()


const prisma = require('../configs/prisma')


async function run(params) {
    await prisma.$executeRawUnsafe("DROP DATABASE food_saver")
    await prisma.$executeRawUnsafe("CREATE DATABASE food_saver")
}

console.log("Reset DB...")
run()