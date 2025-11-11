import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { menuData } from "./menu.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

// Existing routes (example foods route)
app.get("/api/foods", async (req, res) => {
  // your existing food fetching logic
  res.json([]); // placeholder
});

// NEW menu endpoint
app.get("/api/menu", (req, res) => {
  res.json(menuData);
});

// Homepage route
app.get("/", (req, res) => {
  res.send("Takeaway API Running");
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
