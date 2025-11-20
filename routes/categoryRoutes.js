import express from "express";
import Category from "../models/Category.js";
import SubCategory from "../models/SubCategory.js";

const router = express.Router();

// GET all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find().populate("subCategories"); 
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET subcategories of a specific category
router.get("/:categoryId/subcategories", async (req, res) => {
  try {
    const subcategories = await SubCategory.find({
      category: req.params.categoryId,
    });

    res.status(200).json(subcategories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
