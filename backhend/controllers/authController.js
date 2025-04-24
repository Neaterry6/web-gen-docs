const User = require("../models/User");
const { hashPassword, comparePassword } = require("../utils/hashUtils");
const { generateToken } = require("../utils/tokenUtils");

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const role = email === "akewusholaabdulbakri101@gmail.com" ? "admin" : "user";
        const hashedPassword = await hashPassword(password);
        
        const user = new User({ username, email, password: hashedPassword, role });
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
        if (!user || !(await comparePassword(password, user.password))) {
            return res.status(401).json({ error: "❌ Invalid Credentials!" });
        }
        
        const token = generateToken(user);
        res.json({ token, role: user.role, message: "✅ Login Successful!" });
    } catch (error) {
        res.status(500).json({ error: "❌ Login Failed!" });
    }
};
