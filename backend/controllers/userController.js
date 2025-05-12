import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import { User } from "../models/userSchema.js";

export const Register = async (req, res) => {
    try {
        const { name, username, email, password } = req.body;
        if (!name || !username || !email || !password) {
            return res.status(401).json({
                message: "All fields are required.",
                success: false,
            });
        }

        const userEmail = await User.findOne({ email });
        if (userEmail) {
            return res.status(401).json({
                message: "Email already in use. Try a different email.",
                success: false,
            });
        }
        const userName = await User.findOne({ username });
        if (userName) {
            return res.status(401).json({
                message: "Username already in use. Try different one.",
                success: false,
            });
        }

        const hashedPassword = await bcryptjs.hash(password, 16);

        await User.create({
            name,
            email,
            username,
            password: hashedPassword,
        });

        return res.status(201).json({
            message: "Account created.",
            success: true,
        });
    } catch (error) {
        console.log(`Error in userController : ${error}`);
    }
};
