import { StatCards } from "@/components/dashboard/StatCards";
import { RecentAppointments } from "@/components/dashboard/RecentAppointments";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { PatientGrowth } from "@/components/dashboard/PatientGrowth";

export default function DashboardOverviewPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl">Overview</h1>
        <p className="text-obsidian/50 text-sm mt-1">Welcome back — here's how the clinic is doing.</p>
      </div>
      <StatCards />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <PatientGrowth />
      </div>
      <RecentAppointments />
    </div>
  );
}
