import { TreatmentGrid } from "@/components/marketing/treatments/TreatmentGrid";

export const metadata = { title: "Treatments | Aura Aesthetics" };

const TREATMENTS = [
  { slug: "hydrafacial", name: "HydraFacial", category: "Facial Aesthetics", shortDescription: "Deep cleanse, extraction, and hydration in one session.", priceFrom: 180, imageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800" },
  { slug: "botox-fillers", name: "Botox & Fillers", category: "Facial Aesthetics", shortDescription: "Precision line-smoothing and volume restoration.", priceFrom: 450, imageUrl: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800" },
  { slug: "chemical-peels", name: "Chemical Peels", category: "Facial Aesthetics", shortDescription: "Resurface and brighten with a customized peel.", priceFrom: 150, imageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800" },
  { slug: "laser-resurfacing", name: "Laser Resurfacing", category: "Skin Rejuvenation", shortDescription: "Renewed texture and tone with minimal downtime.", priceFrom: 600, imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800" },
  { slug: "microneedling", name: "Microneedling", category: "Skin Rejuvenation", shortDescription: "Collagen induction for firmer, smoother skin.", priceFrom: 250, imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800" },
  { slug: "led-therapy", name: "LED Therapy", category: "Skin Rejuvenation", shortDescription: "Calming light therapy for tone and clarity.", priceFrom: 90, imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800" },
  { slug: "coolsculpting", name: "CoolSculpting", category: "Body Contouring", shortDescription: "Non-invasive fat reduction, no downtime.", priceFrom: 750, imageUrl: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800" },
  { slug: "radiofrequency", name: "Radiofrequency Toning", category: "Body Contouring", shortDescription: "Skin tightening through targeted heat therapy.", priceFrom: 400, imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800" },
];

export default function TreatmentsPage() {
  return (
    <section className="pt-40 pb-24 max-w-6xl mx-auto px-6">
      <p className="section-eyebrow">All Treatments</p>
      <h1 className="font-display text-5xl mt-3 mb-10">Find your treatment</h1>
      <TreatmentGrid treatments={TREATMENTS} />
    </section>
  );
}
