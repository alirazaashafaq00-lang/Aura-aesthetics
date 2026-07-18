"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <>
      <h1 className="font-display text-3xl mb-6">Reset your password</h1>
      {sent ? (
        <p className="text-obsidian/70">
          If an account exists for {email}, a reset link is on its way.
        </p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-4"
        >
          <input
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-obsidian/10 outline-none focus:ring-1 focus:ring-gold-luxe"
          />
          <button type="submit" className="w-full py-3.5 rounded-full bg-obsidian text-cream font-medium">
            Send Reset Link
          </button>
        </form>
      )}
    </>
  );
}
