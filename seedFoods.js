import Category from "./models/Category.js";
import SubCategory from "./models/SubCategory.js";
import Food from "./models/Food.js";

export const seedFoods = async () => {
  try {
    console.log("Starting seeding...");

    await Category.deleteMany({});
    await SubCategory.deleteMany({});
    await Food.deleteMany({});
    console.log("Old data cleared.");

    const categories = await Category.insertMany([
      { name: "2 for 1 Special", image: "", price: 0 },
      { name: "Special Offers", image: "", price: 0 },
      { name: "Starters", image: "", price: 0 },
      { name: "German Doner", image: "", price: 0 },
      { name: "Kebabs", image: "", price: 0 },
      { name: "Combo Kebabs", image: "", price: 0 },
      { name: "Pizzas", image: "", price: 0 },
      { name: "Wraps", image: "", price: 0 },
      { name: "Burgers", image: "", price: 0 },
      { name: "Vegetarian", image: "", price: 0 },
      { name: "Meal Deals", image: "", price: 0 },
      { name: "Kids", image: "", price: 0 },
      { name: "Extras", image: "", price: 0 },
      { name: "Sauces", image: "", price: 0 },
      { name: "Desserts", image: "", price: 0 },
      { name: "Drinks", image: "", price: 0 },
    ]);

    const getCategoryId = (name) =>
      categories.find((c) => c.name === name)._id;

    const subcategories = await SubCategory.insertMany([
      { name: "2 x 9inch pizzas", price: 14.99, category: getCategoryId("2 for 1 Special") },
      { name: "2 x 12inch pizzas", price: 16.99, category: getCategoryId("2 for 1 Special") },
    ]);

    const getSubCategoryId = (name) =>
      subcategories.find((s) => s.name === name)._id;

    await Food.insertMany([
      {
        name: "2 x 9inch pizzas",
        price: 14.99,
        subcategory: getSubCategoryId("2 x 9inch pizzas"),
        image: "",
      },
    ]);

    console.log("Seeding done.");
  } catch (error) {
    console.error("Seeding failed:", error);
  }
};
