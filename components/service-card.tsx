import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  value: string
  iconColor?: string
  className?: string
}

export function ServiceCard({ icon, title, value, iconColor = "bg-blue-100", className }: ServiceCardProps) {
  return (
    <div className={cn("flex items-center gap-4 p-4 rounded-2xl border xl:max-w-[255px]", className)}>
      <div className={cn("p-3 rounded-full", iconColor)}>{icon}</div>
      <div>
        <p className="text-base font-semibold">{title}</p>
        <p className="text-xs text-[#718EBF]">{value}</p>
      </div>
    </div>
  )
}

