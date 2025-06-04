import connectionToDatabase from "@/lib/mongoose";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectionToDatabase("Users");
    const { userName, userEmail, userPassword } = await request.json();
    const time = new Date();
    const newUser = new User({
      userName,
      userEmail,
      userPassword,
      time: time.toString(),
    });
    await newUser.save();
    return NextResponse.json(
      JSON.stringify({
        success: true,
        message: "User created successfully",
        newUser,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json({ message: "Register failed" }, { status: 500 });
  }
}
