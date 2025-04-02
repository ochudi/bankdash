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
    <div className={cn("flex items-center gap-4 p-4 rounded-2xl border xl:max-w-[255px]", className)}>
      <div className={cn("p-3 rounded-full", iconColor)}>{icon}</div>
      <div>
        <p className="text-sm text-[#718EBF]">{title}</p>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
    </div>
  )
}

