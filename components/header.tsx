import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon, WalletIcon } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-border/50 backdrop-blur-sm bg-background/80">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg overflow-hidden">
            <img src="/images/zen-logo.jpg" alt="Zen Stake Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-xl font-semibold text-balance">Zen Stake</h1>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Dashboard
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pools
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Rewards
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Analytics
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button className="gap-2">
            <WalletIcon className="h-4 w-4" />
            Connect Wallet
          </Button>
        </div>
      </div>
    </header>
  )
}
