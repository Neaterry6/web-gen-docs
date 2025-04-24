const ApiKey = require("../models/ApiKey");
const { successResponse, errorResponse } = require("../utils/responseUtils");

exports.generateKey = async (req, res) => {
    try {
        const existingKey = await ApiKey.findOne({ userId: req.user.id });
        if (existingKey) return successResponse(res, "API Key Retrieved", { key: existingKey.key });

        const newKey = new ApiKey({ userId: req.user.id, key: ApiKey.generateKey() });
        await newKey.save();
        successResponse(res, "✅ API Key Generated!", { key: newKey.key });
    } catch (error) {
        errorResponse(res, "❌ Failed to generate API key!");
    }
};

exports.getKey = async (req, res) => {
    try {
        const apiKey = await ApiKey.findOne({ userId: req.user.id });
        if (!apiKey) return errorResponse(res, "❌ API Key not found!");
        successResponse(res, "✅ API Key Retrieved!", { key: apiKey.key });
    } catch (error) {
        errorResponse(res, "❌ Error Fetching API Key!");
    }
};
