import multer from "multer";


//checking storage
export const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

//initialize uploads
export const uploads = multer({
    storage: storage
}).fields([
    { name : "frontImage", maxCount: 1},
    { name : "audioFile", maxCount: 1}
])