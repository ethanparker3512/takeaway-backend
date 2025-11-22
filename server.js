import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// ROUTES
import authRoutes from "./routes/authRoutes.js";
import seedRoutes from "./routes/seedRoutes.js";
import foodRoutes from "./routes/foodRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import subCategoryRoutes from "./routes/subCategoryRoutes.js";
import homeRoutes from "./routes/homeRoutes.js";

dotenv.config();
const app = express();

// MIDDLEWARE
app.use(express.json({ strict: false }));
app.use(cors());

// HOME SCREEN ROUTE (GET categories + subcategories + foods)
app.use("/api/home", homeRoutes);

// SEED ROUTES
app.use("/api", seedRoutes);

// CATEGORY ROUTES
app.use("/api/categories", categoryRoutes);

// SUBCATEGORY ROUTES
app.use("/api/subcategories", subCategoryRoutes);

// FOOD ROUTES
app.use("/api/foods", foodRoutes);

// AUTH ROUTES
app.use("/api/auth", authRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("✅ API is running...");
});

// CONNECT TO MONGO
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

// START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
