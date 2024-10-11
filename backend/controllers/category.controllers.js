import { Category } from '../models/category.model.js'

export const addCategory = async (req, res) => {
    const { categoryName } = req.body;
    const cat = new Category({ categoryName })
    await cat.save();
    return res.status(200).json({
        message: "Category Added"
    })
}