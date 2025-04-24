const ApiKey = require("../models/ApiKey");

exports.generateKey = async (req, res) => {
    try {
        const existingKey = await ApiKey.findOne({ userId: req.user.id });
        if (existingKey) return res.json({ key: existingKey.key });

        const newKey = new ApiKey({ userId: req.user.id, key: ApiKey.generateKey() });
        await newKey.save();
        res.json({ key: newKey.key });
    } catch (error) {
        res.status(500).json({ error: "❌ Failed to generate API key!" });
    }
};

exports.getKey = async (req, res) => {
    const apiKey = await ApiKey.findOne({ userId: req.user.id });
    if (!apiKey) return res.status(404).json({ error: "❌ API key not found!" });
    res.json({ key: apiKey.key });
}
