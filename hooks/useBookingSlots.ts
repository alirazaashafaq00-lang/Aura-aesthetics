"use client";

import { useEffect, useState } from "react";

export type Slot = { time: string; available: boolean };

export function useBookingSlots(date: string | null) {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!date) return;
    setLoading(true);

    // Placeholder generation until wired to the real calendar/availability API.
    const generated: Slot[] = Array.from({ length: 8 }, (_, i) => {
      const hour = 9 + i;
      return { time: `${hour}:00`, available: Math.random() > 0.3 };
    });

    const timeout = setTimeout(() => {
      setSlots(generated);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [date]);

  return { slots, loading };
}
