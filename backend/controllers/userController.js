import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
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
        console.log(`Error in userController Register : ${error}`);
    }
};

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({
                message: "All fields are required.",
                success: false,
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                message: "User not found with this email.",
                success: false,
            });
        }

        const validPassword = await bcryptjs.compare(password, user.password);

        if (!validPassword) {
            return res.status(401).json({
                message: "Incorrect password. Try again.",
                success: false,
            });
        }

        const tokenData = { userId: user._id };
        const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });
        return res
            .status(201)
            .cookie("token", token, { expiresIn: "1d", httpOnly: true })
            .json({
                message: "Login successfully.",
                success: true,
            });
    } catch (error) {
        console.log(`Error in userController Login: ${error}`);
    }
};

export const Logout = (req, res) => {
    return res.cookie("token", "", { expiresIn: new Date(Date.now()) }).json({
        message: "Logged out successfully.",
        success: true,
    });
};

export const GetProfile = async (req, res) => {
    try {
        let id = req.params.id;
        const user = await User.findById(id).select("-password");
        console.log(user);

        return res.status(200).json({
            user,
            success: true,
        });
    } catch (error) {
        console.log(`Error in userController GetProfile : ${error}`);
    }
};

export const BookmarkTweet = async (req, res) => {
    try {
        const currentUser = req.user;
        const tweetId = req.params.id;

        const user = await User.findById(currentUser);

        if (user.bookmarks.includes(tweetId)) {
            await User.findByIdAndUpdate(currentUser, {
                $pull: { bookmarks: tweetId },
            });
            res.status(200).json({
                message: "Tweet removed bookmarked.",
            });
        } else {
            await User.findByIdAndUpdate(currentUser, {
                $push: { bookmarks: tweetId },
            });
            res.status(200).json({
                message: "Tweet added bookmarked.",
            });
        }
    } catch (error) {
        console.log(`Error in userController BookmarkTweet : ${error}`);
    }
};

export const GetOtherUsers = async (req, res) => {
    try {
        const { id } = req.params;
        const otherUsers = await User.find({ _id: { $ne: id } }).select(
            "-password"
        );

        if (!otherUsers) {
            return res.status(401).json({
                messages: "Unable to find other users.",
                success: false,
            });
        }

        return res.status(200).json({
            otherUsers,
            success: true,
        });
    } catch (error) {
        console.log(`Error in userController GetOtherUsers : ${error}`);
    }
};

export const FollowUser = async (req, res) => {
    try {
        const currentUserId = req.body.id;
        const userId = req.params.id;

        const currentUser = await User.findById(currentUserId);
        const user = await User.findById(userId);

        if (!user.followers.includes(currentUserId)) {
            await user.updateOne({ $push: { followers: currentUserId } });
            await currentUser.updateOne({ $push: { following: userId } });
            return res.status(200).json({
                message: `Started following ${user.name}`,
            });
        } else {
            await user.updateOne({ $pull: { followers: currentUserId } });
            await currentUser.updateOne({ $pull: { following: userId } });
            return res.status(200).json({
                message: `Unfollowed ${user.name}`,
            });
        }
    } catch (error) {
        console.log(`Error in userController FollowUser : ${error}`);
    }
};
