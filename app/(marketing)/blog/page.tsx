import Link from "next/link";

export const metadata = { title: "Blog | Aura Aesthetics" };

const POSTS = [
  { slug: "understanding-skin-barrier", title: "Understanding Your Skin Barrier", excerpt: "Why a healthy barrier is the foundation of every good skincare routine." },
  { slug: "botox-vs-fillers", title: "Botox vs. Fillers: What's Right for You", excerpt: "Two of the most requested treatments, explained side by side." },
  { slug: "truth-about-retinol", title: "The Truth About Retinol", excerpt: "How to introduce retinol without the irritation." },
];

export default function BlogPage() {
  return (
    <section className="pt-40 pb-24 max-w-6xl mx-auto px-6">
      <p className="section-eyebrow">Journal</p>
      <h1 className="font-display text-5xl mt-3 mb-10">From the blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {POSTS.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}` as any} className="group">
            <div className="aspect-[4/3] rounded-xl bg-gold-light/60 mb-4 group-hover:opacity-80 transition-opacity" />
            <p className="font-display text-2xl group-hover:text-gold-luxe transition-colors">{post.title}</p>
            <p className="text-sm text-obsidian/60 mt-2">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
