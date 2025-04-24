const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");
const apiKeyRoutes = require("./routes/apiKeyRoutes");
const adminRoutes = require("./routes/adminRoutes");
const logMiddleware = require("./middlewares/logMiddleware");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(logMiddleware); // Tracks API usage in the database

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ Database Connected Successfully"))
    .catch(err => console.error("❌ MongoDB Connection Failed", err));

// Routes
app.use("/api/auth", authRoutes); // User login & registration
app.use("/api/key", apiKeyRoutes); // API key generation & retrieval
app.use("/api/admin", adminRoutes); // Admin management

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error("❌ Error:", err.message);
    res.status(500).json({ error: "❌ Internal Server Error!" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
