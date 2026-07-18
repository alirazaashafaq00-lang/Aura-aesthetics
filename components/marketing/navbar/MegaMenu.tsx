import Link from "next/link";

const CATEGORIES = [
  {
    title: "Facial Aesthetics",
    items: ["Botox & Fillers", "HydraFacial", "Chemical Peels"],
  },
  {
    title: "Skin Rejuvenation",
    items: ["Laser Resurfacing", "Microneedling", "LED Therapy"],
  },
  {
    title: "Body Contouring",
    items: ["CoolSculpting", "Radiofrequency", "Cellulite Reduction"],
  },
];

export function MegaMenu() {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[640px] glass rounded-2xl shadow-card p-8 grid grid-cols-3 gap-8">
      {CATEGORIES.map((category) => (
        <div key={category.title}>
          <p className="section-eyebrow mb-3">{category.title}</p>
          <ul className="space-y-2 text-sm">
            {category.items.map((item) => (
              <li key={item}>
                <Link href="/treatments" className="hover:text-teal-premium transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
