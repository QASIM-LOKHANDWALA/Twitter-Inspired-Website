import express from "express";
import {
    CreateTweet,
    DeleteTweet,
    GetFollowingTweets,
    GetTweets,
    LikeOrDislikeTweet,
} from "../controllers/tweetController.js";
import { isAuthenticated } from "../config/auth.js";

const router = express.Router();

router.route("/create").post(isAuthenticated, CreateTweet);
router.route("/getTweets").get(isAuthenticated, GetTweets);
router.route("/getFollowingTweets").get(isAuthenticated, GetFollowingTweets);
router.route("/delete/:id").delete(isAuthenticated, DeleteTweet);
router.route("/like/:id").put(isAuthenticated, LikeOrDislikeTweet);

export default router;
