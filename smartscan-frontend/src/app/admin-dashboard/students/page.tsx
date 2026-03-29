"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, MoreHorizontal, Mail, Edit, Trash2 } from "lucide-react"
import { motion } from "framer-motion"

// Mock Data
const studentData = [
  { id: "STU-2023-001", name: "Alex Johnson", course: "Computer Science", year: "Senior", email: "alex.j@student.edu", status: "Active" },
  { id: "STU-2024-042", name: "Maria Garcia", course: "Physics", year: "Junior", email: "maria.g@student.edu", status: "Active" },
  { id: "STU-2025-115", name: "James Smith", course: "Mathematics", year: "Sophomore", email: "james.s@student.edu", status: "Inactive" },
  { id: "STU-2023-089", name: "Priya Patel", course: "Engineering", year: "Senior", email: "priya.p@student.edu", status: "Active" },
  { id: "STU-2026-003", name: "David Chen", course: "Computer Science", year: "Freshman", email: "david.c@student.edu", status: "Active" },
]

export default function ManageStudentsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredData = studentData.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.course.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Manage Students</h1>
          <p className="text-zinc-400">View and manage enrolled students.</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="border-white/10 glass text-zinc-300 hover:text-white">
            Export CSV
          </Button>
          <Button className="bg-primary text-black hover:bg-zinc-200">
            <Plus className="w-4 h-4 mr-2" />
            Add Student
          </Button>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <Card className="glass border-white/5 bg-black/40">
          <CardHeader className="border-b border-white/5 pb-4">
            <div className="flex justify-between items-center">
              <CardTitle>Student Roster</CardTitle>
              <div className="relative w-72">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
                <Input 
                  type="search" 
                  placeholder="Search by name, ID, or course..." 
                  className="pl-9 bg-black/50 border-white/10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-zinc-400 uppercase bg-white/5 border-b border-white/5">
                  <tr>
                    <th className="px-6 py-4 font-medium">Student</th>
                    <th className="px-6 py-4 font-medium">Roll ID</th>
                    <th className="px-6 py-4 font-medium">Course / Year</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((student, i) => (
                    <motion.tr 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      key={student.id} 
                      className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                            {student.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium text-white">{student.name}</p>
                            <p className="text-xs text-zinc-500 flex items-center mt-0.5">
                              <Mail className="w-3 h-3 mr-1" /> {student.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-zinc-300 font-mono text-xs">{student.id}</td>
                      <td className="px-6 py-4">
                        <p className="text-zinc-300">{student.course}</p>
                        <p className="text-xs text-zinc-500">{student.year}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${
                          student.status === 'Active' 
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                            : 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20'
                        }`}>
                          {student.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end space-x-2 opacity-50 group-hover:opacity-100 transition-opacity">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-white">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-red-400">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
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
