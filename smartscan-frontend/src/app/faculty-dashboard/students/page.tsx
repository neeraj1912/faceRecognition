"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Download, AlertTriangle } from "lucide-react"
import { motion } from "framer-motion"

// Mock Data
const attendanceData = [
  { id: "STU-001", name: "Alex Johnson", course: "CS-301", classes: 42, present: 38, percent: 90 },
  { id: "STU-002", name: "Maria Garcia", course: "CS-301", classes: 42, present: 40, percent: 95 },
  { id: "STU-003", name: "James Smith", course: "CS-301", classes: 42, present: 29, percent: 69 }, // Low
  { id: "STU-004", name: "Priya Patel", course: "CS-301", classes: 42, present: 41, percent: 97 },
  { id: "STU-005", name: "David Chen", course: "CS-301", classes: 42, present: 30, percent: 71 }, // Low
]

export default function StudentAttendancePage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredData = attendanceData.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.id.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Student Attendance</h1>
          <p className="text-zinc-400">Track and monitor student attendance across your subjects.</p>
        </div>
        <Button className="bg-primary text-black hover:bg-zinc-200">
          <Download className="w-4 h-4 mr-2" />
          Export to Excel
        </Button>
      </div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <Card className="glass border-white/5 bg-black/40">
          <CardHeader className="border-b border-white/5 pb-4 flex flex-row items-center justify-between">
            <div>
              <CardTitle>Attendance Log: CS-301</CardTitle>
              <CardDescription>Currently viewing all students for CS-301.</CardDescription>
            </div>
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
              <Input 
                type="search" 
                placeholder="Search students..." 
                className="pl-9 bg-black/50 border-white/10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-zinc-400 uppercase bg-white/5 border-b border-white/5">
                  <tr>
                    <th className="px-6 py-4 font-medium">Student Info</th>
                    <th className="px-6 py-4 font-medium text-center">Total Classes</th>
                    <th className="px-6 py-4 font-medium text-center">Present Count</th>
                    <th className="px-6 py-4 font-medium text-center">Percentage</th>
                    <th className="px-6 py-4 font-medium text-right">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((student, i) => {
                    const isLow = student.percent < 75;
                    return (
                      <motion.tr 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.05 }}
                        key={student.id} 
                        className={`border-b border-white/5 hover:bg-white/[0.02] transition-colors ${isLow ? 'bg-red-500/[0.03]' : ''}`}
                      >
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-medium text-white">{student.name}</p>
                            <p className="text-xs text-zinc-500 font-mono mt-0.5">{student.id}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-zinc-300">{student.classes}</td>
                        <td className="px-6 py-4 text-center text-zinc-300">{student.present}</td>
                        <td className="px-6 py-4 text-center">
                          <span className={`font-bold ${isLow ? 'text-red-400' : 'text-emerald-400'}`}>
                            {student.percent}%
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          {isLow ? (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border bg-red-500/10 text-red-500 border-red-500/20">
                              <AlertTriangle className="w-3 h-3 mr-1" />
                              Warning
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                              Good
                            </span>
                          )}
                        </td>
                      </motion.tr>
                    )
                  })}
                  {filteredData.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-6 py-8 text-center text-zinc-500">
                        No students found matching your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
