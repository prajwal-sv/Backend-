import multer from "multer"

// cb = call back
const storage =  multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null , '/tmp/my-upload')
    },
    filename: function (req , file , cb ) {
        
        
        cb(null , file.fieldname + '-' + uniqueSuffix )

    }
})

export const upload =  multer({ storage ,})


