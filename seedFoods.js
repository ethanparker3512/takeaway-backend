import express from "express";
import Category from "./models/Category.js";
import SubCategory from "./models/SubCategory.js";

const router = express.Router();

// --- 19 Categories with Subcategories ---
const data = [
  {
    name: "2 for 1 Special",
    image: "https://www.kebabrevolution.co.uk/img/pizza_1341049337.jpg",
    subCategories: [
      { name: "2 x 9-inch Pizzas", price: 14.99 },
      { name: "2 x 12-inch Pizzas", price: 16.99 }
    ]
  },
  {
    name: "Special Offers",
    image: "https://www.kebabrevolution.co.uk/img/pizza_1341049337.jpg",
    subCategories: [
      { name: "Special Menu 1", price: 19.99 },
      { name: "Special Menu 2", price: 24.99 }
    ]
  },
  {
    name: "Starters",
    image: "https://placehold.co/400x300",
    subCategories: [
      { name: "Garlic Bread", price: 3.99 },
      { name: "Onion Rings", price: 2.99 }
    ]
  },
  {
    name: "Burgers",
    image: "https://placehold.co/400x300",
    subCategories: [
      { name: "Cheeseburger", price: 5.99 },
      { name: "Double Beef Burger", price: 7.99 }
    ]
  },
  {
    name: "Kebabs",
    image: "https://placehold.co/400x300",
    subCategories: [
      { name: "Chicken Kebab", price: 6.99 },
      { name: "Mixed Kebab", price: 8.99 }
    ]
  },
  {
    name: "Wraps",
    image: "https://placehold.co/400x300",
    subCategories: [
      { name: "Chicken Wrap", price: 5.49 },
      { name: "Veg Wrap", price: 4.99 }
    ]
  },
  {
    name: "Pizzas",
    image: "https://placehold.co/400x300",
    subCategories: [
      { name: "9-inch Pizza", price: 7.99 },
      { name: "12-inch Pizza", price: 10.99 }
    ]
  },
  {
    name: "Drinks",
    image: "https://placehold.co/400x300",
    subCategories: [
      { name: "Coke 330ml", price: 1.49 },
      { name: "Fanta 330ml", price: 1.49 }
    ]
  },
  {
    name: "Milkshakes",
    image: "https://placehold.co/400x300",
    subCategories: [
      { name: "Oreo Shake", price: 3.99 },
      { name: "Strawberry Shake", price: 3.99 }
    ]
  },
  {
    name: "Kids Meals",
    image: "https://placehold.co/400x300",
    subCategories: [
      { name: "Kids Nuggets", price: 4.99 },
      { name: "Kids Burger", price: 4.49 }
    ]
  },
  {
    name: "Desserts",
    image: "https://placehold.co/400x300",
    subCategories: [
      { name: "Chocolate Cake", price: 3.99 },
      { name: "Ice Cream", price: 2.99 }
    ]
  },
  {
    name: "Sides",
    image: "https://placehold.co/400x300",
    subCategories: [
      { name: "Chips", price: 2.49 },
      { name: "Coleslaw", price: 1.99 }
    ]
  },
  {
    name: "Fried Chicken",
    image: "https://placehold.co/400x300",
    subCategories: [
      { name: "3pcs Chicken", price: 5.99 },
      { name: "6pcs Chicken", price: 9.99 }
    ]
  },
  {
    name: "Rice Dishes",
    image: "https://placehold.co/400x300",
    subCategories: [
      { name: "Chicken Rice", price: 6.99 },
      { name: "Special Rice", price: 7.99 }
    ]
  },
  {
    name: "Pasta",
    image: "https://placehold.co/400x300",
    subCategories: [
      { name: "Chicken Alfredo", price: 8.99 },
      { name: "Spaghetti Bolognese", price: 7.99 }
    ]
  },
  {
    name: "Seafood",
    image: "https://placehold.co/400x300",
    subCategories: [
      { name: "Fried Fish", price: 9.99 },
      { name: "Prawn Meal", price: 12.99 }
    ]
  },
  {
    name: "Salads",
    image: "https://placehold.co/400x300",
    subCategories: [
      { name: "Chicken Salad", price: 5.99 },
      { name: "Veg Salad", price: 4.49 }
    ]
  },
  {
    name: "Grill Specials",
    image: "https://placehold.co/400x300",
    subCategories: [
      { name: "Grilled Chicken", price: 10.99 },
      { name: "Mixed Grill", price: 14.99 }
    ]
  },
  {
    name: "Family Deals",
    image: "https://placehold.co/400x300",
    subCategories: [
      { name: "Family Feast", price: 22.99 },
      { name: "Mega Meal", price: 29.99 }
    ]
  }
];

router.get("/", async (req, res) => {
  try {
    console.log("Starting seeding...");

    await Category.deleteMany({});
    await SubCategory.deleteMany({});

    for (const cat of data) {
      const newCat = await Category.create({
        name: cat.name,
        image: cat.image,
      });

      for (const sub of cat.subCategories) {
        await SubCategory.create({
          category: newCat._id,
          name: sub.name,
          price: sub.price,
        });
      }
    }

    res.json({ message: "Seeding complete!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Seeding failed." });
  }
});

export default router;
