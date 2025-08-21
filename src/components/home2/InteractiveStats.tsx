'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Building, TrendingUp, Users, Award, Zap, Globe } from 'lucide-react'

const InteractiveStats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [counters, setCounters] = useState({
    projects: 0,
    returns: 0,
    clients: 0,
    awards: 0
  })

  useEffect(() => {
    if (isInView) {
      const animateCounter = (key: keyof typeof counters, target: number, duration: number = 2000) => {
        let start = 0
        const increment = target / (duration / 16)
        const timer = setInterval(() => {
          start += increment
          if (start >= target) {
            start = target
            clearInterval(timer)
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(start) }))
        }, 16)
      }

      animateCounter('projects', 45, 2000)
      animateCounter('returns', 185, 2500)
      animateCounter('clients', 250, 2200)
      animateCounter('awards', 8, 1800)
    }
  }, [isInView])

  const stats = [
    {
      icon: Building,
      label: 'Investment Projects',
      value: counters.projects,
      suffix: '+',
      description: 'Successfully managed real estate and infrastructure projects',
      color: 'from-emerald-400 to-green-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30'
    },
    {
      icon: TrendingUp,
      label: 'Average Annual Returns',
      value: counters.returns,
      suffix: '%',
      prefix: '',
      description: 'Consistent performance across our investment portfolio',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      icon: Users,
      label: 'Active Investors',
      value: counters.clients,
      suffix: '+',
      description: 'Trusted by investors across the region',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      icon: Award,
      label: 'Industry Awards',
      value: counters.awards,
      suffix: '',
      description: 'Recognition for excellence in investment management',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30'
    }
  ]

  return (
    <section ref={ref} className="py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full border border-emerald-500/20 backdrop-blur-sm mb-6"
          >
            <Zap className="w-5 h-5 text-emerald-400 mr-2" />
            <span className="text-emerald-400 font-semibold">Performance Metrics</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent mb-6">
            Proven Track Record
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Six years of consistent growth and exceptional returns for our investors
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`group relative ${stat.bgColor} backdrop-blur-xl border ${stat.borderColor} rounded-3xl p-8 hover:bg-white/5 transition-all duration-500`}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Counter */}
              <div className="mb-4">
                <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.prefix}{stat.value.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-white font-semibold text-lg mt-2">
                  {stat.label}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {stat.description}
              </p>

              {/* Decorative Line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.color} rounded-full`}
              ></motion.div>

              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                {Array.from({ length: 3 }, (_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-1 h-1 bg-gradient-to-r ${stat.color} rounded-full opacity-40`}
                    animate={{
                      x: [0, 20, 0, -20, 0],
                      y: [0, -20, 0, 20, 0],
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5
                    }}
                    style={{
                      left: `${20 + i * 25}%`,
                      top: `${30 + i * 15}%`,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-xl border border-white/10 rounded-2xl">
            <Globe className="w-6 h-6 text-emerald-400 mr-3" />
            <div className="text-left">
              <div className="text-white font-semibold">Ready to join our success story?</div>
              <div className="text-gray-400 text-sm">Discover investment opportunities today</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InteractiveStats

