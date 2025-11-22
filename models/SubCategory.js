import mongoose from "mongoose";

const SubCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ""
  },
  price: {
    type: Number,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true
  }
}, { timestamps: true });

export default mongoose.model("SubCategory", SubCategorySchema);
