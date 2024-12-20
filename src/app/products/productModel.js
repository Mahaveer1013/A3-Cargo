import { arrayBufferToBase64 } from "@/lib/buffer";
import { useEffect, useState } from "react";

const {
  faArrowRight,
  faTimes,
  faArrowLeft,
} = require("@fortawesome/free-solid-svg-icons");
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");
const { default: Image } = require("next/image");

const ProductDetailsModal = ({ product, onClose, onContact }) => {

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 py-auto">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg h-[90%] overflow-auto">
        <FontAwesomeIcon
          icon={faTimes}
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 cursor-pointer"
        />

        {/* Product Name */}
        <h2 className="text-2xl font-bold mb-2 text-center">{product.name}</h2>

        {/* Image Carousel */}
        <div className="relative mb-4 w-full flex justify-center items-center">
          <div className="relative w-full h-[30vh] max-h-[400px] flex justify-center items-center">
              <Image
                src={product.thumbnail}
                alt={product.name}
                className="rounded-md object-contain max-h-full"
                width={800}
                height={600}
              />
          </div>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-gray-600 font-semibold">Category:</div>
          <div className="text-gray-800">{product.category}</div>
          <div className="text-gray-600 font-semibold">Price:</div>
          <div className="text-gray-800">₹{product.amount.toLocaleString()}</div>
          <div className="text-gray-600 font-semibold">Stock:</div>
          <div className="text-gray-800">{product.stock}</div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4">{product.description}</p>

        {/* Contact Button */}
        <button
          onClick={onContact}
          className="mt-4 w-full bg-green-600 text-white px-4 py-2 rounded-md shadow hover:bg-green-700"
        >
          Contact Seller
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsModal;