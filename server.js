import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Food from "./foodModel.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Homepage route
app.get("/", (req, res) => {
  res.send("🍔 Takeaway API is running successfully!");
});

// ✅ Fetch all foods
app.get("/api/foods", async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch foods" });
  }
});

// ✅ Add a new food
app.post("/api/foods", async (req, res) => {
  try {
    const { name, price, image } = req.body;
    const newFood = new Food({ name, price, image });
    await newFood.save();
    res.status(201).json(newFood);
  } catch (err) {
    res.status(500).json({ message: "Failed to add food" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
