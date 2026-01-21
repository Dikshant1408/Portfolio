import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { CommandPalette } from '@/components/command-palette'
import { Navigation } from '@/components/navigation'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://dikshant.dev'),
  title: 'Dikshant - Full Stack Developer & Software Engineer',
  description: 'Building practical, scalable, and user-focused applications with modern web technologies, clean architecture, and real-world impact.',
  keywords: ['Full Stack Developer', 'Software Engineer', 'React', 'Next.js', 'TypeScript', 'Web Development'],
  authors: [{ name: 'Dikshant' }],
  creator: 'Dikshant',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dikshant.dev',
    title: 'Dikshant - Full Stack Developer & Software Engineer',
    description: 'Building practical, scalable, and user-focused applications with modern web technologies.',
    siteName: 'Dikshant Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dikshant - Full Stack Developer & Software Engineer',
    description: 'Building practical, scalable, and user-focused applications with modern web technologies.',
    creator: '@dikshant',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="relative">
            {children}
          </main>
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  )
}