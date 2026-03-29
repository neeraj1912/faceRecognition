"use client"
import Link from "next/link"
import { ScanFace } from "lucide-react"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="container flex h-16 max-w-screen-2xl items-center px-4 sm:px-8 mx-auto">
        <Link href="/" className="flex items-center space-x-3 transition-opacity hover:opacity-80">
          <div className="bg-primary/20 p-2 rounded-lg">
            <ScanFace className="h-6 w-6 text-primary" />
          </div>
          <span className="font-bold inline-block text-xl tracking-tight text-white">SmartScan<span className="text-zinc-400 font-normal">Attendance</span></span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          {/* User profile / actions can go here */}
        </div>
      </div>
    </nav>
  )
}
