import Link from "next/link";
import type { SkinAnalysisResult } from "@/lib/ai-service";

const SEVERITY_COLOR: Record<string, string> = {
  low: "bg-teal-premium/20 text-teal-premium",
  moderate: "bg-gold-luxe/20 text-gold-luxe",
  high: "bg-red-500/15 text-red-500",
};

export function ResultCard({ result }: { result: SkinAnalysisResult }) {
  return (
    <div className="rounded-2xl border border-obsidian/10 p-8 bg-cream">
      <p className="section-eyebrow">Your Analysis</p>
      <p className="font-display text-3xl mt-2">{result.skinType} skin</p>

      <div className="mt-6 space-y-3">
        {result.concerns.map((concern) => (
          <div key={concern.label} className="flex items-center justify-between">
            <span className="text-sm">{concern.label}</span>
            <span className={`text-xs px-3 py-1 rounded-full ${SEVERITY_COLOR[concern.severity]}`}>
              {concern.severity}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <p className="text-sm font-medium mb-2">Recommended treatments</p>
        <div className="flex flex-wrap gap-2">
          {result.recommendedTreatments.map((t) => (
            <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-obsidian/5">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-obsidian/10 pt-6">
        <span className="text-sm text-obsidian/60">Estimated range</span>
        <span className="font-display text-2xl gold-text">
          ${result.estimatedPriceRange[0]}–${result.estimatedPriceRange[1]}
        </span>
      </div>

      <Link
        href="/virtual-consultation"
        className="mt-8 block text-center py-3.5 rounded-full bg-obsidian text-cream font-medium"
      >
        Book a Consultation
      </Link>
      <p className="text-xs text-obsidian/40 mt-3 text-center">
        This is cosmetic guidance, not a medical diagnosis.
      </p>
    </div>
  );
}
