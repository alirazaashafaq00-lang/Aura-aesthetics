const TREATMENTS = [
  { name: "HydraFacial", category: "Facial Aesthetics", price: 180 },
  { name: "Botox & Fillers", category: "Facial Aesthetics", price: 450 },
  { name: "Laser Resurfacing", category: "Skin Rejuvenation", price: 600 },
];

export default function DashboardTreatmentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl">Treatments</h1>
        <button className="px-5 py-2.5 rounded-full bg-obsidian text-cream text-sm">+ Add Treatment</button>
      </div>
      <div className="rounded-2xl border border-obsidian/10 bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-obsidian/40">
              <th className="px-6 py-3 font-normal">Name</th>
              <th className="px-6 py-3 font-normal">Category</th>
              <th className="px-6 py-3 font-normal">Price From</th>
            </tr>
          </thead>
          <tbody>
            {TREATMENTS.map((t) => (
              <tr key={t.name} className="border-t border-obsidian/5">
                <td className="px-6 py-3">{t.name}</td>
                <td className="px-6 py-3 text-obsidian/60">{t.category}</td>
                <td className="px-6 py-3 text-obsidian/60">${t.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
