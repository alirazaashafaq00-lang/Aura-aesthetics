import Link from "next/link";
import { HeroSection } from "@/components/marketing/hero/HeroSection";
import { Statistics } from "@/components/marketing/sections/Statistics";
import { TreatmentGrid } from "@/components/marketing/treatments/TreatmentGrid";
import { BeforeAfterSlider } from "@/components/marketing/gallery/BeforeAfterSlider";
import { DoctorCarousel } from "@/components/marketing/doctors/DoctorCarousel";
import { WhyChooseUs } from "@/components/marketing/sections/WhyChooseUs";
import { ProcessTimeline } from "@/components/marketing/sections/ProcessTimeline";
import { VideoTestimonial } from "@/components/marketing/testimonials/VideoTestimonial";
import { ReviewMarquee } from "@/components/marketing/testimonials/ReviewMarquee";
import { PriceCalculator } from "@/components/marketing/pricing/PriceCalculator";
import { PricingCard } from "@/components/marketing/pricing/PricingCard";
import { FAQ } from "@/components/marketing/sections/FAQ";
import { Newsletter } from "@/components/marketing/sections/Newsletter";
import { CTASection } from "@/components/marketing/sections/CTASection";
import { ArrowRight, Sparkles } from "lucide-react";

const FEATURED_TREATMENTS = [
  { slug: "hydrafacial", name: "HydraFacial", category: "Facial Aesthetics", shortDescription: "Deep cleanse, extraction, and hydration in one session.", priceFrom: 180, imageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800" },
  { slug: "botox-fillers", name: "Botox & Fillers", category: "Facial Aesthetics", shortDescription: "Precision line-smoothing and volume restoration.", priceFrom: 450, imageUrl: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800" },
  { slug: "laser-resurfacing", name: "Laser Resurfacing", category: "Skin Rejuvenation", shortDescription: "Renewed texture and tone with minimal downtime.", priceFrom: 600, imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800" },
];

const DOCTORS = [
  { name: "Dr. Elena Marsh", title: "Medical Director", imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600", qualifications: ["MD, Dermatology", "15 yrs experience", "Board Certified"] },
  { name: "Dr. Rohan Malhotra", title: "Cosmetic Surgeon", imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600", qualifications: ["MD, Plastic Surgery", "12 yrs experience", "Fellowship trained"] },
  { name: "Dr. Naomi Clarke", title: "Aesthetic Physician", imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600", qualifications: ["MD, Aesthetic Medicine", "9 yrs experience", "Laser specialist"] },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Trust bar */}
      <section className="py-8 bg-cream border-b border-obsidian/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6">
          <p className="text-xs uppercase tracking-widest text-obsidian/40">
            As featured in Vogue · Allure · Byrdie
          </p>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gold-luxe">★★★★★</span>
            <span className="font-medium">4.9</span>
            <span className="text-obsidian/50">(312 Google reviews)</span>
          </div>
        </div>
      </section>

      <Statistics />

      {/* AI Skin Analyzer CTA */}
      <section className="py-24 bg-teal-premium text-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs uppercase tracking-widest mb-4">
              <Sparkles size={14} /> New
            </div>
            <h2 className="font-display text-3xl md:text-4xl max-w-md">
              Upload your selfie. Get an instant AI skin analysis.
            </h2>
            <p className="mt-3 text-white/80 max-w-md">
              We map skin type, wrinkles, pigmentation, and pores, then suggest
              treatments and pricing tailored to you.
            </p>
          </div>
          <Link
            href="/skin-analyzer"
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-obsidian text-white font-medium hover:bg-charcoal transition-colors"
          >
            Try the Analyzer <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Featured treatments */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="section-eyebrow">Signature Treatments</p>
              <h2 className="font-display text-4xl md:text-5xl mt-3">Featured this season</h2>
            </div>
            <Link href="/treatments" className="hidden md:inline text-sm text-teal-premium hover:underline">
              View all treatments →
            </Link>
          </div>
          <TreatmentGrid treatments={FEATURED_TREATMENTS} />
        </div>
      </section>

      {/* Before/After gallery */}
      <section className="py-24 bg-charcoal text-cream">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-eyebrow">Real Results</p>
          <h2 className="font-display text-4xl md:text-5xl mt-3 mb-10">See the transformation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BeforeAfterSlider
              beforeSrc="https://images.unsplash.com/photo-1552046122-04904dd3e7b0?w=600"
              afterSrc="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600"
              label="Laser Resurfacing · 8 weeks"
            />
            <BeforeAfterSlider
              beforeSrc="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600"
              afterSrc="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600"
              label="HydraFacial · 3 sessions"
            />
            <BeforeAfterSlider
              beforeSrc="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600"
              afterSrc="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600"
              label="Botox & Fillers · 2 weeks"
            />
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-eyebrow">Meet the Doctors</p>
          <h2 className="font-display text-4xl md:text-5xl mt-3 mb-10">Your care team</h2>
          <DoctorCarousel doctors={DOCTORS} />
        </div>
      </section>

      <WhyChooseUs />

      {/* Virtual consultation CTA */}
      <section className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <p className="section-eyebrow">Virtual Consultation</p>
            <h2 className="font-display text-4xl mt-3">Talk to a doctor from anywhere</h2>
            <p className="mt-3 text-obsidian/60">
              A private video consultation to discuss your goals before you ever set foot in clinic.
            </p>
            <Link
              href="/virtual-consultation"
              className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-obsidian text-cream font-medium"
            >
              Book Virtual Consult <ArrowRight size={16} />
            </Link>
          </div>
          <div className="flex-1 w-full rounded-2xl border border-obsidian/10 p-6 bg-white shadow-card">
            <p className="text-sm text-obsidian/50 mb-3">Next available</p>
            <div className="grid grid-cols-4 gap-2">
              {["9:00", "10:30", "1:00", "3:30"].map((t) => (
                <div key={t} className="text-center py-2 rounded-lg border border-obsidian/10 text-sm">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProcessTimeline />

      {/* Video testimonials */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-eyebrow">In Their Words</p>
          <h2 className="font-display text-4xl md:text-5xl mt-3 mb-10">Patient stories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <VideoTestimonial videoUrl="" posterUrl="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400" name="Sofia R." quote="Results speak for themselves." />
            <VideoTestimonial videoUrl="" posterUrl="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400" name="Amir K." quote="The AI analyzer nailed it." />
            <VideoTestimonial videoUrl="" posterUrl="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400" name="Priya N." quote="Felt personal from the start." />
            <VideoTestimonial videoUrl="" posterUrl="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400" name="Daniel W." quote="Membership made it sustainable." />
          </div>
          <div className="mt-10">
            <ReviewMarquee />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-eyebrow text-center">Pricing & Membership</p>
          <h2 className="font-display text-4xl md:text-5xl mt-3 mb-10 text-center">Find your plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <PricingCard tier="Essentials" price="$99" period="mo" features={["1 facial treatment / quarter", "Member pricing on add-ons", "Priority booking"]} />
            <PricingCard tier="Signature" price="$249" period="mo" features={["1 treatment / month", "Free AI skin re-analysis", "Priority booking", "10% off all products"]} highlighted />
            <PricingCard tier="Concierge" price="$599" period="mo" features={["Unlimited consultations", "Quarterly signature treatment", "Dedicated care coordinator", "15% off all treatments"]} />
          </div>
          <PriceCalculator />
        </div>
      </section>

      <FAQ />

      {/* Blog teaser */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="section-eyebrow">Journal</p>
              <h2 className="font-display text-4xl md:text-5xl mt-3">From the blog</h2>
            </div>
            <Link href="/blog" className="hidden md:inline text-sm text-teal-premium hover:underline">
              Read the journal →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Understanding Your Skin Barrier", "Botox vs. Fillers: What's Right for You", "The Truth About Retinol"].map((title) => (
              <Link key={title} href="/blog" className="group">
                <div className="aspect-[4/3] rounded-xl bg-gold-light/60 mb-4 group-hover:opacity-80 transition-opacity" />
                <p className="font-display text-xl group-hover:text-gold-luxe transition-colors">{title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <CTASection />
    </>
  );
}
