'use client'

import { motion } from 'framer-motion'

const Investment = () => {
  const offers = [
    {
      name: 'Offre Basique',
      investment: '750 000 FCFA',
      revenue: 'jusqu\'à 50 000 FCFA / an',
      description: 'Idéal pour commencer en toute sécurité'
    },
    {
      name: 'Offre Professionnelle',
      investment: '2 300 000 FCFA',
      revenue: 'jusqu\'à 1 500 000 FCFA / an',
      description: 'Pour investisseurs souhaitant développer leur portefeuille'
    },
    {
      name: 'Offre Business',
      investment: '3 750 000 FCFA',
      revenue: 'jusqu\'à 2 500 000 FCFA / an',
      description: 'Pour entrepreneurs visant un rendement maximal'
    }
  ]

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Investissez dans WeGo</h2>
          <p className="text-xl text-gray-300">
            Un placement simple, rentable et garanti à partir de 1 000 000 FCFA
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">{offer.name}</h3>
              <p className="text-lg mb-2">Investissement: {offer.investment}</p>
              <p className="text-lg mb-4">Revenus: {offer.revenue}</p>
              <p className="text-gray-400">{offer.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Pourquoi choisir WeGo ?</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-primary mr-3">✓</span>
                  Revenus réguliers versés mensuellement
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-3">✓</span>
                  Capital sécurisé et restitué après 12 mois
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-3">✓</span>
                  Rentabilité garantie de 25% annuel
                </li>
              </ul>
            </div>
            <div className="text-left">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-primary mr-3">✓</span>
                  Accessibilité dès 1 000 000 FCFA
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-3">✓</span>
                  Simplicité totale de gestion
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-3">✓</span>
                  Support client dédié
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Investment