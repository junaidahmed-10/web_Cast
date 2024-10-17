import mongoose from "mongoose"

const podcastSchema = new mongoose.Schema({
    frontImage: {
        type: String,
        unique: true,
        require: true
    },
    audioFile: {
        type: String,
        unique: true,
        require: true
    },
    title: {
        type: String,
        unique: true,
        require: true
    },
    description: {
        type: String,
        unique: true,
        require: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    }

}, { timestamps: true })

export const Podcasts = mongoose.model("Podcasts", podcastSchema) 