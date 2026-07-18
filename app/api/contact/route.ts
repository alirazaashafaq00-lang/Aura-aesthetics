import { NextRequest, NextResponse } from "next/server";
import { sendContactNotification } from "@/lib/resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(5),
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = schema.parse(await req.json());
    await sendContactNotification(name, email, message);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Message failed to send" },
      { status: 400 }
    );
  }
}
