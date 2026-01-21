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
  metadataBase: new URL('https://dikshantrajput.dev'),
  title: 'Dikshant Rajput - Versatile Software Developer & Innovator',
  description: 'Versatile Software Developer & Innovator specializing in AI-powered applications, fintech solutions, and modern web technologies. Currently pursuing MCA at Birla Institute of Technology.',
  keywords: ['Software Developer', 'AI Developer', 'Python', 'Java', 'Machine Learning', 'Fintech', 'Web Development', 'Innovation'],
  authors: [{ name: 'Dikshant Rajput' }],
  creator: 'Dikshant Rajput',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dikshantrajput.dev',
    title: 'Dikshant Rajput - Versatile Software Developer & Innovator',
    description: 'Versatile Software Developer & Innovator specializing in AI-powered applications and fintech solutions.',
    siteName: 'Dikshant Rajput Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dikshant Rajput - Versatile Software Developer & Innovator',
    description: 'Versatile Software Developer & Innovator specializing in AI-powered applications and fintech solutions.',
    creator: '@dikshantrajput',
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