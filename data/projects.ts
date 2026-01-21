export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  year: string
  github?: string
  demo?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Campus Sahayak',
    description: 'A comprehensive campus management system designed to streamline various campus operations and enhance student experience. Built with modern web technologies for scalability and user-friendly interface.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=500&h=300&fit=crop',
    technologies: ['Python', 'Django', 'JavaScript', 'HTML/CSS', 'SQLite'],
    category: 'Web App',
    year: '2026',
    github: 'https://github.com/Dikshant1408/campus-sahayak',
    demo: 'https://campus-sahayak.dikshantrajput.dev',
    featured: true
  },
  {
    id: '2',
    title: 'RupeeRadar - AI-Powered Student Budget Guardian',
    description: 'An intelligent budget management application specifically designed for students. Uses AI algorithms to track expenses, provide spending insights, and help students manage their finances effectively.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop',
    technologies: ['Python', 'Machine Learning', 'Flask', 'AI', 'Data Analytics'],
    category: 'AI/ML',
    year: '2025',
    github: 'https://github.com/Dikshant1408/rupee-radar',
    featured: true
  },
  {
    id: '3',
    title: 'CelestAI - AI-Powered Space Chatbot (The Stellar Gateway Hackathon)',
    description: 'An advanced AI chatbot designed for space exploration and astronomy education. Provides intelligent responses about space missions, celestial bodies, and astronomical phenomena using natural language processing.',
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&h=300&fit=crop',
    technologies: ['Python', 'NLP', 'AI', 'Machine Learning', 'API Integration'],
    category: 'AI/ML',
    year: '2025',
    github: 'https://github.com/Dikshant1408/celestai',
    demo: 'https://celestai.dikshantrajput.dev',
    featured: true
  },
  {
    id: '4',
    title: 'AstroMedAI - Space Health and Radiation Risk Assessment',
    description: 'A sophisticated AI system for assessing health risks and radiation exposure for astronauts and space missions. Provides real-time health monitoring and risk analysis for space exploration.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop',
    technologies: ['Python', 'AI', 'Data Science', 'Health Analytics', 'Machine Learning'],
    category: 'AI/ML',
    year: '2025',
    github: 'https://github.com/Dikshant1408/astromedai',
    featured: false
  },
  {
    id: '5',
    title: 'DhanXpert Market Research & Strategy',
    description: 'Contributed to the go-to-market strategy for DhanXpert fintech product during internship at CoreFinExperts. Conducted comprehensive market research, competitor analysis, and user feedback sessions.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop',
    technologies: ['Market Research', 'Data Analysis', 'User Experience', 'Fintech'],
    category: 'Research',
    year: '2024',
    featured: false
  },
  {
    id: '6',
    title: 'AI Foundations & Machine Learning Projects',
    description: 'Collection of machine learning and AI projects developed during coursework and self-learning. Includes various algorithms, data analysis, and predictive modeling projects.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop',
    technologies: ['Python', 'TensorFlow', 'Machine Learning', 'Data Science', 'AI'],
    category: 'AI/ML',
    year: '2025',
    github: 'https://github.com/Dikshant1408/ml-projects',
    featured: false
  }
]