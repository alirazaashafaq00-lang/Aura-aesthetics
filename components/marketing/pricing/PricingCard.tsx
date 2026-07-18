import { Check } from "lucide-react";
import Link from "next/link";

export function PricingCard({
  tier,
  price,
  period,
  features,
  highlighted,
}: {
  tier: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-8 flex flex-col ${
        highlighted
          ? "bg-obsidian text-cream shadow-card scale-[1.03]"
          : "bg-cream border border-obsidian/10"
      }`}
    >
      {highlighted && (
        <span className="self-start text-xs px-3 py-1 rounded-full bg-gold-luxe text-obsidian mb-4">
          Most Popular
        </span>
      )}
      <p className="font-display text-2xl">{tier}</p>
      <p className="mt-4">
        <span className="text-4xl font-display">{price}</span>
        <span className={highlighted ? "text-cream/60" : "text-obsidian/50"}> /{period}</span>
      </p>
      <ul className="mt-6 space-y-3 text-sm flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Check size={16} className="text-teal-premium mt-0.5 shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href="/membership"
        className={`mt-8 text-center py-3 rounded-full text-sm font-medium transition-colors ${
          highlighted
            ? "bg-gold-luxe text-obsidian hover:bg-gold-light"
            : "bg-obsidian text-cream hover:bg-charcoal"
        }`}
      >
        Choose {tier}
      </Link>
    </div>
  );
}
