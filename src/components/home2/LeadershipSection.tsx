'use client'

import { motion } from 'framer-motion'
import { Award, TrendingUp, Building, Briefcase, GraduationCap, Star } from 'lucide-react'

const LeadershipSection = () => {
  const achievements = [
    {
      icon: Building,
      title: "Al Madina Investment",
      description: "Founding member (1999), rose to CEO in 2008",
      highlight: "Transformed into Oman's leading investment firm"
    },
    {
      icon: TrendingUp,
      title: "USD 200M Investments",
      description: "Oversaw diverse sector investments",
      highlight: "Across multiple economic cycles"
    },
    {
      icon: Award,
      title: "Tilal Real Estate Fund",
      description: "Oman's first real estate fund (2006)",
      highlight: "Achieved 21% p.a. IRR"
    },
    {
      icon: Briefcase,
      title: "Tilal Sukuk",
      description: "Oman's first corporate Sukuk (2013)",
      highlight: "OMR 50M issuance"
    }
  ]

  const qualifications = [
    "Bachelor of Commerce - Ain Shams University, Egypt",
    "Chartered Islamic Finance Professional (CIFP, Malaysia)", 
    "Certified Sukuk Professional (Pakistan)"
  ]

  return (
    <section className="w-full py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 4 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-10"
            style={{
              background: `linear-gradient(45deg, ${
                i % 2 === 0 ? '#10b981, #3b82f6' : '#3b82f6, #8b5cf6'
              })`,
              width: `${200 + i * 50}px`,
              height: `${200 + i * 50}px`,
              left: `${20 + (i * 20)}%`,
              top: `${10 + (i % 2) * 60}%`,
            }}
            animate={{
              x: [0, 50, -30, 0],
              y: [0, -30, 40, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 25 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 3
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
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 backdrop-blur-sm mb-6"
          >
            <Star className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-400 font-semibold">Leadership Excellence</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-100 via-white to-slate-200 bg-clip-text text-transparent mb-6 drop-shadow-sm">
            Our Managing Director
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Built on expertise, experience, and dedication in real estate investment, Islamic finance, and capital markets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Profile Card */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              {/* Profile Image Placeholder */}
              <div className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <div className="w-24 h-24 bg-white/20 rounded-xl flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">AS</span>
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Mr. Abdul Samad Al Maskari</h3>
                <p className="text-emerald-300 font-semibold">Managing Director</p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-2xl font-bold text-emerald-300">25+</div>
                  <div className="text-sm text-slate-400">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-2xl font-bold text-blue-300">$200M</div>
                  <div className="text-sm text-slate-400">USD Overseen</div>
                </div>
              </div>

              {/* Qualifications */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-purple-400" />
                  Qualifications
                </h4>
                {qualifications.map((qualification, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-300 text-sm">{qualification}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Key Achievements</h3>
            
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="group bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 shadow-xl"
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 bg-gradient-to-r ${
                      index === 0 ? 'from-emerald-400 to-emerald-500' :
                      index === 1 ? 'from-blue-400 to-blue-500' :
                      index === 2 ? 'from-purple-400 to-purple-500' :
                      'from-yellow-400 to-yellow-500'
                    } rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}
                  >
                    <achievement.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-slate-300 mb-2 group-hover:text-slate-200 transition-colors">
                      {achievement.description}
                    </p>
                    <p className={`text-sm font-semibold ${
                      index === 0 ? 'text-emerald-300' :
                      index === 1 ? 'text-blue-300' :
                      index === 2 ? 'text-purple-300' :
                      'text-yellow-300'
                    }`}>
                      {achievement.highlight}
                    </p>
                  </div>
                </div>

                {/* Progress line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                  className={`mt-4 h-1 ${
                    index === 0 ? 'bg-emerald-300' :
                    index === 1 ? 'bg-blue-300' :
                    index === 2 ? 'bg-purple-300' :
                    'bg-yellow-300'
                  } rounded-full`}
                ></motion.div>
              </motion.div>
            ))}

            {/* Special Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-xl border border-emerald-400/30 rounded-2xl p-6 shadow-2xl"
            >
              <div className="text-center">
                <h4 className="text-xl font-bold text-white mb-2">REIT Pioneer</h4>
                <p className="text-emerald-300 font-semibold mb-2">
                  Led the initiative to introduce REITs as a national program in Oman (Tanfeedh 2016)
                </p>
                <p className="text-slate-300 text-sm">
                  Paving the way for Shariah-compliant real estate investment
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LeadershipSection
