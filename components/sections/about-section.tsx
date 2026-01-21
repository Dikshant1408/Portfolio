'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code, Lightbulb, Users, Zap } from 'lucide-react'

const highlights = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code with modern best practices and architectural patterns.'
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Approaching complex challenges with analytical thinking and innovative solutions.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively in teams, mentoring others, and contributing to open source projects.'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing applications for speed, efficiency, and exceptional user experiences.'
  }
]

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a versatile software developer and innovator currently pursuing my Master of Computer Applications (MCA) 
                at Birla Institute of Technology, Mesra. My passion lies in creating AI-powered applications and fintech 
                solutions that solve real-world problems.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                During my internship at CoreFinExperts Global Technologies, I contributed to the go-to-market strategy 
                for DhanXpert, a fintech product, by conducting comprehensive market research and competitor analysis. 
                I facilitated user feedback sessions that boosted customer engagement by 25% and significantly improved 
                overall user experience.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I specialize in Python, Java, machine learning, and modern web technologies. My projects range from 
                AI-powered chatbots and space health assessment tools to student budget management systems, showcasing 
                my ability to work across diverse domains and technologies.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {['Python', 'Java', 'Machine Learning', 'AI', 'TensorFlow', 'Git', 'Problem Solving', 'Leadership'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                  <highlight.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}