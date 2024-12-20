import { verifyToken } from "@/lib/auth";
import dbConnect from "@/lib/dbConnect";
import Product from "@/model/products.model";
import { unlink } from "fs/promises";
import path from "path";
import { writeFile } from "fs/promises";

export const PUT = async (req, { params }) => {
  // Ensure database connection is established
  await verifyToken(req);
  await dbConnect();

  const { id } = await params; // Destructure directly from params

  const formData = await req.formData();
  const name = formData.get("name");
  const category = formData.get("category");
  const amount = formData.get("amount");
  const description = formData.get("description");
  const stock = formData.get("stock");
  const thumbnailFile = formData.get("thumbnail");

  console.log(thumbnailFile);

  // Validate input
  if (!id) {
    return new Response(JSON.stringify({ message: "Product ID is required" }), {
      status: 400,
    });
  }

  try {
    // Fetch the existing product
    const product = await Product.findById(id);
    if (!product) {
      return new Response(JSON.stringify({ message: "Product not found" }), {
        status: 404,
      });
    }

    // Prepare the updated data
    const updatedData = {};

    if (name) updatedData.name = name;
    if (category) updatedData.category = category;
    if (amount) updatedData.amount = amount;
    if (description) updatedData.description = description;
    if (stock) updatedData.stock = stock;

    // Handle image update (thumbnail)
    if (thumbnailFile) {
      // Delete the old thumbnail image if it exists
      if (product.thumbnail) {
        try {
          const oldThumbnailPath = path.join(
            process.cwd(),
            "public",
            product.thumbnail
          );

          await unlink(oldThumbnailPath).catch((err) =>
            console.error("Error deleting old thumbnail:", err)
          );
        } catch (error) {
          console.log(error);
        }
      }
      const buffer = Buffer.from(await thumbnailFile.arrayBuffer());
      const filename = Date.now() + thumbnailFile.name.replaceAll(" ", "_");
      console.log(filename);

      await writeFile(
        path.join(process.cwd(), "public/products/" + filename),
        buffer
      );
      updatedData.thumbnail = "/products/" + filename;
    }

    // Update the product with the modified fields
    const updatedProduct = await Product.findByIdAndUpdate(id, updatedData);

    return new Response(
      JSON.stringify({
        message: "Product updated successfully",
        updatedProduct,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return new Response(
      JSON.stringify({
        error: "Error updating product",
        message: error.message,
      }),
      { status: 500 }
    );
  }
};

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
    // Find the product by ID
    const product = await Product.findById(id);

    if (!product) {
      return new Response(JSON.stringify({ message: "Product not found" }), {
        status: 404,
      });
    }

    // Extract the thumbnail path from the product data
    const thumbnailPath = product.thumbnail; // Ensure this is the correct path field

    // Delete the product from the database
    const deletedProduct = await Product.findOneAndDelete({ _id: id });

    if (!deletedProduct) {
      return new Response(JSON.stringify({ message: "Product not found" }), {
        status: 404,
      });
    }

    // Attempt to delete the thumbnail file
    if (thumbnailPath) {
      try {
        // Ensure the path is safe and relative to your upload directory
        const filePath = path.resolve(thumbnailPath); // Adjust this to match your storage strategy
        await unlink(filePath);
      } catch (fileError) {
        console.error("Error deleting thumbnail file:", fileError.message);
      }
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
