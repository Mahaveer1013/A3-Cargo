"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPlus,
  faEdit,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import NewProductForm from "./NewProductForm";
import ViewProductModal from "./ViewProductModal";
import UpdateProductForm from "./UpdateProductForm";

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({
    name: "",
    category: "",
    amount: "",
    description: "",
  });
  const [modalName, setModalName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProduct = async (formData) => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });
      if (response.ok) {
        fetchProducts();
        setModalOpen(false);
        alert("Product submitted successfully!");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateProduct = async (formData, _id) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/products/${_id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });
      if (response.ok) {
        fetchProducts();
        setModalOpen(false);
        alert("Product Updated successfully!");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/products/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.ok) {
        fetchProducts();
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const openAddModal = () => {
    setModalName("Add New Product");
    setModalOpen(true);
  };

  const openViewModal = (product) => {
    setCurrentProduct(product);
    setModalName("View Product");
    setModalOpen(true);
  };

  const openUpdateModal = (product) => {
    setCurrentProduct(product);
    setModalName("Update Product");
    setModalOpen(true);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        {isLoading && (
          <div className="flex justify-center items-center h-screen w-screen absolute top-0 right-0 z-50">
            <div className="border-8 border-gray-200 border-t-8 border-t-blue-500 rounded-full w-12 h-12 animate-spin"></div>
          </div>
        )}
        <h1 className="md:text-3xl font-semibold text-gray-800 text-xl">Admin Panel</h1>
        <button
          onClick={openAddModal}
          className="bg-green-600 text-white px-4 py-1 rounded-md hover:bg-green-700 flex items-center gap-2 transition text-base md:text-xl md:py-2"
        >
          <FontAwesomeIcon icon={faPlus} /> Add Product
        </button>
      </div>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full table-auto text-sm text-gray-700">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-3 text-left">S.No</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">Amount</th>
              <th className="px-4 py-3 text-left">Stock</th>
              <th className="px-4 py-3 text-left">Description</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          {products && products.length ? (
            <tbody className="divide-y">
              {products.map((product, index) => (
                <tr key={product._id} className={index %2 ==0 ? `bg-gray-50` : `bg-gray-50`}>
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">{product.name}</td>
                  <td className="px-4 py-3">{product.category}</td>
                  <td className="px-4 py-3">{product.amount}</td>
                  <td className="px-4 py-3">{product.stock}</td>
                  <td className="px-4 py-3 text-ellipsis overflow-hidden max-w-[200px]">
                    {product.description?.slice(0, 40) + "..."}
                  </td>
                  <td className="px-4 py-3 flex justify-center gap-3">
                    <button
                      onClick={() => openViewModal(product)}
                      className="text-blue-600 hover:underline"
                      title="View Product"
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                    <button
                      onClick={() => openUpdateModal(product)}
                      className="text-blue-600 hover:underline"
                      title="Edit Product"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product._id)}
                      className="text-red-600 hover:underline"
                      title="Delete Product"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-6 text-lg text-gray-500"
                >
                  No products available.
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>

      {modalOpen && modalName === "Add New Product" && (
        <NewProductForm
          submitForm={handleAddProduct}
          closeModal={() => setModalOpen(false)}
        />
      )}

      {modalOpen && modalName === "View Product" && (
        <ViewProductModal product={currentProduct} closeModal={() => setModalOpen(false)} />
      )}

      {modalOpen && modalName === "Update Product" && (
        <UpdateProductForm
          product={currentProduct}
          updateProduct={handleUpdateProduct}
          closeModal={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminPage;
