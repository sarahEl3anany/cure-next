import { NextResponse } from "next/server";
import usersData from "@/data/users.json";
export async function POST(request: Request) {
    const { email, password } = await request.json();
    
    const user = usersData.find(
        (us: { email: string; password: string }) => us.email === email && us.password === password
    );

    if (user) {
        return NextResponse.json({ message: "Login successful" });
    } else {
        return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }
    const token = Buffer.from(`${email}-${Date.now()}`).toString("base64");
    return NextResponse.json({ 
        message: "Login successful",
        token: token,
        user: user
    });
}