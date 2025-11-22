import mongoose from "mongoose";
import dotenv from "dotenv";
import Category from "./models/Category.js";
import SubCategory from "./models/SubCategory.js";
import Food from "./models/Food.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

export const seedFoods = async () => {
  try {
    console.log("Starting seeding...");

    // Clear old data
    await Category.deleteMany({});
    await SubCategory.deleteMany({});
    await Food.deleteMany({});
    console.log("Old data cleared.");

    // Insert categories
    const categories = await Category.insertMany([
      { name: "2 for 1 Special", image: "https://www.kebabrevolution.co.uk/img/pizza_1341049337.jpg", price: 0 },
      { name: "Special Offers", image: "https://images.ctfassets.net/j8tkpy1gjhi5/5OvVmigx6VIUsyoKz1EHUs/b8173b7dcfbd6da341ce11bcebfa86ea/Salami-pizza-hero.jpg", price: 0 },
      { name: "Starters", image: "https://thesinglegourmand.com/wp-content/uploads/2014/03/hummus-pita-bread.png", price: 0 },
      { name: "German Doner", image: "https://michaeleats.com/wp-content/uploads/2023/03/gdk3.jpg", price: 0 },
      { name: "Kebabs", image: "https://www.savorythoughts.com/wp-content/uploads/2021/09/Doner-Kebab-Recipe-Savory-Thoughts-8.jpg", price: 0 },
      { name: "Combo Kebabs", image: "https://www.globalyrecipes.com/wp-content/uploads/2025/08/globalyrecipes-1-1.webp", price: 0 },
      { name: "Pizzas", image: "https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.webp", price: 0 },
      { name: "Wraps", image: "https://www.parentclub.scot/sites/default/files/2024-12/chicken-avocado-wrap-pexels-ahmed-kh-jami-1959777060-28897047.jpg", price: 0 },
      { name: "Burgers", image: "https://blog-content.omahasteaks.com/wp-content/uploads/2023/02/The-Mack-Burger-recipe-scaled.jpg", price: 0 },
      { name: "Vegetarian", image: "https://www.nutrition.org.uk/media/onddgmty/vegan-buddha-bowl_s_587759615.jpg", price: 0 },
      { name: "Meal Deals", image: "https://www.burgerfi.com/wp-content/uploads/2025/01/Cheesy-fries-with-burger-and-burgerfi-drink.webp", price: 0 },
      { name: "Kids", image: "https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/slnmktqc/12ca5d82-851e-44ca-bb9c-186c584b6314.jpg", price: 0 },
      { name: "Extras", image: "https://www.savoryflow.com/wp-content/uploads/2025/05/Chicken-Nuggets-and-Fries.webp", price: 0 },
      { name: "Sauces", image: "https://www.thespruceeats.com/thmb/FSZAmQ23g7sG0D-f4kXr-OOSAI4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tomato-sauce-961510860-578dc282bcb74ef287137bce0f881b1c.jpg", price: 0 },
      { name: "Desserts", image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2024-01-triple-chocolate-mousse-cake%2Ftriple-chocolate-mousse-cake-0739", price: 0 },
      { name: "Drinks", image: "https://nairametrics.com/wp-content/uploads/2022/01/Carbonated-drinks.jpg", price: 0 },
    ]);

    const getCategoryId = (name) => categories.find(c => c.name === name)._id;

    // Insert subcategories
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

      // Pizzas
      { name: "Margarita Pizza", price: 7.99, category: getCategoryId("Pizzas") },
      { name: "Classic Pepperoni Pizza", price: 9.99, category: getCategoryId("Pizzas") },

      // Drinks
      { name: "Coke 50cl", price: 1.49, category: getCategoryId("Drinks") },
      { name: "Water", price: 1.2, category: getCategoryId("Drinks") },
    ]);

    const getSubCategoryId = (name) => subcategories.find(s => s.name === name)._id;

    // Insert foods
    await Food.insertMany([
      // 2 for 1 Specials
      { name: "2 x 9inch pizzas", price: 14.99, subcategory: getSubCategoryId("2 x 9inch pizzas"), image: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-03/Easiest-Pizza_22-2_11.jpg?itok=MD7gO9Kp" },
      { name: "2 x 12inch pizzas", price: 16.99, subcategory: getSubCategoryId("2 x 12inch pizzas"), image: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-03/Easiest-Pizza_22-2_11.jpg?itok=MD7gO9Kp" },

      // Special Offers
      { name: "Special Menu 1", price: 19.99, subcategory: getSubCategoryId("Special Menu 1"), image: "https://images.ctfassets.net/j8tkpy1gjhi5/5OvVmigx6VIUsyoKz1EHUs/b8173b7dcfbd6da341ce11bcebfa86ea/Salami-pizza-hero.jpg" },
      { name: "Special Menu 2", price: 22.99, subcategory: getSubCategoryId("Special Menu 2"), image: "https://images.ctfassets.net/j8tkpy1gjhi5/5OvVmigx6VIUsyoKz1EHUs/b8173b7dcfbd6da341ce11bcebfa86ea/Salami-pizza-hero.jpg" },

      // Starters
      { name: "Hummus with Pitta", price: 3.99, subcategory: getSubCategoryId("Hummus with Pitta"), image: "https://thesinglegourmand.com/wp-content/uploads/2014/03/hummus-pita-bread.png" },
      { name: "Halloumi Fries", price: 5.99, subcategory: getSubCategoryId("Halloumi Fries"), image: "https://thesinglegourmand.com/wp-content/uploads/2014/03/hummus-pita-bread.png" },
      { name: "Coleslaw", price: 1.99, subcategory: getSubCategoryId("Coleslaw"), image: "https://thesinglegourmand.com/wp-content/uploads/2014/03/hummus-pita-bread.png" },

      // Pizzas
      { name: "Margarita Pizza", price: 7.99, subcategory: getSubCategoryId("Margarita Pizza"), image: "https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.webp" },
      { name: "Classic Pepperoni Pizza", price: 9.99, subcategory: getSubCategoryId("Classic Pepperoni Pizza"), image: "https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.webp" },

      // Drinks
      { name: "Coke 50cl", price: 1.49, subcategory: getSubCategoryId("Coke 50cl"), image: "https://nairametrics.com/wp-content/uploads/2022/01/Carbonated-drinks.jpg" },
      { name: "Water", price: 1.2, subcategory: getSubCategoryId("Water"), image: "https://nairametrics.com/wp-content/uploads/2022/01/Carbonated-drinks.jpg" },
    ]);

    console.log("Seeding done.");
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

// Run seed if executed directly
if (process.argv[1].includes("seedFoods.js")) {
  seedFoods();
}
