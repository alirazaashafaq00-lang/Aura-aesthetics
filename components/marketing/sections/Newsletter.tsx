"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setStatus("done");
      setEmail("");
    } catch {
      setStatus("idle");
    }
  }

  return (
    <section className="py-20 bg-gold-light">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-obsidian">
          Skincare insight, once a month.
        </h2>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="px-5 py-3 rounded-full border border-obsidian/10 outline-none focus:ring-1 focus:ring-gold-luxe min-w-[280px]"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-7 py-3 rounded-full bg-obsidian text-cream font-medium disabled:opacity-60"
          >
            {status === "done" ? "Subscribed" : status === "loading" ? "Joining..." : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}
