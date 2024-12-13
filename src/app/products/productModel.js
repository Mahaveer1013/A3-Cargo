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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [product.images.length]);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 py-auto">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg h-[80%]">
        <FontAwesomeIcon
          icon={faTimes}
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        />

        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
        <div className="relative mb-4 w-full flex justify-center items-center">
          {/* Image Carousel */}
          <div className="relative w-full h-[30vh] max-h-[500px] flex justify-center items-center">
            {product.images && product.images.length > 0 && (
              <Image
                src={`data:${
                  product.images[currentImageIndex].contentType
                };base64,${arrayBufferToBase64(
                  product.images[currentImageIndex].data.data
                )}`}
                alt={`Image ${currentImageIndex + 1}`}
                className="rounded-md object-contain max-h-full" // Ensures image fits within the container without stretching
                width={800} // Adjust based on desired image width
                height={600} // Adjust based on desired image height
              />
            )}
          </div>
          {/* Navigation buttons */}
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full hover:bg-gray-700"
          />
          <FontAwesomeIcon
            icon={faArrowRight}
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full hover:bg-gray-700"
          />
          {/* Optionally, display image indicators (dots) */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {product.images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentImageIndex === index ? "bg-green-600" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
        <p className="text-gray-600">{product.description}</p>
        <p className="mt-4 text-lg font-semibold">
          ₹{product.amount.toLocaleString()}
        </p>
        <button
          onClick={onContact}
          className="mt-4 w-full mx-auto bg-green-600 text-white px-4 py-2 rounded-md shadow hover:bg-green-700"
        >
          Contact Seller
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
