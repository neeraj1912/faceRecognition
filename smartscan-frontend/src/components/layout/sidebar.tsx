"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

export interface SidebarItem {
  title: string
  href: string
  icon: LucideIcon
}

interface SidebarProps {
  items: SidebarItem[]
  title?: string
}

export function Sidebar({ items, title }: SidebarProps) {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-16 z-30 hidden h-[calc(100vh-4rem)] w-full shrink-0 overflow-y-auto border-r border-white/5 bg-black/20 backdrop-blur-xl md:sticky md:block md:w-64 glass">
      <div className="flex w-full flex-col gap-2 p-4">
        {title && <h4 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">{title}</h4>}
        
        <nav className="grid gap-1">
          {items.map((item, index) => {
            const isActive = pathname === item.href
            
            return (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "group relative flex w-full items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ease-in-out hover:text-white",
                  isActive 
                    ? "text-white" 
                    : "text-zinc-400 hover:bg-white/5"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute inset-0 rounded-lg bg-white/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                <item.icon className={cn("mr-3 h-5 w-5 z-10", isActive ? "text-white" : "text-zinc-500 group-hover:text-zinc-300")} />
                <span className="z-10">{item.title}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
