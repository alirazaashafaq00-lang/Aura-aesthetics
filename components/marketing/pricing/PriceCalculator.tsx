"use client";

import { useMemo, useState } from "react";
import { formatCurrency } from "@/lib/utils";

const TREATMENT_PRICES: Record<string, number> = {
  "Botox & Fillers": 450,
  HydraFacial: 180,
  "Chemical Peel": 150,
  "Laser Resurfacing": 600,
  Microneedling: 250,
  CoolSculpting: 750,
};

export function PriceCalculator() {
  const [selected, setSelected] = useState<string[]>([]);
  const total = useMemo(
    () => selected.reduce((sum, name) => sum + TREATMENT_PRICES[name], 0),
    [selected]
  );

  function toggle(name: string) {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  }

  return (
    <div className="rounded-2xl border border-obsidian/10 p-8 bg-cream">
      <p className="font-display text-2xl mb-6">Estimate your visit</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {Object.entries(TREATMENT_PRICES).map(([name, price]) => (
          <label
            key={name}
            className={`flex items-center justify-between px-4 py-3 rounded-xl border cursor-pointer text-sm transition-colors ${
              selected.includes(name)
                ? "border-gold-luxe bg-gold-light/40"
                : "border-obsidian/10"
            }`}
          >
            <span className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selected.includes(name)}
                onChange={() => toggle(name)}
                className="accent-gold-luxe"
              />
              {name}
            </span>
            <span className="text-obsidian/50">{formatCurrency(price)}</span>
          </label>
        ))}
      </div>
      <div className="mt-8 flex items-center justify-between border-t border-obsidian/10 pt-6">
        <span className="text-obsidian/60">Estimated total</span>
        <span className="font-display text-3xl gold-text">{formatCurrency(total)}</span>
      </div>
    </div>
  );
}
