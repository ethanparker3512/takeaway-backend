import express from "express";
import SubCategory from "../models/SubCategory.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const subcategories = await SubCategory.find().populate("category");
    res.json(subcategories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/category/:categoryId", async (req, res) => {
  try {
    const subcategories = await SubCategory.find({ category: req.params.categoryId });
    res.json(subcategories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
