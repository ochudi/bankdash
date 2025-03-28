import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface StatCardProps {
  icon: ReactNode
  title: string
  value: string
  iconColor?: string
  className?: string
}

export function StatCard({ icon, title, value, iconColor = "bg-blue-100", className }: StatCardProps) {
  return (
    <div className={cn("flex items-center gap-4 p-4 rounded-lg", className)}>
      <div className={cn("p-3 rounded-full", iconColor)}>{icon}</div>
      <div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  )
}

