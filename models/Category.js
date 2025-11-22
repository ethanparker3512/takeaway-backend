import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// Virtual for subcategories
CategorySchema.virtual("subCategories", {
  ref: "SubCategory",
  localField: "_id",
  foreignField: "category",
});

export default mongoose.models.Category || mongoose.model("Category", CategorySchema);
