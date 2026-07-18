export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-xl">
      <h1 className="font-display text-3xl">Settings</h1>
      <div className="rounded-2xl border border-obsidian/10 bg-white p-6 space-y-4">
        <div>
          <label className="text-sm text-obsidian/60">Clinic name</label>
          <input defaultValue="Aura Aesthetics" className="w-full mt-1 px-4 py-3 rounded-xl border border-obsidian/10 outline-none focus:ring-1 focus:ring-gold-luxe" />
        </div>
        <div>
          <label className="text-sm text-obsidian/60">Contact email</label>
          <input defaultValue="hello@auraaesthetics.example.com" className="w-full mt-1 px-4 py-3 rounded-xl border border-obsidian/10 outline-none focus:ring-1 focus:ring-gold-luxe" />
        </div>
        <button className="px-6 py-3 rounded-full bg-obsidian text-cream text-sm font-medium">Save Changes</button>
      </div>
    </div>
  );
}
