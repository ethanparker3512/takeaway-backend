import SubCategory from "../models/SubCategory.js";

export const createSubCategory = async (req, res) => {
  try {
    const subCat = await SubCategory.create(req.body);
    res.status(201).json(subCat);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getSubCategoriesByCategory = async (req, res) => {
  try {
    const subCats = await SubCategory.find({ categoryId: req.params.categoryId });

    const formatted = subCats.map(item => ({
      id: item._id,
      name: item.name,
      description: item.description,
      price: item.price,
      URL: item.url
    }));

    res.status(200).json(formatted);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
