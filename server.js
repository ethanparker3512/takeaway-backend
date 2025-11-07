import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Food from "./models/foodModel.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Simple homepage route
app.get("/", (req, res) => {
  res.send("🍔 Takeaway API is running successfully!");
});

// ✅ Foods API route
app.get("/api/foods", async (req, res) => {
  const foods = await Food.find();
  res.json(foods);
});

// ✅ Start server
const port = process.env.PORT || 10000;
app.listen(port, () => console.log(`✅ Server running on port ${port}`));
