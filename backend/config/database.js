import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path: "../config/.env",
});

const dbConnection = () => {
    mongoose
        .connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Connected to database");
        })
        .catch((err) => {
            console.log(err);
        });
};

export default dbConnection;