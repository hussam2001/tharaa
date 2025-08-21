'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { TrendingUp, Building, Users, Award, Sparkles } from 'lucide-react'

const LuxuryStats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [counters, setCounters] = useState({
    assets: 0,
    yield: 0,
    target: 0,
    clients: 0
  })

  const stats = [
    {
      icon: Building,
      label: 'Premium Assets',
      value: 462,
      suffix: '',
      description: 'Luxury properties in prime locations',
      color: 'from-gold-400 to-yellow-500',
      bgColor: 'from-gold-500/20 to-yellow-500/20'
    },
    {
      icon: TrendingUp,
      label: 'Annual Returns',
      value: 7.25,
      suffix: '%',
      description: 'Consistent luxury-grade performance',
      color: 'from-emerald-400 to-green-500',
      bgColor: 'from-emerald-500/20 to-green-500/20'
    },
    {
      icon: Award,
      label: 'Portfolio Value',
      value: 156,
      suffix: 'M OMR',
      description: 'Exclusive investment opportunities',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: Users,
      label: 'Elite Investors',
      value: 250,
      suffix: '+',
      description: 'High-net-worth clientele',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'from-purple-500/20 to-pink-500/20'
    }
  ]

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const startTime = Date.now()
      
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        
        setCounters({
          assets: Math.round(462 * easeOutQuart),
          yield: Number((7.25 * easeOutQuart).toFixed(2)),
          target: Math.round(156 * easeOutQuart),
          clients: Math.round(250 * easeOutQuart)
        })
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      requestAnimationFrame(animate)
    }
  }, [isInView])

  return (
    <section ref={ref} className="relative py-32 bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900/50 to-black"></div>
      <div className="absolute inset-0 bg-slate-800/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500/20 to-yellow-500/20 backdrop-blur-xl border border-gold-500/30 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-gold-400" />
            <span className="text-gold-300 font-medium">Excellence in Numbers</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Luxury Performance
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence is reflected in every metric, delivering unparalleled results for our discerning clientele.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            const currentValue = index === 0 ? counters.assets : 
                               index === 1 ? counters.yield :
                               index === 2 ? counters.target : counters.clients
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
                className="group relative"
              >
                {/* Card */}
                <div className={`relative p-8 rounded-3xl backdrop-blur-xl border border-white/10 overflow-hidden transform transition-all duration-500 group-hover:border-white/20 bg-gradient-to-br ${stat.bgColor}`}>
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  
                  {/* Value */}
                  <div className="relative mb-4">
                    <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {currentValue}
                      <span className="text-2xl">{stat.suffix}</span>
                    </div>
                  </div>
                  
                  {/* Label */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                    {stat.label}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.description}
                  </p>
                  
                  {/* Floating Particles */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-60`}
                        initial={{ scale: 0 }}
                        animate={{
                          scale: [0, 1, 0],
                          x: [0, Math.random() * 100 - 50],
                          y: [0, Math.random() * 100 - 50],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                        style={{
                          left: `${30 + i * 20}%`,
                          top: `${40 + i * 10}%`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-8">Ready to join our exclusive investment community?</p>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-gold-400 to-yellow-500 rounded-xl font-semibold text-black overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gold-500/30">
            <span className="relative z-10 flex items-center gap-2">
              Start Your Journey
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                →
              </motion.div>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-gold-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default LuxuryStats

