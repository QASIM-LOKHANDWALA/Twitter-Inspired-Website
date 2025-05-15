import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import dbConnection from "./config/database.js";
import userRoutes from "./routes/userRoute.js";
import tweetRoutes from "./routes/tweetRoute.js";

dotenv.config({
    path: ".env",
});

const PORT = process.env.PORT || 5000;
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
};

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

// APIs
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/tweet", tweetRoutes);
app.get("/", (req, res) => {
    res.write("Hello");
    res.send();
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
    dbConnection();
});
