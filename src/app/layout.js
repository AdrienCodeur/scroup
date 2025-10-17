import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { GoogleAnalytics } from '@next/third-parties/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WeGo mobility - Votre partenaire de mobilité durable',
  description: 'Solution de mobilité et logistique pour simplifier vos déplacements et livraisons à prix bas tout en respectant l\'environnement.',
  icons: {
    icon: './vercel.svg', // Updated to use favicon.ico or logo.png in the public folder
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}