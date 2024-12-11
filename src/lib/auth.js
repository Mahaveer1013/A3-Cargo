// lib/auth.js
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET_KEY;  // Store your secret in .env.local for security

// Function to generate JWT
export function generateToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '10d' }); // Set expiration as needed
}
