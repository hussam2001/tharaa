'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Play, Shield, Star, TrendingUp, ArrowRight, Sparkles } from 'lucide-react'

const DynamicHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const floatingElements = Array.from({ length: 12 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-20"
      animate={{
        x: [0, 30, 0, -30, 0],
        y: [0, -30, 0, 30, 0],
        scale: [1, 1.2, 1, 0.8, 1],
      }}
      transition={{
        duration: 4 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.2
      }}
      style={{
        left: `${10 + (i * 8)}%`,
        top: `${20 + (i % 3) * 20}%`,
      }}
    />
  ))

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/30 to-emerald-900/20">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-white" />
          </svg>
        </div>

        {/* Floating Elements */}
        {floatingElements}

        {/* Mouse Follower Effect */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-full backdrop-blur-sm"
            >
              <Shield className="w-5 h-5 text-emerald-400 mr-2" />
              <span className="text-emerald-400 font-semibold">CMA Licensed Investment Company</span>
              <Sparkles className="w-4 h-4 text-emerald-400 ml-2" />
            </motion.div>

            {/* Main Heading */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Future of
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Investment
                </span>
                <br />
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Excellence
                </span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-lg"
            >
              Pioneering sustainable growth through innovative Real Estate Investment Trusts and strategic Public-Private Partnerships since 2018.
            </motion.p>

            {/* Stats Quick View */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap gap-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">6+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">25M+</div>
                <div className="text-sm text-gray-400">OMR Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">100%</div>
                <div className="text-sm text-gray-400">CMA Compliant</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/investments"
                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Explore Investments
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <button
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                className="group flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Our Story
              </button>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            {/* Video/Image Container */}
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden">
              {!isVideoPlaying ? (
                <div className="relative h-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/10 rounded-3xl flex items-center justify-center">
                  {/* Placeholder for video thumbnail */}
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                      <TrendingUp className="w-10 h-10 text-emerald-400" />
                    </div>
                    <div className="text-white font-semibold">Investment Growth Visualization</div>
                    <div className="text-gray-300 text-sm">Click to play interactive demo</div>
                  </div>

                  {/* Floating Cards */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-8 right-8 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
                  >
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="text-white font-semibold">5.0 Rating</span>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="absolute bottom-8 left-8 bg-emerald-500/20 backdrop-blur-sm rounded-2xl p-4 border border-emerald-500/30"
                  >
                    <div className="text-white text-sm">
                      <div className="font-semibold">ROI Performance</div>
                      <div className="text-emerald-400">+18.5% Annual</div>
                    </div>
                  </motion.div>
                </div>
              ) : (
                <div className="h-full bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold mb-2">Video Coming Soon</div>
                    <div className="text-gray-400">Interactive investment showcase</div>
                  </div>
                </div>
              )}
            </div>

            {/* Background Decorations */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-emerald-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default DynamicHero

