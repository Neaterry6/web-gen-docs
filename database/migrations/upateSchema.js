const mongoose = require("mongoose");
const User = require("../models/User");
const ApiKey = require("../models/ApiKey");

const updateSchema = async () => {
    await mongoose.connection.db.collection("users").updateMany({}, { $set: { role: "user" } });
    console.log("✅ Schema updated successfully!");
};

module.exports = updateSchema
