import { DoctorCarousel } from "@/components/marketing/doctors/DoctorCarousel";
import { connectToDatabase } from "@/lib/mongodb";
import Staff from "@/models/Staff";

export const metadata = { title: "Our Doctors | Aura Aesthetics" };
export const dynamic = "force-dynamic";

async function getDoctors() {
  await connectToDatabase();
  const docs = await Staff.find({}).lean();
  return docs.map((s: any) => ({
    name: s.name,
    title: s.title,
    imageUrl: s.imageUrl,
    qualifications: s.bio ? [s.bio] : [],
  }));
}

export default async function DoctorsPage() {
  const doctors = await getDoctors();

  return (
    <section className="pt-40 pb-24 max-w-6xl mx-auto px-6">
      <p className="section-eyebrow">Our Team</p>
      <h1 className="font-display text-5xl mt-3 mb-10">Meet the doctors</h1>
      <DoctorCarousel doctors={doctors} />
    </section>
  );
}
