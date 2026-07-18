"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  return (
    <>
      <h1 className="font-display text-3xl mb-6">Create your account</h1>
      <form className="space-y-4">
        <input
          required
          placeholder="Full name"
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
        <input
          required
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-obsidian/10 outline-none focus:ring-1 focus:ring-gold-luxe"
        />
        <button type="submit" className="w-full py-3.5 rounded-full bg-obsidian text-cream font-medium">
          Create Account
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-obsidian/60">
        Already have an account?{" "}
        <Link href="/login" className="text-teal-premium hover:underline">
          Sign in
        </Link>
      </p>
    </>
  );
}
