// app/api/login/route.js

import { verifyToken } from "@/lib/auth";

export async function GET(req) {
  try {
    await verifyToken(req);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });;
  } catch (e) {
    return new Response(JSON.stringify({ message: e }), {
      status: 404,
    });
  }
}
