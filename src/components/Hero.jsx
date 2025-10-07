'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg" // Remplacez par votre image
          alt="Fond WeGo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            WeGo, votre partenaire de <span className="text-white">confiance</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto"
          >
            Solution de mobilité et logistique pour simplifier vos déplacements et vos livraisons à prix bas tout en respectant l'environnement.
          </motion.p>
          
        

          {/* Section de téléchargement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-white text-xl mb-8 font-medium"
            >
              📱 Téléchargez l'application WeGo
            </motion.p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              {/* Google Play Store */}
              <motion.a
                href="#"
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white rounded-2xl p-4 flex items-center gap-4 min-w-[220px] hover:bg-gray-50 transition-all duration-300 shadow-lg"
              >
                <div className="w-12 h-12 relative">
                  {/* Icône Play Store temporaire */}
                  <div className="w-full h-full bg-greenn-500 rounded flex items-center justify-center">
                    <Image src="/google.png" alt="Google Play" width={80} height={80} />
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500">Téléchargez sur</p>
                  <p className="text-black font-bold text-lg">Google Play</p>
                </div>
              </motion.a>

              {/* Apple App Store */}
              <motion.a
                href="#"
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white rounded-2xl p-4 flex items-center gap-4 min-w-[220px] hover:bg-gray-50 transition-all duration-300 shadow-lg"
              >
                <div className="w-12 h-12 relative">
                  {/* Icône App Store temporaire */}
                  <div className="w-full h-full bg-blackk rounded flex items-center justify-center">
                    <Image src="/ios.png" alt="Apple App Store" width={69} height={69} />
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500">Téléchargez sur</p>
                  <p className="text-black font-bold text-lg">App Store</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero