import express from "express";
import { getAllSubCategories, getSubCategoriesByCategory } from "../controllers/subCategoryController.js";

const router = express.Router();

router.get("/", getAllSubCategories);
router.get("/:categoryId", getSubCategoriesByCategory);

export default router;
