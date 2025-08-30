"use client"

export function VisualVault() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm flex items-center justify-center">
        <img src="/steel-bank-vault-front.png" alt="Bank vault illustration placeholder" className="w-auto h-28" />
      </div>
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <img src="/gold-coins-stack.png" alt="Coins placeholder" className="h-16 w-16" />
          {/* Bank card graphic */}
          <div className="rounded-xl bg-blue-600 text-white p-4 w-40 h-24 shadow flex flex-col justify-between">
            <div className="text-xs opacity-90">BANK CARD</div>
            <div className="text-sm tracking-widest">**** 2345</div>
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-600 leading-relaxed">
          Secure your assets with our vault-grade protection and easy card controls.
        </div>
      </div>
    </div>
  )
}
