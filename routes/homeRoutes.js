import express from "express";
import Category from "../models/Category.js";
import SubCategory from "../models/SubCategory.js";

const router = express.Router();

// GET /api/home
router.get("/", async (req, res) => {
  try {
    // Fetch all categories
    const categories = await Category.find({}).lean();

    // Fetch all subcategories
    const subcategories = await SubCategory.find({}).lean();

    // Map subcategories into their categories
    const categoriesWithSubs = categories.map(cat => {
      return {
        _id: cat._id,
        name: cat.name,
        image: cat.image,
        price: cat.price,
        subCategories: subcategories
          .filter(sub => sub.category.toString() === cat._id.toString())
          .map(sub => ({
            _id: sub._id,
            name: sub.name,
            price: sub.price
          }))
      };
    });

    res.json(categoriesWithSubs);
  } catch (error) {
    console.error("Error fetching home data:", error);
    res.status(500).json({ error: "Failed to fetch home data" });
  }
});

export default router;
