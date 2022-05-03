import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String },
    price: { type: Number },
    description: { type: String },
    category: { type: String },
    image: { type: String },
    rate: { type: String },
    count: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
