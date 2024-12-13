// lib/auth.js
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET_KEY; // Store your secret in .env.local for security

// Function to generate JWT
export function generateToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "30d" }); // Set expiration as needed
}

export const verifyToken = async (req) => {
  const authHeader = req.headers.get("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return new Response(
      JSON.stringify({ message: "Authorization token missing or invalid" }),
      { status: 401 }
    );
  }

  const token = authHeader.split(" ")[1];

  try {
    // Verify the token using your secret key
    const secretKey = process.env.JWT_SECRET; // Ensure you have this in your `.env` file
    const decoded = jwt.verify(token, secretKey);

    return null; // Token is valid, no errors
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Invalid or expired token",
        error: error.message,
      }),
      { status: 403 }
    );
  }
};
