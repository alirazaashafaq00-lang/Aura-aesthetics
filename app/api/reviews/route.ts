import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Review from "@/models/Review";
import { fetchGoogleReviews } from "@/lib/google-reviews";

export async function GET() {
  await connectToDatabase();
  const [siteReviews, google] = await Promise.all([
    Review.find({ approved: true }).sort({ createdAt: -1 }).limit(20),
    fetchGoogleReviews(),
  ]);

  return NextResponse.json({ siteReviews, google });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await connectToDatabase();
    const review = await Review.create({ ...body, approved: false });
    return NextResponse.json({ success: true, review }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Could not submit review" },
      { status: 400 }
    );
  }
}
