import { DoctorCarousel } from "@/components/marketing/doctors/DoctorCarousel";

export const metadata = { title: "Our Doctors | Aura Aesthetics" };

const DOCTORS = [
  { name: "Dr. Elena Marsh", title: "Medical Director", imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600", qualifications: ["MD, Dermatology", "15 yrs experience", "Board Certified"] },
  { name: "Dr. Rohan Malhotra", title: "Cosmetic Surgeon", imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600", qualifications: ["MD, Plastic Surgery", "12 yrs experience", "Fellowship trained"] },
  { name: "Dr. Naomi Clarke", title: "Aesthetic Physician", imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600", qualifications: ["MD, Aesthetic Medicine", "9 yrs experience", "Laser specialist"] },
];

export default function DoctorsPage() {
  return (
    <section className="pt-40 pb-24 max-w-6xl mx-auto px-6">
      <p className="section-eyebrow">Our Team</p>
      <h1 className="font-display text-5xl mt-3 mb-10">Meet the doctors</h1>
      <DoctorCarousel doctors={DOCTORS} />
    </section>
  );
}
