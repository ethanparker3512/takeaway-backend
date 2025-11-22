import Category from "../models/Category.js";

export const getCategoriesWithSubcategoriesAndFoods = async (req, res) => {
  try {
    const categories = await Category.find()
      .populate({
        path: "subCategories",
        populate: { path: "foods" },
      });

    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};
