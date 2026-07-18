"use client";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus("done");
    } catch {
      setStatus("idle");
    }
  }

  return (
    <section className="pt-40 pb-24 max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
        <p className="section-eyebrow">Contact</p>
        <h1 className="font-display text-5xl mt-3">Let&rsquo;s talk</h1>
        <div className="mt-8 space-y-4 text-obsidian/70">
          <p className="flex items-center gap-3"><MapPin size={18} className="text-gold-luxe" /> 200 Wellness Ave, Suite 4B</p>
          <p className="flex items-center gap-3"><Phone size={18} className="text-gold-luxe" /> (555) 123-4567</p>
          <p className="flex items-center gap-3"><Mail size={18} className="text-gold-luxe" /> hello@auraaesthetics.example.com</p>
        </div>
      </div>

      {status === "done" ? (
        <p className="font-display text-2xl">Thank you — we&rsquo;ll be in touch shortly.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-obsidian/10 outline-none focus:ring-1 focus:ring-gold-luxe"
          />
          <input
            required
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-obsidian/10 outline-none focus:ring-1 focus:ring-gold-luxe"
          />
          <textarea
            required
            placeholder="Message"
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-obsidian/10 outline-none focus:ring-1 focus:ring-gold-luxe"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 rounded-full bg-obsidian text-cream font-medium disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </section>
  );
}
