'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Building, Award } from 'lucide-react'

const ContactMap = () => {
  const contactDetails = [
    {
      icon: Building,
      title: 'Head Office',
      details: [
        'Bawsher-23 July Road',
        'Next to Mohammed Al Ameen Mosque',
        'Muscat, Sultanate of Oman',
        'P.O. Box 255, P.C. 100'
      ]
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        '+968 7688 0161',
        '+968 24597819',
        '+968 24625819'
      ]
    },
    {
      icon: Mail,
      title: 'Email Contact',
      details: [
        'info@tharaglobal.com',
        'www.tharaglobal.com'
      ]
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: [
        'Sunday - Thursday: 8:00 - 17:00',
        'Friday - Saturday: Closed'
      ]
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-soft-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-thara-navy mb-6"
          >
            Visit Our Office
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-text-gray max-w-3xl mx-auto leading-relaxed"
          >
            Located in the heart of Muscat, our office is easily accessible and designed 
            to provide a professional environment for investment consultations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-thara-navy rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-thara-navy">Contact Information</h3>
              </div>

              <div className="space-y-6">
                {contactDetails.map((detail, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-thara-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <detail.icon className="w-5 h-5 text-thara-navy" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-thara-navy mb-2">{detail.title}</h4>
                      {detail.details.map((item, idx) => (
                        <p key={idx} className="text-text-gray text-sm leading-relaxed">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-thara-navy to-blue-600 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-thara-gold" />
                <h3 className="text-xl font-bold">Thara Global Business LLC</h3>
              </div>
              <p className="text-gray-200 leading-relaxed mb-4">
                Authorized and regulated by the Capital Market Authority of the Sultanate of Oman.
                A premier gateway for global capital seeking Shariah-compliant exposure to Oman's growth sectors.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-thara-gold font-semibold">Licensed by CMA</div>
                  <div className="text-gray-300">Capital Market Authority</div>
                </div>
                <div>
                  <div className="text-thara-gold font-semibold">50+ Years</div>
                  <div className="text-gray-300">Combined Experience</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-thara-green rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-bold text-thara-navy">Find Us on Map</h3>
              </div>
              
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-xl"
                whileHover={{ scale: 1.02 }}
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1833.1332247859502!2d58.410025106306!3d23.57764759530678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ff39eef152cd%3A0x9d5a982734823ffb!2sThara%20Global%20Business%20LLC!5e1!3m2!1sen!2som!4v1755761255708!5m2!1sen!2som" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96 lg:h-[450px] rounded-xl"
                ></iframe>
              </motion.div>

              <div className="mt-4 p-4 bg-soft-gray rounded-lg">
                <div className="flex items-center gap-2 text-sm text-text-gray">
                  <MapPin className="w-4 h-4 text-thara-green" />
                  <span>Click and drag to explore the area around our office</span>
                </div>
              </div>
            </div>

            <motion.a
              href="https://www.google.com/maps/dir/?api=1&destination=Thara%20Global%20Business%20LLC,Muscat,Oman"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute -bottom-4 right-4 bg-thara-gold text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gold-400 transition-colors duration-300 flex items-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactMap