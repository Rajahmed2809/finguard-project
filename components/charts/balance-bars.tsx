"use client"

import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Jan", amount: 3200 },
  { name: "Feb", amount: 2800 },
  { name: "Mar", amount: 3500 },
  { name: "Apr", amount: 3000 },
  { name: "May", amount: 3800 },
  { name: "Jun", amount: 4000 },
]

export function BalanceBars() {
  return (
    <div className="w-full h-40">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ left: 8, right: 8 }}>
          <XAxis dataKey="name" tickLine={false} axisLine={false} stroke="#4b5563" fontSize={12} />
          <YAxis tickLine={false} axisLine={false} stroke="#4b5563" fontSize={12} />
          <Tooltip />
          <Bar dataKey="amount" fill="#2563eb" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
