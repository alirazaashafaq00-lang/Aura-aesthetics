import { RecentAppointments } from "@/components/dashboard/RecentAppointments";

export default function AppointmentsPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-3xl">Appointments</h1>
      <RecentAppointments />
    </div>
  );
}
