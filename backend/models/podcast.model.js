import mongoose from "mongoose"

const podcastSchema = new mongoose.Schema({
    frontImage: {
        type: String,
        unique: true,
        require: true
    },
    audiofile: {
        type: String,
        unique: true,
        require: true
    },
    title: {
        type: String,
        unique: true,
        require: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "category"
    }

}, { timestamps: true })

export const Podcasts = mongoose.model("podcasts", podcastSchema) 