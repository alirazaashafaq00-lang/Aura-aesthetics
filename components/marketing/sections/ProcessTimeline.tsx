const STEPS = [
  { title: "Consultation", description: "A private conversation and, if you like, an AI skin scan." },
  { title: "Personalized Plan", description: "Your doctor designs a treatment path suited to your goals." },
  { title: "Treatment Day", description: "Delivered in a calm, private suite with comfort measures throughout." },
  { title: "Aftercare", description: "Follow-up check-ins and skin tracking as results settle in." },
];

export function ProcessTimeline() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        <p className="section-eyebrow text-center">The Process</p>
        <h2 className="font-display text-4xl md:text-5xl mt-3 text-center">From first visit to results</h2>

        <div className="mt-16 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-obsidian/10" />
          <div className="space-y-12">
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 ${
                  i % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""
                }`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold-luxe" />
                <div className="md:w-1/2" />
                <div className="pl-12 md:pl-0 md:w-1/2 md:px-8">
                  <p className="font-display text-2xl">{step.title}</p>
                  <p className="text-sm text-obsidian/60 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
