'use client'

import { useState } from 'react'
import { Bell, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Navigation() {
  const [notifications, setNotifications] = useState(3)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-semibold text-gray-900">Client Portal</span>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              Dashboard
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              Content
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              Analytics
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              Settings
            </Button>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="relative mr-2">
              <Bell className="h-5 w-5" />
              {notifications > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {notifications}
                </span>
              )}
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span className="sr-only">Open user menu</span>
                  <Avatar>
                    <AvatarImage src="/placeholder-avatar.jpg" alt="User avatar" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center sm:hidden">
              <Button variant="ghost" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Button variant="ghost" size="sm" className="w-full text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              Dashboard
            </Button>
            <Button variant="ghost" size="sm" className="w-full text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              Content
            </Button>
            <Button variant="ghost" size="sm" className="w-full text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              Analytics
            </Button>
            <Button variant="ghost" size="sm" className="w-full text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              Settings
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

