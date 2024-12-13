"use client";

import { useEffect, useState } from "react";

const AdminLayout = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null = loading, true = authenticated, false = not authenticated
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Check for token in localStorage
    const token = localStorage.getItem("__token");

    if (token) {
      // If token exists, verify it with the backend
      const verifyToken = async () => {
        try {
          const res = await fetch("/api/user", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
          });

          const data = await res.json();

          if (data.success) {
            // If the token is valid, set authenticated state to true
            setIsAuthenticated(true);
          } else {
            // If the token is not valid, show login form
            setIsAuthenticated(false);
            localStorage.removeItem("__token");
          }
        } catch (error) {
          localStorage.removeItem("__token")
          console.error("Token verification error", error);
          setIsAuthenticated(false); // If there's an error, consider the token invalid
        }
      };

      verifyToken();
    } else {
      // If no token is found in localStorage, show the login form
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();

    // Send the password to the backend for validation (assuming you have an API for that)
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (data.success) {
        // If login is successful, save the token to localStorage
        localStorage.setItem("__token", data.token);
        setIsAuthenticated(true); // Update state to authenticated
        setError("");
      } else {
        setError("Invalid password");
      }
    } catch (error) {
      console.error("Login error", error);
      setError("An error occurred during login");
    }
  };

  if (isAuthenticated === null) {
    // Show loading state while checking authentication status
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="border-8 border-gray-200 border-t-8 border-t-blue-500 rounded-full w-12 h-12 animate-spin"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    // If not authenticated, show the password form
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

  // If authenticated, show the admin page content
  return (
    <div className="admin-layout">
      {/* Render the children (actual admin content) */}
      {children}
    </div>
  );
};

export default AdminLayout;
