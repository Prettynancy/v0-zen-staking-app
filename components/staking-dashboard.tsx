import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUpIcon, CoinsIcon, ClockIcon, ZapIcon } from "lucide-react"

export function StakingDashboard() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-balance bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Mindful Staking
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          Stake with intention. Earn with purpose. A serene approach to decentralized finance that prioritizes
          sustainable growth and mindful investing.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="zen-glow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Staked</CardTitle>
            <CoinsIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,580.00</div>
            <p className="text-xs text-muted-foreground">+12.5% from last month</p>
          </CardContent>
        </Card>

        <Card className="zen-glow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rewards Earned</CardTitle>
            <TrendingUpIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,247.32</div>
            <p className="text-xs text-muted-foreground">+8.2% this week</p>
          </CardContent>
        </Card>

        <Card className="zen-glow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">APY</CardTitle>
            <ZapIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.4%</div>
            <p className="text-xs text-muted-foreground">Current average</p>
          </CardContent>
        </Card>

        <Card className="zen-glow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Time Staked</CardTitle>
            <ClockIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127 days</div>
            <p className="text-xs text-muted-foreground">Average duration</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Staking Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Stake Section */}
        <Card className="zen-glow">
          <CardHeader>
            <CardTitle className="text-xl">Stake Your Assets</CardTitle>
            <p className="text-sm text-muted-foreground">Choose your staking amount and duration mindfully</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Amount to Stake</label>
              <div className="relative">
                <Input type="number" placeholder="0.00" className="pr-16" />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">ETH</div>
              </div>
              <p className="text-xs text-muted-foreground">Available: 5.2847 ETH</p>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium">Staking Duration</label>
              <div className="grid grid-cols-3 gap-2">
                <Button variant="outline" className="h-12 bg-transparent">
                  <div className="text-center">
                    <div className="font-semibold">30 days</div>
                    <div className="text-xs text-muted-foreground">8.5% APY</div>
                  </div>
                </Button>
                <Button variant="outline" className="h-12 border-primary bg-transparent">
                  <div className="text-center">
                    <div className="font-semibold">90 days</div>
                    <div className="text-xs text-muted-foreground">12.4% APY</div>
                  </div>
                </Button>
                <Button variant="outline" className="h-12 bg-transparent">
                  <div className="text-center">
                    <div className="font-semibold">180 days</div>
                    <div className="text-xs text-muted-foreground">15.8% APY</div>
                  </div>
                </Button>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-muted/50 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Estimated Rewards</span>
                <span className="font-medium">0.124 ETH</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Network Fee</span>
                <span className="font-medium">0.003 ETH</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-medium">
                <span>Total Return</span>
                <span className="text-accent">0.121 ETH</span>
              </div>
            </div>

            <Button className="w-full h-12 text-base">Stake Now</Button>
          </CardContent>
        </Card>

        {/* Active Stakes */}
        <Card className="zen-glow">
          <CardHeader>
            <CardTitle className="text-xl">Active Stakes</CardTitle>
            <p className="text-sm text-muted-foreground">Monitor your current staking positions</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="p-4 rounded-lg border bg-card/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <CoinsIcon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium">ETH Stake #1</div>
                      <div className="text-sm text-muted-foreground">2.5 ETH</div>
                    </div>
                  </div>
                  <Badge variant="secondary">Active</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>45/90 days</span>
                  </div>
                  <Progress value={50} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span>Rewards Earned</span>
                    <span className="text-accent font-medium">0.062 ETH</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg border bg-card/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <CoinsIcon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">ETH Stake #2</div>
                      <div className="text-sm text-muted-foreground">1.8 ETH</div>
                    </div>
                  </div>
                  <Badge>Completed</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Duration</span>
                    <span>30/30 days</span>
                  </div>
                  <Progress value={100} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span>Total Rewards</span>
                    <span className="text-accent font-medium">0.038 ETH</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-3 bg-transparent">
                  Claim Rewards
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Staking Pools */}
      <Card className="zen-glow">
        <CardHeader>
          <CardTitle className="text-xl">Available Staking Pools</CardTitle>
          <p className="text-sm text-muted-foreground">
            Discover curated staking opportunities with sustainable returns
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg border bg-card/50 hover:bg-card/80 transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-accent"></div>
                  <span className="font-medium">Ethereum 2.0</span>
                </div>
                <Badge variant="secondary">12.4% APY</Badge>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Min. Stake</span>
                  <span>0.1 ETH</span>
                </div>
                <div className="flex justify-between">
                  <span>Lock Period</span>
                  <span>Flexible</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Staked</span>
                  <span>$2.4M</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg border bg-card/50 hover:bg-card/80 transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary"></div>
                  <span className="font-medium">Liquid Staking</span>
                </div>
                <Badge variant="secondary">10.8% APY</Badge>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Min. Stake</span>
                  <span>0.01 ETH</span>
                </div>
                <div className="flex justify-between">
                  <span>Lock Period</span>
                  <span>None</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Staked</span>
                  <span>$1.8M</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg border bg-card/50 hover:bg-card/80 transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-chart-3"></div>
                  <span className="font-medium">DeFi Yield</span>
                </div>
                <Badge variant="secondary">15.2% APY</Badge>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Min. Stake</span>
                  <span>1.0 ETH</span>
                </div>
                <div className="flex justify-between">
                  <span>Lock Period</span>
                  <span>90 days</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Staked</span>
                  <span>$950K</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
