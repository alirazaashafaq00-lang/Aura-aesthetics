import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { PatientGrowth } from "@/components/dashboard/PatientGrowth";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-3xl">Analytics</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <PatientGrowth />
      </div>
    </div>
  );
}
