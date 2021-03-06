import mongoose from "mongoose";
import dotenv from "dotenv";
import products from "./data/products.js";
import Product from "./models/productModel.js";
import users from "./data/users.js";
import User from "./models/userModel.js";
import connectDB from "./config/db.js";
dotenv.config({ path: "src/.env" });

connectDB();

const seedProducts = async () => {
  try {
    // await Product.insertMany(products);
    await User.insertMany(users);
    console.log("Products are added");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
