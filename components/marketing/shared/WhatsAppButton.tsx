"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/10000000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-teal-premium text-white flex items-center justify-center shadow-card hover:scale-105 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
