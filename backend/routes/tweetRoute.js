import express from "express";
import { CreateTweet, DeleteTweet } from "../controllers/tweetController.js";
import { isAuthenticated } from "../config/auth.js";

const router = express.Router();

router.route("/create").post(isAuthenticated, CreateTweet);
router.route("/delete/:id").delete(isAuthenticated, DeleteTweet);

export default router;
