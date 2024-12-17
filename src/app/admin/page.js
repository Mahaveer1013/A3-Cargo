"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import NewProductForm from "./NewProductForm";
import Update from "./Update";

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
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
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
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

  const handleDeleteProduct = async (id) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/products/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      if (response.ok) fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const openAddModal = () => setModalOpen(true);

  const openEditModal = (product) => {
    setCurrentProduct(product);
    setUpdateModalOpen(true);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        {isLoading && (
          <div className="flex justify-center items-center h-screen w-screen absolute top-0 right-0 z-50">
            <div className="border-8 border-gray-200 border-t-8 border-t-blue-500 rounded-full w-12 h-12 animate-spin"></div>
          </div>
        )}
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <button
          onClick={openAddModal}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faPlus} /> Add Product
        </button>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Category</th>
            <th className="border border-gray-300 px-4 py-2">Amount</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>

        {products && products.length ? (
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">
                  {product.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.category}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.amount}
                </td>
                <td className="border border-gray-300 px-4 py-2 flex justify-center gap-4">
                  <button
                    onClick={() => openEditModal(product)}
                    className="text-blue-600 hover:underline"
                  >
                    <FontAwesomeIcon icon={faEdit} /> Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product._id)}
                    className="text-red-600 hover:underline"
                  >
                    <FontAwesomeIcon icon={faTrash} /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan={4}>
                <p className="text-xl text-center w-full">No Data Available</p>
              </td>
            </tr>
          </tbody>
        )}
      </table>

      {modalOpen && (
        <NewProductForm
          submitForm={handleAddProduct}
          closeModal={() => setModalOpen(false)}
        />
      )}
      {updateModalOpen && (
        <Update
          product={currentProduct}
          closeModal={() => setUpdateModalOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminPage;
