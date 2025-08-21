'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { TrendingUp, DollarSign, PieChart, BarChart, LineChart, Activity } from 'lucide-react'

const InteractiveDemo = () => {
  const [currentView, setCurrentView] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)

  const demoViews = [
    {
      title: "Aman REIT Performance",
      subtitle: "Shariah-compliant returns tracking",
      icon: TrendingUp,
      data: [
        { label: "Annual Yield", value: 73, color: "emerald-400" },
        { label: "Shariah Compliance", value: 100, color: "blue-400" },
        { label: "Asset Occupancy", value: 96, color: "purple-400" }
      ]
    },
    {
      title: "Asset Distribution",
      subtitle: "462 income-generating assets", 
      icon: PieChart,
      data: [
        { label: "Madinat Sandan", value: 100, color: "emerald-400" },
        { label: "Commercial Properties", value: 85, color: "blue-400" },
        { label: "Mixed Development", value: 70, color: "purple-400" }
      ]
    },
    {
      title: "Growth Track Record",
      subtitle: "Oman's first Shariah REIT",
      icon: BarChart,
      data: [
        { label: "2021", value: 52, color: "emerald-400" },
        { label: "2022", value: 52, color: "blue-400" },
        { label: "2023", value: 53, color: "purple-400" },
        { label: "2024", value: 54, color: "yellow-400" }
      ]
    }
  ]

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setCurrentView(current => (current + 1) % demoViews.length)
            return 0
          }
          return prev + 2
        })
      }, 100)
      return () => clearInterval(interval)
    }
  }, [isPlaying, demoViews.length])

  const currentDemo = demoViews[currentView]

  return (
    <div className="relative h-full bg-gradient-to-br from-slate-900/40 via-slate-800/30 to-slate-900/40 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <motion.div 
            className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <currentDemo.icon className="w-6 h-6 text-white drop-shadow-sm" />
          </motion.div>
          <div>
            <h3 className="text-white font-medium">{currentDemo.title}</h3>
            <p className="text-slate-300 text-sm">{currentDemo.subtitle}</p>
          </div>
        </div>
        
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
        >
          {isPlaying ? (
            <div className="w-2 h-2 bg-white rounded-full"></div>
          ) : (
            <div className="w-0 h-0 border-l-2 border-l-white border-y-1 border-y-transparent"></div>
          )}
        </button>
      </div>

      {/* Enhanced Progress Bar */}
      <div className="h-1 bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-emerald-300 via-blue-300 to-purple-300 shadow-sm"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      </div>

      {/* Demo Content */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Chart Visualization */}
            <div className="space-y-4">
              {currentDemo.data.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white text-sm font-medium">{item.label}</span>
                    <span className="text-emerald-300 font-semibold">
                      {currentView === 2 ? `${item.value}%` : `${item.value}%`}
                    </span>
                  </div>
                  
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-emerald-300 to-blue-400 rounded-full shadow-sm"
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ delay: index * 0.15 + 0.3, duration: 1.2, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10"
            >
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-emerald-300 font-bold text-lg">7.25%</div>
                <div className="text-slate-400 text-xs">Annual Yield</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-blue-300 font-bold text-lg">462</div>
                <div className="text-slate-400 text-xs">Assets</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-purple-300 font-bold text-lg">156M</div>
                <div className="text-slate-400 text-xs">OMR Target</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {demoViews.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentView(index)
              setProgress(0)
            }}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              index === currentView ? 'bg-emerald-300 w-4 shadow-lg' : 'bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Floating Analytics Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[Activity, LineChart, DollarSign].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute opacity-8"
            animate={{
              x: [0, 25, 0, -15, 0],
              y: [0, -15, 0, 15, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1, 0.9, 1]
            }}
            transition={{
              duration: 12 + index * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 2
            }}
            style={{
              left: `${25 + index * 20}%`,
              top: `${35 + index * 12}%`,
            }}
          >
            <Icon className="w-5 h-5 text-emerald-200" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default InteractiveDemo
