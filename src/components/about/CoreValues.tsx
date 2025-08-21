'use client'

import { motion } from 'framer-motion'
import { Shield, Users, Lightbulb, TreePine, Award, Globe } from 'lucide-react'

const CoreValues = () => {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'We build lasting relationships through complete transparency in our operations, clear communication, and unwavering commitment to our clients\' best interests.',
      color: 'thara-green',
      bgGradient: 'from-thara-green to-light-green'
    },
    {
      icon: Users,
      title: 'Client-Centric Approach',
      description: 'Every decision we make prioritizes our clients\' success. We provide personalized investment solutions tailored to individual goals and risk profiles.',
      color: 'thara-gold',
      bgGradient: 'from-thara-gold to-light-gold'
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Excellence',
      description: 'We continuously evolve our investment strategies, embrace new technologies, and maintain the highest standards of professional excellence.',
      color: 'thara-navy',
      bgGradient: 'from-thara-navy to-dark-navy'
    },
    {
      icon: TreePine,
      title: 'Sustainable Development',
      description: 'We integrate ESG principles into our investment philosophy, contributing to Oman\'s sustainable economic growth and environmental stewardship.',
      color: 'light-green',
      bgGradient: 'from-light-green to-thara-green'
    },
    {
      icon: Award,
      title: 'Regulatory Excellence',
      description: 'We exceed regulatory requirements, maintain impeccable compliance standards, and uphold the highest levels of corporate governance.',
      color: 'thara-gold',
      bgGradient: 'from-light-gold to-thara-gold'
    },
    {
      icon: Globe,
      title: 'Local Expertise, Global Vision',
      description: 'We combine deep local market knowledge with international best practices to deliver world-class investment opportunities in Oman.',
      color: 'thara-navy',
      bgGradient: 'from-dark-navy to-thara-navy'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-thara-navy mb-6">Our Core Values</h2>
          <p className="text-xl text-text-gray max-w-4xl mx-auto leading-relaxed">
            These values form the foundation of everything we do, guiding our decisions, 
            shaping our culture, and defining our commitment to stakeholders.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 h-full">
                {/* Icon Header */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.bgGradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Decorative Element */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-thara-gold opacity-20 rounded-full group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-thara-navy mb-4 group-hover:text-thara-green transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-text-gray leading-relaxed">
                  {value.description}
                </p>

                {/* Hover Effect Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${value.bgGradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values in Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-soft-gray to-white rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-thara-navy mb-6">Values in Action</h3>
              <p className="text-xl text-text-gray max-w-3xl mx-auto">
                See how our core values translate into real-world impact and measurable results 
                for our clients and the broader Omani economy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-thara-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl font-bold text-thara-green">100%</div>
                </div>
                <h4 className="text-xl font-bold text-thara-navy mb-2">Compliance Rate</h4>
                <p className="text-text-gray">
                  Perfect regulatory compliance record since establishment, reflecting our 
                  commitment to transparency and excellence.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-thara-gold bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl font-bold text-thara-gold">500+</div>
                </div>
                <h4 className="text-xl font-bold text-thara-navy mb-2">Satisfied Clients</h4>
                <p className="text-text-gray">
                  Growing client base demonstrates our client-centric approach and 
                  commitment to delivering exceptional service.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-thara-navy bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl font-bold text-thara-navy">ESG</div>
                </div>
                <h4 className="text-xl font-bold text-thara-navy mb-2">Sustainable Focus</h4>
                <p className="text-text-gray">
                  All investment decisions incorporate environmental, social, and 
                  governance factors for long-term value creation.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Commitment Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-thara-navy rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Our Commitment to You</h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              These values aren't just words on a page—they're the principles that guide every 
              interaction, every investment decision, and every strategic initiative. When you 
              partner with Thara Global, you're choosing an organization that puts integrity, 
              excellence, and your success at the heart of everything we do.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CoreValues


