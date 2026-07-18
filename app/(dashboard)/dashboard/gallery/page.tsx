const IMAGES = [
  "https://images.unsplash.com/photo-1552046122-04904dd3e7b0?w=300",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300",
];

export default function DashboardGalleryPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl">Gallery</h1>
        <button className="px-5 py-2.5 rounded-full bg-obsidian text-cream text-sm">+ Upload Image</button>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {IMAGES.map((src) => (
          <div key={src} className="aspect-square rounded-xl bg-cover bg-center" style={{ backgroundImage: `url(${src})` }} />
        ))}
      </div>
    </div>
  );
}
