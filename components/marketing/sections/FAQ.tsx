"use client";

import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

const FAQS = [
  { q: "Is the AI skin analyzer a substitute for a doctor's diagnosis?", a: "No — it's a cosmetic guidance tool. Every recommendation is reviewed by a licensed physician before treatment begins." },
  { q: "How much downtime should I expect?", a: "It depends entirely on the treatment. Each treatment page lists an expected downtime range, and your doctor will confirm specifics for your plan." },
  { q: "Do you offer virtual consultations?", a: "Yes — book a virtual consultation from the navigation menu, or right from the homepage." },
  { q: "What's included in membership?", a: "Membership includes quarterly treatments, priority booking, and member-only pricing. See the Membership page for tiers." },
];

export function FAQ() {
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filtered = FAQS.filter((item) =>
    item.q.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        <p className="section-eyebrow text-center">FAQ</p>
        <h2 className="font-display text-4xl md:text-5xl mt-3 text-center">Common questions</h2>

        <div className="mt-10 relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-obsidian/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions..."
            className="w-full pl-11 pr-4 py-3 rounded-full border border-obsidian/10 outline-none focus:ring-1 focus:ring-gold-luxe"
          />
        </div>

        <div className="mt-8 divide-y divide-obsidian/10">
          {filtered.map((item, i) => (
            <div key={item.q} className="py-5">
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-medium">{item.q}</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${openIndex === i ? "rotate-180 text-gold-luxe" : ""}`}
                />
              </button>
              {openIndex === i && <p className="mt-3 text-sm text-obsidian/60">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
