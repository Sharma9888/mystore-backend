import mongoose from "mongoose";

const shopDownSchema = new mongoose.Schema(
  {
    title: { type: String },
    image: { type: String },
    sub_title: { type: String },
    discounted_price: { type: Number },
    price: { type: Number },
    icon: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("ShopDown", shopDownSchema);
