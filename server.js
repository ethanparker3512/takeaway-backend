import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import seedRoutes from "./routes/seedRoutes.js";
import foodRoutes from "./routes/foodRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import subCategoryRoutes from "./routes/subCategoryRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// Seed routes
app.use("/api", seedRoutes);

// Category routes
app.use("/api/categories", categoryRoutes);

// Subcategory routes (FIXED)
app.use("/api/subcategories", subCategoryRoutes);

// Food routes
app.use("/api/foods", foodRoutes);

// AUTH ROUTES
app.use("/api/auth", authRoutes);

// connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

// test route
app.get("/", (req, res) => {
  res.send("✅ API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
