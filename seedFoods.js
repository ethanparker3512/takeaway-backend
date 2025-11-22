import mongoose from "mongoose";
import dotenv from "dotenv";
import Category from "./models/Category.js";
import SubCategory from "./models/SubCategory.js";
import Food from "./models/Food.js";

// seedFoods.js
import Category from "./models/Category.js";
import SubCategory from "./models/SubCategory.js";
729ba441eceea6f761fd3f333c794fcec924b658

/**
 * Full seeding for Categories + SubCategories (based on the menu you provided).
 * - Exports: seedFoods()
 * - Does NOT connect to mongoose or call process.exit().
 * - Intended to be called from your seed route which already has DB connected.
 */


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
=======
const data = [
  // 2 for 1 Special
  {
    name: "2 for 1 Special",
    image: "https://www.kebabrevolution.co.uk/img/pizza_1341049337.jpg",
    subCategories: [
      { name: "2 x 9inch pizzas", price: 14.99 },
      { name: "2 x 12inch pizzas", price: 16.99 },
      { name: "2 x 09\" Pizzas, Chips, Coleslaw, Onion Rings & Bottle of Drink", price: 19.99 }
    ]
  },

  // Special Offers
  {
    name: "Special Offers",
    image: "https://images.ctfassets.net/j8tkpy1gjhi5/5OvVmigx6VIUsyoKz1EHUs/b8173b7dcfbd6da341ce11bcebfa86ea/Salami-pizza-hero.jpg",
    subCategories: [
      { name: "Special Menu 1 (Pizzas, Chips, Coleslaw, Onion Rings)", price: 19.99 },
      { name: "Special Menu 2 (2 x 12\" Pizzas, Chips, Coleslaw, Onion Rings & Bottle of Drink)", price: 22.99 }
    ]
  },

  // Starters
  {
    name: "Starters",
    image: "https://thesinglegourmand.com/wp-content/uploads/2014/03/hummus-pita-bread.png",
    subCategories: [
      { name: "Hummus with Pitta", price: 3.99 },
      { name: "Halloumi Fries", price: 5.99 },
      { name: "Coleslaw", price: 1.99 }
    ]
  },

  // German Doner
  {
    name: "German Doner",
    image: "https://michaeleats.com/wp-content/uploads/2023/03/gdk3.jpg",
    subCategories: [
      { name: "Beef Doner (PIDE)", price: 9.99 },
      { name: "Chicken Doner (PIDE)", price: 9.99 },
      { name: "Mix Doner (PIDE)", price: 9.99 },
      { name: "Veggie German Doner", price: 8.99 },
      { name: "Berlin Doner Beef", price: 10.99 },
      { name: "Berlin Doner Chicken", price: 10.99 },
      { name: "Berlin Doner Mix", price: 10.99 }
    ]
  },

  // Kebabs
  {
    name: "Kebabs",
    image: "https://www.savorythoughts.com/wp-content/uploads/2021/09/Doner-Kebab-Recipe-Savory-Thoughts-8.jpg",
    subCategories: [
      { name: "Classic Beef Doner Kebab (Small)", price: 8.99 },
      { name: "Classic Beef Doner Kebab (Large)", price: 10.99 },
      { name: "Chicken Doner Kebab (Small)", price: 8.99 },
      { name: "Chicken Doner Kebab (Large)", price: 10.99 },
      { name: "Mix Doner Kebab (Small)", price: 8.99 },
      { name: "Mix Doner Kebab (Large)", price: 10.99 },
      { name: "Chicken Shish Kebab (Small)", price: 9.99 },
      { name: "Chicken Shish Kebab (Large)", price: 13.49 },
      { name: "Lamb Shish Kebab (Small)", price: 11.99 },
      { name: "Lamb Shish Kebab (Large)", price: 14.99 },
      { name: "Kofte Shish Kebab (Small)", price: 9.99 },
      { name: "Kofte Shish Kebab (Large)", price: 13.99 },
      { name: "Kebab Revolution (Box)", price: 32.99 },
      { name: "Doner Meat & Chips (Beef)", price: 10.99 },
      { name: "Doner Meat & Chips (Chicken)", price: 10.99 },
      { name: "Doner Meat & Chips (Mix)", price: 10.99 },
      { name: "Doner in Bun (Beef)", price: 5.99 },
      { name: "Doner in Bun (Chicken)", price: 5.99 },
      { name: "Doner Meat Tray (Beef)", price: 7.99 },
      { name: "Doner Meat Tray (Chicken)", price: 7.99 },
      { name: "Halloumi Kebab", price: 9.99 },
      { name: "Veggie Kebab", price: 9.99 }
    ]
  },

  // Combo Kebabs
  {
    name: "Combo Kebabs",
    image: "https://www.globalyrecipes.com/wp-content/uploads/2025/08/globalyrecipes-1-1.webp",
    subCategories: [
      { name: "Combination Kebab Mix 2", price: 14.99 },
      { name: "Combination Kebab Mix 3", price: 17.99 }
    ]
  },

  // Pizzas (many items)
  {
    name: "Pizzas",
    image: "https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.webp",
    subCategories: [
      { name: "Margarita Pizza 09\"", price: 7.99 },
      { name: "Margarita Pizza 12\"", price: 9.49 },
      { name: "Classic Pepperoni Pizza 09\"", price: 9.99 },
      { name: "Classic Pepperoni Pizza 12\"", price: 11.99 },
      { name: "Pepperoni Plus Pizza 09\"", price: 9.99 },
      { name: "Pepperoni Plus Pizza 12\"", price: 11.99 },
      { name: "Chicken Festival Pizza 09\"", price: 9.99 },
      { name: "Chicken Festival Pizza 12\"", price: 11.99 },
      { name: "Hawaiian Pizza 09\"", price: 9.99 },
      { name: "Hawaiian Pizza 12\"", price: 11.99 },
      { name: "Meat Feast Pizza 09\"", price: 9.99 },
      { name: "Meat Feast Pizza 12\"", price: 11.99 },
      { name: "Spicy Mexicano Pizza 09\"", price: 9.99 },
      { name: "Spicy Mexicano Pizza 12\"", price: 11.99 },
      { name: "Vegetarian Pizza 09\"", price: 9.99 },
      { name: "Vegetarian Pizza 12\"", price: 11.99 },
      { name: "Vegetarian Hot Pizza 09\"", price: 9.99 },
      { name: "Vegetarian Hot Pizza 12\"", price: 11.99 },
      { name: "German Doner Pizza 09\"", price: 9.99 },
      { name: "German Doner Pizza 12\"", price: 11.99 },
      { name: "Pizza Revolution 09\"", price: 9.99 },
      { name: "Pizza Revolution 12\"", price: 11.99 },
      { name: "Porky Pizza 09\"", price: 9.99 },
      { name: "Porky Pizza 12\"", price: 11.99 },
      { name: "Farmhouse Pizza 09\"", price: 9.99 },
      { name: "Farmhouse Pizza 12\"", price: 11.99 },
      { name: "Texas BBQ Pizza 09\"", price: 9.99 },
      { name: "Texas BBQ Pizza 12\"", price: 11.99 },
      { name: "Flaming Hot Pizza 09\"", price: 9.99 },
      { name: "Flaming Hot Pizza 12\"", price: 11.99 },
      { name: "Create Your Own Pizza 09\"", price: 9.99 },
      { name: "Create Your Own Pizza 12\"", price: 11.99 }
    ]
  },

  // Garlic Pizzas
  {
    name: "Garlic Pizzas",
    image: "https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.webp",
    subCategories: [
      { name: "Garlic Pizza 09\"", price: 5.49 },
      { name: "Garlic Pizza 12\"", price: 6.99 },
      { name: "Garlic Pizza Cheese 09\"", price: 7.99 },
      { name: "Garlic Pizza Cheese 12\"", price: 8.99 }
    ]
  },

  // Wraps
  {
    name: "Wraps",
    image: "https://www.parentclub.scot/sites/default/files/2024-12/chicken-avocado-wrap-pexels-ahmed-kh-jami-1959777060-28897047.jpg",
    subCategories: [
      { name: "Beef Doner Wrap", price: 8.99 },
      { name: "Chicken Doner Wrap", price: 8.99 },
      { name: "Mix Doner Wrap", price: 8.99 },
      { name: "Chicken Shish Wrap", price: 9.99 },
      { name: "Lamb Shish Wrap", price: 10.99 },
      { name: "Kofte Wrap", price: 9.99 }
    ]
  },

  // Burgers
  {
    name: "Burgers",
    image: "https://blog-content.omahasteaks.com/wp-content/uploads/2023/02/The-Mack-Burger-recipe-scaled.jpg",
    subCategories: [
      { name: "Beef Burger 1/4lb", price: 5.29 },
      { name: "Beef Burger 1/2lb", price: 7.29 },
      { name: "Cheese Burger 1/4lb", price: 5.49 },
      { name: "Cheese Burger 1/2lb", price: 7.49 },
      { name: "Doner Burger 1/4lb", price: 6.79 },
      { name: "Doner Burger 1/2lb", price: 8.79 },
      { name: "Mexican Spicy Burger 1/4lb", price: 6.49 },
      { name: "Mexican Spicy Burger 1/2lb", price: 7.99 },
      { name: "Chicken Fillet Burger", price: 6.49 },
      { name: "Veggie Burger", price: 5.49 }
    ]
  },

  // Vegetarian
  {
    name: "Vegetarian",
    image: "https://www.nutrition.org.uk/media/onddgmty/vegan-buddha-bowl_s_587759615.jpg",
    subCategories: [
      { name: "Halloumi Kebab", price: 9.99 },
      { name: "Veggie Kebab", price: 9.99 },
      { name: "Veggie German Doner", price: 8.99 },
      { name: "Veggie Burger", price: 5.49 }
    ]
  },

  // Meal Deals
  {
    name: "Meal Deals",
    image: "https://www.burgerfi.com/wp-content/uploads/2025/01/Cheesy-fries-with-burger-and-burgerfi-drink.webp",
    subCategories: [
      { name: "Deal 1 (1/4lb Cheese Burger, Chips & Can)", price: 8.99 },
      { name: "Deal 2 (1/2lb Cheese Burger, Chips & Can)", price: 10.49 },
      { name: "Deal 3 (Chicken Fillet Burger, Chips & Can)", price: 8.99 },
      { name: "Deal 4 (Doner Wrap, Chips & Can) Beef", price: 10.99 },
      { name: "Deal 4 (Doner Wrap, Chips & Can) Chicken", price: 10.99 }
    ]
  },

  // Kids
  {
    name: "Kids",
    image: "https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/slnmktqc/12ca5d82-851e-44ca-bb9c-186c584b6314.jpg",
    subCategories: [
      { name: "Kids Meat Meal", price: 5.99 },
      { name: "Kids Sausage Meal", price: 5.99 },
      { name: "Kids Nuggets Meal", price: 5.99 }
    ]
  },

  // Extras
  {
    name: "Extras",
    image: "https://www.savoryflow.com/wp-content/uploads/2025/05/Chicken-Nuggets-and-Fries.webp",
    subCategories: [
      { name: "Chips Small", price: 3.29 },
      { name: "Chips Large", price: 3.79 },
      { name: "Cheesy Chips", price: 4.99 },
      { name: "Chips & Curry Sauce (Reg)", price: 4.99 },
      { name: "Cheesy Chips & Curry", price: 5.99 },
      { name: "Curry Sauce Pot", price: 1.99 },
      { name: "Chicken Nuggets 8pcs", price: 5.29 },
      { name: "Chicken Nuggets 8pcs + Chips", price: 7.49 },
      { name: "Onion Rings 10pcs", price: 4.49 },
      { name: "Sausage Jumbo", price: 2.99 },
      { name: "Chips & Jumbo Sausage", price: 4.99 },
      { name: "Mix Salad", price: 3.49 },
      { name: "Hot Wings 4pcs", price: 4.99 },
      { name: "Hot Wings 4pcs + Chips", price: 6.99 },
      { name: "Hot Wings 8pcs", price: 8.99 },
      { name: "Hot Wings 8pcs + Chips", price: 10.99 },
      { name: "Box of Jalapeno Peppers", price: 1.99 }
    ]
  },

  // Sauces
  {
    name: "Sauces",
    image: "https://www.thespruceeats.com/thmb/FSZAmQ23g7sG0D-f4kXr-OOSAI4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tomato-sauce-961510860-578dc282bcb74ef287137bce0f881b1c.jpg",
    subCategories: [
      { name: "Curry Sauce Pot", price: 0.99 },
      { name: "2oz Sauce Pot", price: 0.99 },
      { name: "Ketchup", price: 0.8 },
      { name: "Mayo", price: 0.8 },
      { name: "Garlic Mayo", price: 0.8 },
      { name: "Spicy Chilli", price: 0.8 },
      { name: "Sweet Chilli", price: 0.8 },
      { name: "BBQ", price: 0.8 },
      { name: "Burger Sauce", price: 0.8 },
      { name: "Burger Relish", price: 0.8 },
      { name: "Garlic Mint Yoghurt", price: 0.8 },
      { name: "Cocktail", price: 0.8 }
    ]
  },

  // Desserts
  {
    name: "Desserts",
    image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2024-01-triple-chocolate-mousse-cake%2Ftriple-chocolate-mousse-cake-0739",
    subCategories: [
      { name: "Baklava", price: 3.99 },
      { name: "Cheese Cake", price: 3.99 },
      { name: "Ben & Jerry's Cookie Dough", price: 6.99 }
    ]
  },

  // Drinks
  {
    name: "Drinks",
    image: "https://nairametrics.com/wp-content/uploads/2022/01/Carbonated-drinks.jpg",
    subCategories: [
      { name: "Coke (Can)", price: 1.49 },
      { name: "Diet Coke (Can)", price: 1.49 },
      { name: "Tango Orange (Can)", price: 1.49 },
      { name: "Rio (Can)", price: 1.49 },
      { name: "7Up (Can)", price: 1.49 },
      { name: "Coke (Bottle)", price: 2.99 },
      { name: "Diet Coke (Bottle)", price: 3.49 },
      { name: "Tango Orange (Bottle)", price: 3.49 },
      { name: "7Up (Bottle)", price: 3.49 },
      { name: "Water", price: 1.2 }
    ]
  }
];

export const seedFoods = async () => {
  try {
    console.log("Starting seeding...");

    // Clear old docs
    await Category.deleteMany({});
    await SubCategory.deleteMany({});

    // Insert categories & their subcategories
    for (const cat of data) {
      const newCat = await Category.create({
        name: cat.name,
        image: cat.image,
        price: 0
      });

      if (Array.isArray(cat.subCategories)) {
        for (const sub of cat.subCategories) {
          await SubCategory.create({
            name: sub.name,
            price: sub.price ?? 0,
            category: newCat._id
          });
        }
      }
    }

    console.log("Seeding complete.");
    return { ok: true };
  } catch (error) {
    console.error("Seeding failed:", error);
    throw error;
  }
};
 729ba441eceea6f761fd3f333c794fcec924b658
