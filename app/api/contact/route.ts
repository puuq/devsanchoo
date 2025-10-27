import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const { name, email, message } = body;

    // You can log or handle the message in another way here if needed
    console.log("New contact form submission:", { name, email, message });

    // Simulate success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to process message." }, { status: 500 });
  }
}