"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";

const NAV_LINKS = [
  { label: "Treatments", href: "/treatments", mega: true },
  { label: "Doctors", href: "/doctors" },
  { label: "Gallery", href: "/gallery" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-card py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl tracking-wide text-obsidian">
          Aura <span className="gold-text">Aesthetics</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8 font-body text-sm">
          {NAV_LINKS.map((link) => (
            <li
              key={link.href}
              className="relative"
              onMouseEnter={() => link.mega && setMegaOpen(true)}
              onMouseLeave={() => link.mega && setMegaOpen(false)}
            >
              <Link href={link.href as any} className="hover:text-teal-premium transition-colors">
                {link.label}
              </Link>
              {link.mega && megaOpen && <MegaMenu />}
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/virtual-consultation"
            className="px-5 py-2.5 rounded-full border border-obsidian/15 text-sm hover:border-gold-luxe transition-colors"
          >
            Virtual Consult
          </Link>
          <Link
            href="/pricing"
            className="px-5 py-2.5 rounded-full bg-obsidian text-cream text-sm hover:bg-teal-premium transition-colors"
          >
            Book Now
          </Link>
        </div>

        <button
          className="lg:hidden text-obsidian"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </nav>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} links={NAV_LINKS} />
    </header>
  );
}
