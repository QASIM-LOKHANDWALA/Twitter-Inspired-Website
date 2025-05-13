import express from "express";
import {
    BookmarkTweet,
    GetOtherUsers,
    GetProfile,
    Login,
    Logout,
    Register,
} from "../controllers/userController.js";
import { isAuthenticated } from "../config/auth.js";

const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);
router.route("/profile/:id").get(isAuthenticated, GetProfile);
router.route("/otherUsers/:id").get(isAuthenticated, GetOtherUsers);
router.route("/bookmark/:id").put(isAuthenticated, BookmarkTweet);

export default router;
