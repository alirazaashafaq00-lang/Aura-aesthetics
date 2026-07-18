"use client";

import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function LightboxModal({
  images,
  activeIndex,
  onClose,
  onNavigate,
}: {
  images: string[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  if (activeIndex < 0) return null;

  return (
    <div className="fixed inset-0 z-[70] bg-obsidian/95 flex items-center justify-center p-6">
      <button onClick={onClose} className="absolute top-6 right-6 text-cream" aria-label="Close">
        <X size={28} />
      </button>
      <button
        onClick={() => onNavigate((activeIndex - 1 + images.length) % images.length)}
        className="absolute left-6 text-cream"
        aria-label="Previous image"
      >
        <ChevronLeft size={32} />
      </button>
      <img
        src={images[activeIndex]}
        alt="Gallery"
        className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
      />
      <button
        onClick={() => onNavigate((activeIndex + 1) % images.length)}
        className="absolute right-6 text-cream"
        aria-label="Next image"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
}
