const User = require("../models/User");
const ApiKey = require("../models/ApiKey");

exports.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

exports.getApiKeys = async (req, res) => {
    const apiKeys = await ApiKey.find();
    res.json(apiKeys);
};

exports.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "✅ User deleted!" });
}
