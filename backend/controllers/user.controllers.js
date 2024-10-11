import bcrypt from 'bcryptjs'
import { User } from '../models/user.model.js'
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';


export const signUp = async (req, res) => {
    try {

        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" })
        }

        if (username.length < 6) {
            return res.status(400).json({ message: "length should be greater than 5" })
        }
        if (password.length < 6) {
            return res.status(400).json({ message: "Password length should be greater than 5" })
        }

        //checks user exists or not

        const existingEmail = await User.findOne({ email: email })
        const existingUserName = await User.findOne({ username: username })

        if (existingEmail || existingUserName) {
            return res.status(400).json({ message: "username or email already exists" })
        }

        //hash the salt
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt)

        //create new user
        const newUser = new User({ username, email, password: hashedPass })
        await newUser.save();
        return res.status(200).json({ message: "Account Created" })




    } catch (error) {
        console.log("signUp Error", error);

    }
}


//signIn

export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" })
        }

        const existingUser = await User.findOne({ email: email })

        if (!existingUser) {
            return res.status(400).json({ message: "invalid email" })
        }

        //check password is matched or not

        const isMatched = await bcrypt.compare(password, existingUser.password)
        if (!isMatched) {
            return res.status(400).json({ message: "password not matched" })
        }

        //Generate JWT Token

        const token = jwt.sign({ id: existingUser._id, email: existingUser.email },
            process.env.JWT_SECRET, { expiresIn: "30d" })

        res.cookie("podcastUserToken", token, {
            httpOnly: true,
            maxAge: 30 * 24 * 60 * 60 * 100,
            secure: process.env.NODE_ENV === "production",
            sameSite: "None"
        })
        return res.status(200).json({
            id: existingUser._id,
            username: existingUser.username,
            email: email,
            message: "Signed In successfully"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({ error })
    }
}

{/*LOGOUT*/ }

export const logOut = async (req, res) => {
    res.clearCookie("podcastUserToken", {
        httpOnly: true
    })
    res.status(200).json({ message: "Logged Out Successfully"})
}
//checking cookie present or not

export const check = async (req, res) => {
    const token = req.cookies.podcastUserToken
    try {
        if (token) {
            res.status(200).json({ message: true})
        }else{
        res.status(200).json({ message: false})
        }
    } catch (error) {
        console.log(error);
     }
}