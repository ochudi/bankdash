import { cn } from "@/lib/utils"

interface CardDisplayProps {
  balance: string
  cardHolder: string
  cardNumber: string
  validThru: string
  variant?: "blue" | "white" | "dark"
  className?: string
}

export function CardDisplay({
  balance,
  cardHolder,
  cardNumber,
  validThru,
  variant = "blue",
  className,
}: CardDisplayProps) {
  return (
    <div
      className={cn(
        "rounded-xl p-5 w-full max-w-sm aspect-[1.6/1] flex flex-col justify-between",
        variant === "blue" && "bg-primary text-primary-foreground",
        variant === "white" && "bg-card text-card-foreground border",
        variant === "dark" && "bg-slate-800 text-slate-100 dark:bg-slate-950",
        className,
      )}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs opacity-80">Balance</p>
          <p className="text-xl font-bold">{balance}</p>
        </div>
        <div className="h-8 w-8 rounded bg-white/20 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
            <path d="M7 15H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M15 15H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs opacity-80">CARD HOLDER</p>
            <p className="font-medium">{cardHolder}</p>
          </div>
          <div>
            <p className="text-xs opacity-80">VALID THRU</p>
            <p className="font-medium">{validThru}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="font-medium tracking-wider">{cardNumber}</p>
          <div className="flex -space-x-2">
            <div className="h-6 w-6 rounded-full bg-red-500/80"></div>
            <div className="h-6 w-6 rounded-full bg-yellow-500/80"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

