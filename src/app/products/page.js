"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Search, Filter, ShoppingCart, Star } from "lucide-react";
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/products`);
      const data = await response.json();

      if (Array.isArray(data)) {
        setProductsData((prev) => {
          const existingIds = new Set(prev.map((product) => product._id));
          const newProducts = data.filter(
            (product) => !existingIds.has(product._id)
          );
          return [...prev, ...newProducts];
        });
      } else {
        console.log("Fetched data is not an array:", data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
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

  const categories = productsData.length
    ? ["All", ...new Set(productsData.map((p) => p.category))]
    : [];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4 tracking-tight">
            Product Catalog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of high-quality products
          </p>

          <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="pl-12 pr-4 py-3 w-full border-2 border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            {categories.length > 1 && (
              <div className="relative w-full max-w-xs">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            )}
          </div>
        </header>

        {categories.length > 1 && (
          <div className="hidden md:flex justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-6 py-2 rounded-full shadow-md transition duration-300 flex items-center gap-2
                  ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-white text-blue-600 border hover:bg-blue-50"
                  }
                `}
              >
                <Filter className="w-5 h-5" />
                {category}
              </button>
            ))}
          </div>
        )}

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product._id}
                data-aos="fade-up"
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={`data:${
                      product.thumbnail.contentType
                    };base64,${arrayBufferToBase64(product.thumbnail.data.data)}`}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/80 rounded-full p-2">
                    <Star className="text-yellow-500 fill-yellow-500 w-6 h-6" />
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {product.name}
                  </h2>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-extrabold text-blue-600">
                      ₹{product.amount.toLocaleString()}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition flex items-center gap-2"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-3xl text-gray-400">No Products Found</h2>
            <p className="text-gray-500 mt-4">
              Try adjusting your search or filter
            </p>
          </div>
        )}
      </div>

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