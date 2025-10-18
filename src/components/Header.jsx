'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const menuItems = [
    { href: '/', label: 'ACCUEIL' },
    { href: '/leasing', label: 'OFFRE LEASING' },
    { href: '/partner', label: 'DEVENEZ PARTENAIRE' },
    { href: '/invest', label: 'INVESTISSEZ AVEC NOUS' },
  ]

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-[#000] shadow-lg sticky top-0 z-50 h-[80px] flex items-center"
    >
      <nav className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo - Taille augmentée */}
          <a href="/" className="cursor-pointer flex items-center">
            <div className="relative w-[160px] h-[150px]">
              <Image 
                src="/logo.png"
                alt="Logo"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => {
              const active = isActive(item.href)
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative font-medium transition-all duration-300 px-6 py-3 ${
                    active ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  
                  {/* Effet demi-rectangle avec côtés en bas et à droite */}
                  {active && (
                    <>
                      {/* Rectangle inférieur */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 right-0 h-1 bg-white"
                        style={{
                          borderBottomLeftRadius: '4px',
                          borderBottomRightRadius: '4px'
                        }}
                      />
                      
                      {/* Côté droit */}
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: '100%' }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="absolute right-0 top-0 bottom-0 w-1 bg-white"
                        style={{
                          borderBottomRightRadius: '4px'
                        }}
                      />

                      {/* Côté gauche (optionnel - pour compléter le rectangle) */}
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: '100%' }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="absolute left-0 top-0 bottom-0 w-1 bg-white"
                        style={{
                          borderBottomLeftRadius: '4px'
                        }}
                      />
                    </>
                  )}
                </a>
              )
            })}
          </div>

          {/* Bouton mobile */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 bg-[#111] rounded-xl shadow-lg border border-gray-800 overflow-hidden"
            >
              <div className="flex flex-col space-y-2 py-4 px-2">
                {menuItems.map((item) => {
                  const active = isActive(item.href)
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`relative font-medium py-3 px-4 ${
                        active
                          ? 'text-white bg-gray-800'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800'
                      } rounded-lg transition-all`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                      
                      {/* Indicateur visuel pour mobile - côtés en bas et à droite */}
                      {active && (
                        <>
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            className="absolute left-0 right-0 bottom-0 h-1 bg-white rounded-b-lg"
                          />
                          <motion.div
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            className="absolute right-0 top-0 bottom-0 w-1 bg-white rounded-r-lg"
                          />
                        </>
                      )}
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header
