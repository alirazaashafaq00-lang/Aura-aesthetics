import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type Treatment = {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  priceFrom: number;
  imageUrl: string;
};

export function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <Link
      href={`/treatments/${treatment.slug}` as any}
      className="group relative block rounded-2xl overflow-hidden bg-charcoal text-cream shadow-card [perspective:1000px]"
    >
      <div className="aspect-[4/5] w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${treatment.imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
      <div className="absolute bottom-0 p-6 w-full">
        <p className="text-xs uppercase tracking-widest text-gold-luxe">{treatment.category}</p>
        <div className="flex items-center justify-between mt-2">
          <p className="font-display text-2xl">{treatment.name}</p>
          <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
        </div>
        <p className="text-sm text-cream/60 mt-1 line-clamp-2">{treatment.shortDescription}</p>
        <p className="text-sm mt-3 text-gold-light">From ${treatment.priceFrom}</p>
      </div>
    </Link>
  );
}
