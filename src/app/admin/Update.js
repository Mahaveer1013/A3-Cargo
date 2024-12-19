

import React, { useState, useEffect } from "react";
import axios from "axios";

const Update = ({ product, closeModal }) => {
  const [formData, setFormData] = useState({
    name: product.name,
    category: product.category,
    thumbnail: product.thumbnail,
    images: product.images,
    amount: product.amount,
    description: product.description,
    stock: product.stock,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `/api/products/${product._id}`, // Ensure the correct API route
        formData
      );

      // Handle the response
      if (response.status === 200) {
        alert("Product updated successfully!");
        closeModal(); // Close the modal if update is successful
      }
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Error updating product. Please try again.");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Update Product</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Category:</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>
          {/* <div>
            <label>Thumbnail:</label>
            <input
              type="text"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Images:</label>
            <input
              type="text"
              name="images"
              value={formData.images}
              onChange={handleChange}
            />
          </div> */}
          <div>
            <label>Amount:</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Stock:</label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
