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

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  tags: string[]
  slug: string
  featured: boolean
  published: boolean
}

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  period: string
  description: string
  achievements: string[]
  technologies: string[]
}

export interface Education {
  id: string
  degree: string
  school: string
  location: string
  period: string
  description: string
  achievements: string[]
}

export interface Achievement {
  id: string
  title: string
  description: string
  date: string
  category: string
  icon: string
}

export interface Certification {
  id: string
  title: string
  issuer: string
  date: string
  credentialId: string
  url?: string
}

export interface Skill {
  name: string
  level: number
  category: string
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}