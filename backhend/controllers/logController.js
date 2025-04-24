const ApiUsage = require("../models/ApiUsage");

exports.trackUsage = async (req, res) => {
    try {
        const logs = await ApiUsage.find({ userId: req.user.id }).sort({ timestamp: -1 });
        res.json(logs);
    } catch (error) {
        res.status(500).json({ error: "❌ Failed to fetch usage logs!" });
    }
}
