"use client";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const ViewProductModal = ({ product, closeModal }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 h-screen flex justify-center items-center z-50">
      <div className="relative bg-white p-6 rounded-md max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl w-full h-[90%] overflow-auto">
        {/* Close Button */}
        <FontAwesomeIcon
          icon={faTimes}
          onClick={closeModal}
          className="p-2 text-white rounded-full bg-red-500 absolute top-5 right-2 cursor-pointer hover:bg-red-600"
        />
        
        <h2 className="text-xl font-bold mb-4 text-center">Product Details</h2>
        <div className="mb-4">
          <Image
            width={1000}
            height={1000}
            src={product.thumbnail}
            alt={product.name}
            className="w-full h-auto object-cover mb-4 rounded-md"
          />
          
          <div className="space-y-2">
            <p>
              <strong>Name:</strong> {product.name}
            </p>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Amount:</strong> {product.amount}
            </p>
            <p>
              <strong>Description:</strong> {product.description}
            </p>
            <p>
              <strong>Stock:</strong> {product.stock}
            </p>
          </div>
        </div>
        
        {/* Close Button */}
        <div className="flex justify-end gap-4 mt-4">
          <button
            onClick={closeModal}
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProductModal;
