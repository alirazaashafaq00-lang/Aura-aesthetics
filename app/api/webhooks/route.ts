import { NextRequest, NextResponse } from "next/server";

// Generic inbound webhook handler — e.g. payment provider or calendar sync.
// Verify the provider's signature header before trusting the payload in production.
export async function POST(req: NextRequest) {
  const payload = await req.json().catch(() => null);

  if (!payload) {
    return NextResponse.json({ success: false, error: "Invalid payload" }, { status: 400 });
  }

  console.log("Webhook received:", payload.type ?? "unknown");

  return NextResponse.json({ received: true });
}
