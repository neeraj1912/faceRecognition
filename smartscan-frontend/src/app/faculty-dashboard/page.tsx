"use client"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CalendarClock, CheckCircle, AlertTriangle, Users } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FacultyDashboardOverview() {
  const stats = [
    { title: "Total Lectures Given", value: "42", icon: CalendarClock },
    { title: "Average Attendance", value: "86%", icon: CheckCircle },
    { title: "Low Attendance Warnings", value: "8", icon: AlertTriangle, alert: true },
    { title: "Total Students Taught", value: "145", icon: Users },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Faculty Dashboard</h1>
          <p className="text-zinc-400">Manage your lectures and track student attendance.</p>
        </div>
        <Link href="/faculty-dashboard/qr">
          <Button className="bg-primary text-black hover:bg-zinc-200">
            Generate QR Code
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          >
            <Card className="glass border-white/5 bg-black/40">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-zinc-300">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.alert ? 'text-amber-500' : 'text-zinc-500'}`} />
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${stat.alert ? 'text-amber-500' : 'text-white'}`}>
                  {stat.value}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="grid gap-4 grid-cols-1 md:grid-cols-2"
      >
        <Card className="glass border-white/5 bg-black/40">
          <CardHeader>
            <CardTitle>Recent Sessions</CardTitle>
            <CardDescription>Your recently conducted lectures.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[1,2,3].map((_, i) => (
              <div key={i} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                <div>
                  <p className="font-medium text-white">CS-301: Advanced Data Structures</p>
                  <p className="text-sm text-zinc-500">Today, 10:00 AM - 11:30 AM</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-emerald-400">45/50 Present</p>
                  <p className="text-xs text-zinc-500">90% Attendance</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="glass border-white/5 bg-black/40">
          <CardHeader>
            <CardTitle>Students Needing Attention</CardTitle>
            <CardDescription>Students below 75% attendance threshold.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "John Doe", course: "CS-301", attendance: "68%" },
              { name: "Emma Smith", course: "PH-101", attendance: "72%" },
              { name: "Michael Chen", course: "CS-301", attendance: "60%" }
            ].map((student, i) => (
              <div key={i} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{student.name}</p>
                    <p className="text-sm text-zinc-500">{student.course}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="px-2 py-1 rounded-md text-xs font-semibold bg-red-500/10 text-red-500 border border-red-500/20">
                    {student.attendance}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
