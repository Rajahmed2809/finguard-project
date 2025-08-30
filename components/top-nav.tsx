"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

const items = [
  { href: "#", label: "Home" },
  { href: "#", label: "Dashboard" },
  { href: "#", label: "Creditworthiness" },
  { href: "#", label: "Profile" },
  { href: "#", label: "About" },
  { href: "#", label: "Contact" },
]

export function TopNav() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="h-14 px-4 md:px-6 flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-4 text-sm">
          {items.map((item) => (
            <Link key={item.label} href={item.href} className="text-gray-600 hover:text-gray-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 ml-auto">
          <Button variant="ghost" className="text-gray-600">
            Login
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
        </div>
      </div>
    </header>
  )
}
