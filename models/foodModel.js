import express from "express";
import Category from "../models/Category.js";
import SubCategory from "../models/SubCategory.js";

const router = express.Router();

router.get("/home", async (req, res) => {
  try {
    const categories = await Category.find().lean();
    const subcategories = await SubCategory.find().lean();

    const data = categories.map(cat => ({
      ...cat,
      subCategories: subcategories.filter(sub => sub.category.toString() === cat._id.toString())
    }));

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch home data." });
  }
});

export default router;
