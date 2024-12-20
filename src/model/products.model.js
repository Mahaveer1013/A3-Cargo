import mongoose from "mongoose";

// Define the Product Schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    stock: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create and export the Product model
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
