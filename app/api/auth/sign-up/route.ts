import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import usersData from "@/app/data/users.json"

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password, name } = body;

  if (!email || !password || !name) {
    return NextResponse.json(
      { message: "Missing required fields", status: 400 },
      { status: 400 }
    );
  }

  const existingUser = usersData.find(
    (u: { email: string }) => u.email.trim().toLowerCase() === email.trim().toLowerCase()
  );

  if (existingUser) {
    return NextResponse.json(
      { message: "User already exists", status: 409 },
      { status: 409 }
    );
  }

  const newUser = {
    id: Date.now(),
    email,
    password,
    name,
  };

  const filePath = path.join(process.cwd(), "data", "users.json");
  const updatedUsers = [...usersData, newUser];
  fs.writeFileSync(filePath, JSON.stringify(updatedUsers, null, 2));

  const token = Buffer.from(`${email}-${Date.now()}`).toString("base64");

  const res = NextResponse.json({
    message: "Registration successful",
    token,
    user: newUser,
    status: 200,
  });

  res.cookies.set("token", token, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // أسبوع
  });

  return res;
}
