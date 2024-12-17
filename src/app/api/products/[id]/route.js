// import { verifyToken } from "@/lib/auth";
// import dbConnect from "@/lib/dbConnect";
// import Product from "@/model/products.model";

// export const GET = async (req, { params }) => {
//   // Ensure database connection is established
//   await verifyToken(req);
//   await dbConnect();

//   const { id } = await params;

//   try {
//     // If an `id` is provided in query params, return a single product
//     if (id) {
//       const product = await Product.findOne({ _id: id });

//       if (!product) {
//         return new Response(JSON.stringify({ message: "Product not found" }), {
//           status: 404,
//         });
//       }

//       return new Response(JSON.stringify(product), { status: 200 });
//     }

//     // If no `id`, return a list of all products
//     const products = await Product.find();

//     return new Response(JSON.stringify(products), { status: 200 });
//   } catch (error) {
//     return new Response(
//       JSON.stringify({
//         error: "Error fetching products",
//         message: error.message,
//       }),
//       { status: 500 }
//     );
//   }
// };

// export const PUT = async (req, { params }) => {
//   // Ensure database connection is established
//   await verifyToken(req);
//   await dbConnect();

//   const { id } = await params;

//   const { name, category, thumbnail, images, amount, description, stock } =
//     await req.json();

//   // Validate input
//   if (!id) {
//     return new Response(JSON.stringify({ message: "Product ID is required" }), {
//       status: 400,
//     });
//   }

//   try {
//     // Find the product by ID and update it
//     const updatedProduct = await Product.findOneAndUpdate(
//       { _id: id },
//       {
//         name,
//         category,
//         rating,
//         feedbacks,
//         thumbnail,
//         images,
//         amount,
//         description,
//         brand,
//         stock,
//       },
//       { new: true } // Return the updated product
//     );

//     if (!updatedProduct) {
//       return new Response(JSON.stringify({ message: "Product not found" }), {
//         status: 404,
//       });
//     }

//     return new Response(
//       JSON.stringify({
//         message: "Product updated successfully",
//         updatedProduct,
//       }),
//       { status: 200 }
//     );
//   } catch (error) {
//     return new Response(
//       JSON.stringify({
//         error: "Error updating product",
//         message: error.message,
//       }),
//       { status: 500 }
//     );
//   }
// };

// export const DELETE = async (req, { params }) => {
//   // Ensure database connection is established
//   await verifyToken(req);
//   await dbConnect();

//   const { id } = await params;

//   if (!id) {
//     return new Response(JSON.stringify({ message: "Product ID is required" }), {
//       status: 400,
//     });
//   }

//   try {
//     // Delete the product by ID
//     const deletedProduct = await Product.findOneAndDelete({ _id: id });

//     if (!deletedProduct) {
//       return new Response(JSON.stringify({ message: "Product not found" }), {
//         status: 404,
//       });
//     }

//     return new Response(
//       JSON.stringify({ message: "Product deleted successfully" }),
//       { status: 200 }
//     );
//   } catch (error) {
//     return new Response(
//       JSON.stringify({
//         error: "Error deleting product",
//         message: error.message,
//       }),
//       { status: 500 }
//     );
//   }
// };

import { verifyToken } from "@/lib/auth";
import dbConnect from "@/lib/dbConnect";
import Product from "@/model/products.model";

export const GET = async (req, { params }) => {
  // Ensure database connection is established
  await verifyToken(req);
  await dbConnect();

  const { id } = await params;

  try {
    // If an `id` is provided in query params, return a single product
    if (id) {
      const product = await Product.findOne({ _id: id });

      if (!product) {
        return new Response(JSON.stringify({ message: "Product not found" }), {
          status: 404,
        });
      }

      return new Response(JSON.stringify(product), { status: 200 });
    }

    // If no `id`, return a list of all products
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

export const PUT = async (req, { params }) => {
  // Ensure database connection is established
  await verifyToken(req);
  await dbConnect();

  const { id } = await params;

  const { name, category, thumbnail, images, amount, description, stock } =
    await req.json();

  // Validate input
  if (!id) {
<<<<<<< HEAD
    return new Response(
      JSON.stringify({ message: "Product ID is required" }),
      { status: 400 }
    );
=======
    return new Response(JSON.stringify({ message: "Product ID is required" }), {
      status: 400,
    });
>>>>>>> 4d608516bca054f911099f060e9356e03141ea0f
  }

  try {
    // Find the product by ID and update it
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: id },
      {
        name,
        category,
<<<<<<< HEAD
=======
        rating,
        feedbacks,
>>>>>>> 4d608516bca054f911099f060e9356e03141ea0f
        thumbnail,
        images,
        amount,
        description,
<<<<<<< HEAD
=======
        brand,
>>>>>>> 4d608516bca054f911099f060e9356e03141ea0f
        stock,
      },
      { new: true } // Return the updated product
    );

    if (!updatedProduct) {
<<<<<<< HEAD
      return new Response(
        JSON.stringify({ message: "Product not found" }),
        { status: 404 }
      );
=======
      return new Response(JSON.stringify({ message: "Product not found" }), {
        status: 404,
      });
>>>>>>> 4d608516bca054f911099f060e9356e03141ea0f
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

export const DELETE = async (req, { params }) => {
  // Ensure database connection is established
  await verifyToken(req);
  await dbConnect();

  const { id } = await params;

  if (!id) {
<<<<<<< HEAD
    return new Response(
      JSON.stringify({ message: "Product ID is required" }),
      { status: 400 }
    );
=======
    return new Response(JSON.stringify({ message: "Product ID is required" }), {
      status: 400,
    });
>>>>>>> 4d608516bca054f911099f060e9356e03141ea0f
  }

  try {
    // Delete the product by ID
    const deletedProduct = await Product.findOneAndDelete({ _id: id });

    if (!deletedProduct) {
<<<<<<< HEAD
      return new Response(
        JSON.stringify({ message: "Product not found" }),
        { status: 404 }
      );
=======
      return new Response(JSON.stringify({ message: "Product not found" }), {
        status: 404,
      });
>>>>>>> 4d608516bca054f911099f060e9356e03141ea0f
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

