// app/api/login/route.js
import { generateToken } from "@/lib/auth";

export async function POST(req) {
  const { password } = await req.json(); // Extract password from the request body

  // Replace with your actual password validation logic
  const isPasswordCorrect = password === process.env.ADMIN_PASSWORD;

  if (!isPasswordCorrect) {
    return new Response(
      JSON.stringify({ success: false, message: "Invalid password" }),
      { status: 401 }
    );
  }

  // If password is correct, generate a JWT token
  const token = generateToken({ user: "admin" });

  return new Response(JSON.stringify({ success: true, token }), {
    status: 200,
  });
}
