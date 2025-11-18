import express from "express";
import {
  getAllSubCategories,
  getSubCategoriesByCategory
} from "../controllers/subCategoryController.js";

const router = express.Router();

// GET all subcategories
router.get("/", getAllSubCategories);

// GET subcategories by category
router.get("/:categoryId", getSubCategoriesByCategory);

export default router;
