import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WeGo - Votre partenaire de mobilité durable',
  description: 'Solution de mobilité et logistique pour simplifier vos déplacements et livraisons à prix bas tout en respectant l\'environnement.',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}