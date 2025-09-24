import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

// 👤 Define the User schema structure
const userSchema = new Schema({

    //  Username field - must be unique and lowercase
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true, //  Typo corrected from 'lowecase'
        trim: true,
        index: true // 🔍 Helps in faster search
    },

    //  Email field - must be unique and lowercase
    email: { //  Typo corrected from 'emial'
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    // Full name of the user
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true
    },

    //  Avatar image URL (usually from Cloudinary)
    avatar: {
        type: String,
        required: true
    },

    //  Optional cover image URL
    coverImage: {
        type: String
    },

    //  Watch history - references to Video documents
    watchHistory: [{
        type: Schema.Types.ObjectId,
        ref: "Video"
    }],

    //  Password field - required
    password: {
        type: String,
        required: [true, 'Password is Required']
    },

    //  Refresh token for session management
    refreshToken: {
        type: String
    }

}, {
    timestamps: true //  Automatically adds createdAt and updatedAt
});

//  Pre-save hook to hash password before saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    // Hash the password with salt rounds = 10
    this.password = await bcrypt.hash(this.password, 10);

    next();
});

//  Method to compare entered password with hashed password
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

//  Method to generate access token
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email, //  Typo corrected from 'emial'
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    );
};

//  Method to generate refresh token
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email, // Typo corrected from 'emial'
            username: this.username,
            fullName: this.fullName
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    );
};

// Export the User model
export const User = mongoose.model("User", userSchema);