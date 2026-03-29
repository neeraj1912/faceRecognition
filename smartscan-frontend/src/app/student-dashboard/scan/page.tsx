"use client"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScanLine, CheckCircle, XCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function QRScannerPage() {
  const [scanState, setScanState] = useState<"scanning" | "success" | "error">("scanning")

  // Simulate a scan after 3 seconds
  useEffect(() => {
    if (scanState === "scanning") {
      const timer = setTimeout(() => {
        setScanState("success")
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [scanState])

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] max-w-lg mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Scan Attendance</h1>
        <p className="text-zinc-400">Position the QR code within the frame to mark your attendance.</p>
      </div>

      <Card className="glass border-white/10 bg-black/60 w-full overflow-hidden relative aspect-square flex flex-col items-center justify-center shadow-2xl">
        <AnimatePresence mode="wait">
          {scanState === "scanning" && (
            <motion.div 
              key="scanning"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              {/* Dummy Camera feed background placeholder */}
              <div className="absolute inset-0 bg-zinc-900/80 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-black" />
              

              {/* Viewfinder frame */}
              <div className="relative w-64 h-64 border-2 border-primary/50 rounded-xl overflow-hidden">
                {/* Scanning animation line */}
                <motion.div 
                  className="absolute left-0 right-0 h-0.5 bg-primary shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                />
                
                {/* Corner markers */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-xl" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-xl" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-xl" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-xl" />
              </div>
              
              <div className="mt-8 px-4 py-2 rounded-full bg-black/50 backdrop-blur border border-white/10 text-sm flex items-center gap-2">
                <ScanLine className="w-4 h-4 text-primary animate-pulse" />
                Scanning for QR code...
              </div>
            </motion.div>
          )}

          {scanState === "success" && (
            <motion.div 
              key="success"
              initial={{ scale: 0.8, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center text-center p-6 z-10"
            >
              <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                 <CheckCircle className="w-10 h-10 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Attendance Marked!</h2>
              <p className="text-emerald-400/80 mb-6">CS-301: Advanced Data Structures</p>
              
              <div className="bg-black/50 rounded-xl p-4 border border-white/5 w-full text-left space-y-2 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Date</span>
                  <span className="text-white">Oct 24, 2023</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Time</span>
                  <span className="text-white">10:14 AM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Location</span>
                  <span className="text-white">Room 402, Block B</span>
                </div>
              </div>

              <Button onClick={() => setScanState("scanning")} variant="outline" className="w-full glass border-white/10 text-zinc-300">
                Scan Another Class
              </Button>
            </motion.div>
          )}

        </AnimatePresence>
      </Card>
      
      {scanState === "scanning" && (
         <p className="text-xs text-zinc-600 text-center max-w-sm">
          Please ensure you have granted camera permissions. If the scanner doesn't automatically detect, try adjusting lighting.
        </p>
      )}
    </div>
  )
}
