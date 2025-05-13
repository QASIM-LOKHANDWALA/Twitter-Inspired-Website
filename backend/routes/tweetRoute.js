import express from "express";
import { CreateTweet } from "../controllers/tweetController.js";
import { isAuthenticated } from "../config/auth.js";

const router = express.Router();

router.route("/create").post(isAuthenticated, CreateTweet);

export default router;
