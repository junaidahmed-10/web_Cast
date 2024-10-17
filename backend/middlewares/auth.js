import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js';
import dotenv from 'dotenv';

dotenv.config({
    path: '../.env'
})

export const authMiddleware = async (req, res, next) => {

    const token = req.cookies.podcastUserToken;

    console.log(token);
    

    try {
        if (token) {
            const decode = jwt.verify(token, process.env.JWT_SECRET)
            const user = await User.findById(decode.id);
            if (!user) {
                return res.status(404).json({
                    message : "User not found"
                })
            }
            req.user = user;
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message : "Invalid Token" })
    }
}