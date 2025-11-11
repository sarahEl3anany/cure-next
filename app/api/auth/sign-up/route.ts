import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import usersData from "@/app/data/users.json"

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password, name, phone, confirmPassword } = body;
  if (!email || !password || !name || !phone || !confirmPassword) {
    return NextResponse.json(
      { message: "Missing required fields", status: 400,body:body },
      { status: 400 }
    );
  }

  const existingUserEmail = usersData.find(
    (u: { email: string }) => u.email.trim().toLowerCase() === email.trim().toLowerCase()
  );
  const existingUserPhone = usersData.find(
    (u: { phone: string }) => u.phone.trim().toLowerCase() === phone.trim().toLowerCase()
  )
  if (existingUserEmail) {
    return NextResponse.json(
      { message: "User email already exists", status: 409 },
      { status: 409 }
    );
  }
  if (existingUserPhone) {
    return NextResponse.json(
      { message: "User phone already exists", status: 409 },
      { status: 409 }
    );
  }
  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
    phone
  };

  const filePath = path.join(process.cwd(), 'app', "data", "users.json");
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
    maxAge: 60 * 60 * 24 * 7,
  });

  return res;
}
