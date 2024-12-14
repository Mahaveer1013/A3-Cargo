import { verifyToken } from "@/lib/auth";
import dbConnect from "@/lib/dbConnect"; // Assuming you have a utility to connect to MongoDB
import Product from "@/model/products.model";

export const GET = async (req) => {
  // Ensure database connection is established
  await dbConnect();

  try {
    // Fetch products with pagination
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

const getImageData = async (file) => {
  const bufferData = await file.arrayBuffer();
  const buffer = Buffer.from(bufferData);

  return {
    name: file.name,
    data: buffer,
    contentType: file.type,
  };
};

export const POST = async (req) => {
  try {
    // Verify JWT token (if required)
    await verifyToken(req);

    // Connect to the database
    await dbConnect();

    // Parse the form data using FormData
    const formData = await req.formData();
    console.log(formData);
    
    const thumbnailFile = formData.get("thumbnail");

    // Function to extract image data (you need to define this)
    const thumbnail = thumbnailFile ? await getImageData(thumbnailFile) : null;

    const displayImages = [];
    // Process display images
    const displayImagesFiles = [
      formData.get("displayImages[0]"),
      formData.get("displayImages[1]"),
    ];

    for (let imageFile of displayImagesFiles) {
      if (imageFile) {
        const imageData = await getImageData(imageFile);
        displayImages.push(imageData);
      }
    }

    // Extract other fields
    const name = formData.get("name");
    const category = formData.get("category");
    const amount = formData.get("amount");
    const description = formData.get("description");
    const stock = formData.get("stock");

    // Validate required fields
    if (!name || !category || !amount || !description || !stock || !thumbnail) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Create a new product document
    const newProduct = new Product({
      name,
      category,
      thumbnail,
      images: displayImages, // Multiple images handled
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
