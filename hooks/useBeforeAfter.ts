"use client";

import { useCallback, useRef, useState } from "react";

export function useBeforeAfter(initial = 50) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(initial);
  const [dragging, setDragging] = useState(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = () => setDragging(true);
  const onPointerUp = () => setDragging(false);
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging) updateFromClientX(e.clientX);
  };

  return { containerRef, position, onPointerDown, onPointerUp, onPointerMove, setPosition };
}
