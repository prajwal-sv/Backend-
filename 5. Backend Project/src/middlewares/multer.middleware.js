// Importing multer for handling file uploads
import multer from "multer";

// Define the storage configuration using multer.diskStorage
const storage = multer.diskStorage({
    
    // 'destination' specifies where the uploaded files will be stored
    destination: function (req, file, cb) {
        // Files will be saved in the '/tmp/my-upload' directory
        cb(null, '/tmp/my-upload');
    },

    // 'filename' defines how the uploaded file will be named
    filename: function (req, file, cb) {
        // Create a unique suffix using current timestamp and a random number
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);

        // Final filename will be: fieldname + uniqueSuffix
        // Example: profilePic-1634567890123-123456789
        cb(null, file.fieldname + '-' + uniqueSuffix);
    }
});

// Create a multer instance with the defined storage configuration
export const upload = multer({ storage , });