"use client"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Calendar as CalendarIcon, Clock } from "lucide-react"

export default function CreateSessionPage() {
  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create Session</h1>
        <p className="text-zinc-400">Schedule a new lecture or lab session.</p>
      </div>

      <Card className="glass border-white/5 bg-black/40">
        <CardHeader>
          <CardTitle>Session Details</CardTitle>
          <CardDescription>Fill in the required information for the upcoming session.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">Course Selection</label>
              <select className="flex h-10 w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary appearance-none">
                <option>CS-301: Advanced Data Structures</option>
                <option>CS-402: Machine Learning</option>
              </select>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Date</label>
                <div className="relative">
                  <CalendarIcon className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
                  <Input type="date" className="pl-9 bg-black/50 border-white/10 text-white css-dark-date" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Time</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
                  <Input type="time" className="pl-9 bg-black/50 border-white/10 text-white css-dark-time" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-300">Location / Room</label>
              <Input placeholder="e.g. Room 402, Block B" className="bg-black/50 border-white/10" />
            </div>

            <Button type="button" className="w-full mt-6 bg-primary text-black hover:bg-zinc-200">
              <Plus className="w-4 h-4 mr-2" />
              Schedule Session
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
