import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { SkillsSection } from '@/components/sections/skills-section'
import { ExperienceSection } from '@/components/sections/experience-section'
import { AchievementsSection } from '@/components/sections/achievements-section'
import { ContactSection } from '@/components/sections/contact-section'
import { ScrollProgress } from '@/components/scroll-progress'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <AchievementsSection />
      <ContactSection />
    </>
  )
}