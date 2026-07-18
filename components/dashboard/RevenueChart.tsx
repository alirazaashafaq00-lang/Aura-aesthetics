"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const DATA = [
  { month: "Feb", revenue: 52000 },
  { month: "Mar", revenue: 61000 },
  { month: "Apr", revenue: 58000 },
  { month: "May", revenue: 70000 },
  { month: "Jun", revenue: 76000 },
  { month: "Jul", revenue: 86400 },
];

export function RevenueChart() {
  return (
    <div className="rounded-2xl border border-obsidian/10 bg-white p-6">
      <p className="font-display text-xl mb-4">Revenue</p>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={DATA}>
            <CartesianGrid stroke="#0F172A" strokeOpacity={0.06} vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} fontSize={12} />
            <YAxis tickLine={false} axisLine={false} fontSize={12} tickFormatter={(v) => `$${v / 1000}k`} />
            <Tooltip formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]} />
            <Line type="monotone" dataKey="revenue" stroke="#D4AF37" strokeWidth={2.5} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
