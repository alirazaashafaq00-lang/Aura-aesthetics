"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";

const STATS = [
  { value: 12000, suffix: "+", label: "Treatments Performed" },
  { value: 98, suffix: "%", label: "Patient Satisfaction" },
  { value: 15, suffix: "", label: "Board-Certified Doctors" },
  { value: 9, suffix: "yrs", label: "In Practice" },
];

function StatItem({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const count = useCountUp(value, 1600, start);
  return (
    <div className="text-center">
      <p className="font-display text-5xl gold-text">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-obsidian/60">{label}</p>
    </div>
  );
}

export function Statistics() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
        {STATS.map((stat) => (
          <StatItem key={stat.label} {...stat} start={isVisible} />
        ))}
      </div>
    </section>
  );
}
