import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { WalletProvider } from "@/lib/wallet"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Zen Stake - Mindful Staking",
  description: "A serene approach to decentralized finance",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <WalletProvider>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            {children}
          </Suspense>
          <Toaster />
        </WalletProvider>
        <Analytics />
      </body>
    </html>
  )
}
