import { notFound } from "next/navigation";
import { connectToDatabase } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export const dynamic = "force-dynamic";

async function getPost(slug: string) {
  await connectToDatabase();
  const post = await Blog.findOne({ slug, published: true }).lean();
  return post;
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post: any = await getPost(params.slug);
  if (!post) notFound();

  return (
    <article className="pt-40 pb-24 max-w-2xl mx-auto px-6">
      <h1 className="font-display text-4xl md:text-5xl">{post.title}</h1>
      <p className="text-sm text-obsidian/50 mt-3">By {post.author}</p>
      <p className="mt-8 text-obsidian/70 leading-relaxed text-lg">{post.content}</p>
    </article>
  );
}
