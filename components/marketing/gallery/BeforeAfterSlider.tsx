"use client";

import { useBeforeAfter } from "@/hooks/useBeforeAfter";

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  label,
}: {
  beforeSrc: string;
  afterSrc: string;
  label?: string;
}) {
  const { containerRef, position, onPointerDown, onPointerUp, onPointerMove } = useBeforeAfter();

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      onPointerMove={onPointerMove}
      className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden select-none touch-none shadow-card"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${afterSrc})` }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${beforeSrc})`, clipPath: `inset(0 ${100 - position}% 0 0)` }}
      />
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-gold-luxe cursor-ew-resize"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-gold-luxe flex items-center justify-center text-obsidian text-xs font-medium">
          ↔
        </div>
      </div>
      <span className="absolute top-3 left-3 text-xs px-2 py-1 rounded-full bg-obsidian/70 text-cream">Before</span>
      <span className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full bg-teal-premium/80 text-cream">After</span>
      {label && (
        <span className="absolute bottom-3 left-3 text-xs px-2 py-1 rounded-full bg-obsidian/70 text-cream">
          {label}
        </span>
      )}
    </div>
  );
}
