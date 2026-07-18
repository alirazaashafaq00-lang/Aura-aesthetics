"use client";

import { useState } from "react";
import { CalendarPicker } from "./CalendarPicker";

export function AppointmentForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", notes: "" });
  const [startTime, setStartTime] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!startTime) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, startTime }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="text-center py-16">
        <p className="font-display text-3xl">You&rsquo;re booked.</p>
        <p className="text-obsidian/60 mt-2">A confirmation email is on its way.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <p className="font-display text-xl mb-4">1. Pick a time</p>
        <CalendarPicker onSelect={setStartTime} />
      </div>

      <div>
        <p className="font-display text-xl mb-4">2. Your details</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            required
            placeholder="Full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="px-4 py-3 rounded-xl border border-obsidian/10 outline-none focus:ring-1 focus:ring-gold-luxe"
          />
          <input
            required
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="px-4 py-3 rounded-xl border border-obsidian/10 outline-none focus:ring-1 focus:ring-gold-luxe"
          />
          <input
            placeholder="Phone (optional)"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="px-4 py-3 rounded-xl border border-obsidian/10 outline-none focus:ring-1 focus:ring-gold-luxe sm:col-span-2"
          />
          <textarea
            placeholder="Anything we should know?"
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
            className="px-4 py-3 rounded-xl border border-obsidian/10 outline-none focus:ring-1 focus:ring-gold-luxe sm:col-span-2"
            rows={3}
          />
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">Something went wrong — please try again.</p>
      )}

      <button
        type="submit"
        disabled={!startTime || status === "loading"}
        className="w-full py-4 rounded-full bg-obsidian text-cream font-medium disabled:opacity-40"
      >
        {status === "loading" ? "Booking..." : "Confirm Appointment"}
      </button>
    </form>
  );
}
