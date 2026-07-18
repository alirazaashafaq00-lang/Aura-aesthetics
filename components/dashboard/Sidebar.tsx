"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  BarChart3,
  Sparkles,
  Image as ImageIcon,
  FileText,
  Star,
  UserCog,
  Settings,
} from "lucide-react";

const LINKS = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/appointments", label: "Appointments", icon: CalendarDays },
  { href: "/dashboard/patients", label: "Patients", icon: Users },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/dashboard/treatments", label: "Treatments", icon: Sparkles },
  { href: "/dashboard/gallery", label: "Gallery", icon: ImageIcon },
  { href: "/dashboard/blog", label: "Blog", icon: FileText },
  { href: "/dashboard/reviews", label: "Reviews", icon: Star },
  { href: "/dashboard/staff", label: "Staff", icon: UserCog },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 shrink-0 bg-obsidian text-cream min-h-screen p-6">
      <p className="font-display text-2xl mb-10">
        Aura <span className="gold-text">Admin</span>
      </p>
      <nav className="space-y-1">
        {LINKS.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href as any}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-colors ${
                active ? "bg-cream/10 text-gold-luxe" : "text-cream/70 hover:bg-cream/5"
              }`}
            >
              <Icon size={18} />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
