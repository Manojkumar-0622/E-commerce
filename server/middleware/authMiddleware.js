import jwt from "jsonwebtoken";

export const requireAuth = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Not authenticated" });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user_id = decoded.id;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid authentication" });
    }
};
