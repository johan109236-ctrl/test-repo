import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import ContactFormEmail from "@/components/ContactFormEmail"
import CustomerAutoReplyEmail from "@/components/AutoReplyEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      fullName,
      email,
      country,
      mobileNo,
      package: packageName,
      comments,
    } = body;

    if (!fullName || !email || !country || !mobileNo || !packageName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    /* 1️⃣ Admin email */
    await resend.emails.send({
      from: "Nepal Himal Adventures <no-reply@nepalhimaladventures.com>",
      to: ["nepalhimaladventures431@gmail.com"],
      subject: "New Trek Inquiry",
      react: ContactFormEmail({
        name: fullName,
        email,
        country,
        mobileNo,
        packageName,
        message: comments || "No additional comments",
      }),
    });

    /* 2️⃣ Auto-reply to customer */
    await resend.emails.send({
      from: "Nepal Himal Adventures <no-reply@nepalhimaladventures.com>",
      to: [email],
      subject: "We’ve received your inquiry – Nepal Himal Adventures",
      react: CustomerAutoReplyEmail({
        name: fullName,
        packageName,
      }),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your inquiry. We will contact you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Failed to process your request" },
      { status: 500 }
    );
  }
}