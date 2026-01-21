'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const experiences = [
  {
    id: '1',
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    period: '2023 - Present',
    description: 'Leading development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.',
    achievements: [
      'Reduced application load time by 40% through optimization',
      'Led team of 5 developers on major product redesign',
      'Implemented CI/CD pipeline reducing deployment time by 60%'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    location: 'Remote',
    period: '2021 - 2023',
    description: 'Developed MVP and scaled platform from 0 to 10K users. Built both frontend and backend systems with focus on performance and user experience.',
    achievements: [
      'Built entire platform from scratch using modern tech stack',
      'Implemented real-time features using WebSocket technology',
      'Achieved 99.9% uptime through robust error handling'
    ],
    technologies: ['Vue.js', 'Python', 'MongoDB', 'Redis', 'GCP']
  },
  {
    id: '3',
    title: 'Frontend Developer',
    company: 'Digital Agency Pro',
    location: 'New York, NY',
    period: '2020 - 2021',
    description: 'Created responsive web applications for various clients. Collaborated with designers and backend developers to deliver pixel-perfect implementations.',
    achievements: [
      'Delivered 15+ client projects on time and within budget',
      'Improved website performance scores by average of 35%',
      'Established component library used across all projects'
    ],
    technologies: ['React', 'JavaScript', 'SASS', 'Webpack', 'Figma']
  }
]

const education = [
  {
    id: '1',
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Technology',
    location: 'California, USA',
    period: '2016 - 2020',
    description: 'Graduated Magna Cum Laude with focus on software engineering and algorithms.',
    achievements: [
      'GPA: 3.8/4.0',
      'Dean\'s List for 6 semesters',
      'President of Computer Science Club'
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