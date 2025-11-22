import Category from "./models/Category.js";
import SubCategory from "./models/SubCategory.js";

export const seedFoods = async (req, res) => {
  try {
    // Clear existing data
    await Category.deleteMany({});
    await SubCategory.deleteMany({});

    // Step 1: Insert categories
    const categories = await Category.insertMany([
      { name: "2 for 1 Special", image: "https://example.com/images/2for1.jpg", price: 0 },
      { name: "Special Offers", image: "https://example.com/images/specialoffers.jpg", price: 0 },
      { name: "Starters", image: "https://example.com/images/starters.jpg", price: 0 },
      { name: "German Doner", image: "https://example.com/images/germandoner.jpg", price: 0 },
      { name: "Kebabs", image: "https://example.com/images/kebabs.jpg", price: 0 },
      { name: "Combo Kebabs", image: "https://example.com/images/combo.jpg", price: 0 },
      { name: "Pizzas", image: "https://example.com/images/pizzas.jpg", price: 0 },
      { name: "Create Your Own Pizza", image: "https://example.com/images/createpizza.jpg", price: 0 },
      { name: "Garlic Pizzas", image: "https://example.com/images/garlicpizza.jpg", price: 0 },
      { name: "Wraps", image: "https://example.com/images/wraps.jpg", price: 0 },
      { name: "Burgers", image: "https://example.com/images/burgers.jpg", price: 0 },
      { name: "Vegetarian", image: "https://example.com/images/vegetarian.jpg", price: 0 },
      { name: "Meal Deals", image: "https://example.com/images/mealdeals.jpg", price: 0 },
      { name: "Kids", image: "https://example.com/images/kids.jpg", price: 0 },
      { name: "Extras", image: "https://example.com/images/extras.jpg", price: 0 },
      { name: "Sauces", image: "https://example.com/images/sauces.jpg", price: 0 },
      { name: "Desserts", image: "https://example.com/images/desserts.jpg", price: 0 },
      { name: "Drinks", image: "https://example.com/images/drinks.jpg", price: 0 }
    ]);

    // Step 2: Insert foods (subcategories) using category IDs
    const getCategoryId = (name) => categories.find(c => c.name === name)._id;

    await SubCategory.insertMany([
      // 2 for 1 Specials
      { name: "2 x 9inch pizzas", price: 14.99, category: getCategoryId("2 for 1 Special") },
      { name: "2 x 12inch pizzas", price: 16.99, category: getCategoryId("2 for 1 Special") },

      // Special Offers
      { name: "Special Menu 1 (Pizzas, Chips, Coleslaw, Onion Rings)", price: 19.99, category: getCategoryId("Special Offers") },
      { name: "Special Menu 2 (2 x 12\" Pizzas, Chips, Coleslaw, Onion Rings & Bottle of Drink)", price: 22.99, category: getCategoryId("Special Offers") },

      // Starters
      { name: "Hummus with Pitta", price: 3.99, category: getCategoryId("Starters") },
      { name: "Halloumi Fries", price: 5.99, category: getCategoryId("Starters") },
      { name: "Coleslaw", price: 1.99, category: getCategoryId("Starters") },

      // … continue like this for **all your food items** from the list you sent.
    ]);

    res.json({ message: "Full menu seed successful!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
