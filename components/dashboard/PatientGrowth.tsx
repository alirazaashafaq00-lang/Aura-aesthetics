"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const DATA = [
  { month: "Feb", patients: 84 },
  { month: "Mar", patients: 97 },
  { month: "Apr", patients: 91 },
  { month: "May", patients: 112 },
  { month: "Jun", patients: 130 },
  { month: "Jul", patients: 148 },
];

export function PatientGrowth() {
  return (
    <div className="rounded-2xl border border-obsidian/10 bg-white p-6">
      <p className="font-display text-xl mb-4">New Patients</p>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={DATA}>
            <CartesianGrid stroke="#0F172A" strokeOpacity={0.06} vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} fontSize={12} />
            <YAxis tickLine={false} axisLine={false} fontSize={12} />
            <Tooltip />
            <Bar dataKey="patients" fill="#14B8A6" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
