"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero3D = dynamic(() => import("./Hero3D").then((mod) => mod.Hero3D), {
  ssr: false,
});

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-obsidian text-cream">
      <Hero3D />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8">
          <Sparkles size={14} className="text-gold-luxe" />
          <span className="text-xs tracking-widest uppercase">AI-Powered Skin Intelligence</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl">
          Radiance, <span className="gold-text">engineered</span> for you.
        </h1>

        <p className="mt-6 max-w-xl text-cream/70 text-lg">
          Board-certified doctors, bespoke treatment plans, and an AI skin
          analyzer that reads your skin before you even sit down.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/skin-analyzer"
            className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gold-luxe text-obsidian font-medium hover:bg-gold-light transition-colors"
          >
            Analyze My Skin
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/virtual-consultation"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-cream/25 hover:border-gold-luxe transition-colors"
          >
            Book a Virtual Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
