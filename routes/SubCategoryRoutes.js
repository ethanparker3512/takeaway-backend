import express from "express";
import SubCategory from "../models/SubCategory.js";

const router = express.Router();

// Get all subcategories
router.get("/", async (req, res) => {
  try {
    const data = await SubCategory.find().populate("category");
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
