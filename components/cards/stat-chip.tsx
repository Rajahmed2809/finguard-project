"use client"

import { cn } from "@/lib/utils"

export function StatChip({
  label,
  value,
  className,
}: {
  label: string
  value: string
  className?: string
}) {
  return (
    <div className={cn("rounded-lg border border-gray-200 bg-white p-3 shadow-sm", className)}>
      <div className="text-xs text-gray-600">{label}</div>
      <div className="text-base font-semibold text-gray-900">{value}</div>
    </div>
  )
}
