'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, MapPin, Star, Shield } from 'lucide-react'

const ParallaxShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(textRef, { once: true })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.7, 1, 1, 0.7])

  const showcaseItems = [
    {
      title: "Madinat Sandan",
      subtitle: "Luxury Residential Complex",
      location: "Muscat, Oman",
      value: "52M OMR",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      description: "Premium waterfront development with world-class amenities"
    },
    {
      title: "Al Mouj Marina",
      subtitle: "Commercial Excellence",
      location: "The Wave, Muscat",
      value: "38M OMR",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      description: "Iconic business district with sustainable architecture"
    },
    {
      title: "Nizwa Heritage",
      subtitle: "Cultural Investment",
      location: "Nizwa, Oman",
      value: "24M OMR",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800&h=600&fit=crop",
      description: "Preserving heritage while creating modern value"
    }
  ]

  return (
    <section ref={containerRef} className="relative min-h-screen py-32 overflow-hidden bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Background Elements */}
      <motion.div 
        style={{ y: y3 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"
      />
      
      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 mb-8">
            <Star className="w-5 h-5 text-gold-400" />
            <span className="text-white font-medium">Portfolio Highlights</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold mb-8">
            <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Exceptional
            </span>
            <span className="block bg-gradient-to-r from-gold-300 via-yellow-300 to-gold-400 bg-clip-text text-transparent">
              Properties
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated portfolio of premium properties across Oman's most prestigious locations.
          </p>
        </motion.div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              style={{ 
                y: index === 0 ? y1 : index === 1 ? y2 : y3,
                scale: scale,
                opacity: opacity
              }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 100
              }}
              className="group relative cursor-pointer"
            >
              {/* Card Container */}
              <div className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-white/30 transition-all duration-500">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Value Badge */}
                  <div className="absolute top-4 right-4 bg-gold-500/90 backdrop-blur-sm text-black px-4 py-2 rounded-full font-bold">
                    {item.value}
                  </div>
                  
                  {/* Location */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-gold-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gold-400 font-medium">
                        {item.subtitle}
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 45 }}
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-gold-500/20 transition-colors"
                    >
                      <ArrowRight className="w-5 h-5 text-white group-hover:text-gold-400" />
                    </motion.div>
                  </div>
                  
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <Shield className="w-4 h-4" />
                      <span className="text-sm">Shariah Compliant</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-400">
                      <Star className="w-4 h-4" />
                      <span className="text-sm">Premium Grade</span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              {/* Floating Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-400/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl font-semibold text-white overflow-hidden transition-all duration-500 hover:scale-105 hover:border-gold-400/50">
            <span className="relative z-10 flex items-center gap-2">
              View Complete Portfolio
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold-400/30 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default ParallaxShowcase

