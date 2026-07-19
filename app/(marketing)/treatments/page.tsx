import { TreatmentGrid } from "@/components/marketing/treatments/TreatmentGrid";
import { connectToDatabase } from "@/lib/mongodb";
import Treatment from "@/models/Treatment";

export const metadata = { title: "Treatments | Aura Aesthetics" };
export const dynamic = "force-dynamic";

async function getTreatments() {
  await connectToDatabase();
  const docs = await Treatment.find({}).lean();
  return docs.map((t: any) => ({
    slug: t.slug,
    name: t.name,
    category: t.category,
    shortDescription: t.shortDescription,
    priceFrom: t.priceFrom,
    imageUrl: t.imageUrl,
  }));
}

export default async function TreatmentsPage() {
  const treatments = await getTreatments();

  return (
    <section className="pt-40 pb-24 max-w-6xl mx-auto px-6">
      <p className="section-eyebrow">All Treatments</p>
      <h1 className="font-display text-5xl mt-3 mb-10">Find your treatment</h1>
      <TreatmentGrid treatments={treatments} />
    </section>
  );
}
