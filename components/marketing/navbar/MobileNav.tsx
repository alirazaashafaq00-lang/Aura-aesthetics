"use client";

import Link from "next/link";
import { X } from "lucide-react";

type Link_ = { label: string; href: string };

export function MobileNav({
  open,
  onClose,
  links,
}: {
  open: boolean;
  onClose: () => void;
  links: Link_[];
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-obsidian text-cream flex flex-col p-8 lg:hidden">
      <div className="flex justify-between items-center mb-12">
        <span className="font-display text-2xl">Aura Aesthetics</span>
        <button onClick={onClose} aria-label="Close menu">
          <X size={28} />
        </button>
      </div>
      <ul className="flex flex-col gap-6 font-display text-3xl">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href as any} onClick={onClose}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/pricing"
        onClick={onClose}
        className="mt-auto text-center py-4 rounded-full bg-gold-luxe text-obsidian font-medium"
      >
        Book Now
      </Link>
    </div>
  );
}
