import express from "express";
import { subCategoryList } from "../subCategoryList.js";

const router = express.Router();

router.get("/:categoryId", (req, res) => {
  const id = parseInt(req.params.categoryId);
  const filtered = subCategoryList.filter(item => item.categoryId === id);
  res.json(filtered);
});

export default router;
