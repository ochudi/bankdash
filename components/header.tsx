"use client"

import { Bell, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"

interface HeaderProps {
  title?: string
}

export function Header({ title }: HeaderProps) {
  const pathname = usePathname()

  // Extract title from pathname if not provided
  const pageTitle = title || pathname.split("/").pop() || "Dashboard"

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-30">
      <div className="flex h-16 items-center px-6 gap-4 justify-between">
        <h1 className="text-xl font-semibold capitalize">{pageTitle === "" ? "Overview" : pageTitle}</h1>

        <div className="flex items-center gap-4 ml-auto">
          <div className="relative w-full max-w-sm hidden md:flex">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search for something" className="w-full pl-8 bg-muted/50" />
          </div>

          <ThemeToggle />

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive"></span>
          </Button>

          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}

