"use client"

import { Button } from "@/components/ui/button"
import { WalletIcon, LogOutIcon, AlertCircleIcon } from "lucide-react"
import { useWallet } from "@/lib/wallet"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "@/hooks/use-toast"

export function WalletButton() {
  const { account, isConnected, isConnecting, balance, connect, disconnect, error } = useWallet()

  const handleConnect = async () => {
    try {
      await connect()
      if (!error) {
        toast({
          title: "Wallet Connected",
          description: "Successfully connected to your wallet",
        })
      }
    } catch (err) {
      toast({
        title: "Connection Failed",
        description: error || "Failed to connect wallet",
        variant: "destructive",
      })
    }
  }

  const handleDisconnect = () => {
    disconnect()
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected",
    })
  }

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  if (error && !isConnected) {
    return (
      <Button variant="destructive" onClick={handleConnect} className="gap-2">
        <AlertCircleIcon className="h-4 w-4" />
        Retry Connection
      </Button>
    )
  }

  if (isConnected && account) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2 bg-transparent">
            <WalletIcon className="h-4 w-4" />
            <span className="hidden sm:inline">{formatAddress(account)}</span>
            <Badge variant="secondary" className="ml-1">
              {balance} ETH
            </Badge>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <div className="px-2 py-1.5">
            <p className="text-sm font-medium">Connected Wallet</p>
            <p className="text-xs text-muted-foreground">{formatAddress(account)}</p>
          </div>
          <DropdownMenuSeparator />
          <div className="px-2 py-1.5">
            <p className="text-xs text-muted-foreground">Balance</p>
            <p className="text-sm font-medium">{balance} ETH</p>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleDisconnect} className="text-red-600">
            <LogOutIcon className="h-4 w-4 mr-2" />
            Disconnect
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <Button onClick={handleConnect} disabled={isConnecting} className="gap-2">
      <WalletIcon className="h-4 w-4" />
      {isConnecting ? "Connecting..." : "Connect Wallet"}
    </Button>
  )
}
