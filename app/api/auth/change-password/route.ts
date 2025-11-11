import usersData from "@/app/data/users.json"

import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // كل دا مش مهم
  // هايبان في api
  const body = await request.json();
    const { password, confirmPassword } = body;
  if (!password || !confirmPassword) {
    return NextResponse.json(
      { message: "Missing required fields", status: 400,body:body },
      { status: 400 }
    );
  }
  if (password !== confirmPassword) {
    return NextResponse.json(
      { message: "Passwords do not match", status: 400 },
      { status: 400 }
    );
  }
  const existingUserPassword = usersData.find(
    (u: { password: string }) => u.password === password
  )
  console.log(existingUserPassword)
  if(!existingUserPassword){
    return NextResponse.json(
      { message: "User Not Exist", status: 400 },
      { status: 400 }
    );
  }
  existingUserPassword.password = password
  const filePath = path.join(process.cwd(), 'app', 'data', 'users.json');
  const updatedUsers = usersData.filter(user => user.id !== existingUserPassword.id);
  fs.writeFileSync(filePath, JSON.stringify(updatedUsers, null, 2));

  const res = NextResponse.json({
    message: "Password changed successfully",
    status: 200,
  })
  return res;
}