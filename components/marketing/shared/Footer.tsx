import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-obsidian text-cream/80 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <p className="font-display text-2xl text-cream mb-4">
            Aura <span className="gold-text">Aesthetics</span>
          </p>
          <p className="text-sm text-cream/60 max-w-xs">
            Bespoke aesthetic medicine, delivered with precision and care.
          </p>
          <div className="flex gap-4 mt-6">
            <Instagram size={18} className="hover:text-gold-luxe transition-colors cursor-pointer" />
            <Facebook size={18} className="hover:text-gold-luxe transition-colors cursor-pointer" />
            <Youtube size={18} className="hover:text-gold-luxe transition-colors cursor-pointer" />
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-gold-luxe mb-4">Explore</p>
          <ul className="space-y-3 text-sm">
            <li><Link href="/treatments">Treatments</Link></li>
            <li><Link href="/doctors">Doctors</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/membership">Membership</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-gold-luxe mb-4">Company</p>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Journal</Link></li>
            <li><Link href="/testimonials">Testimonials</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-gold-luxe mb-4">Newsletter</p>
          <p className="text-sm text-cream/60 mb-4">
            Skincare insight and early access to new treatments, monthly.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="you@email.com"
              className="flex-1 min-w-0 px-4 py-2.5 rounded-full bg-cream/10 text-sm placeholder:text-cream/40 outline-none focus:ring-1 focus:ring-gold-luxe"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-full bg-gold-luxe text-obsidian text-sm font-medium"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-cream/10 text-xs text-cream/40 flex flex-col md:flex-row justify-between gap-2">
        <p>© {new Date().getFullYear()} Aura Aesthetics. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
