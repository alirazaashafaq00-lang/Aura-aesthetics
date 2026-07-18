const CARDS = [
  { label: "Today's Appointments", value: "18" },
  { label: "Active Patients", value: "1,204" },
  { label: "Monthly Revenue", value: "$86,400" },
  { label: "Avg. Rating", value: "4.9 ★" },
];

export function StatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {CARDS.map((card) => (
        <div key={card.label} className="rounded-2xl border border-obsidian/10 p-6 bg-white">
          <p className="text-sm text-obsidian/50">{card.label}</p>
          <p className="font-display text-3xl mt-2">{card.value}</p>
        </div>
      ))}
    </div>
  );
}
