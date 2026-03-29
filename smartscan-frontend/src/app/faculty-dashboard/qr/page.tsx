"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { QrCode, RefreshCcw, Download, Expand } from "lucide-react"
import { motion } from "framer-motion"

export default function GenerateQRPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [qrGenerated, setQrGenerated] = useState(false)

  const handleGenerate = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
      setQrGenerated(true)
    }, 1500)
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Generate Attendance QR</h1>
        <p className="text-zinc-400">Create a dynamic QR code for students to scan and mark attendance.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Card className="glass border-white/5 bg-black/40 h-full">
            <CardHeader>
              <CardTitle>Session Details</CardTitle>
              <CardDescription>Select the active session to generate a QR.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Course / Subject</label>
                <select className="flex h-10 w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary appearance-none">
                  <option>CS-301: Advanced Data Structures</option>
                  <option>CS-402: Machine Learning</option>
                  <option>CS-205: Operating Systems</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Validity Duration</label>
                <select className="flex h-10 w-full rounded-md border border-white/10 bg-black/50 px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary appearance-none">
                  <option>5 Minutes</option>
                  <option>10 Minutes</option>
                  <option>15 Minutes (Default)</option>
                  <option>Active until stopped</option>
                </select>
              </div>

              <Button 
                onClick={handleGenerate}
                disabled={isGenerating || qrGenerated}
                className="w-full mt-4 bg-primary text-black hover:bg-zinc-200"
              >
                {isGenerating ? (
                   <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <QrCode className="w-4 h-4 mr-2" />
                    {qrGenerated ? "QR Active" : "Generate QR Code"}
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <Card className="glass border-white/5 bg-black/40 h-full flex flex-col items-center justify-center min-h-[400px]">
            {qrGenerated ? (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center p-6 gap-6"
              >
                <div className="bg-white p-4 rounded-xl shadow-2xl ring-1 ring-white/20">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=SmartScan-${Date.now()}`} 
                    alt="Attendance QR Code" 
                    className="w-64 h-64"
                  />
                </div>
                <div className="flex gap-2 w-full">
                   <Button variant="outline" className="flex-1 border-white/10 glass text-zinc-300">
                    <Expand className="w-4 h-4 mr-2" /> Maximize
                  </Button>
                  <Button variant="outline" className="flex-1 border-white/10 glass text-zinc-300">
                    <Download className="w-4 h-4 mr-2" /> Download
                  </Button>
                </div>
                <Button 
                  variant="ghost" 
                  onClick={() => setQrGenerated(false)}
                  className="text-red-400 hover:text-red-300 hover:bg-red-500/10 w-full"
                >
                  <RefreshCcw className="w-4 h-4 mr-2" /> Stop Session
                </Button>
              </motion.div>
            ) : (
              <div className="text-center p-6 flex flex-col items-center justify-center opacity-50">
                <QrCode className="w-24 h-24 text-zinc-500 mb-4" />
                <p className="text-zinc-400">Configure session details to generate QR code here.</p>
              </div>
            )}
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
