"use client"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, CheckCircle, Clock, CalendarDays, ScanLine } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function StudentDashboardOverview() {
  const overallAttendance = 82
  const isLowAttendance = overallAttendance < 75

  const subjects = [
    { code: "CS-301", name: "Advanced Data Structures", total: 42, present: 38, percent: 90 },
    { code: "CS-402", name: "Machine Learning", total: 36, present: 22, percent: 61, low: true },
    { code: "EE-205", name: "Digital Electronics", total: 28, present: 25, percent: 89 },
    { code: "MA-305", name: "Discrete Mathematics", total: 30, present: 26, percent: 86 }
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Student Dashboard</h1>
          <p className="text-zinc-400">Welcome Alex, here's your attendance summary.</p>
        </div>
        <Link href="/student-dashboard/scan">
           <Button className="bg-primary text-black hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            <ScanLine className="w-4 h-4 mr-2" />
            Scan Attendance QR
          </Button>
        </Link>
      </div>

      {isLowAttendance && (
         <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-start gap-4">
          <div className="bg-red-500/20 p-2 rounded-full mt-0.5">
            <AlertTriangle className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <h3 className="font-semibold text-red-400">Overall Attendance Warning</h3>
            <p className="text-sm text-red-400/80 mt-1">Your overall attendance has dropped below the 75% threshold. Please ensure you attend the upcoming lectures to avoid penalties.</p>
          </div>
        </motion.div>
      )}

      <div className="grid gap-4 md:grid-cols-3">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="glass border-white/5 bg-black/40 h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-zinc-400">Overall Attendance</CardTitle>
              {isLowAttendance ? <AlertTriangle className="h-4 w-4 text-red-500" /> : <CheckCircle className="h-4 w-4 text-emerald-500" />}
            </CardHeader>
            <CardContent>
              <div className={`text-4xl font-bold ${isLowAttendance ? 'text-red-400' : 'text-white'}`}>{overallAttendance}%</div>
              <p className="text-xs text-zinc-500 mt-2">Across all 4 active subjects</p>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="glass border-white/5 bg-black/40 h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-zinc-400">Total Classes Conducted</CardTitle>
              <CalendarDays className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-white">136</div>
              <p className="text-xs text-zinc-500 mt-2">Since semester start</p>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="glass border-white/5 bg-black/40 h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-zinc-400">Classes Attended</CardTitle>
              <Clock className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-white">111</div>
              <div className="w-full bg-white/10 h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-primary h-full rounded-full" style={{ width: `${overallAttendance}%` }} />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <h2 className="text-xl font-semibold mb-4 mt-8">Subject-wise Breakdown</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {subjects.map((subject, idx) => (
             <Card key={idx} className="glass border-white/5 bg-black/40">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{subject.code}</CardTitle>
                    <CardDescription className="mt-1">{subject.name}</CardDescription>
                  </div>
                  <div className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                    subject.low 
                      ? 'bg-red-500/10 text-red-400 border-red-500/20' 
                      : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                  }`}>
                    {subject.percent}%
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm mb-2 text-zinc-400">
                  <span>Present: <strong className="text-white">{subject.present}</strong></span>
                  <span>Total: <strong className="text-white">{subject.total}</strong></span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ${subject.low ? 'bg-red-500' : 'bg-emerald-500'}`} 
                    style={{ width: `${subject.percent}%` }} 
                  />
                </div>
                {subject.low && (
                  <p className="text-xs text-red-400 mt-3 flex items-center">
                    <AlertTriangle className="w-3 h-3 mr-1" /> Requires attention
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
