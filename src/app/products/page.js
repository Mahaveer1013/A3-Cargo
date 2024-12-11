"use client";

import React, { useState } from "react";
import productsData from "../../lib/products.json";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="h-full w-full p-4 bg-gray-100 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      {/* Display Main Categories */}
      <div className="flex flex-wrap gap-4 justify-center w-full">
        {productsData.map((category) => (
          <div
            key={category.code}
            onClick={() => handleCategoryClick(category)}
            className="cursor-pointer p-4 bg-white shadow-md rounded-lg w-64 hover:scale-105 transition transform duration-200"
          >
            <img
              src={category.image}
              alt={category.category}
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-center">
              {category.category}
            </h2>
          </div>
        ))}
      </div>

      {/* Display Products Below the Selected Category */}
      {selectedCategory && (
        <div className="mt-6 w-full">
          <br />
          <h2
            className="text-2xl font-bold mb-4"
            style={{ textAlign: "center" }}
          >
            Products in {selectedCategory.category}
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {selectedCategory.subcategories.flatMap((subcategory) =>
              subcategory.products.map((product) => (
                <div
                  key={product.name}
                  className="cursor-pointer p-4 bg-white shadow-md rounded-lg w-64 hover:scale-105 transition transform duration-200"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-medium text-center">
                    {product.name}
                  </h3>
                  <p className="text-sm text-center">{product.description}</p>
                  <p className="text-sm text-center font-bold">
                    Price: ₹{product.amount}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
