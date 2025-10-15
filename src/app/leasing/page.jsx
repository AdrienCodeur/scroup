'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Leasing() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Section Blanche - Titre et Introduction */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent mb-6"
            >
              Office de Location Achat
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-700 leading-relaxed"
            >
              Accédez à votre moto électrique dès <strong className="text-primary">3 000 FCFA par jour</strong> (6 jours par semaine) 
              et profitez d'une solution simple, sécurisée et abordable pour développer votre activité.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section Noire - Contenu Principal avec Flex */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
          >
            {/* Contenu Texte */}
            <motion.div 
              variants={sectionVariants}
              className="lg:w-1/2"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-4xl lg:text-5xl font-bold text-primary mb-6"
              >
                Moto électrique
              </motion.h2>
              
              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-300 mb-8"
              >
                Avec WeGo, vous bénéficiez de :
              </motion.p>

              <motion.ul 
                variants={containerVariants}
                className="space-y-4 mb-8"
              >
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <motion.span 
                      whileHover={{ scale: 1.2 }}
                      className="w-3 h-3 bg-primary rounded-full mr-4 mt-2 flex-shrink-0"
                    />
                    <span className="text-lg text-gray-200">{benefit}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.h3
                variants={itemVariants}
                className="text-3xl font-bold text-primary mb-6"
              >
                Conditions d'éligibilité
              </motion.h3>

              <motion.ul 
                variants={containerVariants}
                className="space-y-3 mb-8"
              >
                {conditions.map((condition, index) => (
                  <motion.li 
                    key={index}
                    variants={itemVariants}
                    className="flex items-center"
                  >
                    <span className="text-primary mr-4 text-xl">•</span>
                    <span className="text-gray-200">{condition}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-300 mb-8"
              >
                Rejoignez dès aujourd'hui la communauté des chauffeurs WeGo et démarrez votre activité sans investissement initial !
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#F4C509",
                    color: "#000"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
                >
                  Devenir chauffeur WeGo
                </motion.button>
                
                <motion.a
  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
  target='blank'
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#ffffff",
                    color: "#000"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg border border-gray-600 hover:bg-white hover:text-black transition-colors"
                >
                  Contacter un conseiller
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div 
              variants={sectionVariants}
              className="lg:w-1/2"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/location.jpeg"
                  alt="Moto électrique WeGo - Location"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                
                {/* Overlay effet */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Badge promotionnel */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="absolute top-6 left-6 bg-primary text-black px-4 py-2 rounded-full font-bold"
                >
                  🔥 3 000 FCFA/jour
                </motion.div>
                
                {/* Texte sur image */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-6 left-6 text-white"
                >
                  <h4 className="text-2xl font-bold mb-2">WeGo Location</h4>
                  <p className="text-gray-200">Votre moto, votre avenir</p>
                </motion.div>
              </motion.div>

              {/* Stats sous l'image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="grid grid-cols-3 gap-4 mt-6"
              >
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-400">Chauffeurs actifs</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-primary">2M+</div>
                  <div className="text-sm text-gray-400">Km parcourus</div>
                </div>
                <div className="text-center p-4 bg-gray-900 rounded-lg">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-gray-400">Satisfaction</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Bonus - Avantages supplémentaires */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Pourquoi choisir WeGo ?</h3>
            <p className="text-xl text-gray-600">Découvrez les avantages exclusifs de notre programme de location</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Économie garantie",
                description: "Jusqu'à 2 000 FCFA d'économie par jour grâce à l'électrique"
              },
              {
                icon: "🛡️",
                title: "Sécurité totale",
                description: "Assurance complète et papiers en règle inclus"
              },
              {
                icon: "📱",
                title: "Suivi digital",
                description: "Application dédiée pour suivre votre activité en temps réel"
              }
            ].map((avantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-grayy-50 bg-black p-6 rounded-lg text-center hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{avantage.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-white">{avantage.title}</h4>
                <p className="text-gray-600 text-white">{avantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}