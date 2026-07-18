export const metadata = { title: "About | Aura Aesthetics" };

export default function AboutPage() {
  return (
    <section className="pt-40 pb-24 max-w-4xl mx-auto px-6">
      <p className="section-eyebrow">Our Story</p>
      <h1 className="font-display text-5xl mt-3">Aesthetic medicine, made personal</h1>
      <p className="mt-6 text-obsidian/70 leading-relaxed">
        Aura Aesthetics was founded on a simple idea: the best results come from
        combining clinical rigor with genuine care. Our doctors, nurses, and
        estheticians work as one team around every patient's plan — supported by
        an AI skin analyzer that helps us start every consultation with data,
        not guesswork.
      </p>
      <p className="mt-4 text-obsidian/70 leading-relaxed">
        Today we welcome patients across in-clinic and virtual consultations,
        offering everything from single treatments to ongoing membership care.
      </p>
    </section>
  );
}
