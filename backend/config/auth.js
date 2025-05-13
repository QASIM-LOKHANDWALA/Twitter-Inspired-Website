import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            return res.json({
                message: "User not authenticated.",
                success: false,
            });
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode.userId;
        next();
    } catch (error) {
        console.log(`Error in auth config : ${error}`);
    }
};
