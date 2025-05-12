import mongoose, { mongo } from "mongoose";

const tweetSchema = mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
        },
        like: {
            type: Array,
            default: [],
        },
        bookmarks: {
            type: Array,
            default: [],
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

export const User = mongoose.Model("Tweet", tweetSchema);
