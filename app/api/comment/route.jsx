import { NextResponse } from "next/server";
import data from "./data";

export async function GET() {
  return NextResponse.json(data, { status: 203 });
}

export async function POST(req) {
  const da = await req.json();
  console.log(da);

  const newUser = {
    id: data.length + 1,
    name: da.name,
  };

  data.push(newUser);

  return NextResponse.json(
    { message: "data succesfully save !" },
    { status: 200 }
  );
}

export async function PUT(request) {}
