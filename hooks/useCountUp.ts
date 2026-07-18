"use client";

import { useEffect, useRef, useState } from "react";

export function useCountUp(target: number, durationMs = 1500, start = false) {
  const [value, setValue] = useState(0);
  const frame = useRef<number>();

  useEffect(() => {
    if (!start) return;

    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        frame.current = requestAnimationFrame(tick);
      }
    };

    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [target, durationMs, start]);

  return value;
}
