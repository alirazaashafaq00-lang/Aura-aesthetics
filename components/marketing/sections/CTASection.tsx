import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-28 bg-luxury-gradient text-obsidian text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl">Book your transformation.</h2>
        <p className="mt-4 text-obsidian/70">
          A private consultation, tailored to your skin and your goals.
        </p>
        <Link
          href="/virtual-consultation"
          className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-obsidian text-cream font-medium hover:bg-charcoal transition-colors"
        >
          Book Now
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
