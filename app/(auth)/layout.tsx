import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-obsidian px-6">
      <div className="w-full max-w-md">
        <Link href="/" className="block text-center font-display text-3xl text-cream mb-10">
          Aura <span className="gold-text">Aesthetics</span>
        </Link>
        <div className="bg-cream rounded-2xl p-8 shadow-card">{children}</div>
      </div>
    </div>
  );
}
