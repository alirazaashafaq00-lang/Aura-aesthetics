import { notFound } from "next/navigation";
import Link from "next/link";
import { BeforeAfterSlider } from "@/components/marketing/gallery/BeforeAfterSlider";

const TREATMENTS: Record<string, { name: string; category: string; description: string; priceFrom: number; duration: string; downtime: string }> = {
  hydrafacial: { name: "HydraFacial", category: "Facial Aesthetics", description: "A multi-step treatment that cleanses, extracts, and hydrates using patented vortex technology, leaving skin visibly smoother and radiant with zero downtime.", priceFrom: 180, duration: "45 min", downtime: "None" },
  "botox-fillers": { name: "Botox & Fillers", category: "Facial Aesthetics", description: "Precision neuromodulator and filler placement to soften lines and restore volume, tailored to your facial anatomy by a board-certified physician.", priceFrom: 450, duration: "30 min", downtime: "Minimal, 24-48 hrs" },
  "laser-resurfacing": { name: "Laser Resurfacing", category: "Skin Rejuvenation", description: "Fractional laser technology renews the skin's surface, improving texture, tone, and fine lines over a short series of sessions.", priceFrom: 600, duration: "60 min", downtime: "3-5 days" },
};

export function generateStaticParams() {
  return Object.keys(TREATMENTS).map((slug) => ({ slug }));
}

export default function TreatmentDetailPage({ params }: { params: { slug: string } }) {
  const treatment = TREATMENTS[params.slug];
  if (!treatment) notFound();

  return (
    <section className="pt-40 pb-24 max-w-5xl mx-auto px-6">
      <p className="section-eyebrow">{treatment.category}</p>
      <h1 className="font-display text-5xl mt-3">{treatment.name}</h1>
      <p className="mt-6 text-obsidian/70 max-w-2xl leading-relaxed">{treatment.description}</p>

      <div className="mt-8 flex flex-wrap gap-8 text-sm">
        <div>
          <p className="text-obsidian/40">From</p>
          <p className="font-display text-2xl gold-text">${treatment.priceFrom}</p>
        </div>
        <div>
          <p className="text-obsidian/40">Duration</p>
          <p className="font-medium">{treatment.duration}</p>
        </div>
        <div>
          <p className="text-obsidian/40">Downtime</p>
          <p className="font-medium">{treatment.downtime}</p>
        </div>
      </div>

      <div className="mt-12 max-w-md">
        <BeforeAfterSlider
          beforeSrc="https://images.unsplash.com/photo-1552046122-04904dd3e7b0?w=600"
          afterSrc="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600"
        />
      </div>

      <Link
        href="/virtual-consultation"
        className="mt-12 inline-block px-8 py-4 rounded-full bg-obsidian text-cream font-medium"
      >
        Book a Consultation
      </Link>
    </section>
  );
}
