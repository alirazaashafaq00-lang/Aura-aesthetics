"use client";

import { useState } from "react";
import { LightboxModal } from "./LightboxModal";

export function GalleryGrid({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setActiveIndex(i)}
            className="aspect-square rounded-xl overflow-hidden bg-cover bg-center hover:opacity-90 transition-opacity"
            style={{ backgroundImage: `url(${src})` }}
            aria-label={`Open image ${i + 1}`}
          />
        ))}
      </div>
      <LightboxModal
        images={images}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(-1)}
        onNavigate={setActiveIndex}
      />
    </>
  );
}
