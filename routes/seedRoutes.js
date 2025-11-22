\import express from "express";
import { seedFoods } from "../seedFoods.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    await seedFoods();
    res.json({ message: "Seeding complete" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
