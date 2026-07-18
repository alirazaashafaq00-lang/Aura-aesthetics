import { GalleryGrid } from "@/components/marketing/gallery/GalleryGrid";

export const metadata = { title: "Gallery | Aura Aesthetics" };

const IMAGES = [
  "https://images.unsplash.com/photo-1552046122-04904dd3e7b0?w=600",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600",
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600",
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
];

export default function GalleryPage() {
  return (
    <section className="pt-40 pb-24 max-w-6xl mx-auto px-6">
      <p className="section-eyebrow">Gallery</p>
      <h1 className="font-display text-5xl mt-3 mb-10">Our work</h1>
      <GalleryGrid images={IMAGES} />
    </section>
  );
}
