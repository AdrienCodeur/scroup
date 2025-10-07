'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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

  const offers = [
    {
      name: "Offre Basique",
      investment: "750 000 FCFA",
      revenue: "jusqu'à 50 000 FCFA / an",
      description: "Idéal pour commencer en toute sécurité et découvrir la rentabilité du modèle WeGo."
    },
    {
      name: "Offre Professionnelle",
      investment: "2 300 000 FCFA",
      revenue: "jusqu'à 1 500 000 FCFA / an",
      description: "Conçue pour les investisseurs souhaitant développer un portefeuille plus solide et diversifié."
    },
    {
      name: "Offre Business",
      investment: "3 750 000 FCFA",
      revenue: "jusqu'à 2 500 000 FCFA / an",
      description: "La formule idéale pour les entrepreneurs et investisseurs ambitieux visant un rendement maximal."
    }
  ]

  const galleryImages = [
    "/location.jpeg",
    "/moto-taxi.jpg",
    "/livraison.jpeg"
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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

  return (
    <section className="min-h-screen">
      {/* Section Blanche - Titre et Introduction */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent mb-6"
            >
              Partenaire WeGo
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-700 leading-relaxed"
            >
              <strong>Devenez acteur de la mobilité durable avec WeGo</strong> en investissant dans une flotte à partir de 750 000 FCFA.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-600 mt-4"
            >
              Dès <strong className="text-primary">750 000 FCFA</strong>, investissez dans une flotte de motos électriques et gagnez jusqu'à 
              <strong className="text-primary"> 500 000 FCFA</strong> avec un taux de rentabilité de plus de <strong className="text-primary">68%</strong>.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Section Noire - Contenu Principal */}
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="max-w-6xl mx-auto"
          >
            {/* Benefits Section */}
            <motion.div variants={itemVariants} className="mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-8 text-center">
                Avec WeGo, vous bénéficiez de :
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {benefits.slice(0, 3).map((benefit, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      className="flex items-start p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <motion.span 
                        whileHover={{ scale: 1.2 }}
                        className="w-3 h-3 bg-primary rounded-full mr-4 mt-2 flex-shrink-0"
                      />
                      <span className="text-lg text-gray-200">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="space-y-6">
                  {benefits.slice(3).map((benefit, index) => (
                    <motion.div
                      key={index + 3}
                      whileHover={{ x: 10 }}
                      className="flex items-start p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <motion.span 
                        whileHover={{ scale: 1.2 }}
                        className="w-3 h-3 bg-primary rounded-full mr-4 mt-2 flex-shrink-0"
                      />
                      <span className="text-lg text-gray-200">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Conditions Section */}
            <motion.div variants={itemVariants} className="mb-12">
              <h3 className="text-3xl font-bold text-primary mb-8 text-center">
                Conditions d'éligibilité
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {conditions.map((condition, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center p-4 bg-gray-900 rounded-lg border-l-4 border-primary"
                  >
                    <span className="text-primary text-2xl mr-4">✓</span>
                    <span className="text-gray-200">{condition}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Offers Section */}
            <motion.div variants={itemVariants} className="mb-12">
              <h3 className="text-3xl font-bold text-primary mb-8 text-center">
                Nos offres d'investissement
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                {offers.map((offer, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -10 }}
                    className="bg-gray-900 p-6 rounded-lg text-center hover:shadow-2xl transition-all"
                  >
                    <h4 className="text-2xl font-bold text-primary mb-4">{offer.name}</h4>
                    <div className="mb-4">
                      <div className="text-sm text-gray-400">Investissement</div>
                      <div className="text-xl font-bold text-white">{offer.investment}</div>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm text-gray-400">Revenus potentiels</div>
                      <div className="text-lg font-bold text-primary">{offer.revenue}</div>
                    </div>
                    <p className="text-gray-300 text-sm">{offer.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <p className="text-xl text-gray-300 mb-8">
                Avec WeGo, transformez votre capital en un projet rentable, durable et à fort impact !
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://wa.me/2376595870115"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(37, 211, 102, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg inline-block"
                >
                  📱 Contactez-nous sur WhatsApp
                </motion.a>
                
                
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Section Gallery - 3 Images */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Rejoignez notre réseau de partenaires
            </h3>
            <p className="text-lg text-gray-600">
              Découvrez la communauté WeGo en images
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="relative group overflow-hidden rounded-2xl shadow-lg"
              >
                <Image
                  src={image}
                  alt={`Partenaire WeGo ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute bottom-4 left-4 text-white"
                >
                  <span className="bg-primary text-black px-3 py-1 rounded-full text-sm font-bold">
                    Partenaire #{index + 1}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
          >
            {[
              { number: "150+", label: "Partenaires actifs" },
              { number: "68%", label: "Rentabilité moyenne" },
              { number: "18", label: "Mois ROI" },
              { number: "⭐", label: "Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="text-center p-4 bg-white rounded-lg shadow-lg"
              >
                <div className="text-2xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Partner