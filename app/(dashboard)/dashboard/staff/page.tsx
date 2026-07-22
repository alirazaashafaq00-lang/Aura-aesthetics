import { connectToDatabase } from "@/lib/mongodb";
import Staff from "@/models/Staff";

export const dynamic = "force-dynamic";

async function getStaff() {
  await connectToDatabase();
  const docs = await Staff.find({}).lean();
  return docs.map((s: any) => ({
    id: s._id.toString(),
    name: s.name,
    title: s.title,
  }));
}

export default async function StaffPage() {
  const staff = await getStaff();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl">Staff</h1>
        <button className="px-5 py-2.5 rounded-full bg-obsidian text-cream text-sm">+ Add Staff</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {staff.map((s) => (
          <div key={s.id} className="rounded-2xl border border-obsidian/10 bg-white p-6">
            <p className="font-display text-xl">{s.name}</p>
            <p className="text-sm text-obsidian/60 mt-1">{s.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
                   }
