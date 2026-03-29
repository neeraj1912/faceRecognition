"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ScanFace, User, Shield, GraduationCap } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type Role = "Admin" | "Faculty" | "Student"

export default function LoginPage() {
  const [role, setRole] = useState<Role>("Student")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate network request
    setTimeout(() => {
      if (role === "Admin") router.push("/admin-dashboard")
      else if (role === "Faculty") router.push("/faculty-dashboard")
      else router.push("/student-dashboard")
    }, 1000)
  }

  const roleConfig = {
    Admin: { icon: Shield, description: "Manage system and users" },
    Faculty: { icon: User, description: "Manage lectures and attendance" },
    Student: { icon: GraduationCap, description: "Scan QR and view attendance" }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md z-10 px-4"
      >
        <div className="flex flex-col items-center mb-8 text-center space-y-3">
          <div className="bg-primary/10 p-4 rounded-2xl ring-1 ring-white/10 mb-2">
            <ScanFace className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white">SmartScan<span className="text-zinc-500 font-normal">Attendance</span></h1>
          <p className="text-zinc-400">Sign in to your account to continue</p>
        </div>

        <Card className="glass border-white/10 bg-black/40 backdrop-blur-2xl">
          <CardHeader>
            <CardTitle>Select Role</CardTitle>
            <CardDescription>Choose your account type to login</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {(Object.keys(roleConfig) as Role[]).map((r) => {
                const Icon = roleConfig[r].icon
                const isActive = role === r
                return (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={cn(
                      "flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-200",
                      isActive 
                        ? "border-primary bg-primary/10 text-white" 
                        : "border-white/5 bg-white/5 text-zinc-400 hover:text-zinc-200 hover:bg-white/10"
                    )}
                  >
                    <Icon className="w-6 h-6 mb-2" />
                    <span className="text-xs font-medium">{r}</span>
                  </button>
                )
              })}
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">
                  {role === "Student" ? "Roll Number or Email" : "Email Address"}
                </label>
                <Input 
                  required 
                  type={role === "Student" ? "text" : "email"} 
                  placeholder={role === "Student" ? "john@university.edu" : "admin@university.edu"}
                  className="bg-black/50 border-white/10 focus-visible:ring-primary text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Password</label>
                <Input 
                  required 
                  type="password" 
                  placeholder="••••••••"
                  className="bg-black/50 border-white/10 focus-visible:ring-primary text-white"
                />
              </div>
              
              <Button type="submit" className="w-full mt-4 bg-white text-black hover:bg-zinc-200 font-medium h-11" disabled={isLoading}>
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                  />
                ) : (
                  `Sign in as ${role}`
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
