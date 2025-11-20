import Category from "./models/Category.js";
import SubCategory from "./models/SubCategory.js";

export const seedFoods = async (req, res) => {
  try {
    // 1️⃣ Clear existing
    await Category.deleteMany({});
    await SubCategory.deleteMany({});

    // 2️⃣ Insert Categories
    const categories = await Category.insertMany([
      {
        name: "Rice Dishes",
        image: "https://i.imgur.com/riceCategory.png",
        price: 25,
      },
      {
        name: "Pizza",
        image: "https://i.imgur.com/pizzaCategory.png",
        price: 50,
      },
      {
        name: "Drinks",
        image: "https://i.imgur.com/drinkCategory.png",
        price: 3,
      },
    ]);

    // 3️⃣ Map categories
    const riceCategory = categories.find((c) => c.name === "Rice Dishes")._id;
    const pizzaCategory = categories.find((c) => c.name === "Pizza")._id;
    const drinksCategory = categories.find((c) => c.name === "Drinks")._id;

    // 4️⃣ Insert Subcategories linked to categories
    await SubCategory.insertMany([
      // Rice
      { name: "Jollof Rice + Chicken", price: 25, category: riceCategory },
      { name: "Fried Rice + Turkey", price: 30, category: riceCategory },

      // Pizza
      { name: "Pepperoni Pizza Medium", price: 50, category: pizzaCategory },

      // Drinks
      { name: "Coke 50cl", price: 3, category: drinksCategory },
    ]);

    res.json({ message: "Seed successful!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
