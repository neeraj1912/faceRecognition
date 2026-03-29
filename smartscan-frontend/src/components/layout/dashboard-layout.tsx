import { Navbar } from "./navbar"
import { Sidebar, SidebarItem } from "./sidebar"

export function DashboardLayout({
  children,
  sidebarItems,
  sidebarTitle
}: {
  children: React.ReactNode
  sidebarItems: SidebarItem[]
  sidebarTitle: string
}) {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary/30">
      <Navbar />
      <div className="flex pt-16 h-screen overflow-hidden">
        <Sidebar items={sidebarItems} title={sidebarTitle} />
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-black">
          <div className="mx-auto max-w-5xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
