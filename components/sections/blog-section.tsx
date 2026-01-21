'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'

const blogPosts = [
  {
    id: '1',
    title: 'Building Scalable React Applications with TypeScript',
    excerpt: 'Learn how to structure large React applications using TypeScript, best practices for component architecture, and performance optimization techniques.',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['React', 'TypeScript', 'Architecture'],
    slug: 'scalable-react-typescript',
    featured: true
  },
  {
    id: '2',
    title: 'Modern API Design with Node.js and Express',
    excerpt: 'Explore RESTful API design patterns, authentication strategies, and how to build robust backend services with Node.js and Express.',
    date: '2024-01-08',
    readTime: '12 min read',
    tags: ['Node.js', 'API', 'Backend'],
    slug: 'modern-api-design-nodejs',
    featured: true
  },
  {
    id: '3',
    title: 'CSS Grid vs Flexbox: When to Use Which',
    excerpt: 'A comprehensive comparison of CSS Grid and Flexbox, with practical examples and use cases for modern web layouts.',
    date: '2023-12-20',
    readTime: '6 min read',
    tags: ['CSS', 'Layout', 'Frontend'],
    slug: 'css-grid-vs-flexbox',
    featured: false
  },
  {
    id: '4',
    title: 'Database Optimization Techniques for Web Applications',
    excerpt: 'Performance optimization strategies for PostgreSQL and MongoDB, including indexing, query optimization, and caching strategies.',
    date: '2023-12-10',
    readTime: '10 min read',
    tags: ['Database', 'Performance', 'PostgreSQL'],
    slug: 'database-optimization-techniques',
    featured: false
  }
]

export function BlogSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.filter(post => !post.featured)

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Blog & Insights
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Sharing knowledge and experiences from my development journey
          </p>
        </motion.div>

        {/* Featured Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            Featured Articles
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                        >
                          <Tag size={10} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ x: 4 }}
                      className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors"
                    >
                      Read More
                      <ArrowRight size={14} className="ml-1" />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Recent Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            Recent Posts
          </h3>
          
          <div className="space-y-6">
            {recentPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {post.title}
                    </h4>

                    <p className="text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                        >
                          <Tag size={10} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ x: 4 }}
                    className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors mt-4 md:mt-0 md:ml-6"
                  >
                    Read More
                    <ArrowRight size={14} className="ml-1" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
          >
            View All Posts
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}