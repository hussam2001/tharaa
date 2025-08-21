'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import { Play, Pause, Volume2, VolumeX, ChevronDown } from 'lucide-react'

const VideoHero = () => {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          {/* Placeholder for video - in production, you'd use real video files */}
          <source src="/videos/investment-hero.mp4" type="video/mp4" />
          {/* Fallback background for demo */}
        </video>
        
        {/* Video Fallback Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
          <div className="absolute inset-0 bg-slate-800/20"></div>
        </div>
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/50"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>

      {/* Video Controls */}
      <div className="absolute top-6 right-6 z-20 flex gap-3">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={togglePlay}
          className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMute}
          className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </motion.button>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 mb-8"
            >
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium">Premium Investment Solutions</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-6xl lg:text-8xl font-bold mb-8 leading-none"
            >
              <span className="block text-white">Luxury</span>
              <span className="block bg-gradient-to-r from-gold-300 via-yellow-300 to-gold-400 bg-clip-text text-transparent">
                Investment
              </span>
              <span className="block text-white">Experience</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl lg:text-2xl text-gray-200 mb-12 max-w-2xl leading-relaxed"
            >
              Immerse yourself in Oman's most exclusive investment opportunities through cutting-edge technology and unparalleled market insights.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-gold-400 to-yellow-500 rounded-xl font-semibold text-black overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gold-500/30">
                <span className="relative z-10">Explore Portfolio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-gold-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <button className="group px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-all duration-500 hover:scale-105">
                <span className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Our Story
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/70"
        >
          <span className="text-sm font-medium">Discover More</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            initial={{
              x: Math.random() * 1920,
              y: Math.random() * 1080,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default VideoHero

