import { ShieldCheck, Sparkles, HeartHandshake, Microscope } from "lucide-react";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Board-Certified Care",
    description: "Every procedure is led by a licensed, specialty-trained physician.",
  },
  {
    icon: Sparkles,
    title: "AI-Guided Precision",
    description: "Our skin analyzer maps your concerns before your first consult.",
  },
  {
    icon: Microscope,
    title: "Clinical-Grade Technology",
    description: "FDA-cleared devices and pharmaceutical-grade formulations only.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Partnership",
    description: "Treatment plans evolve with you — not a one-time transaction.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-charcoal text-cream">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-eyebrow">Why Aura</p>
        <h2 className="font-display text-4xl md:text-5xl mt-3 max-w-xl">
          Aesthetic medicine, held to a higher standard.
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-6 rounded-2xl bg-cream/5 border border-cream/10 hover:border-gold-luxe/50 transition-colors"
            >
              <Icon className="text-gold-luxe" size={28} />
              <p className="font-display text-xl mt-4">{title}</p>
              <p className="text-sm text-cream/60 mt-2">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
