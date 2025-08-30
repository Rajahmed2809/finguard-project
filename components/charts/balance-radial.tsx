"use client"

import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts"

type Props = {
  value: number
  max: number
  color?: string
}

export function BalanceRadial({ value, max, color = "#2563eb" }: Props) {
  const data = [
    { name: "current", value: value },
    { name: "rest", value: Math.max(0, max - value) },
  ]
  const COLORS = [color, "#e5e7eb"] // primary blue + gray-200

  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute text-center">
        <div className="text-xs text-gray-600">Balance</div>
        <div className="text-lg font-semibold text-gray-900">${value.toLocaleString()}</div>
      </div>
      <div className="w-32 h-32">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} innerRadius={40} outerRadius={60} dataKey="value" stroke="none">
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
