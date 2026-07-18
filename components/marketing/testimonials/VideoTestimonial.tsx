"use client";

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export function VideoTestimonial({
  videoUrl,
  posterUrl,
  name,
  quote,
}: {
  videoUrl: string;
  posterUrl: string;
  name: string;
  quote: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.pause();
    } else {
      video.play();
    }
    setPlaying(!playing);
  }

  return (
    <div className="relative rounded-2xl overflow-hidden aspect-[9/16] bg-obsidian shadow-card group">
      <video
        ref={videoRef}
        src={videoUrl}
        poster={posterUrl}
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
      <button
        onClick={toggle}
        className="absolute inset-0 flex items-center justify-center bg-obsidian/20 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label={playing ? "Pause testimonial" : "Play testimonial"}
      >
        <span className="w-14 h-14 rounded-full bg-cream/90 flex items-center justify-center">
          {playing ? <Pause size={22} /> : <Play size={22} className="ml-0.5" />}
        </span>
      </button>
      <div className="absolute bottom-0 p-4 text-cream bg-gradient-to-t from-obsidian to-transparent w-full">
        <p className="text-sm italic">&ldquo;{quote}&rdquo;</p>
        <p className="text-xs text-gold-light mt-1">{name}</p>
      </div>
    </div>
  );
}
