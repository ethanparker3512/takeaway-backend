import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema(
  {
    subcategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory",
      required: true
    },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
    description: { type: String }
  },
  { timestamps: true }
);

export default mongoose.models.Food ||
  mongoose.model("Food", FoodSchema);
