# Dikshant's Portfolio Website

A premium, interactive 3D-enhanced personal portfolio website built with modern web technologies. This portfolio serves as a comprehensive showcase of projects, skills, experience, and achievements with a focus on performance, accessibility, and scalability.

## 🚀 Features

### Core Features
- **3D Interactive Elements**: Subtle 3D scenes using Three.js and React Three Fiber
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Dark/Light Mode**: Theme switching with system preference detection
- **Command Palette**: Global keyboard navigation (⌘K / Ctrl+K)
- **Smooth Animations**: Framer Motion powered micro-interactions
- **Performance Optimized**: Fast loading with optimized assets and code splitting

### Sections
- **Hero Section**: 3D animated introduction with floating elements
- **About**: Personal and professional narrative with highlights
- **Projects**: Filterable project showcase with detailed case studies
- **Skills**: Interactive skill visualization with progress bars
- **Experience**: Professional timeline with achievements
- **Blog**: Article showcase with categorization and search
- **Achievements**: Awards, certifications, and recognition
- **Contact**: Interactive contact form with social links

### Technical Features
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Accessibility**: WCAG compliant with keyboard navigation
- **Progressive Enhancement**: Works without JavaScript
- **Type Safety**: Full TypeScript implementation
- **Modern Stack**: Next.js 14, React 18, Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **UI Library**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth transitions
- **3D Graphics**: Three.js with React Three Fiber
- **Icons**: Lucide React for consistent iconography

### Development Tools
- **Package Manager**: npm/yarn
- **Linting**: ESLint with Next.js configuration
- **Type Checking**: TypeScript with strict mode
- **Code Formatting**: Prettier (recommended)

### Deployment
- **Platform**: Vercel (recommended) / Netlify / GitHub Pages
- **Domain**: Custom domain support
- **Analytics**: Built-in performance monitoring

## 📁 Project Structure

```
dikshant-portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Home page with all sections
├── components/            # Reusable React components
│   ├── 3d/               # Three.js 3D components
│   │   ├── scene.tsx     # Main 3D scene component
│   │   └── floating-elements.tsx
│   ├── sections/         # Page sections
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── projects-section.tsx
│   │   ├── skills-section.tsx
│   │   ├── experience-section.tsx
│   │   ├── blog-section.tsx
│   │   ├── achievements-section.tsx
│   │   └── contact-section.tsx
│   ├── command-palette.tsx
│   ├── navigation.tsx
│   ├── scroll-progress.tsx
│   └── theme-provider.tsx
├── data/                  # Static data and content
│   └── projects.ts       # Project data structure
├── lib/                   # Utility functions
│   └── utils.ts          # Helper functions and utilities
├── types/                 # TypeScript type definitions
│   └── index.ts          # Shared interfaces and types
├── public/               # Static assets
│   ├── resume.pdf        # Downloadable resume
│   └── images/           # Project images and assets
└── config files          # Configuration files
    ├── package.json
    ├── tailwind.config.js
    ├── tsconfig.json
    └── next.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dikshant/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 📝 Content Management

### Adding New Projects

1. **Update project data** in `data/projects.ts`:
   ```typescript
   {
     id: 'unique-id',
     title: 'Project Name',
     description: 'Project description...',
     image: 'https://example.com/image.jpg',
     technologies: ['React', 'Node.js'],
     category: 'Web App',
     year: '2024',
     github: 'https://github.com/username/repo',
     demo: 'https://demo-url.com',
     featured: true
   }
   ```

2. **Add project images** to `public/images/projects/`

### Adding Blog Posts

1. **Create new blog post** in `data/blog.ts`:
   ```typescript
   {
     id: 'unique-id',
     title: 'Blog Post Title',
     excerpt: 'Short description...',
     content: 'Full blog content...',
     date: '2024-01-15',
     tags: ['React', 'Tutorial'],
     slug: 'blog-post-slug',
     featured: true
   }
   ```

### Updating Experience

1. **Modify experience data** in `components/sections/experience-section.tsx`
2. **Add new positions** following the existing structure
3. **Update achievements and technologies** arrays

### Customizing Skills

1. **Update skill categories** in `components/sections/skills-section.tsx`
2. **Adjust skill levels** (0-100 scale)
3. **Add new technologies** to the tech stack section

## 🎨 Customization

### Theme Colors

Update colors in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    // ... other shades
    900: '#0c4a6e',
  }
}
```

### Typography

Modify fonts in `app/layout.tsx`:
```typescript
const customFont = Inter({ 
  subsets: ['latin'],
  variable: '--font-custom',
})
```

### 3D Scene Customization

Edit 3D elements in `components/3d/scene.tsx`:
- Adjust geometry types and materials
- Modify animation speeds and patterns
- Change particle systems and effects

### Animation Timing

Customize animations in individual components:
```typescript
transition={{ duration: 0.8, delay: 0.2 }}
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository** to Vercel
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. **Add environment variables** if needed
4. **Deploy automatically** on git push

### Netlify

1. **Connect repository** to Netlify
2. **Build settings**:
   - Build command: `npm run build && npm run export`
   - Publish directory: `out`
3. **Configure redirects** in `netlify.toml`

### GitHub Pages

1. **Enable GitHub Pages** in repository settings
2. **Use GitHub Actions** for automated deployment
3. **Configure custom domain** if desired

## 📊 Performance Optimization

### Image Optimization
- Use Next.js Image component for automatic optimization
- Implement lazy loading for below-fold images
- Compress images before adding to project

### Code Splitting
- Leverage Next.js automatic code splitting
- Use dynamic imports for heavy components
- Implement route-based code splitting

### 3D Performance
- Optimize 3D models and textures
- Implement level-of-detail (LOD) for complex scenes
- Use performance monitoring for 3D elements

## 🔧 Maintenance

### Regular Updates
- **Dependencies**: Update packages monthly
- **Content**: Add new projects and blog posts
- **Performance**: Monitor Core Web Vitals
- **Security**: Keep dependencies secure

### Content Updates
- **Projects**: Add new work as completed
- **Blog**: Publish articles regularly
- **Experience**: Update with new positions
- **Skills**: Reflect current technology stack

### SEO Maintenance
- **Meta tags**: Update for new content
- **Sitemap**: Regenerate after content changes
- **Analytics**: Monitor traffic and engagement
- **Performance**: Regular Lighthouse audits

## 📱 Browser Support

- **Modern browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile browsers**: iOS Safari, Chrome Mobile
- **Progressive enhancement**: Graceful degradation for older browsers
- **Accessibility**: Screen readers and keyboard navigation

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome:

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/improvement`
3. **Commit changes**: `git commit -m 'Add improvement'`
4. **Push to branch**: `git push origin feature/improvement`
5. **Open Pull Request**

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: hello@dikshant.dev
- **LinkedIn**: [linkedin.com/in/dikshant](https://linkedin.com/in/dikshant)
- **GitHub**: [github.com/dikshant](https://github.com/dikshant)
- **Website**: [dikshant.dev](https://dikshant.dev)

---

Built with ❤️ by Dikshant using Next.js, React, and Three.js