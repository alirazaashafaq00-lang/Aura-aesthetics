"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DoctorCard, type Doctor } from "./DoctorCard";

export function DoctorCarousel({ doctors }: { doctors: Doctor[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false });

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {doctors.map((doctor) => (
            <div key={doctor.name} className="min-w-[260px] md:min-w-[300px]">
              <DoctorCard doctor={doctor} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-3 mt-6">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="w-10 h-10 rounded-full border border-obsidian/15 flex items-center justify-center hover:border-gold-luxe"
          aria-label="Previous doctor"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="w-10 h-10 rounded-full border border-obsidian/15 flex items-center justify-center hover:border-gold-luxe"
          aria-label="Next doctor"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
