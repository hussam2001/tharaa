'use client'

import { motion } from 'framer-motion'
import { Award, Shield, TrendingUp, Users, CheckCircle, Clock, Phone, Mail } from 'lucide-react'

const BookingBenefits = () => {
  const benefits = [
    {
      icon: Award,
      title: 'Expert Guidance',
      description: 'Get personalized advice from CMA-licensed investment professionals with 50+ years combined experience.',
      color: 'text-thara-gold',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Shield,
      title: '100% Shariah Compliant',
      description: 'All investment recommendations are verified for Shariah compliance by our dedicated board of scholars.',
      color: 'text-thara-green',
      bgColor: 'bg-green-50'
    },
    {
      icon: TrendingUp,
      title: 'Proven Track Record',
      description: 'Benefit from our success with Oman\'s first Shariah-compliant REIT delivering 7.25% annual yields.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Users,
      title: 'Personalized Approach',
      description: 'Tailored investment strategies based on your risk tolerance, goals, and financial situation.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ]

  const processSteps = [
    {
      step: '1',
      title: 'Book Your Consultation',
      description: 'Fill out our simple form with your preferences and availability'
    },
    {
      step: '2',
      title: 'Confirmation Call',
      description: 'Our team contacts you within 24 hours to confirm appointment details'
    },
    {
      step: '3',
      title: 'Consultation Meeting',
      description: 'Meet with our expert advisors for a comprehensive 60-minute session'
    },
    {
      step: '4',
      title: 'Follow-up Support',
      description: 'Receive detailed recommendations and ongoing support for your investments'
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Benefits Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-thara-navy mb-6"
          >
            Why Choose Our Investment Consultation?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-text-gray max-w-3xl mx-auto"
          >
            Experience professional investment guidance with Oman's leading Shariah-compliant investment firm
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${benefit.bgColor} rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300`}
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
              </div>
              <h3 className="text-xl font-bold text-thara-navy mb-4">{benefit.title}</h3>
              <p className="text-text-gray leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-soft-gray rounded-3xl p-8 lg:p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-thara-navy mb-4">Simple Booking Process</h3>
            <p className="text-xl text-text-gray">Get started with your investment consultation in 4 easy steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <div className="w-16 h-16 bg-thara-navy text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold text-thara-navy mb-3">{step.title}</h4>
                <p className="text-text-gray">{step.description}</p>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-thara-gold"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-thara-navy to-blue-600 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Need Immediate Assistance?</h3>
              <p className="text-gray-200 leading-relaxed mb-8">
                If you have urgent questions or prefer to speak with someone directly, 
                our investment advisors are available during business hours.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-thara-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Call Us Directly</div>
                    <div className="text-gray-300">+968 7688 0161</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-thara-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Email Us</div>
                    <div className="text-gray-300">info@tharaglobal.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-thara-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Business Hours</div>
                    <div className="text-gray-300">Sunday - Thursday: 8:00 - 17:00</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h4 className="text-2xl font-bold mb-6">Free Consultation Includes:</h4>
              <div className="space-y-4">
                {[
                  'Comprehensive portfolio review',
                  'Risk assessment and goal setting',
                  'Shariah compliance verification',
                  'Market opportunity analysis',
                  'Personalized investment recommendations',
                  'Follow-up support and guidance'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-thara-green flex-shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BookingBenefits
