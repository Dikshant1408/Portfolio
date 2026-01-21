'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const experiences = [
  {
    id: '1',
    title: 'Intern',
    company: 'CoreFinExperts Global Technologies Pvt Ltd',
    location: 'Pune, India',
    period: 'Jan 2024 - Apr 2024',
    description: 'Contributed to the go-to-market strategy for DhanXpert, a fintech product, by conducting comprehensive market research and competitor analysis to align features with user needs.',
    achievements: [
      'Facilitated user feedback sessions, boosting customer engagement by 25%',
      'Significantly improved overall user experience through data-driven insights',
      'Assisted in crafting business models and pitch decks for product scaling',
      'Supported product scaling and investor outreach in a fast-paced startup environment'
    ],
    technologies: ['Market Research', 'Data Analysis', 'User Experience', 'Fintech', 'Business Strategy']
  }
]

const education = [
  {
    id: '1',
    degree: 'Master of Computer Applications (MCA)',
    school: 'Birla Institute of Technology',
    location: 'Mesra, India',
    period: '2024 - 2026',
    description: 'Currently pursuing advanced studies in computer applications with focus on software development, AI, and modern technologies.',
    achievements: [
      'Specializing in AI and Machine Learning applications',
      'Active participant in hackathons and coding competitions',
      'Working on innovative projects in fintech and space technology'
    ]
  },
  {
    id: '2',
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'Symbiosis Institute Of Computer Studies And Research',
    location: 'Pune, India',
    period: '2021 - 2024',
    description: 'Completed undergraduate studies with strong foundation in computer science fundamentals and programming.',
    achievements: [
      'Strong foundation in programming and software development',
      'Participated in various technical projects and competitions',
      'Developed expertise in multiple programming languages'
    ]
  }
]

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-8"
            >
              Professional Experience
            </motion.h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-800"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full" />
                  
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>

                    <div className="flex items-center text-primary-600 dark:text-primary-400 mb-3">
                      <span className="font-medium">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                        Key Achievements:
                      </h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-8"
            >
              Education
            </motion.h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-800"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full" />
                  
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                        <Calendar size={14} className="mr-1" />
                        {edu.period}
                      </div>
                    </div>

                    <div className="flex items-center text-primary-600 dark:text-primary-400 mb-3">
                      <span className="font-medium">{edu.school}</span>
                      <span className="mx-2">•</span>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {edu.location}
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {edu.description}
                    </p>

                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                        Highlights:
                      </h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}