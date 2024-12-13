"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import ProductDetailsModal from "./productModel";
import ContactModal from "./contactModal";
import { arrayBufferToBase64 } from "@/lib/buffer";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [productsData, setProductsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showContact, setShowContact] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const fetchProducts = async (page = 1, limit = 20) => {
    try {
      const response = await fetch(`/api/products?page=${page}&limit=${limit}`);
      const data = await response.json();

      console.log("Fetched Products:", data); // Check the structure of the data
      console.log(
        "First Product Thumbnail Data:",
        data.products[0].thumbnail.data
      ); // Check if data is correct

      if (Array.isArray(data.products)) {
        setProductsData((prev) => [...prev, ...data.products]);
        if (!data.hasMore) {
          setHasMore(false);
        }
      } else {
        console.error("Fetched data is not an array:", data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const loadMoreProducts = async () => {
    const nextPage = page + 1;
    await fetchProducts(nextPage);
    setPage(nextPage);
  };

  useEffect(() => {
    fetchProducts(); // Initial fetch
  }, []);

  useEffect(() => {
    const filtered = productsData.filter((product) => {
      const matchesSearchTerm = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearchTerm && matchesCategory;
    });
    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, productsData]);

  const categories = ["All", ...new Set(productsData.map((p) => p.category))];

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">
          E-Commerce Products
        </h1>
        <p className="text-gray-600 mt-2">
          Discover our wide range of products
        </p>
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="px-4 py-2 w-full max-w-md border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="relative w-full max-w-xs md:hidden">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-md appearance-none bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>
      <div className="hidden md:flex justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md shadow-md ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600 border"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            data-aos="fade-up"
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transform hover:scale-105 transition duration-300"
          >
            <Image
              src={`data:${
                product.thumbnail.contentType
              };base64,${arrayBufferToBase64(product.thumbnail.data.data)}`}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md"
              width={300}
              height={200}
            />

            <h2 className="text-lg font-semibold text-center mt-4">
              {product.name}
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              ₹{product.amount.toLocaleString()}
            </p>
            <button
              onClick={() => setSelectedProduct(product)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
      {hasMore && (
        <div className="text-center mt-6">
          <button
            onClick={loadMoreProducts}
            className="px-6 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
          >
            Load More
          </button>
        </div>
      )}
      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onContact={() => setShowContact(true)}
        />
      )}
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </div>
  );
};

export default Products;
