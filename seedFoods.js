import mongoose from "mongoose";
import dotenv from "dotenv";
import Category from "./models/Category.js";
import SubCategory from "./models/SubCategory.js";
import Food from "./models/Food.js";

dotenv.config();

// Connect to DB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const seedFoods = async () => {
  try {
    // 1️⃣ Clear old data
    await Category.deleteMany({});
    await SubCategory.deleteMany({});
    await Food.deleteMany({});

    console.log("Old data cleared.");

    // 2️⃣ Insert Categories
    const categories = await Category.insertMany([
      { name: "2 for 1 Special", image: "https://example.com/images/2for1.jpg", price: 0 },
      { name: "Special Offers", image: "https://example.com/images/specialoffers.jpg", price: 0 },
      { name: "Starters", image: "https://example.com/images/starters.jpg", price: 0 },
      { name: "German Doner", image: "https://example.com/images/germandoner.jpg", price: 0 },
      { name: "Kebabs", image: "https://example.com/images/kebabs.jpg", price: 0 },
      { name: "Combo Kebabs", image: "https://example.com/images/combo.jpg", price: 0 },
      { name: "Pizzas", image: "https://example.com/images/pizzas.jpg", price: 0 },
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

    console.log("Categories inserted.");

    const getCategoryId = (name) => categories.find(c => c.name === name)._id;

    // 3️⃣ Insert SubCategories
    const subcategories = await SubCategory.insertMany([
      // 2 for 1 Specials
      { name: "2 x 9inch pizzas", price: 14.99, category: getCategoryId("2 for 1 Special") },
      { name: "2 x 12inch pizzas", price: 16.99, category: getCategoryId("2 for 1 Special") },

      // Special Offers
      { name: "Special Menu 1", price: 19.99, category: getCategoryId("Special Offers") },
      { name: "Special Menu 2", price: 22.99, category: getCategoryId("Special Offers") },

      // Starters
      { name: "Hummus with Pitta", price: 3.99, category: getCategoryId("Starters") },
      { name: "Halloumi Fries", price: 5.99, category: getCategoryId("Starters") },
      { name: "Coleslaw", price: 1.99, category: getCategoryId("Starters") },

      // Pizzas example
      { name: "Margarita Pizza", price: 7.99, category: getCategoryId("Pizzas") },
      { name: "Classic Pepperoni Pizza", price: 9.99, category: getCategoryId("Pizzas") },
      // ... add all other subcategories here

      // Drinks example
      { name: "Coke 50cl", price: 1.49, category: getCategoryId("Drinks") },
      { name: "Water", price: 1.20, category: getCategoryId("Drinks") }
    ]);

    console.log("SubCategories inserted.");

    const getSubCategoryId = (name) => subcategories.find(s => s.name === name)._id;

    // 4️⃣ Insert Foods
    const foods = await Food.insertMany([
      { name: "2 x 9inch pizzas", price: 14.99, subcategory: getSubCategoryId("2 x 9inch pizzas"), image: "https://example.com/images/2x9pizza.jpg" },
      { name: "2 x 12inch pizzas", price: 16.99, subcategory: getSubCategoryId("2 x 12inch pizzas"), image: "https://example.com/images/2x12pizza.jpg" },
      { name: "Special Menu 1", price: 19.99, subcategory: getSubCategoryId("Special Menu 1"), image: "https://example.com/images/menu1.jpg" },
      { name: "Special Menu 2", price: 22.99, subcategory: getSubCategoryId("Special Menu 2"), image: "https://example.com/images/menu2.jpg" },
      { name: "Hummus with Pitta", price: 3.99, subcategory: getSubCategoryId("Hummus with Pitta"), image: "https://example.com/images/hummus.jpg" },
      { name: "Halloumi Fries", price: 5.99, subcategory: getSubCategoryId("Halloumi Fries"), image: "https://example.com/images/halloumi.jpg" },
      { name: "Coleslaw", price: 1.99, subcategory: getSubCategoryId("Coleslaw"), image: "https://example.com/images/coleslaw.jpg" },
      { name: "Margarita Pizza", price: 7.99, subcategory: getSubCategoryId("Margarita Pizza"), image: "https://example.com/images/margarita.jpg" },
      { name: "Classic Pepperoni Pizza", price: 9.99, subcategory: getSubCategoryId("Classic Pepperoni Pizza"), image: "https://example.com/images/pepperoni.jpg" },
      { name: "Coke 50cl", price: 1.49, subcategory: getSubCategoryId("Coke 50cl"), image: "https://example.com/images/coke.jpg" },
      { name: "Water", price: 1.20, subcategory: getSubCategoryId("Water"), image: "https://example.com/images/water.jpg" },
      // ... continue for all other foods
    ]);

    console.log("Foods inserted successfully!");
    process.exit();
  } catch (err) {
    console.error("Error seeding data:", err);
    process.exit(1);
  }
};

seedFoods();
