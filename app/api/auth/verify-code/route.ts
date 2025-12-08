import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { code } = await req.json();
    const result = { status: 200, message: "Code verified successfully" };
    return NextResponse.json(result);
}