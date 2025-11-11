import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { menu } from "./menu.js"; // ✅ Import your menu file

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// ✅ MongoDB connection
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error("❌ MongoDB connection string missing in .env");
} else {
  mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));
}

// ✅ Basic test route
app.get("/", (req, res) => {
  res.send("🍔 Takeaway API is running...");
});

// ✅ Menu route (static menu)
app.get("/api/menu", (req, res) => {
  res.status(200).json(menu);
});

// ✅ Foods route (for your DB foods)
import Food from "./models/Food.js"; // Only if you have a Food model
app.get("/api/foods", async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
