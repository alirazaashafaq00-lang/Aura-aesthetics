const REVIEWS = [
  { name: "Sofia R.", text: "The most attentive clinic I've been to — results speak for themselves." },
  { name: "Amir K.", text: "The AI analyzer nailed exactly what my dermatologist confirmed later." },
  { name: "Priya N.", text: "Booked a virtual consult in minutes, in-clinic visit felt just as personal." },
  { name: "Daniel W.", text: "Membership pricing made ongoing treatments actually sustainable." },
];

export function ReviewMarquee() {
  const loop = [...REVIEWS, ...REVIEWS];

  return (
    <div className="overflow-hidden py-6 border-y border-obsidian/10">
      <div className="flex gap-8 animate-marquee w-max">
        {loop.map((review, i) => (
          <div key={i} className="flex items-center gap-3 whitespace-nowrap">
            <span className="text-gold-luxe">★★★★★</span>
            <p className="text-sm text-obsidian/70">
              &ldquo;{review.text}&rdquo; <span className="text-obsidian/40">— {review.name}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
