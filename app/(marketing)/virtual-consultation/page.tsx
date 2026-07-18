import { AppointmentForm } from "@/components/marketing/booking/AppointmentForm";

export const metadata = { title: "Virtual Consultation | Aura Aesthetics" };

export default function VirtualConsultationPage() {
  return (
    <section className="pt-40 pb-24 max-w-2xl mx-auto px-6">
      <p className="section-eyebrow">Virtual Consultation</p>
      <h1 className="font-display text-5xl mt-3 mb-10">Book your video visit</h1>
      <AppointmentForm />
    </section>
  );
}
