import express from "express";
import { createSubCategory, getSubCategoriesByCategory } from "../controllers/subCategoryController.js";

const router = express.Router();

router.post("/", createSubCategory);
router.get("/:categoryId", getSubCategoriesByCategory);

export default router;
