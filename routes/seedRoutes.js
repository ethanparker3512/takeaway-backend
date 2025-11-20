import express from "express";
import { seedFoods } from "../seedFoods.js";

const router = express.Router();

router.post("/seed/foods", seedFoods);

export default router;
