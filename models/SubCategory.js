import mongoose from "mongoose";

const SubCategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// Virtual for foods
SubCategorySchema.virtual("foods", {
  ref: "Food",
  localField: "_id",
  foreignField: "subcategory",
});

export default mongoose.models.SubCategory || mongoose.model("SubCategory", SubCategorySchema);
