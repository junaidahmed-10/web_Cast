import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        unique: true,
        require: true
    },
    podcasts: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Podcasts"
        }
    ]

}, { timestamps: true })

export const Category = mongoose.model("Category", categorySchema) 