import { cn } from "@/lib/utils";
import Image from "next/image";

interface CardDisplayProps {
  balance: string;
  cardHolder: string;
  cardNumber: string;
  validThru: string;
  variant?: "blue" | "white" | "dark";
  className?: string;
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
        "rounded-xl p-5 w-full min-w-[265px] lg:min-w-[350px] max-w-sm aspect-[1.6/1] flex flex-col justify-between min-h-[235px]",
        variant === "blue" &&
          "bg-[linear-gradient(107deg,#4C49ED_2.61%,#0A06F4_101.2%)] dark:bg-[linear-gradient(107deg,#6A67F2_2.61%,#3A37D0_101.2%)] text-primary-foreground",
        variant === "white" && "bg-card text-card-foreground border",
        variant === "dark" && "bg-slate-800 text-slate-100 dark:bg-slate-950",
        className
      )}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs opacity-80">Balance</p>
          <p className="text-xl font-bold">{balance}</p>
        </div>
        <div className="">
          <Image
            src="/svg/cardChip.svg"
            alt="Logo"
            width={34}
            height={34}
            className={cn(
              variant === "blue" && "",
              variant === "white" && "brightness-75",
              variant === "dark" && "",
              className
            )}
          />
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
            <Image
              src="/svg/mastercard.svg"
              alt="Logo"
              width={34}
              height={34}
              className={cn(
                variant === "blue" && "",
                variant === "white" && "brightness-75",
                variant === "dark" && "",
                className
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
