'use client'

import { motion } from 'framer-motion'
import { Shield, MapPin, TrendingUp, Globe, Zap, Target } from 'lucide-react'

const WhyOmanSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Safe, Investor-Friendly Environment",
      description: "Political stability, zero income tax, transparent regulation",
      stats: "BB+ Credit Rating",
      color: "from-emerald-400 to-green-500"
    },
    {
      icon: MapPin,
      title: "Strategic Location",
      description: "Gateway to 4+ billion consumers within 5-hour flight radius",
      stats: "Strategic Gateway",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Economic Transformation",
      description: "Vision 2040 driving $17B non-oil investments across priority sectors",
      stats: "$17B Investment",
      color: "from-purple-400 to-pink-500"
    }
  ]

  const sectors = [
    { name: "Tourism", growth: "11.8", color: "emerald" },
    { name: "Logistics", growth: "8.6", color: "blue" },
    { name: "Manufacturing", growth: "9.5", color: "purple" },
    { name: "Healthcare", growth: "7.3", color: "yellow" },
    { name: "Education", growth: "6.2", color: "pink" }
  ]

  return (
    <section className="w-full py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800/90 to-slate-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 5 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-2xl opacity-10"
            style={{
              background: `linear-gradient(135deg, ${
                i % 3 === 0 ? '#10b981, #3b82f6' : 
                i % 3 === 1 ? '#3b82f6, #8b5cf6' : 
                '#8b5cf6, #f59e0b'
              })`,
              width: `${150 + i * 30}px`,
              height: `${150 + i * 30}px`,
              left: `${10 + (i * 18)}%`,
              top: `${20 + (i % 2) * 50}%`,
            }}
            animate={{
              x: [0, 60, -40, 0],
              y: [0, -40, 30, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 20 + i * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full border border-emerald-500/20 backdrop-blur-sm mb-6"
          >
            <Globe className="w-5 h-5 text-emerald-400 mr-2" />
            <span className="text-emerald-400 font-semibold">Market Opportunity</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-100 via-white to-slate-200 bg-clip-text text-transparent mb-6 drop-shadow-sm">
            Why Oman?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A stable and emerging market with untapped potential
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 shadow-2xl"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-slate-300 leading-relaxed mb-6 group-hover:text-slate-200 transition-colors">
                {feature.description}
              </p>

              {/* Stats */}
              <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${feature.color}/20 rounded-full`}>
                <span className={`text-sm font-semibold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                  {feature.stats}
                </span>
              </div>

              {/* Decorative Line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} rounded-full`}
              ></motion.div>
            </motion.div>
          ))}
        </div>

        {/* Growth Sectors */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Projected Growth Through 2030
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Massive expansion creating substantial investment opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.1 }}
                className="text-center group"
              >
                              <motion.div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300 ${
                  sector.color === 'emerald' ? 'bg-gradient-to-r from-emerald-400 to-emerald-500' :
                  sector.color === 'blue' ? 'bg-gradient-to-r from-blue-400 to-blue-500' :
                  sector.color === 'purple' ? 'bg-gradient-to-r from-purple-400 to-purple-500' :
                  sector.color === 'yellow' ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' :
                  'bg-gradient-to-r from-pink-400 to-pink-500'
                }`}
                whileHover={{ rotate: 5 }}
              >
                  <span className="text-white font-bold text-xl">{sector.growth}%</span>
                </motion.div>
                
                <h4 className="text-white font-semibold mb-2 group-hover:text-gray-100 transition-colors">
                  {sector.name}
                </h4>
                <p className="text-slate-400 text-sm">CAGR</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-white/10"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-300 mb-2">$8.3B</div>
              <div className="text-slate-300">Infrastructure Development</div>
              <div className="text-slate-400 text-sm">Allocated through 2025</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">$17B</div>
              <div className="text-slate-300">Non-Oil Investments</div>
              <div className="text-slate-400 text-sm">Vision 2040 initiatives</div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-xl border border-white/10 rounded-2xl">
            <Target className="w-6 h-6 text-emerald-400 mr-3" />
            <div className="text-left">
              <div className="text-white font-semibold">An Emerging Market with Untapped Potential</div>
              <div className="text-slate-400 text-sm">Strategic entry points for global investors</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyOmanSection
