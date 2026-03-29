"use client"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Users, UserPlus, Settings, LayoutDashboard } from "lucide-react"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout
      sidebarTitle="Admin Portal"
      sidebarItems={[
        { title: "Overview", href: "/admin-dashboard", icon: LayoutDashboard },
        { title: "Manage Faculty", href: "/admin-dashboard/faculty", icon: UserPlus },
        { title: "Manage Students", href: "/admin-dashboard/students", icon: Users },
      ]}
    >
      {children}
    </DashboardLayout>
  )
}
