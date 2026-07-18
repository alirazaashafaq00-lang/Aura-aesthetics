const ROWS = [
  { name: "Jasmine Cole", treatment: "HydraFacial", time: "10:00 AM", status: "Confirmed" },
  { name: "Marco Diaz", treatment: "Botox & Fillers", time: "11:30 AM", status: "Pending" },
  { name: "Aiko Tanaka", treatment: "Laser Resurfacing", time: "1:00 PM", status: "Confirmed" },
  { name: "Leah Brooks", treatment: "Microneedling", time: "3:30 PM", status: "Cancelled" },
];

const STATUS_STYLE: Record<string, string> = {
  Confirmed: "bg-teal-premium/15 text-teal-premium",
  Pending: "bg-gold-luxe/15 text-gold-luxe",
  Cancelled: "bg-red-500/10 text-red-500",
};

export function RecentAppointments() {
  return (
    <div className="rounded-2xl border border-obsidian/10 bg-white overflow-hidden">
      <div className="px-6 py-4 border-b border-obsidian/10">
        <p className="font-display text-xl">Today&rsquo;s Appointments</p>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-obsidian/40">
            <th className="px-6 py-3 font-normal">Patient</th>
            <th className="px-6 py-3 font-normal">Treatment</th>
            <th className="px-6 py-3 font-normal">Time</th>
            <th className="px-6 py-3 font-normal">Status</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.name} className="border-t border-obsidian/5">
              <td className="px-6 py-3">{row.name}</td>
              <td className="px-6 py-3 text-obsidian/60">{row.treatment}</td>
              <td className="px-6 py-3 text-obsidian/60">{row.time}</td>
              <td className="px-6 py-3">
                <span className={`text-xs px-3 py-1 rounded-full ${STATUS_STYLE[row.status]}`}>
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
