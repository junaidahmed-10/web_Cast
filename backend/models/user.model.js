import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
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
}, { timestamps: true} )

export const User = mongoose.model("User", userSchema) 