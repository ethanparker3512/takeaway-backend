import express from "express";
import { getFoods, createFood } from "../controllers/foodController.js";

const router = express.Router();

router.get("/foods", getFoods);
router.post("/foods", createFood);

export default router;
