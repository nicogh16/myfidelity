import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MyFidelity - Programme de fidélité innovant',
  description: 'MyFidelity est une solution de fidélisation innovante qui aide les entreprises à fidéliser leurs clients.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 