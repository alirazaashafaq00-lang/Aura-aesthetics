import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Treatment from "@/models/Treatment";
import Blog from "@/models/Blog";

const TREATMENTS = [
  { name: "HydraFacial", slug: "hydrafacial", category: "Facial Aesthetics", shortDescription: "Deep cleanse, extraction, and hydration in one session.", description: "A multi-step treatment that cleanses, extracts, and hydrates using patented vortex technology.", priceFrom: 180, imageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800" },
  { name: "Botox & Fillers", slug: "botox-fillers", category: "Facial Aesthetics", shortDescription: "Precision line-smoothing and volume restoration.", description: "Precision neuromodulator and filler placement tailored to your facial anatomy.", priceFrom: 450, imageUrl: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800" },
  { name: "Laser Resurfacing", slug: "laser-resurfacing", category: "Skin Rejuvenation", shortDescription: "Renewed texture and tone with minimal downtime.", description: "Fractional laser technology renews the skin's surface over a short series of sessions.", priceFrom: 600, imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800" },
];

const BLOG_POSTS = [
  { title: "Understanding Your Skin Barrier", slug: "understanding-skin-barrier", excerpt: "Why a healthy barrier is the foundation of every good skincare routine.", content: "Your skin barrier is the outermost layer standing between you and the environment. When it's healthy, it locks in moisture and keeps irritants out. Over-exfoliation, harsh actives, and extreme weather can weaken it — the fix is usually simplifying your routine, not adding more to it.", author: "Aura Aesthetics Team", published: true, publishedAt: new Date() },
  { title: "Botox vs. Fillers: What's Right for You", slug: "botox-vs-fillers", excerpt: "Two of the most requested treatments, explained side by side.", content: "Botox relaxes the muscles that cause dynamic lines, like crow's feet and forehead creases. Fillers add volume where it's been lost, like cheeks or lips. Many patients benefit from both, and a good consultation will map exactly where each one helps.", author: "Dr. Elena Marsh", published: true, publishedAt: new Date() },
  { title: "The Truth About Retinol", slug: "truth-about-retinol", excerpt: "How to introduce retinol without the irritation.", content: "Retinol remains one of the most studied ingredients for renewing skin texture and softening fine lines. The key to avoiding irritation is starting slow — a pea-sized amount, two to three nights a week, building up gradually as your skin adjusts.", author: "Dr. Naomi Clarke", published: true, publishedAt: new Date() },
];

export async function GET() {
  await connectToDatabase();

  await Treatment.deleteMany({});
  const treatments = await Treatment.insertMany(TREATMENTS);

  await Blog.deleteMany({});
  const posts = await Blog.insertMany(BLOG_POSTS);

  return NextResponse.json({
    success: true,
    treatments: treatments.length,
    posts: posts.length,
  });
  }
