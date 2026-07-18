const REVIEWS = [
  { name: "Sofia R.", rating: 5, text: "Results speak for themselves.", approved: true },
  { name: "Amir K.", rating: 5, text: "The AI analyzer nailed it.", approved: true },
  { name: "New Patient", rating: 4, text: "Great first visit, a bit of a wait.", approved: false },
];

export default function DashboardReviewsPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-3xl">Reviews</h1>
      <div className="space-y-3">
        {REVIEWS.map((r) => (
          <div key={r.name} className="rounded-2xl border border-obsidian/10 bg-white p-5 flex items-center justify-between">
            <div>
              <p className="font-medium">{r.name} <span className="text-gold-luxe">{"★".repeat(r.rating)}</span></p>
              <p className="text-sm text-obsidian/60 mt-1">{r.text}</p>
            </div>
            <span className={`text-xs px-3 py-1 rounded-full ${r.approved ? "bg-teal-premium/15 text-teal-premium" : "bg-gold-luxe/15 text-gold-luxe"}`}>
              {r.approved ? "Approved" : "Pending"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
