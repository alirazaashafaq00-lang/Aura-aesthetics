import { notFound } from "next/navigation";

const POSTS: Record<string, { title: string; content: string }> = {
  "understanding-skin-barrier": {
    title: "Understanding Your Skin Barrier",
    content:
      "Your skin barrier is the outermost layer standing between you and the environment. When it's healthy, it locks in moisture and keeps irritants out. Over-exfoliation, harsh actives, and extreme weather can weaken it — the fix is usually simplifying your routine, not adding more to it.",
  },
  "botox-vs-fillers": {
    title: "Botox vs. Fillers: What's Right for You",
    content:
      "Botox relaxes the muscles that cause dynamic lines, like crow's feet and forehead creases. Fillers add volume where it's been lost, like cheeks or lips. Many patients benefit from both, and a good consultation will map exactly where each one helps.",
  },
  "truth-about-retinol": {
    title: "The Truth About Retinol",
    content:
      "Retinol remains one of the most studied ingredients for renewing skin texture and softening fine lines. The key to avoiding irritation is starting slow — a pea-sized amount, two to three nights a week, building up gradually as your skin adjusts.",
  },
};

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = POSTS[params.slug];
  if (!post) notFound();

  return (
    <article className="pt-40 pb-24 max-w-2xl mx-auto px-6">
      <h1 className="font-display text-4xl md:text-5xl">{post.title}</h1>
      <p className="mt-8 text-obsidian/70 leading-relaxed text-lg">{post.content}</p>
    </article>
  );
}
