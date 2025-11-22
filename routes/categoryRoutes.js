import express from "express";
import { getCategoriesWithSubcategoriesAndFoods } from "../controllers/categoryController.js";

const router = express.Router();

// GET /api/categories → returns categories with subcategories and foods
router.get("/", getCategoriesWithSubcategoriesAndFoods);

export default router;

