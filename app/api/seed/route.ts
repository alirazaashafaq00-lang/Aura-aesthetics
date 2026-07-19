export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Treatment from "@/models/Treatment";

const TREATMENTS = [
  { name: "HydraFacial", slug: "hydrafacial", category: "Facial Aesthetics", shortDescription: "Deep cleanse, extraction, and hydration in one session.", description: "A multi-step treatment that cleanses, extracts, and hydrates using patented vortex technology.", priceFrom: 180, imageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800" },
  { name: "Botox & Fillers", slug: "botox-fillers", category: "Facial Aesthetics", shortDescription: "Precision line-smoothing and volume restoration.", description: "Precision neuromodulator and filler placement tailored to your facial anatomy.", priceFrom: 450, imageUrl: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800" },
  { name: "Laser Resurfacing", slug: "laser-resurfacing", category: "Skin Rejuvenation", shortDescription: "Renewed texture and tone with minimal downtime.", description: "Fractional laser technology renews the skin's surface over a short series of sessions.", priceFrom: 600, imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800" },
];

export async function GET() {
  await connectToDatabase();
  await Treatment.deleteMany({});
  const created = await Treatment.insertMany(TREATMENTS);
  return NextResponse.json({ success: true, count: created.length });
}
