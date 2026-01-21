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
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built with modern technologies for scalability and performance.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    category: 'Web App',
    year: '2024',
    github: 'https://github.com/dikshant/ecommerce-platform',
    demo: 'https://ecommerce-demo.dikshant.dev',
    featured: true
  },
  {
    id: '2',
    title: 'Task Management API',
    description: 'RESTful API for task management with authentication, real-time updates, and comprehensive documentation. Includes rate limiting, caching, and monitoring.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Redis', 'JWT'],
    category: 'API',
    year: '2024',
    github: 'https://github.com/dikshant/task-api',
    featured: true
  },
  {
    id: '3',
    title: 'React Component Library',
    description: 'A comprehensive UI component library with TypeScript support, Storybook documentation, and automated testing. Published on npm with 1000+ weekly downloads.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop',
    technologies: ['React', 'TypeScript', 'Storybook', 'Jest', 'Rollup'],
    category: 'Open Source',
    year: '2023',
    github: 'https://github.com/dikshant/react-ui-lib',
    demo: 'https://ui-lib.dikshant.dev',
    featured: true
  },
  {
    id: '4',
    title: 'Mobile Fitness Tracker',
    description: 'Cross-platform mobile app for fitness tracking with workout plans, progress analytics, and social features. Integrates with wearable devices.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
    category: 'Mobile',
    year: '2023',
    github: 'https://github.com/dikshant/fitness-tracker',
    featured: false
  },
  {
    id: '5',
    title: 'Code Quality Dashboard',
    description: 'Analytics dashboard for monitoring code quality metrics across multiple repositories. Features automated reporting and team collaboration tools.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    technologies: ['Vue.js', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    category: 'Tool',
    year: '2023',
    github: 'https://github.com/dikshant/code-quality-dashboard',
    demo: 'https://quality.dikshant.dev',
    featured: false
  },
  {
    id: '6',
    title: 'Real-time Chat Application',
    description: 'Scalable chat application with real-time messaging, file sharing, and video calls. Supports multiple chat rooms and user presence indicators.',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop',
    technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'WebRTC'],
    category: 'Web App',
    year: '2022',
    github: 'https://github.com/dikshant/realtime-chat',
    demo: 'https://chat.dikshant.dev',
    featured: false
  }
]