const PATIENTS = [
  { name: "Jasmine Cole", email: "jasmine@example.com", lastVisit: "Jul 2, 2026" },
  { name: "Marco Diaz", email: "marco@example.com", lastVisit: "Jun 28, 2026" },
  { name: "Aiko Tanaka", email: "aiko@example.com", lastVisit: "Jun 20, 2026" },
];

export default function PatientsPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-3xl">Patients</h1>
      <div className="rounded-2xl border border-obsidian/10 bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-obsidian/40">
              <th className="px-6 py-3 font-normal">Name</th>
              <th className="px-6 py-3 font-normal">Email</th>
              <th className="px-6 py-3 font-normal">Last Visit</th>
            </tr>
          </thead>
          <tbody>
            {PATIENTS.map((p) => (
              <tr key={p.email} className="border-t border-obsidian/5">
                <td className="px-6 py-3">{p.name}</td>
                <td className="px-6 py-3 text-obsidian/60">{p.email}</td>
                <td className="px-6 py-3 text-obsidian/60">{p.lastVisit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
