'use client'

import { motion } from 'framer-motion'

const Leasing = () => {
  const benefits = [
    "Une moto assurée en cas d'accident avec tous les papiers en règle",
    "Plus de carburant, économisez jusqu'à 2 000 FCFA/jour",
    "Un contrat flexible d'une durée inférieure à 2 ans",
    "Un suivi et un accompagnement dédié",
    "Entretiens, maintenance et assistance inclus pour une sérénité totale"
  ]

  const conditions = [
    "Présenter une pièce d'identité valide",
    "Fournir un garant",
    "Disposer d'un permis de conduire moto",
    "Être âgé d'au moins 21 ans"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">Office de Location Achat</h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 p-8 rounded-lg shadow-lg mb-8"
          >
            <p className="text-lg text-gray-700 mb-6">
              Accédez à votre moto électrique dès <strong>3 000 FCFA par jour</strong> (6 jours par semaine) 
              et profitez d'une solution simple, sécurisée et abordable pour développer votre activité.
            </p>

            <h3 className="text-2xl font-bold text-primary mb-4">Moto électrique</h3>
            <p className="text-lg font-semibold mb-4">Avec WeGo, vous bénéficiez de :</p>
            
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

            <p className="text-lg text-gray-700">
              Rejoignez dès aujourd'hui la communauté des chauffeurs WeGo et démarrez votre activité sans investissement initial !
            </p>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
          >
            Devenir chauffeur WeGo
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Leasing