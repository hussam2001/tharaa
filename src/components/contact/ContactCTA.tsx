'use client'

import { motion } from 'framer-motion'

const ContactCTA = () => {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-thara-navy mb-6">
              Ready to Start Your Investment Journey?
            </h3>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Our team of experienced investment professionals is here to guide you through 
              every step of your investment journey with personalized advice and solutions.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-thara-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-4xl font-bold text-thara-gold">500+</div>
                </div>
                <h4 className="text-lg font-semibold text-thara-navy mb-2">Satisfied Clients</h4>
                <p className="text-gray-600">Trusted by investors across Oman and beyond</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-thara-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-4xl font-bold text-thara-green">50+</div>
                </div>
                <h4 className="text-lg font-semibold text-thara-navy mb-2">Years Experience</h4>
                <p className="text-gray-600">Decades of proven investment expertise</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-4xl font-bold text-blue-600">100%</div>
                </div>
                <h4 className="text-lg font-semibold text-thara-navy mb-2">Shariah Compliant</h4>
                <p className="text-gray-600">All investments follow Islamic principles</p>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
            >
              <motion.a
                href="#contact-form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-thara-navy text-white font-semibold rounded-xl hover:bg-thara-navy/90 transition-colors duration-200 shadow-lg"
              >
                Schedule Your Consultation
              </motion.a>
              
              <motion.a
                href="/investments"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-thara-navy text-thara-navy font-semibold rounded-xl hover:bg-thara-navy hover:text-white transition-all duration-200"
              >
                Explore Investment Options
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactCTA
