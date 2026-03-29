"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, MoreHorizontal, Mail, Edit, Trash2 } from "lucide-react"
import { motion } from "framer-motion"

// Mock Data
const facultyData = [
  { id: "FAC-001", name: "Dr. Sarah Jenkins", dept: "Computer Science", email: "sarah.j@university.edu", status: "Active" },
  { id: "FAC-002", name: "Prof. Michael Chen", dept: "Physics", email: "m.chen@university.edu", status: "Active" },
  { id: "FAC-003", name: "Dr. Emily Rodriguez", dept: "Mathematics", email: "emily.r@university.edu", status: "On Leave" },
  { id: "FAC-004", name: "James Wilson", dept: "Engineering", email: "j.wilson@university.edu", status: "Active" },
  { id: "FAC-005", name: "Dr. Anita Patel", dept: "Computer Science", email: "anita.p@university.edu", status: "Active" },
]

export default function ManageFacultyPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredData = facultyData.filter(f => 
    f.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    f.dept.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Manage Faculty</h1>
          <p className="text-zinc-400">Add, view, and manage university faculty members.</p>
        </div>
        <Button className="bg-primary text-black hover:bg-zinc-200">
          <Plus className="w-4 h-4 mr-2" />
          Add Faculty
        </Button>
      </div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <Card className="glass border-white/5 bg-black/40">
          <CardHeader className="border-b border-white/5 pb-4">
            <div className="flex justify-between items-center">
              <CardTitle>Faculty Directory</CardTitle>
              <div className="relative w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
                <Input 
                  type="search" 
                  placeholder="Search faculty..." 
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
                    <th className="px-6 py-4 font-medium">Name</th>
                    <th className="px-6 py-4 font-medium">ID</th>
                    <th className="px-6 py-4 font-medium">Department</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((faculty, i) => (
                    <motion.tr 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      key={faculty.id} 
                      className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                            {faculty.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium text-white">{faculty.name}</p>
                            <p className="text-xs text-zinc-500 flex items-center mt-0.5">
                              <Mail className="w-3 h-3 mr-1" /> {faculty.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-zinc-300 font-mono text-xs">{faculty.id}</td>
                      <td className="px-6 py-4 text-zinc-300">{faculty.dept}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${
                          faculty.status === 'Active' 
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                            : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                        }`}>
                          {faculty.status}
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
                        No faculty members found matching your search.
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
