"use client"

import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts"

type Props = {
  spent: number
  total: number
}

export function DonutRemaining({ spent, total }: Props) {
  const remaining = Math.max(0, total - spent)
  const data = [
    { name: "spent", value: spent },
    { name: "remaining", value: remaining },
  ]
  const COLORS = ["#2563eb", "#e5e7eb"] // blue + gray-200

  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute text-center">
        <div className="text-xs text-gray-600">Remaining</div>
        <div className="text-lg font-semibold text-gray-900">${remaining.toLocaleString()}</div>
      </div>
      <div className="w-32 h-32">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} innerRadius={40} outerRadius={60} dataKey="value" stroke="none">
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
