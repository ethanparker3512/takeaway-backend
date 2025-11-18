import SubCategory from "../models/SubCategory.js";

// GET all subcategories
export const getSubCategories = async (req, res) => {
  try {
    const subcategories = await SubCategory.find().populate("category");
    res.json(subcategories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET subcategories by category
export const getSubCategoriesByCategory = async (req, res) => {
  try {
    const subcategories = await SubCategory.find({
      category: req.params.categoryId,
    });
    res.json(subcategories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET single subcategory
export const getSubCategory = async (req, res) => {
  try {
    const subcategory = await SubCategory.findById(req.params.id);
    res.json(subcategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
