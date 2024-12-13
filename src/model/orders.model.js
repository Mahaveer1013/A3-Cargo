// import mongoose from "mongoose";

// // Define the Order Schema
// const orderSchema = new mongoose.Schema(
//   {
//     orderDate: {
//       type: Date,
//       required: true,
//     },
//     to: {
//       type: String,
//       required: true, // Name of the recipient or destination
//     },
//     toDescription: {
//       type: String,
//     },
//     products: {
//       type: [
//         {
//           product: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "Product", // Reference to the Product model
//             required: true,
//           },
//           quantity: {
//             type: Number,
//             required: true,
//             min: 1, // Quantity should be at least 1
//           },
//         },
//       ],
//       required: true,
//     },
//     totalPrice: {
//       type: Number,
//       required: true,
//       min: 0, // Total price should be a positive value
//     },
//     status: {
//       type: String,
//       enum: ["Pending", "Shipped", "Delivered", "Cancelled"], // Order status
//       default: "Pending",
//     },
//     paymentStatus: {
//       type: String,
//       enum: ["Pending", "Completed", "Failed"],
//       default: "Pending", // Payment status
//     },
//     deliveryDate: {
//       type: Date, // The expected delivery date
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// // Create and export the Order model
// const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

// export default Order;
