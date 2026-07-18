import { PricingCard } from "@/components/marketing/pricing/PricingCard";

export const metadata = { title: "Membership | Aura Aesthetics" };

export default function MembershipPage() {
  return (
    <section className="pt-40 pb-24 max-w-6xl mx-auto px-6">
      <p className="section-eyebrow text-center">Membership</p>
      <h1 className="font-display text-5xl mt-3 mb-10 text-center">Ongoing care, made simple</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PricingCard tier="Essentials" price="$99" period="mo" features={["1 facial treatment / quarter", "Member pricing on add-ons", "Priority booking"]} />
        <PricingCard tier="Signature" price="$249" period="mo" features={["1 treatment / month", "Free AI skin re-analysis", "Priority booking", "10% off all products"]} highlighted />
        <PricingCard tier="Concierge" price="$599" period="mo" features={["Unlimited consultations", "Quarterly signature treatment", "Dedicated care coordinator", "15% off all treatments"]} />
      </div>
    </section>
  );
}
