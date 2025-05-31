import { NextResponse } from "next/server";
import connectionToDatabase from "@/lib/mongoose";
import User from "@/models/User";

export async function POST(request) {
  try {
    await connectionToDatabase("Products");
    const { email, password } = await request.json();
    console.log(email + " " + password);

    // Find user
    const user = await User.findOne({
      userEmail: email,
    });
    console.log(user);
    if (!user) {
      console.log("user not found");
      return NextResponse.json(
        JSON.stringify({ message: "User not found", success: false }),
        { status: 404 }
      );
    }

    // Compare password (plain for now)
    if (user.userPassword !== password) {
      return NextResponse.json(
        JSON.stringify({ message: "Incorrect password", success: false }),
        { status: 401 }
      );
    }

    return NextResponse.json(
      JSON.stringify({ message: "Login successful", user, success: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    // return NextResponse.json({ message: "Login failed" }, { status: 500 });
  }
}
