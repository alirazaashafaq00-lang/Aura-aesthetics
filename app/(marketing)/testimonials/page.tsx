import { VideoTestimonial } from "@/components/marketing/testimonials/VideoTestimonial";
import { ReviewMarquee } from "@/components/marketing/testimonials/ReviewMarquee";

export const metadata = { title: "Testimonials | Aura Aesthetics" };

export default function TestimonialsPage() {
  return (
    <section className="pt-40 pb-24 max-w-6xl mx-auto px-6">
      <p className="section-eyebrow">In Their Words</p>
      <h1 className="font-display text-5xl mt-3 mb-10">Patient stories</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <VideoTestimonial videoUrl="" posterUrl="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400" name="Sofia R." quote="Results speak for themselves." />
        <VideoTestimonial videoUrl="" posterUrl="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400" name="Amir K." quote="The AI analyzer nailed it." />
        <VideoTestimonial videoUrl="" posterUrl="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400" name="Priya N." quote="Felt personal from the start." />
        <VideoTestimonial videoUrl="" posterUrl="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400" name="Daniel W." quote="Membership made it sustainable." />
      </div>
      <div className="mt-10">
        <ReviewMarquee />
      </div>
    </section>
  );
}
