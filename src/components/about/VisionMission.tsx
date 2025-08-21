'use client'

import { motion } from 'framer-motion'
import { Eye, Target, Heart, Compass } from 'lucide-react'

const VisionMission = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-soft-gray to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-thara-navy mb-6">Vision & Mission</h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Our vision and mission guide every decision we make, ensuring we remain true to our 
            commitment to excellence and sustainable growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-thara-green h-full">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-thara-green bg-opacity-10 rounded-xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-thara-green" />
                </div>
                <h3 className="text-3xl font-bold text-thara-navy">Our Vision</h3>
              </div>
              
              <div className="relative">
                <div className="text-6xl text-thara-green opacity-20 font-bold mb-4">"</div>
                <p className="text-xl text-text-gray leading-relaxed font-medium relative -mt-8 pl-8">
                  To be a leading Investment company with a strong footprint locally, regionally and globally.
                </p>
                <p className="text-lg text-text-gray leading-relaxed mt-4 pl-8">
                  Our first step towards this vision is to pioneer public-private partnerships in Oman 
                  while launching Oman's first Real Estate Investment Trust (REIT).
                </p>
                <div className="text-6xl text-thara-green opacity-20 font-bold text-right -mt-4">"</div>
              </div>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-thara-gold h-full">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-thara-gold bg-opacity-10 rounded-xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-thara-gold" />
                </div>
                <h3 className="text-3xl font-bold text-thara-navy">Our Mission</h3>
              </div>
              
              <div className="relative">
                <div className="text-6xl text-thara-gold opacity-20 font-bold mb-4">"</div>
                <p className="text-xl text-text-gray leading-relaxed font-medium relative -mt-8 pl-8">
                  Our mission is to provide safe and stable investment opportunities to our clients, 
                  to play a vital role in the economy with innovative structures.
                </p>
                <div className="text-6xl text-thara-gold opacity-20 font-bold text-right -mt-4">"</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-thara-navy rounded-2xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Our Core Principles</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These fundamental principles shape our approach to investment and guide our 
              relationships with clients, partners, and the community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Excellence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-thara-green bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-thara-green" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Excellence</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                We strive for excellence in every aspect of our operations, from investment 
                analysis to client service.
              </p>
            </motion.div>

            {/* Integrity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-thara-gold bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-thara-gold" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Integrity</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                We conduct business with the highest ethical standards, transparency, 
                and accountability.
              </p>
            </motion.div>

            {/* Innovation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Compass className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Innovation</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                We embrace innovative approaches to investment and continuously seek 
                new opportunities for growth.
              </p>
            </motion.div>

            {/* Sustainability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-thara-green bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-thara-green" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Sustainability</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                We prioritize long-term sustainable growth that benefits all stakeholders 
                and the environment.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Vision 2040 Alignment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-thara-green to-light-green rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Aligned with Oman Vision 2040</h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              Our strategic initiatives directly support Oman's Vision 2040 pillars of economic 
              diversification, private sector development, and sustainable growth. We are proud 
              to contribute to building a vibrant society, a diversified economy, and a 
              sustainable environment for future generations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default VisionMission
