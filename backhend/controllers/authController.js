const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const role = email === "akewusholaabdulbakri101@gmail.com" ? "admin" : "user";
        const user = new User({ username, email, password, role });
        await user.save();
        res.status(201).json({ message: "✅ User Registered Successfully!" });
    } catch (error) {
        res.status(500).json({ error: "❌ Registration Failed!" });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: "❌ Invalid Credentials!" });
        }
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.json({ token, role: user.role, message: "✅ Login Successful!" });
    } catch (error) {
        res.status(500).json({ error: "❌ Login Failed!" });
    }
}
