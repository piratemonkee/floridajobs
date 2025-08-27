import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Careers at Florida Street | Join Our Team',
  description: 'Join Florida Street and help build the future of decentralized finance. We offer competitive salaries, equity, and the opportunity to work with cutting-edge blockchain technology.',
  keywords: 'Florida Street, GONDI, careers, jobs, DeFi, blockchain, cryptocurrency, engineering, design, remote work',
  authors: [{ name: 'Florida Street' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Careers at Florida Street | Join Our Team',
    description: 'Join Florida Street and help build the future of decentralized finance.',
    type: 'website',
    siteName: 'Florida Street Careers',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at Florida Street | Join Our Team',
    description: 'Join Florida Street and help build the future of decentralized finance.',
  },
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  )
}
