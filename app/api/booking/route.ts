import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Appointment from "@/models/Appointment";
import { sendBookingConfirmation } from "@/lib/resend";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  treatmentId: z.string().optional(),
  startTime: z.string(),
  isVirtual: z.boolean().optional(),
  notes: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = bookingSchema.parse(body);

    await connectToDatabase();
    const appointment = await Appointment.create({
      name: parsed.name,
      email: parsed.email,
      phone: parsed.phone,
      treatment: parsed.treatmentId,
      startTime: new Date(parsed.startTime),
      isVirtual: parsed.isVirtual ?? false,
      notes: parsed.notes,
      status: "pending",
    });

    await sendBookingConfirmation(parsed.email, parsed.name, parsed.startTime);

    return NextResponse.json({ success: true, appointment }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Booking failed" },
      { status: 400 }
    );
  }
}

export async function GET(req: NextRequest) {
  await connectToDatabase();
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  const query = email ? { email } : {};
  const appointments = await Appointment.find(query).sort({ startTime: 1 }).limit(50);

  return NextResponse.json({ appointments });
}
