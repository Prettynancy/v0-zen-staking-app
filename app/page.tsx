import { StakingDashboard } from "@/components/staking-dashboard"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <StakingDashboard />
      </main>
    </div>
  )
}
