const express = require("express");
const User = require("../models/User");
const ApiKey = require("../models/ApiKey");
const { authenticateUser } = require("../middlewares/authMiddleware");
const authorizeAdmin = require("../middlewares/adminMiddleware");

const router = express.Router();

// Get all users
router.get("/users", authenticateUser, authorizeAdmin, async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// Get API keys for all users
router.get("/keys", authenticateUser, authorizeAdmin, async (req, res) => {
    const apiKeys = await ApiKey.find();
    res.json(apiKeys);
});

// Delete a user account
router.delete("/users/:id", authenticateUser, authorizeAdmin, async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "✅ User deleted!" });
});

module.exports = router
