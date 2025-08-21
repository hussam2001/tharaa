'use client'

import { motion } from 'framer-motion'

import Link from 'next/link'
import { Play, Shield, Star, TrendingUp, ArrowRight, Sparkles } from 'lucide-react'
import InteractiveDemo from './InteractiveDemo'

const EnhancedHero = () => {

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95">
        {/* Smooth Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smoothGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="currentColor" opacity="0.3"/>
                <circle cx="0" cy="0" r="0.5" fill="currentColor" opacity="0.2"/>
                <circle cx="60" cy="60" r="0.5" fill="currentColor" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smoothGrid)" className="text-emerald-300" />
          </svg>
        </div>

        {/* Elegant Floating Orbs */}
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-xl opacity-20"
            style={{
              background: `linear-gradient(45deg, ${
                i % 3 === 0 ? '#10b981, #3b82f6' : 
                i % 3 === 1 ? '#3b82f6, #8b5cf6' : 
                '#8b5cf6, #10b981'
              })`,
              width: `${120 + i * 40}px`,
              height: `${120 + i * 40}px`,
              left: `${15 + (i * 15)}%`,
              top: `${20 + (i % 2) * 40}%`,
            }}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -80, 60, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Refined Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500/15 to-blue-500/10 border border-emerald-400/30 rounded-full backdrop-blur-xl shadow-lg"
            >
              <Shield className="w-5 h-5 text-emerald-300 mr-2" />
              <span className="text-emerald-200 font-medium">Oman's First Shariah-Compliant REIT</span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-emerald-300 ml-2" />
              </motion.div>
            </motion.div>

            {/* Main Heading */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-slate-100 via-white to-slate-200 bg-clip-text text-transparent">
                  Where Stability
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-lg">
                  Meets Growth
                </span>
                <br />
                <span className="bg-gradient-to-r from-slate-100 via-white to-slate-200 bg-clip-text text-transparent">
                  Through Shariah
                </span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-lg drop-shadow-sm"
            >
              Strategic Shariah-compliant investments delivering perspective, not just information. Gateway to Oman's premier real estate opportunities with proven 7.25% annual yields.
            </motion.p>

            {/* Stats Quick View */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap gap-8"
            >
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-300 to-emerald-400 bg-clip-text text-transparent">462</div>
                <div className="text-sm text-slate-400">Income Assets</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent">7.25%</div>
                <div className="text-sm text-slate-400">Annual Yield</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent">156M</div>
                <div className="text-sm text-slate-400">OMR Target</div>
              </motion.div>
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
                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-xl font-semibold text-white overflow-hidden transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-emerald-500/30"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Discover Aman REIT
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>

              <Link
                href="/about"
                className="group flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-500 hover:border-emerald-300/30"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Play className="w-5 h-5 mr-2" />
                </motion.div>
                Discover Our Story
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden">
              <InteractiveDemo />

              {/* Enhanced Floating Cards */}
              <motion.div
                animate={{ 
                  y: [-5, 8, -5],
                  rotate: [0, 2, 0, -1, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 right-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-2xl z-10"
              >
                <div className="flex items-center space-x-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  >
                    <Star className="w-5 h-5 text-yellow-300 drop-shadow-sm" />
                  </motion.div>
                  <span className="text-white font-medium text-sm">5.0 Rating</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [8, -5, 8],
                  rotate: [0, -1, 0, 2, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-6 left-6 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 backdrop-blur-xl rounded-2xl p-4 border border-emerald-400/30 shadow-2xl z-10"
              >
                <div className="text-white text-sm">
                  <div className="font-medium mb-1">Live Performance</div>
                  <div className="text-emerald-300 font-semibold">+18.5% Annual</div>
                </div>
              </motion.div>
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

export default EnhancedHero
