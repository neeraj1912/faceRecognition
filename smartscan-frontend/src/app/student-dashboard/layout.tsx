"use client"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { LayoutDashboard, ScanLine, History, Settings } from "lucide-react"

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout
      sidebarTitle="Student Portal"
      sidebarItems={[
        { title: "Overview", href: "/student-dashboard", icon: LayoutDashboard },
        { title: "Scan QR", href: "/student-dashboard/scan", icon: ScanLine },
        { title: "Attendance History", href: "/student-dashboard/history", icon: History },
        { title: "Settings", href: "/student-dashboard/settings", icon: Settings },
      ]}
    >
      {children}
    </DashboardLayout>
  )
}
