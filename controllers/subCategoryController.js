import express from "express";
import {
  createSubCategory,
  getSubCategories,
  getSubCategoriesByCategory,
} from "../controllers/subCategoryController.js";

const router = express.Router();

router.post("/", createSubCategory);
router.get("/", getSubCategories);
router.get("/:categoryId", getSubCategoriesByCategory);

export default router;
