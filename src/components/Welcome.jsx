'use client'

import { motion } from 'framer-motion'

const Welcome = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Bienvenue sur WeGo
        </motion.h2>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-600">
         Wego une est une solution de mobilité et logistique pensee pour simplifier vos déplacements et vos livraisons a prix bas tout en respectant l'environnement. tout en respectant l'environnement.
         Avec notre reseau de moto-taxi rapides et securises ,nos services de livraison de repas et de colis fiables et rapides ainsi que notre offre de vehicule électrique en leasing nous contruisons une alternative moderne ,pratique et durable pour répondre aux besoins quotidiens    </p>
      </div>
    </section>
  )
}

export default Welcome