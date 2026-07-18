import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pt-40 pb-24 max-w-lg mx-auto px-6 text-center">
      <p className="font-display text-6xl gold-text">404</p>
      <h1 className="font-display text-3xl mt-4">Page not found</h1>
      <p className="mt-3 text-obsidian/60">The page you're looking for doesn't exist.</p>
      <Link href="/" className="mt-8 inline-block px-7 py-3.5 rounded-full bg-obsidian text-cream font-medium">
        Back to Home
      </Link>
    </section>
  );
}
