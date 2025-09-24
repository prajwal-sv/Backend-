import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

// Define the schema for storing video-related data
const videoSchema = new Schema({

    // URL of the video file (typically hosted on Cloudinary or similar)
    videoFile: {
        type: String,
        required: true
    },

    // URL of the thumbnail image for the video
    thumbnail: { // corrected from 'thembnail'
        type: String,
        required: true
    },

    // Title of the video
    title: {
        type: String,
        required: true
    },

    // Description of the video content
    description: { // corrected from 'discription'
        type: String,
        required: true
    },

    // Duration of the video in seconds or minutes
    duration: {
        type: Number,
        required: true
    },

    // Number of views the video has received
    views: {
        type: Number,
        default: 0
    },

    // Indicates whether the video is published or not
    isPublished: {
        type: Boolean,
        default: true
    },

    // Reference to the user who uploaded the video
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }

}, {
    // Automatically adds createdAt and updatedAt timestamps
    timestamps: true
});

// Adds pagination support to aggregation queries
videoSchema.plugin(mongooseAggregatePaginate);

// Export the Video model
export const Video = mongoose.model("Video", videoSchema); // corrected from 'videoSchemaSchema'
