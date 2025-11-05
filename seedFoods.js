import mongoose from "mongoose";
import dotenv from "dotenv";
import Food from "./models/foodModel.js";

dotenv.config();

const foods = [
  {
    name: "Shawarma",
    price: 2500,
    description: "Delicious chicken shawarma wrap with garlic sauce.",
    category: "Wraps",
    image: "shawarma.jpg",
  },
  {
    name: "Grilled Kebab",
    price: 3000,
    description: "Spicy beef kebab served with onions and pepper.",
    category: "Grill",
    image: "kebab.jpg",
  },
  {
    name: "Fried Rice",
    price: 2000,
    description: "Classic Nigerian fried rice with veggies and chicken.",
    category: "Rice",
    image: "friedrice.jpg",
  },
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await Food.deleteMany({});
    await Food.insertMany(foods);
    console.log("✅ Food data inserted successfully!");
    process.exit();
  })
  .catch((err) => {
    console.error("❌ Error seeding data:", err);
    process.exit(1);
  });
