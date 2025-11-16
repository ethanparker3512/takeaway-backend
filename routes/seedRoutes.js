import express from "express";
import Category from "../models/Category.js";
import SubCategory from "../models/SubCategory.js";
import Food from "../models/Food.js";

const router = express.Router();

router.get("/seed", async (req, res) => {
  try {
    // CLEAR EXISTING DATA
    await Category.deleteMany();
    await SubCategory.deleteMany();
    await Food.deleteMany();

    // 1️⃣ CREATE CATEGORIES
    const categories = await Category.insertMany([
      { name: "Rice Dishes", image: "https://i.imgur.com/abcd1.png" },
      { name: "Pizza", image: "https://i.imgur.com/abcd2.png" },
      { name: "Drinks", image: "https://i.imgur.com/abcd3.png" }
    ]);

    // 2️⃣ SUBCATEGORIES
    const subcategories = await SubCategory.insertMany([
      { name: "Jollof Rice", category: categories[0]._id },
      { name: "Fried Rice", category: categories[0]._id },

      { name: "Pepperoni Pizza", category: categories[1]._id },
      { name: "Chicken Pizza", category: categories[1]._id },

      { name: "Soft Drinks", category: categories[2]._id },
      { name: "Juice", category: categories[2]._id }
    ]);

    // 3️⃣ FOODS
    await Food.insertMany([
      {
        name: "Jollof Rice + Chicken",
        price: 2500,
        image: "https://i.imgur.com/rice1.png",
        description: "Tasty Nigerian jollof with grilled chicken",
        subcategory: subcategories[0]._id
      },
      {
        name: "Fried Rice + Turkey",
        price: 3000,
        image: "https://i.imgur.com/rice2.png",
        description: "Special fried rice with turkey",
        subcategory: subcategories[1]._id
      },
      {
        name: "Pepperoni Pizza Medium",
        price: 5000,
        image: "https://i.imgur.com/pizza1.png",
        description: "Delicious pepperoni pizza",
        subcategory: subcategories[2]._id
      },
      {
        name: "Coke 50cl",
        price: 300,
        image: "https://i.imgur.com/drink1.png",
        description: "Cold Coca-Cola",
        subcategory: subcategories[4]._id
      }
    ]);

    res.json({ message: "Database seeded successfully!" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
