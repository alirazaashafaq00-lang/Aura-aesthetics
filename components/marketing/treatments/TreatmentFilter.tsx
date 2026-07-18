"use client";

const CATEGORIES = ["All", "Facial Aesthetics", "Skin Rejuvenation", "Body Contouring"];

export function TreatmentFilter({
  active,
  onChange,
}: {
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`px-5 py-2 rounded-full text-sm border transition-colors ${
            active === category
              ? "bg-obsidian text-cream border-obsidian"
              : "border-obsidian/15 hover:border-gold-luxe"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
