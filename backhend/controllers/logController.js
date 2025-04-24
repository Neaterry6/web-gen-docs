const ApiUsage = require("../models/ApiUsage");
const { sendEmail } = require("../utils/emailUtils");

exports.trackUsage = async (req, res) => {
    try {
        const logs = await ApiUsage.find({ userId: req.user.id }).sort({ timestamp: -1 });
        res.json(logs);
    } catch (error) {
        await sendEmail("admin@example.com", "🚨 API Error Alert", `An error occurred: ${error.message}`);
        res.status(500).json({ error: "❌ Failed to fetch usage logs!" });
    }
};
