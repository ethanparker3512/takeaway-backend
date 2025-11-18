import express from "express";
import Category from "../models/Category.js";
import SubCategory from "../models/SubCategory.js";
import Food from "../models/Food.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| GET ALL CATEGORIES
|--------------------------------------------------------------------------
*/
router.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/*
|--------------------------------------------------------------------------
| GET SUBCATEGORIES BY CATEGORY ID
|--------------------------------------------------------------------------
*/
router.get("/categories/:id/subcategories", async (req, res) => {
  try {
    const subcategories = await SubCategory.find({
      category: req.params.id,
    });

    res.json(subcategories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/*
|--------------------------------------------------------------------------
| GET FOODS BY SUBCATEGORY ID
|--------------------------------------------------------------------------
*/
router.get("/subcategories/:id/foods", async (req, res) => {
  try {
    const foods = await Food.find({
      subcategory: req.params.id,
    });

    res.json(foods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
