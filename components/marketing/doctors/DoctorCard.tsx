"use client";

import { useState } from "react";

export type Doctor = {
  name: string;
  title: string;
  imageUrl: string;
  qualifications: string[];
};

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-card"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
        style={{ backgroundImage: `url(${doctor.imageUrl})`, transform: hovered ? "scale(1.05)" : "scale(1)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
      <div className="absolute bottom-0 p-6 text-cream w-full">
        <p className="font-display text-2xl">{doctor.name}</p>
        <p className="text-sm text-gold-light">{doctor.title}</p>
        <div
          className={`mt-3 space-y-1 overflow-hidden transition-all duration-300 ${
            hovered ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {doctor.qualifications.map((q) => (
            <p key={q} className="text-xs text-cream/70">
              • {q}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
