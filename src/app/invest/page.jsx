'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Invest() {
  const advantages = [
    "Pas de gestion compliquée : WeGo s'occupe de tout (opérations, suivi, reporting).",
    "Pas de risques liés à la flotte : vous n'investissez pas dans un véhicule, mais dans la croissance globale de l'entreprise.",
    "Pas de surprises sur les gains : votre rendement est fixe et garanti.",
    "Transparence totale : contrat clair, reporting régulier et support client dédié."
  ]

  const benefits = [
    {
      title: "Revenus réguliers",
      description: "Vos intérêts sont versés chaque mois directement sur votre compte bancaire."
    },
    {
      title: "Capital sécurisé",
      description: "Votre investissement initial vous est intégralement restitué au bout de 12 mois."
    },
    {
      title: "Rentabilité garantie",
      description: "Un taux compétitif de 25% annuel, sans fluctuations surprises."
    },
    {
      title: "Accessibilité",
      description: "Vous commencez dès 1 000 000 FCFA."
    },
    {
      title: "Simplicité",
      description: "Aucun besoin de gérer une flotte, des chauffeurs ou des opérations."
    }
  ]

  const conditions = [
    "Montant minimum: 1 000 000 FCFA",
    "Présenter une pièce d'identité valide",
    "Fournir un compte OM ou Mobile pour le versement mensuel des intérêts",
    "Signature du contrat d'investissement WeGo",
    "Respect des dispositions légales locales encadrant ce type de placement"
  ]

  return (
    <div className="min-h-screen">
      {/* Section Blanche - En-tête Principal */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent mb-8"
            >
              Investissez dans WeGo
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-800 mb-6">
                <strong>Un placement simple, rentable et garanti</strong>
              </p>
              <p className="text-lg lg:text-xl text-gray-600 mb-4">
                WeGo vous offre l'opportunité unique de placer votre argent directement dans l'entreprise, 
                et non dans l'achat de véhicules.
              </p>
              <p className="text-lg lg:text-xl text-gray-600">
                À partir de <strong className="text-primary">1 000 000 FCFA</strong>, vous pouvez investir votre capital 
                pendant 12 mois et profiter d'un <strong className="text-primary">rendement garanti de 25% annuel</strong>.
              </p>
              <p className="text-lg lg:text-xl text-gray-600 mt-4">
                C'est un placement clair et transparent, comparable à une épargne ou à un investissement 
                en bourse – mais avec une rentabilité fixe et assurée par WeGo.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Noire - Contenu Principal */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Section Pourquoi choisir WeGo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-center mb-12 text-primary"
            >
              Pourquoi choisir WeGo ?
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all border-l-4 border-primary"
                >
                  <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Section Conditions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-center mb-8 text-primary"
            >
              Conditions d'éligibilité
            </motion.h2>
            
            <div className="bg-gray-800 rounded-2xl p-8 max-w-2xl mx-auto">
              <ul className="space-y-4">
                {conditions.map((condition, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <span className="text-primary text-xl mr-4">✓</span>
                    <span className="text-lg">{condition}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Section Comment WeGo élimine les obstacles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-center mb-8 text-primary"
            >
              Comment WeGo élimine les obstacles
            </motion.h2>
            
            <div className="bg-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
              <ul className="space-y-4">
                {advantages.map((advantage, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="text-primary text-xl mr-4 mt-1">•</span>
                    <span className="text-lg">{advantage}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Image avant le bouton */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/investissement-wego.jpg"
                alt="Investissement WeGo - Mobilité durable et rentable"
                width={800}
                height={400}
                className="w-full h-64 object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              
              {/* Overlay effet */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              
              {/* Texte sur image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute top-1/2 left-8 transform -translate-y-1/2 text-white"
              >
                <h3 className="text-3xl font-bold mb-2">Votre argent travaille pour vous</h3>
                <p className="text-lg text-gray-200">Avec WeGo, investissez dans l'avenir de la mobilité</p>
              </motion.div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute top-6 right-6 bg-primary text-black px-4 py-2 rounded-full font-bold"
              >
                25% de rendement
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Section Citation et CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-secondary to-white text-black rounded-2xl p-8 max-w-2xl mx-auto mb-8"
            >
              <p className="text-xl lg:text-2xl font-semibold mb-4">
                "Avec WeGo, votre argent travaille pour vous, chaque mois, et contribue à l'avenir d'une mobilité durable et rentable."
              </p>
              <div className="text-lg font-bold">Figure</div>
            </motion.div>

            <motion.a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(37, 211, 102, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-bold text-lg  transition-colors"
            >
              💬 Contactez-nous sur WhatsApp
            </motion.a>
          </motion.div>

          {/* Footer */}
         
        </div>
      </section>
    </div>
  )
}