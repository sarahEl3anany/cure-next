import { NextResponse } from "next/server";
import usersData from "../../../data/users.json";
export async function POST(request: Request) {
  const body = await request.json();
  const email = body.email;
  const password = body.password;
  const user = usersData.find(
    (u: { email: string; password: string }) =>
      u.email.trim().toLowerCase() === email && u.password === password
  );
  if (user === undefined) {
    return NextResponse.json({ message: "Invalid credentials", status: 401 });
  } else {
    const token = Buffer.from(`${email}-${Date.now()}`).toString("base64");
    const res = NextResponse.json({
      message: "Login successful",
      token: token,
      user: user,
      status: 200,
    })
    res.cookies.set("token", token, { httpOnly: true, path: "/", maxAge: 60 * 60 * 24 * 7 });
    return res;
  }
}
