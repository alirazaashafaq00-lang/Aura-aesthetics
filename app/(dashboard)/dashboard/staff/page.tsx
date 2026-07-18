const STAFF = [
  { name: "Dr. Elena Marsh", role: "Medical Director" },
  { name: "Dr. Rohan Malhotra", role: "Cosmetic Surgeon" },
  { name: "Dr. Naomi Clarke", role: "Aesthetic Physician" },
];

export default function StaffPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl">Staff</h1>
        <button className="px-5 py-2.5 rounded-full bg-obsidian text-cream text-sm">+ Add Staff</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {STAFF.map((s) => (
          <div key={s.name} className="rounded-2xl border border-obsidian/10 bg-white p-6">
            <p className="font-display text-xl">{s.name}</p>
            <p className="text-sm text-obsidian/60 mt-1">{s.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
