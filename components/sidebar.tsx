"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  CreditCard,
  Home,
  LayoutDashboard,
  Landmark,
  BarChart3,
  Banknote,
  Settings,
  ShoppingBag,
  Award,
} from "lucide-react"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const pathname = usePathname()

  const routes = [
    {
      name: "Dashboard",
      path: "/",
      icon: <Home className="h-5 w-5" />,
    },
    {
      name: "Transactions",
      path: "/transactions",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      name: "Accounts",
      path: "/accounts",
      icon: <Landmark className="h-5 w-5" />,
    },
    {
      name: "Investments",
      path: "/investments",
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      name: "Credit Cards",
      path: "/credit-cards",
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      name: "Loans",
      path: "/loans",
      icon: <Banknote className="h-5 w-5" />,
    },
    {
      name: "Services",
      path: "/services",
      icon: <ShoppingBag className="h-5 w-5" />,
    },
    {
      name: "My Privileges",
      path: "/privileges",
      icon: <Award className="h-5 w-5" />,
    },
    {
      name: "Setting",
      path: "/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  return (
    <div className="w-60 border-r bg-background h-screen sticky top-0 overflow-y-auto">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <CreditCard className="h-6 w-6 text-primary" />
          <span>BankDash.</span>
        </Link>
      </div>
      <nav className="px-4 py-2">
        <ul className="space-y-2">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-md text-muted-foreground hover:bg-muted transition-colors",
                  pathname === route.path && "bg-primary/10 text-primary font-medium border-l-4 border-primary",
                )}
              >
                {route.icon}
                <span>{route.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

