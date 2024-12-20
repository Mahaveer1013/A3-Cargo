import dbConnect from "@/lib/dbConnect";
import Product from "@/model/products.model";
import { verifyToken } from "@/lib/auth";
import path from "path";
import { writeFile } from "fs/promises";

export const config = {
  api: {
    bodyParser: false, // Disable Next.js built-in body parser
  },
};

export const POST = async (req) => {
  try {
    // Verify JWT token (if required)
    await verifyToken(req);
    await dbConnect();

    const formData = await req.formData();

    const thumbnailFile = formData.get("thumbnail");

    const name = formData.get("name");
    const category = formData.get("category");
    const amount = formData.get("amount");
    const description = formData.get("description");
    const stock = formData.get("stock");
    
    // Validate required fields
    if (!name || !category || !amount || !description || !stock || !thumbnailFile) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await thumbnailFile.arrayBuffer());
    const filename = Date.now() + thumbnailFile.name.replaceAll(" ", "_");
    console.log(filename);
    
    await writeFile(
      path.join(process.cwd(), "public/products/" + filename),
      buffer
    );

    // Create a new product document
    const newProduct = new Product({
      name,
      category,
      thumbnail : "/products/" + filename,
      amount: amount, // Ensure amount is a number
      description,
      stock: stock, // Ensure stock is an integer
    });

    // Save the product to the database
    await newProduct.save();

    // Return success response
    return new Response(
      JSON.stringify({ message: "Product submitted successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in POST handler:", error);
    return new Response(
      JSON.stringify({ error: "Failed to submit product. Please try again." }),
      { status: 500 }
    );
  }
};

export const GET = async (req) => {
  await dbConnect(); // Ensure database connection is established

  try {
    // Fetch all products
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
