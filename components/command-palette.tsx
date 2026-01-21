'use client'

import { useState, useEffect } from 'react'
import { Command } from 'cmdk'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, 
  Home, 
  User, 
  FolderOpen, 
  Code, 
  Briefcase, 
  BookOpen, 
  Award, 
  Mail,
  Sun,
  Moon,
  Download,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react'
import { useTheme } from 'next-themes'

const commands = [
  { id: 'home', label: 'Go to Home', icon: Home, action: () => scrollToSection('#home') },
  { id: 'about', label: 'Go to About', icon: User, action: () => scrollToSection('#about') },
  { id: 'projects', label: 'Go to Projects', icon: FolderOpen, action: () => scrollToSection('#projects') },
  { id: 'skills', label: 'Go to Skills', icon: Code, action: () => scrollToSection('#skills') },
  { id: 'experience', label: 'Go to Experience', icon: Briefcase, action: () => scrollToSection('#experience') },
  { id: 'blog', label: 'Go to Blog', icon: BookOpen, action: () => scrollToSection('#blog') },
  { id: 'achievements', label: 'Go to Achievements', icon: Award, action: () => scrollToSection('#achievements') },
  { id: 'contact', label: 'Go to Contact', icon: Mail, action: () => scrollToSection('#contact') },
  { id: 'resume', label: 'Download Resume', icon: Download, action: () => window.open('/resume.pdf', '_blank') },
  { id: 'github', label: 'Open GitHub', icon: Github, action: () => window.open('https://github.com/dikshant', '_blank') },
  { id: 'linkedin', label: 'Open LinkedIn', icon: Linkedin, action: () => window.open('https://linkedin.com/in/dikshant', '_blank') },
  { id: 'twitter', label: 'Open Twitter', icon: Twitter, action: () => window.open('https://twitter.com/dikshant', '_blank') },
]

function scrollToSection(href: string) {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const themeCommands = [
    { 
      id: 'theme-light', 
      label: 'Switch to Light Theme', 
      icon: Sun, 
      action: () => setTheme('light') 
    },
    { 
      id: 'theme-dark', 
      label: 'Switch to Dark Theme', 
      icon: Moon, 
      action: () => setTheme('dark') 
    },
  ]

  const allCommands = [...commands, ...themeCommands]

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed left-1/2 top-1/2 w-full max-w-lg -translate-x-1/2 -translate-y-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            <Command className="rounded-lg border bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-2xl">
              <div className="flex items-center border-b px-3">
                <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                <Command.Input
                  placeholder="Type a command or search..."
                  value={search}
                  onValueChange={setSearch}
                  className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <Command.List className="max-h-80 overflow-y-auto overflow-x-hidden p-2">
                <Command.Empty className="py-6 text-center text-sm text-gray-500">
                  No results found.
                </Command.Empty>
                
                <Command.Group heading="Navigation">
                  {allCommands.filter(cmd => !cmd.id.startsWith('theme-')).map((command) => (
                    <Command.Item
                      key={command.id}
                      value={command.label}
                      onSelect={() => {
                        command.action()
                        setOpen(false)
                      }}
                      className="relative flex cursor-default select-none items-center rounded-sm px-2 py-3 text-sm outline-none aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                    >
                      <command.icon className="mr-2 h-4 w-4" />
                      <span>{command.label}</span>
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Group heading="Theme">
                  {themeCommands.map((command) => (
                    <Command.Item
                      key={command.id}
                      value={command.label}
                      onSelect={() => {
                        command.action()
                        setOpen(false)
                      }}
                      className="relative flex cursor-default select-none items-center rounded-sm px-2 py-3 text-sm outline-none aria-selected:bg-gray-100 dark:aria-selected:bg-gray-800 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                    >
                      <command.icon className="mr-2 h-4 w-4" />
                      <span>{command.label}</span>
                    </Command.Item>
                  ))}
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}