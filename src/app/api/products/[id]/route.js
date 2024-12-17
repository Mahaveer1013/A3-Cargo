import { verifyToken } from "@/lib/auth"; 
import dbConnect from "@/lib/dbConnect";
import Product from "@/model/products.model";

// GET method: Fetch single product by ID or list all products
export const GET = async (req, { params }) => {
  await verifyToken(req);
  await dbConnect();

  const { id } = await params;

  try {
    if (id) {
      const product = await Product.findOne({ _id: id });

      if (!product) {
        return new Response(JSON.stringify({ message: "Product not found" }), {
          status: 404,
        });
      }

      return new Response(JSON.stringify(product), { status: 200 });
    }

    const products = await Product.find();
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Error fetching products",
        message: error.message,
      }),
      { status: 500 }
    );
  }
};

// PUT method: Update product details
export const PUT = async (req, { params }) => {
  await verifyToken(req);
  await dbConnect();

  const { id } = await params;
  const {
    name,
    category,
    rating,
    feedbacks,
    thumbnail,
    images,
    amount,
    description,
    brand,
    stock,
  } = await req.json();

  if (!id) {
    return new Response(JSON.stringify({ message: "Product ID is required" }), {
      status: 400,
    });
  }

  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: id },
      { name, category, rating, feedbacks, thumbnail, images, amount, description, brand, stock },
      { new: true } // Return updated product
    );

    if (!updatedProduct) {
      return new Response(JSON.stringify({ message: "Product not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({
        message: "Product updated successfully",
        updatedProduct,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Error updating product",
        message: error.message,
      }),
      { status: 500 }
    );
  }
};

// DELETE method: Delete product by ID
export const DELETE = async (req, { params }) => {
  await verifyToken(req);
  await dbConnect();

  const { id } = await params;

  if (!id) {
    return new Response(JSON.stringify({ message: "Product ID is required" }), {
      status: 400,
    });
  }

  try {
    const deletedProduct = await Product.findOneAndDelete({ _id: id });

    if (!deletedProduct) {
      return new Response(JSON.stringify({ message: "Product not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({ message: "Product deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Error deleting product",
        message: error.message,
      }),
      { status: 500 }
    );
  }
};
