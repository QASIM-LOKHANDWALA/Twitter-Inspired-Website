import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import dbConnection from "./config/database.js";
import userRoutes from "./routes/userRoute.js";

dotenv.config({
    path: ".env",
});

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.urlencoded({ extends: true }));
app.use(express.json());
app.use(cookieParser());

// APIs
app.use("/api/v1/user", userRoutes);
app.get("/", (req, res) => {
    res.write("Hello");
    res.send();
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
    dbConnection();
});
