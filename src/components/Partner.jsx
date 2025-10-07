'use client'

import { motion } from 'framer-motion'

const Partner = () => {
  const benefits = [
    "Revenus réguliers et quotidiens",
    "Retour sur investissement rapide (environ 18 mois)",
    "Gestion 100% par WeGo (chauffeur, maintenance, assurance inclus)",
    "Technologie de suivi en temps réel + assurance complète",
    "Accompagnement et reporting transparent sur l'activité de votre véhicule"
  ]

  const conditions = [
    "Disposer du montant minimum d'investissement : 750 000 FCFA",
    "Présenter une pièce d'identité valide",
    "Signer le contrat de partenaire WeGo",
    "Respecter les conditions légales locales en matière d'investissement"
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-8">Partenaire WeGo</h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 p-8 rounded-lg shadow-lg mb-8"
          >
            <p className="text-xl text-gray-200 mb-6">
              <strong>Devenez acteur de la mobilité durable avec WeGo</strong> en investissant dans une flotte à partir de 750 000 FCFA.
            </p>

            <p className="text-lg text-gray-300 mb-6">
              Dès <strong>750 000 FCFA</strong>, investissez dans une flotte de motos électriques et gagnez jusqu'à 
              <strong> 500 000 FCFA</strong> avec un taux de rentabilité de plus de <strong>68%</strong>.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4">Avec WeGo, vous bénéficiez de :</h3>
            <ul className="space-y-3 mb-6">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  {benefit}
                </motion.li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold mb-4">Conditions d'éligibilité</h3>
            <ul className="space-y-2 mb-6">
              {conditions.map((condition, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="flex items-center"
                >
                  <span className="text-primary mr-3">•</span>
                  {condition}
                </motion.li>
              ))}
            </ul>

            <p className="text-lg text-gray-300 font-semibold text-center">
              Avec WeGo, transformez votre capital en un projet rentable, durable et à fort impact !
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <motion.a
              href="https://wa.me/2376595870115"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg inline-block hover:bg-green-600 transition-colors"
            >
              Contactez-nous sur WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Partner