import express from "express";
import { getFoods } from "../controllers/foodController.js";

const router = express.Router();

// GET all foods
router.get("/foods", getFoods);

export default router;
