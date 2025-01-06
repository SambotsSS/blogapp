// app/api/auth/[...nextauth]/route.js
import { authOptions } from "@/utils/auth"; // Path to your auth options
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
