import express from "express";
import dotenv from "dotenv";

dotenv.config({
    path: ".env",
});

const PORT = process.env.PORT || 5000;

const app = express();

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
