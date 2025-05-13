import { Tweet } from "../models/tweetSchema.js";

export const CreateTweet = async (req, res) => {
    try {
        const { description, id } = req.body;
        if (!description) {
            return res.status(401).json({
                message: "Tweet can't be empty.",
                success: false,
            });
        }

        await Tweet.create({
            description,
            userId: id,
        });
        return res.status(201).json({
            message: "Tweet created successfully.",
            success: true,
        });
    } catch (error) {
        console.log(`Error in tweetController CreateTweet : ${error}`);
    }
};

export const DeleteTweet = async (req, res) => {
    try {
        const { id } = req.params;
        await Tweet.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Tweet deleted successfully.",
            success: true,
        });
    } catch (error) {
        console.log(`Error in tweetController DeleteTweet : ${error}`);
    }
};
