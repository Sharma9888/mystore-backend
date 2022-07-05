import ShopDown from "../models/shopDown.js";
import ShopDownQuery from "../handlers/index.js";

export const createNew = (req, res) => {
  try {
    const { title, image, sub_title, discounted_price, price, icon } = req.body;
    const createNewRes = ShopDownQuery.create(ShopDown, {
      title,
      image,
      sub_title,
      discounted_price,
      price,
      icon,
    });
    res
      .status(200)
      .json({ message: "Added Successfully", document: createNewRes });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getDoc = async (req, res) => {
  try {
    const { id } = req.query;
    const getDocRes = await ShopDownQuery.get(ShopDown, { _id: id });
    res.status(202).json(getDocRes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllDoc = async (req, res) => {
  try {
    const getAllRes = await ShopDownQuery.getAll(ShopDown);
    res.status(200).json(getAllRes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteDoc = async (req, res) => {
  try {
    const { id } = req.query;
    const deleteDocRes = await ShopDownQuery.deleteOne(ShopDown, { _id: id });

    res.status(200).json({
      message: "Deleted Successfully",
      detail: deleteDocRes,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
