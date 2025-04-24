const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require("./routes/authRoutes");
const apiKeyRoutes = require("./routes/apiKeyRoutes");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ Database Connected Successfully"))
    .catch(err => console.error("❌ MongoDB Connection Failed", err));

app.use("/api/auth", authRoutes);
app.use("/api/key", apiKeyRoutes);

app.listen(process.env.PORT || 5000, () => {
    console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
});
