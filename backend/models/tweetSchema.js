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
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        userDetails: {
            type: Array,
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

export const Tweet = mongoose.model("Tweet", tweetSchema);
