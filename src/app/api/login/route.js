// pages/api/login.js

import { generateToken } from "@/lib/auth";

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Validate credentials (This is just a simulation)
    if (username === 'user' && password === 'password') {
      // Create a payload with user information (can be extended)
      const payload = { userId: 123, username };
      
      // Generate the JWT
      const token = generateToken(payload);

      // Set the JWT in an HTTP-only cookie
      res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=3600; SameSite=Strict`);
      
      return res.status(200).json({ message: 'Logged in successfully' });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.status(405).json({ message: 'Method Not Allowed' });
}
