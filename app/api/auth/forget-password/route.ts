import { NextResponse } from "next/server";
import usersData from "@/app/data/users.json"
export async function POST(request: Request) {
    const body = await request.json();
    const email = body.email;
    const user = usersData.find(
    (u: { email: string; password: string }) =>
        u.email.trim().toLowerCase() === email
    );
    if (user === undefined) {
    return NextResponse.json({ message: "None Exist User", status: 401 });
  } else {
    const res = NextResponse.json({
      message: "Code sent successfully, please check your email",
      status: 200,
    })
    return res;
  }
   
} 