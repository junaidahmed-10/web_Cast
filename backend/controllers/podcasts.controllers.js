import { uploads } from "../middlewares/multer";
import { Category } from "../models/category.model.js";
import { Podcasts } from "../models/podcast.model.js";
import { User } from "../models/user.model";

export const addPodcasts = async (req, res) => {
   try {
    const { title, description, category } = req.body;
    const frontImage = req.files["frontImage"][0].path;
    const audiofile = req.files["audiofile"][0].path;

    if (!title || !description || !category || !frontImage || !audiofile) {
        return res.status(400).json({ message: "All fields are required" })
    }

    const { user } = req;
    const cat = await Category.findOne({ categoryName: category })
    if (!cat) {
        return res.status(400).json({ message: "No category found" })
    }

    const catId = cat._id;
    const userId = user._id;
    const newPodcast = new Podcasts({
        title,
        description,
        category: catId,
        frontImage,
        audiofile,
        user: userId
    })

    await newPodcast.save();
    await Category.findByIdAndUpdate(catId, {
        $push: { podcasts: newPodcast._id}
    })

    await User.findByIdAndUpdate(userId, {$push : { podcasts : newPodcast._id}})
    res.status(201).json({ message : "podcast added sussessfully"})
   } catch (error) {
    console.log("Podcast not Added: ", error);
    return res.status(500).json({ message : "Failed to add podcast"})
   }
}

//Get All Podacasts

export const getAllPodcasts = async (req, res) => {
    try {
        const podcasts = await Podcasts.find()
        .populate("category")
        .sort({ createdAt: -1 })
        return res.status(200).json({ data : podcasts})
    } catch (error) {
        return res.status(500).json({
            message : "internal server error"
        })
    }
}

//Get User Podcasts

export const getUserPodcasts = async (req, res) => {
    try {
        const { user } = req;
        const userId = user._id;
        const data = await User.findById(userId)
        .populate({
            path : "podcasts",
            populate: { path : "category"}
        })
        .select("-password");
        if (data && data.podcasts) {
            data.podcasts.sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            )
        }
        return res.status(200).json({ data : data.podcasts})
    } catch (error) {
        return res.status(500).json({
            message : "internal server error"
        })
    }
}

