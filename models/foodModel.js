router.get("/home", async (req, res) => {
  try {
    console.log("Fetching home categories...");
    const categories = await Category.find().lean(); // add .lean() for faster queries
    const subcategories = await SubCategory.find().lean();

    // attach subcategories to their parent category
    const data = categories.map(cat => ({
      ...cat,
      subCategories: subcategories.filter(sub => sub.category.toString() === cat._id.toString())
    }));

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch home data." });
  }
});
