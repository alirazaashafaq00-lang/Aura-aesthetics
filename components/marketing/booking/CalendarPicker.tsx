"use client";

import { useState } from "react";
import { useBookingSlots } from "@/hooks/useBookingSlots";

function nextDays(count: number) {
  return Array.from({ length: count }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d;
  });
}

export function CalendarPicker({
  onSelect,
}: {
  onSelect: (isoDateTime: string) => void;
}) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const { slots, loading } = useBookingSlots(selectedDate);
  const days = nextDays(7);

  function pickTime(time: string) {
    setSelectedTime(time);
    if (selectedDate) onSelect(`${selectedDate}T${time}:00`);
  }

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {days.map((d) => {
          const iso = d.toISOString().split("T")[0];
          const active = selectedDate === iso;
          return (
            <button
              key={iso}
              onClick={() => setSelectedDate(iso)}
              className={`shrink-0 w-16 py-3 rounded-xl border text-center ${
                active ? "bg-obsidian text-cream border-obsidian" : "border-obsidian/10"
              }`}
            >
              <p className="text-xs opacity-70">{d.toLocaleDateString("en-US", { weekday: "short" })}</p>
              <p className="font-display text-lg">{d.getDate()}</p>
            </button>
          );
        })}
      </div>

      {selectedDate && (
        <div className="mt-6 grid grid-cols-4 gap-2">
          {loading && <p className="col-span-4 text-sm text-obsidian/50">Loading availability...</p>}
          {!loading &&
            slots.map((slot) => (
              <button
                key={slot.time}
                disabled={!slot.available}
                onClick={() => pickTime(slot.time)}
                className={`py-2 rounded-lg text-sm border transition-colors ${
                  !slot.available
                    ? "opacity-30 cursor-not-allowed"
                    : selectedTime === slot.time
                    ? "bg-teal-premium text-white border-teal-premium"
                    : "border-obsidian/10 hover:border-gold-luxe"
                }`}
              >
                {slot.time}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}
