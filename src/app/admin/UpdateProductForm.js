"use client";
import React, { useState, useEffect } from "react";

const UpdateProductForm = ({ product, updateProduct, closeModal }) => {
  const [formData, setFormData] = useState({
    name: product.name,
    category: product.category,
    amount: product.amount,
    description: product.description,
    stock: product.stock,
  });

  const [thumbnail, setThumbnail] = useState(null);

  const [updatedFields, setUpdatedFields] = useState(new Set());

  useEffect(() => {
    // Reset the updatedFields set when the form is reset
    setUpdatedFields(new Set());
  }, [product]);

  const handleFileChange = (e) => {
    const files = e.target.files;
    setThumbnail(files[0]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setUpdatedFields((prevFields) => prevFields.add(name));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert formData to FormData object for file upload
    const updatedData = new FormData();
    thumbnail && updatedData.append("thumbnail", thumbnail);

    // Append only the updated fields
    updatedFields.forEach((field) => {
      updatedData.append(field, formData[field]);
    });

    updateProduct(updatedData, product._id);
  };

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-bold mb-4">Update Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Amount</label>
            <input
              type="text"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Thumbnail</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Stock</label>
            <input
              type="text"
              name="stock"
              value={formData.stock}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProductForm;
