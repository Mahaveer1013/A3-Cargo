"use client";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const NewProductForm = ({ submitForm, closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    amount: "",
    description: "",
    stock: "",
  });

  const [thumbnail, setThumbnail] = useState(null);
  const [displayImages, setDisplayImages] = useState([]);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Convert amount and stock to numbers
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e, type) => {
    const files = e.target.files;
    if (type === "thumbnail") {
      setThumbnail(files[0]);
    } else if (type === "displayImages") {
      setDisplayImages(Array.from(files));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!thumbnail) {
      setError("Thumbnail image is required.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("amount", formData.amount);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("stock", formData.stock);
    formDataToSend.append("thumbnail", thumbnail);

    displayImages.forEach((image, index) => {
      formDataToSend.append(`displayImages[${index}]`, image);
    });

    try {
      const logFormData = (formData) => {
        for (let pair of formData.entries()) {
          console.log(pair[0], pair[1]);
        }
      };
      logFormData(formDataToSend);

      await submitForm(formDataToSend);
      alert("Product submitted successfully!");
    } catch (error) {
      console.error("Error submitting product:", error);
      setError("Failed to submit the product. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-3xl overflow-auto h-[80vh] relative">
        <FontAwesomeIcon
          onClick={closeModal}
          icon={faTimes}
          className="absolute right-4 top-4 p-2 bg-red-600 rounded-full text-white cursor-pointer"
        />
        <h3 className="text-2xl font-semibold mb-4">{formData.name}</h3>
        <form
          onSubmit={handleSubmit}
          className="p-4 bg-gray-100 rounded-lg max-w-md mx-auto"
        >
          <h2 className="text-xl font-bold mb-4">Add Product</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}

          {Object.keys(formData).map((key) => (
            <div className="mb-4" key={key}>
              <label
                htmlFor={key}
                className="block text-gray-700 font-medium mb-2"
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
              <input
                type="text"
                id={key}
                name={key}
                value={formData[key]}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                required={key !== "stock"} // stock is optional
              />
            </div>
          ))}

          <div className="mb-4">
            <label
              htmlFor="thumbnail"
              className="block text-gray-700 font-medium mb-2"
            >
              Thumbnail Image (Required)
            </label>
            <input
              type="file"
              id="thumbnail"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "thumbnail")}
              className="w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="displayImages"
              className="block text-gray-700 font-medium mb-2"
            >
              Display Images (Optional, max 2)
            </label>
            <input
              type="file"
              id="displayImages"
              accept="image/*"
              multiple
              onChange={(e) => handleFileChange(e, "displayImages")}
              className="w-full"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewProductForm;
