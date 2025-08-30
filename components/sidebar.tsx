"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Sidebar({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "hidden md:flex fixed inset-y-0 left-0 w-56 bg-white border-r border-gray-200 shadow-sm",
        className,
      )}
      aria-label="Sidebar with quick actions"
    >
      <div className="flex flex-col w-full h-full">
        <div className="h-16 flex items-center px-4 border-b border-gray-200">
          <Link href="/" className="text-xl font-semibold tracking-wide text-blue-600" aria-label="BANK home">
            BANK
          </Link>
        </div>

        <nav className="p-4 space-y-2">
          <div className="text-xs uppercase tracking-wide text-gray-600 mb-2">Quick actions</div>
          <Button variant="secondary" className="w-full justify-start">
            Transfer Funds
          </Button>
          <Button variant="secondary" className="w-full justify-start">
            Pay Bills
          </Button>
          <Button variant="secondary" className="w-full justify-start">
            More
          </Button>
        </nav>

        <div className="mt-auto p-4 text-xs text-gray-600">
          <div className="rounded-md border border-gray-200 p-3">
            <div className="font-medium text-gray-900 mb-1">Need help?</div>
            <p className="leading-relaxed">Visit our support center for FAQs and contact options.</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
