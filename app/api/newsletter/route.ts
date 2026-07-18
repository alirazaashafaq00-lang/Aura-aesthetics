import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({ email: z.string().email() });

export async function POST(req: NextRequest) {
  try {
    const { email } = schema.parse(await req.json());
    // TODO: wire up to your list provider (Resend Audiences, Mailchimp, etc.)
    console.log("Newsletter signup:", email);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Invalid email" }, { status: 400 });
  }
}
