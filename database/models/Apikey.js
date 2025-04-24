const mongoose = require("mongoose");
const crypto = require("crypto");

const ApiKeySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    key: { type: String, required: true, unique: true },
}, { timestamps: true });

ApiKeySchema.statics.generateKey = function () {
    return crypto.randomBytes(32).toString("hex");
};

module.exports = mongoose.model("ApiKey", ApiKeySchema)
