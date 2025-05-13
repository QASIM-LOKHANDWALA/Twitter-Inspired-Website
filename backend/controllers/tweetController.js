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

export const LikeOrDislikeTweet = async (req, res) => {
    try {
        const currentUser = req.user;
        const tweetId = req.params.id;

        const tweet = await Tweet.findById(tweetId);
        if (tweet.like.includes(currentUser)) {
            await Tweet.findByIdAndUpdate(tweetId, {
                $pull: { like: currentUser },
            });
            res.status(200).json({
                message: "A user disliked your tweet.",
            });
        } else {
            await Tweet.findByIdAndUpdate(tweetId, {
                $push: { like: currentUser },
            });
            res.status(200).json({
                message: "A user liked your tweet.",
            });
        }
    } catch (error) {
        console.log(`Error in tweetController LikeOrDislikeTweet : ${error}`);
    }
};
