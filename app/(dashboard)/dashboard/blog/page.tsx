const POSTS = [
  { title: "Understanding Your Skin Barrier", status: "Published" },
  { title: "Botox vs. Fillers: What's Right for You", status: "Published" },
  { title: "The Truth About Retinol", status: "Draft" },
];

export default function DashboardBlogPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl">Blog</h1>
        <button className="px-5 py-2.5 rounded-full bg-obsidian text-cream text-sm">+ New Post</button>
      </div>
      <div className="rounded-2xl border border-obsidian/10 bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-obsidian/40">
              <th className="px-6 py-3 font-normal">Title</th>
              <th className="px-6 py-3 font-normal">Status</th>
            </tr>
          </thead>
          <tbody>
            {POSTS.map((p) => (
              <tr key={p.title} className="border-t border-obsidian/5">
                <td className="px-6 py-3">{p.title}</td>
                <td className="px-6 py-3 text-obsidian/60">{p.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
