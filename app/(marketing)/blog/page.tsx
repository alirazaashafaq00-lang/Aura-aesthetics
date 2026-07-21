import Link from "next/link";
import { connectToDatabase } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export const metadata = { title: "Blog | Aura Aesthetics" };
export const dynamic = "force-dynamic";

async function getPosts() {
  await connectToDatabase();
  const docs = await Blog.find({ published: true }).sort({ publishedAt: -1 }).lean();
  return docs.map((p: any) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
  }));
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section className="pt-40 pb-24 max-w-6xl mx-auto px-6">
      <p className="section-eyebrow">Journal</p>
      <h1 className="font-display text-5xl mt-3 mb-10">From the blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
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
