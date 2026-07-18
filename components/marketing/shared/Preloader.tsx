"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-obsidian flex items-center justify-center transition-opacity duration-500">
      <div className="text-center">
        <p className="font-display text-4xl text-cream tracking-widest">
          AURA
        </p>
        <div className="mt-4 h-px w-40 mx-auto overflow-hidden bg-cream/10">
          <div className="h-full w-1/2 bg-gold-luxe shimmer" />
        </div>
      </div>
    </div>
  );
}
