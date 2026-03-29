"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, UserCheck, UserPlus, Building2 } from "lucide-react"
import { motion } from "framer-motion"

export default function AdminDashboardOverview() {
  const stats = [
    { title: "Total Students", value: "2,845", icon: Users, trend: "+12.5%" },
    { title: "Total Faculty", value: "124", icon: UserCheck, trend: "+2.1%" },
    { title: "Active Sessions", value: "34", icon: Building2, trend: "-1.5%" },
    { title: "New Registrations", value: "18", icon: UserPlus, trend: "+4.3%" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-zinc-400">Welcome back, Administrator.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <Card className="glass border-white/5 bg-black/40">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-zinc-300">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-zinc-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-zinc-500 mt-1">
                  <span className={stat.trend.startsWith("+") ? "text-emerald-500" : "text-red-500"}>
                    {stat.trend}
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-7"
      >
        <Card className="col-span-4 glass border-white/5 bg-black/40">
          <CardHeader>
            <CardTitle>System Activity</CardTitle>
            <CardDescription>
              Overview of attendance scans across all campus locations.
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center border-t border-white/5">
            <p className="text-zinc-500 italic">Chart Placeholder (Recharts/Chart.js)</p>
          </CardContent>
        </Card>
        
        <Card className="col-span-3 glass border-white/5 bg-black/40">
          <CardHeader>
            <CardTitle>Recent Alerts</CardTitle>
            <CardDescription>
              Low attendance warnings and system notifications.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[1,2,3].map((_, i) => (
              <div key={i} className="flex items-start space-x-4 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                <div className="bg-red-500/10 p-2 rounded-full ring-1 ring-red-500/20">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">Low Attendance Alert</p>
                  <p className="text-xs text-zinc-500">Student JS-20{i} has dropped below 75% in Computer Networks.</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
