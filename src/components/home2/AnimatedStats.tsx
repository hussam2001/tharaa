'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Building, TrendingUp, Users, Award } from 'lucide-react'

const AnimatedStats = () => {
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

      animateCounter('projects', 462, 2000)
      animateCounter('returns', 7, 2500)
      animateCounter('clients', 156, 2200)
      animateCounter('awards', 200, 1800)
    }
  }, [isInView])

  const stats = [
    {
      icon: Building,
      label: 'Income-Generating Assets',
      value: counters.projects,
      suffix: '',
      description: 'Premium assets in Madinat Sandan development delivering consistent returns',
      color: 'emerald-400',
      bgColor: 'emerald-500/10',
      borderColor: 'emerald-500/30'
    },
    {
      icon: TrendingUp,
      label: 'Annual Yield',
      value: counters.returns,
      suffix: '.25%',
      description: 'Delivered to investors while maintaining 100% Shariah compliance',
      color: 'blue-400',
      bgColor: 'blue-500/10',
      borderColor: 'blue-500/30'
    },
    {
      icon: Users,
      label: 'Target Portfolio',
      value: counters.clients,
      suffix: 'M OMR',
      description: 'Expansion plan from 20M OMR current portfolio to 156M OMR',
      color: 'purple-400',
      bgColor: 'purple-500/10',
      borderColor: 'purple-500/30'
    },
    {
      icon: Award,
      label: 'USD Investments',
      value: counters.awards,
      suffix: 'M',
      description: 'Overseen by our Managing Director across diverse sectors',
      color: 'yellow-400',
      bgColor: 'yellow-500/10',
      borderColor: 'yellow-500/30'
    }
  ]

  return (
    <section ref={ref} className="w-full py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900"></div>
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-100 via-white to-slate-200 bg-clip-text text-transparent mb-6 drop-shadow-sm">
            Oman's First Shariah REIT
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Pioneering achievement in Shariah-compliant real estate investment with consistent returns
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
              className="group relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 shadow-2xl hover:shadow-emerald-500/10"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 bg-gradient-to-r ${index === 0 ? 'from-emerald-400 to-emerald-500' : index === 1 ? 'from-blue-400 to-blue-500' : index === 2 ? 'from-purple-400 to-purple-500' : 'from-yellow-400 to-yellow-500'} rounded-2xl flex items-center justify-center mb-6 shadow-xl`}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Counter */}
              <div className="mb-4">
                <div className={`text-4xl lg:text-5xl font-bold ${index === 0 ? 'text-emerald-300' : index === 1 ? 'text-blue-300' : index === 2 ? 'text-purple-300' : 'text-yellow-300'} drop-shadow-sm`}>
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-white font-medium text-lg mt-2">
                  {stat.label}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed">
                {stat.description}
              </p>

              {/* Decorative Line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                className={`absolute bottom-0 left-0 h-1 ${index === 0 ? 'bg-emerald-300' : index === 1 ? 'bg-blue-300' : index === 2 ? 'bg-purple-300' : 'bg-yellow-300'} rounded-full shadow-sm`}
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AnimatedStats
