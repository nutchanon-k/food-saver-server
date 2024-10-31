const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../upload-pics'))
    },
    filename: (req, file, cb) => {
        const id = req.user.id
        const fullFileName = `${id}_${Date.now()}_${Math.round(Math.random() *1000)}${path.extname(file.originalname)}`
        cb(null,fullFileName)
    }
})

module.exports = multer({storage : storage})