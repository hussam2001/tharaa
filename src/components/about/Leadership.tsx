'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail, Award, BookOpen, TrendingUp } from 'lucide-react'
import Image from 'next/image'

const Leadership = () => {
  const leaders = [
    {
      name: 'Abdul Samad Al-Maskari',
      position: 'Managing Director',
      experience: '15+ Years',
      education: 'MBA Finance',
      specialization: 'Strategic Leadership & Investment Management',
      bio: 'Abdul Samad leads Thara Global with extensive experience in investment management and strategic planning. He has been instrumental in establishing the company\'s vision and driving its growth since 2018.',
      achievements: [
        'Established Thara Global in 2018',
        'Expert in Public-Private Partnerships',
        'Pioneer in Oman\'s REIT development'
      ],
      linkedin: '#',
      email: 'a.almaskari@tharaglobal.com',
      image: '/images/team/Ahmed.png'
    },
    {
      name: 'Dr. Amer Al Rawas',
      position: 'Partner',
      experience: '20+ Years',
      education: 'PhD Economics',
      specialization: 'Economic Analysis & Investment Strategy',
      bio: 'Dr. Amer brings deep expertise in economic analysis and investment strategy. His academic background and practical experience have been crucial in developing Thara Global\'s investment frameworks.',
      achievements: [
        'PhD in Economics',
        'Published research in investment strategy',
        'Advisor to multiple investment committees'
      ],
      linkedin: '#',
      email: 'a.alrawas@tharaglobal.com',
      image: '/images/team/Amer.jpg'
    },
    {
      name: 'Mr. Harib Al Kitani',
      position: 'Partner',
      experience: '18+ Years',
      education: 'MSc Finance',
      specialization: 'Real Estate Investment & Project Management',
      bio: 'Harib specializes in real estate investment and project management. His expertise has been vital in developing Thara Global\'s REIT offerings and managing complex investment projects.',
      achievements: [
        'Expert in real estate investment',
        'Led multiple successful projects',
        'Specialist in REIT development'
      ],
      linkedin: '#',
      email: 'h.alkitani@tharaglobal.com',
      image: '/images/team/Harib.jpg'
    }
  ]

  const advisoryBoard = [
    {
      name: 'Dr. Khalid Al-Mawali',
      position: 'Chairman, Advisory Board',
      background: 'Former Deputy Governor, Central Bank of Oman',
      expertise: 'Monetary Policy & Financial Regulation'
    },
    {
      name: 'Amina Al-Jabri',
      position: 'Strategic Advisor',
      background: 'Former CEO, Oman Development Bank',
      expertise: 'Development Finance & PPP Structuring'
    },
    {
      name: 'Dr. Hassan Al-Lawati',
      position: 'Investment Advisor',
      background: 'Former CIO, Oman Investment Authority',
      expertise: 'Sovereign Wealth & Alternative Investments'
    }
  ]

  return (
    <section className="py-20 bg-soft-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-thara-navy mb-6">Leadership Team</h2>
          <p className="text-xl text-text-gray max-w-4xl mx-auto leading-relaxed">
            Meet the experienced professionals driving Thara Global's success. Our leadership team 
            combines decades of expertise with deep local knowledge and international best practices.
          </p>
        </motion.div>

        {/* Executive Team */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-thara-navy to-dark-navy p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    {/* Professional Photo */}
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-thara-green">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.className = "w-16 h-16 bg-thara-green rounded-full flex items-center justify-center text-white text-xl font-bold border-2 border-thara-green";
                            parent.innerHTML = leader.name.split(' ').map(n => n[0]).join('');
                          }
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{leader.name}</h3>
                      <p className="text-thara-gold font-medium">{leader.position}</p>
                      <p className="text-gray-300 text-sm">{leader.experience} Experience</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={leader.linkedin}
                      className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-thara-green transition-colors duration-200"
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href={`mailto:${leader.email}`}
                      className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-thara-gold transition-colors duration-200"
                    >
                      <Mail className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Education & Specialization */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-thara-green" />
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Education</div>
                      <div className="text-sm font-medium text-thara-navy">{leader.education}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-thara-gold" />
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Specialization</div>
                      <div className="text-sm font-medium text-thara-navy">{leader.specialization}</div>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-text-gray leading-relaxed mb-6">{leader.bio}</p>

                {/* Achievements */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Award className="w-4 h-4 text-thara-green" />
                    <span className="text-sm font-semibold text-thara-navy uppercase tracking-wide">Key Achievements</span>
                  </div>
                  <ul className="space-y-2">
                    {leader.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-thara-green rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-text-gray">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advisory Board */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-thara-navy mb-4">Advisory Board</h3>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              Our distinguished advisory board provides strategic guidance and industry expertise 
              to support our continued growth and success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advisoryBoard.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-thara-navy rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-4">
                    {advisor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h4 className="text-lg font-bold text-thara-navy mb-1">{advisor.name}</h4>
                  <p className="text-thara-green font-medium text-sm mb-2">{advisor.position}</p>
                  <p className="text-text-gray text-sm mb-3">{advisor.background}</p>
                  <div className="bg-soft-gray rounded-lg p-3">
                    <span className="text-xs text-gray-500 uppercase tracking-wide">Expertise</span>
                    <p className="text-sm font-medium text-thara-navy">{advisor.expertise}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-thara-navy to-dark-navy rounded-2xl p-8 lg:p-12 text-white">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6">Our Leadership Philosophy</h3>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                We believe in collaborative leadership that combines strategic vision with operational 
                excellence. Our team's diverse expertise and shared commitment to ethical business 
                practices ensures that Thara Global remains at the forefront of Oman's investment industry.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-thara-green mb-2">50+</div>
                  <div className="text-gray-300">Years Combined Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-thara-gold mb-2">100%</div>
                  <div className="text-gray-300">Omani Leadership</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">4</div>
                  <div className="text-gray-300">Advisory Board Members</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Leadership
