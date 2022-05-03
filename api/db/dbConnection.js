import mongoose from "mongoose";

// Method to connect DB
const connectDb = async () => {
  try {
    mongoose.connect(process.env.mongodb_url, () => {
      console.log("Db is successfully connected.");
    });
  } catch (error) {
    console.log(error);
  }
};
export default connectDb;
