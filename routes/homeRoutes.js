import express from "express";
import Category from "../models/Category.js";
import SubCategory from "../models/SubCategory.js";

const router = express.Router();

// GET /api/home → returns categories with their subcategories
router.get("/home", async (req, res) => {
  try {
    // Find all categories
    const categories = await Category.find().lean();

    // For each category, attach its subcategories
    const categoriesWithSubs = await Promise.all(
      categories.map(async (cat) => {
        const subCategories = await SubCategory.find({ category: cat._id }).lean();
        return {
          ...cat,
          subCategories,
        };
      })
    );

    res.json(categoriesWithSubs);
  } catch (error) {
    console.error("Error fetching home data:", error);
    res.status(500).json({ error: "Failed to fetch home data." });
  }
});

export default router;
