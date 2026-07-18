"use client";

import { useState } from "react";
import { TreatmentCard, type Treatment } from "./TreatmentCard";
import { TreatmentFilter } from "./TreatmentFilter";

export function TreatmentGrid({ treatments }: { treatments: Treatment[] }) {
  const [category, setCategory] = useState("All");

  const filtered =
    category === "All" ? treatments : treatments.filter((t) => t.category === category);

  return (
    <div>
      <TreatmentFilter active={category} onChange={setCategory} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((treatment) => (
          <TreatmentCard key={treatment.slug} treatment={treatment} />
        ))}
      </div>
    </div>
  );
}
