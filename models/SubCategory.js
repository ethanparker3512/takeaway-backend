import mongoose from "mongoose";

const SubCategorySchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true
    },
    name: { type: String, required: true },
    image: { type: String }
  },
  { timestamps: true }
);

export default mongoose.models.SubCategory ||
  mongoose.model("SubCategory", SubCategorySchema);
