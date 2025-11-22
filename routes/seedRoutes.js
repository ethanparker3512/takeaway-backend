import express from "express";
import { seedFoods } from "../seedFoods.js"; 

const router = express.Router();

// GET /seed-foods
router.get("/seed-foods", seedFoods);

export default router;
