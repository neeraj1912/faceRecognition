"use client"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { Calendar, Users, QrCode, Settings, LayoutDashboard } from "lucide-react"

export default function FacultyLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout
      sidebarTitle="Faculty Portal"
      sidebarItems={[
        { title: "Overview", href: "/faculty-dashboard", icon: LayoutDashboard },
        { title: "My Sessions", href: "/faculty-dashboard/sessions", icon: Calendar },
        { title: "Generate QR", href: "/faculty-dashboard/qr", icon: QrCode },
        { title: "Students List", href: "/faculty-dashboard/students", icon: Users },
        { title: "Settings", href: "/faculty-dashboard/settings", icon: Settings },
      ]}
    >
      {children}
    </DashboardLayout>
  )
}
