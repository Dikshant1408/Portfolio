'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Trophy, Star, Users, Code, Zap } from 'lucide-react'

const achievements = [
  {
    id: '1',
    icon: Trophy,
    title: 'Best Developer Award 2023',
    description: 'Recognized for outstanding contribution to product development and team leadership at TechCorp Solutions.',
    date: '2023',
    category: 'Award'
  },
  {
    id: '2',
    icon: Star,
    title: 'Open Source Contributor',
    description: 'Active contributor to popular open source projects with 500+ GitHub stars and 50+ merged PRs.',
    date: '2020-Present',
    category: 'Open Source'
  },
  {
    id: '3',
    icon: Users,
    title: 'Tech Mentor',
    description: 'Mentored 20+ junior developers through coding bootcamps and online platforms.',
    date: '2021-Present',
    category: 'Community'
  },
  {
    id: '4',
    icon: Code,
    title: 'Hackathon Winner',
    description: 'First place in Global Web Development Hackathon 2022 with innovative e-commerce solution.',
    date: '2022',
    category: 'Competition'
  }
]

const certifications = [
  {
    id: '1',
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialId: 'AWS-CSA-2023-001'
  },
  {
    id: '2',
    title: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: '2022',
    credentialId: 'GCP-PD-2022-001'
  },
  {
    id: '3',
    title: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    date: '2021',
    credentialId: 'MDB-DEV-2021-001'
  }
]

const stats = [
  { label: 'Projects Completed', value: '50+', icon: Code },
  { label: 'GitHub Stars', value: '1.2K+', icon: Star },
  { label: 'Developers Mentored', value: '25+', icon: Users },
  { label: 'Years Experience', value: '4+', icon: Zap }
]

export function AchievementsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Milestones and recognition throughout my career journey
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-8"
            >
              Awards & Recognition
            </motion.h3>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                      <achievement.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {achievement.title}
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {achievement.date}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {achievement.description}
                    </p>
                    
                    <span className="inline-block px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-xs font-medium">
                      {achievement.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-8"
            >
              Certifications
            </motion.h3>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border-l-4 border-primary-600"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {cert.title}
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {cert.date}
                    </span>
                  </div>
                  
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {cert.issuer}
                  </p>
                  
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Credential ID: {cert.credentialId}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Download Resume */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
              >
                <Award size={20} />
                <span>Download Resume</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}