import { Sidebar } from "@/components/sidebar"
import { TopNav } from "@/components/top-nav"
import { BalanceRadial } from "@/components/charts/balance-radial"
import { BalanceBars } from "@/components/charts/balance-bars"
import { DonutRemaining } from "@/components/charts/donut-remaining"
import { StatChip } from "@/components/cards/stat-chip"
import { VisualVault } from "@/components/cards/visual-vault"

export default function BankingDashboardPage() {
  // Dummy amounts
  const balance = 4000
  const radialMax = 5000 // for visual scale
  const ipaySpent = 4500
  const ipayTotal = 5000

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Sidebar (md+) */}
      <Sidebar />

      {/* Main area */}
      <div className="md:ml-56 flex flex-col">
        <TopNav />

        <main className="p-4 md:p-6">
          {/* Responsive grid for the four major cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card 1: Account Balance */}
            <section className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 lg:col-span-2">
              <header className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 text-balance">Account Balance</h2>
                  <p className="text-sm text-gray-600">Overview and recent history</p>
                </div>
                <div className="hidden sm:block">
                  <span className="text-xs text-gray-600">As of today</span>
                </div>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <BalanceRadial value={balance} max={radialMax} />
                </div>
                <div className="md:col-span-2">
                  <BalanceBars />
                </div>
              </div>
            </section>

            {/* Card 2: iPay Performance */}
            <section className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
              <header className="mb-4">
                <h2 className="text-lg font-semibold text-gray-900">iPay Performance</h2>
                <p className="text-sm text-gray-600">Recent payments and limits</p>
              </header>

              <div className="grid grid-cols-3 gap-3 mb-4">
                <StatChip label="Today" value="$1,076" />
                <StatChip label="This week" value="$2,534" />
                <StatChip label="Monthly cap" value="$9,000" />
              </div>

              <div className="flex items-center justify-center">
                <DonutRemaining spent={ipaySpent} total={ipayTotal} />
              </div>
            </section>

            {/* Card 3: Visual section with vault, coins, card */}
            <section className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 lg:col-span-2">
              <header className="mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Security & Cards</h2>
                <p className="text-sm text-gray-600">Visual overview of secure storage and card controls</p>
              </header>
              <VisualVault />
            </section>

            {/* Card 4: Statistics */}
            <section className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
              <header className="mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Statistics</h2>
                <p className="text-sm text-gray-600">Income, expenses, balance, currency</p>
              </header>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-gray-200 p-4">
                  <div className="text-xs text-gray-600">Income</div>
                  <div className="text-xl font-semibold text-gray-900">$45,435</div>
                </div>
                <div className="rounded-lg border border-gray-200 p-4">
                  <div className="text-xs text-gray-600">Expenses</div>
                  <div className="text-xl font-semibold text-gray-900">$9,050</div>
                </div>
                <div className="rounded-lg border border-gray-200 p-4">
                  <div className="text-xs text-gray-600">Balance</div>
                  <div className="text-xl font-semibold text-gray-900">$4,005</div>
                </div>
                <div className="rounded-lg border border-gray-200 p-4">
                  <div className="text-xs text-gray-600">Currency</div>
                  <div className="text-xl font-semibold text-gray-900">UZ 640</div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
