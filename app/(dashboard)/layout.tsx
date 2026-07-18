import { Sidebar } from "@/components/dashboard/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-[#F1F5F9] min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 md:p-10">{children}</main>
    </div>
  );
}
