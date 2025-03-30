"use client"

import { useState } from "react"
import { Bell, Search, Settings, Menu, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface HeaderProps {
  title?: string
}

export function Header({ title }: HeaderProps) {
  const pathname = usePathname()
  const [searchOpen, setSearchOpen] = useState(false)

  // Extract title from pathname if not provided
  const pageTitle = title || pathname.split("/").pop() || "Dashboard"

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
      <div className="flex h-16 items-center px-6 gap-4 justify-between">
        {/* Left Side - Mobile Menu Button & Page Title */}
        <div className="flex items-center gap-3">
          {/* Mobile Sidebar Trigger */}
          <div className="lg:hidden pr-6">

          </div>

          {/* Page Title */}
          <h1 className="text-xl font-semibold capitalize text-[#343C6A]">
            {pageTitle === "" ? "Overview" : pageTitle}
          </h1>
        </div>

        {/* Right Side - Actions */}
        <div className="flex items-center gap-4 ml-auto">
          {/* Search - Shows full bar on large screens, button on mobile */}
          <div className="relative w-full max-w-sm hidden md:flex">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for something"
              className="w-full pl-8 bg-muted/50"
            />
          </div>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSearchOpen(true)}>
            <Search className="h-5 w-5" />
          </Button>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Dropdown for Extra Buttons */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/settings">
                  <Settings className="h-4 w-4 mr-2" /> Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell className="h-4 w-4 mr-2" /> Notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Desktop Buttons */}
          <Button variant="ghost" size="icon" className="hidden lg:flex">
            <Link href="/settings">
              <Settings className="h-5 w-5" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" className="relative hidden lg:flex">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive"></span>
          </Button>

          {/* User Avatar */}
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Fullscreen Search Modal for Small Screens */}
      {searchOpen && (
        <div className="fixed inset-0 bg-background/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              autoFocus
              type="search"
              placeholder="Search for something"
              className="w-full pl-10 bg-muted/50"
              onBlur={() => setSearchOpen(false)}
            />
          </div>
        </div>
      )}
    </header>
  )
}
