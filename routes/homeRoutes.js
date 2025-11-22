// src/routes/homeRoutes.js
import express from "express";
import Category from "../models/Category.js";

const router = express.Router();

// GET /api/home
router.get("/home", async (req, res) => {
  try {
    const categories = await Category.find()
      .populate({
        path: "subCategories",
        populate: { path: "foods" }
      });

    res.json(categories);
  } catch (err) {
    console.error("Error fetching home data:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
