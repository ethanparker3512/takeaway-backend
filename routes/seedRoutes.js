import express from "express";
import { seedFoods } from "../seedFoods.js";

const router = express.Router();

// GET /api/seed-foods
router.get("/seed-foods", async (req, res) => {
  try {
    await seedFoods();
    res.json({ message: "Seeding completed successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Seeding failed" });
  }
});

export default router;
