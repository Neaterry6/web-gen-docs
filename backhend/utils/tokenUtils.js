const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "yourSuperSecretKey";

exports.generateToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: "1d" });
};

exports.verifyToken = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
}
