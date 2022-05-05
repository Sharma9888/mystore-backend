import Product from "../models/product.js";

export const createProduct = (req, res) => {
  try {
    const {
      title,
      price,
      description_heading,
      description,
      category,
      image,
      rate,
      count,
    } = req.body;
    const createProductRes = new Product({
      title,
      price,
      description_heading,
      description,
      category,
      image,
      rate,
      count,
    });
    createProductRes.save();
    res.status(200).json(createProductRes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const userId = req.query.id;
    console.log(userId);
    const getProductRes = await Product.findOne({ _id: userId });
    res.status(200).json(getProductRes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const getAllProductsRes = await Product.find();
    res.status(200).json(getAllProductsRes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
