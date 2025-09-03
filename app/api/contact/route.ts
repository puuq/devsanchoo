
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const { name, email, message } = body;

    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "santoshrai3.1415@gmail.com",
      subject: "New Contact From Client",
      html: `
        <h3>New message from ${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
