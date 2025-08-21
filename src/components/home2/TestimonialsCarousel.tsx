'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Quote, Star, ChevronLeft, ChevronRight, Users } from 'lucide-react'

const TestimonialsCarousel = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: 'Mohammed Al-Rashid',
      position: 'CEO, Al-Rashid Holdings',
      company: 'Real Estate Investment',
      content: 'Thara Global\'s expertise in REITs has consistently delivered exceptional returns for our portfolio. Their deep understanding of the Omani market and regulatory environment is unmatched.',
      rating: 5,
      image: '/api/placeholder/80/80',
      investment: 'OMR 2.5M',
      returns: '+22.3%'
    },
    {
      id: 2,
      name: 'Fatima Al-Zahra',
      position: 'Investment Director',
      company: 'Muscat Investment Group',
      content: 'The team at Thara Global transformed our investment strategy through their innovative PPP structures. We\'ve seen remarkable growth while contributing to Oman\'s development.',
      rating: 5,
      image: '/api/placeholder/80/80',
      investment: 'OMR 4.2M',
      returns: '+19.8%'
    },
    {
      id: 3,
      name: 'Ahmed Al-Balushi',
      position: 'Portfolio Manager',
      company: 'Gulf Capital Partners',
      content: 'Professional, transparent, and results-driven. Thara Global has been instrumental in diversifying our real estate investments across prime Omani locations with outstanding performance.',
      rating: 5,
      image: '/api/placeholder/80/80',
      investment: 'OMR 1.8M',
      returns: '+25.1%'
    },
    {
      id: 4,
      name: 'Sarah Al-Hinai',
      position: 'Chief Investment Officer',
      company: 'Omani Sovereign Fund',
      content: 'Thara Global\'s commitment to regulatory compliance and their innovative approach to Public-Private Partnerships aligns perfectly with our vision for sustainable growth.',
      rating: 5,
      image: '/api/placeholder/80/80',
      investment: 'OMR 6.7M',
      returns: '+18.5%'
    }
  ]

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlay, testimonials.length])

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"></div>
      
      {/* Parallax Background Elements */}
      <motion.div
        animate={{ x: [-100, 100, -100] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{ x: [100, -100, 100] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
      ></motion.div>

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
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-500/20 backdrop-blur-sm mb-6"
          >
            <Users className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-400 font-semibold">Client Success Stories</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Trusted by leading investors and institutions across the region
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-5xl mx-auto mb-12">
          <div 
            className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 hover:bg-white/10 transition-all duration-500"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8"
                >
                  <Quote className="w-8 h-8 text-white" />
                </motion.div>

                {/* Testimonial Content */}
                <motion.blockquote
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-2xl lg:text-3xl font-light text-white leading-relaxed mb-8 max-w-4xl mx-auto"
                >
                  "{testimonials[activeTestimonial].content}"
                </motion.blockquote>

                {/* Stars */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex justify-center space-x-1 mb-8"
                >
                  {Array.from({ length: testimonials[activeTestimonial].rating }, (_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * i, duration: 0.3 }}
                    >
                      <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Author Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-8"
                >
                  {/* Profile */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {testimonials[activeTestimonial].name.charAt(0)}
                      </span>
                    </div>
                    <div className="text-left">
                      <div className="text-white font-semibold text-lg">
                        {testimonials[activeTestimonial].name}
                      </div>
                      <div className="text-gray-400">
                        {testimonials[activeTestimonial].position}
                      </div>
                      <div className="text-emerald-400 text-sm font-semibold">
                        {testimonials[activeTestimonial].company}
                      </div>
                    </div>
                  </div>

                  {/* Investment Stats */}
                  <div className="flex space-x-8">
                    <div className="text-center">
                      <div className="text-emerald-400 font-bold text-xl">
                        {testimonials[activeTestimonial].investment}
                      </div>
                      <div className="text-gray-400 text-sm">Investment</div>
                    </div>
                    <div className="text-center">
                      <div className="text-blue-400 font-bold text-xl">
                        {testimonials[activeTestimonial].returns}
                      </div>
                      <div className="text-gray-400 text-sm">Annual Return</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:text-emerald-400 transition-colors" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:text-emerald-400 transition-colors" />
            </button>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeTestimonial
                  ? 'bg-emerald-400 w-8'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.id}
              onClick={() => setActiveTestimonial(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-2xl transition-all duration-300 ${
                index === activeTestimonial
                  ? 'bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/30'
                  : 'bg-white/5 border border-white/10 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-sm">
                    {testimonial.name.split(' ')[0]}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsCarousel

