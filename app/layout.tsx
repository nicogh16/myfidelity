import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MyFidelity - Système de fidélité intelligent pour étudiants',
  description: 'MyFidelity est une solution de fidélisation innovante et écologique pour les commerces étudiants. Augmentez votre fréquentation et engagez votre communauté étudiante.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
} 