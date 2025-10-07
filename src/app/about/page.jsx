'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl font-bold mb-8">À propos de WeGo</h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg mb-8"
          >
            <p className="text-lg text-gray-700 mb-6">
              <strong>Qui nous sommes :</strong> une entreprise innovante de mobilité urbaine accessible et durable.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              <strong>Notre vision :</strong> améliorer la mobilité urbaine tout en réduisant le coût de transport et l'empreinte carbone.
            </p>
            
            <p className="text-lg text-gray-700">
              <strong>Nos valeurs :</strong> rapidité, fiabilité, accessibilité, écologie.
            </p>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-black px-8 py-4 rounded-lg font-bold text-lg"
          >
            Télécharger l'application WeGo
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}