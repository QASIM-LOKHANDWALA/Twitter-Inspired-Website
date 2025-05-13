import express from "express";
import {
    CreateTweet,
    DeleteTweet,
    LikeOrDislikeTweet,
} from "../controllers/tweetController.js";
import { isAuthenticated } from "../config/auth.js";

const router = express.Router();

router.route("/create").post(isAuthenticated, CreateTweet);
router.route("/delete/:id").delete(isAuthenticated, DeleteTweet);
router.route("/like/:id").put(isAuthenticated, LikeOrDislikeTweet);

export default router;
