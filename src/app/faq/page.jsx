'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Comment puis-je réserver un trajet avec WeGo?",
      answer: `Vous pouvez réserver un trajet en moins de 2 minutes très facilement :
        1. Ouvrez l'application mobile ou le site web WeGo
        2. Choisissez l'option "Moto-taxi"
        3. Saisissez votre point de départ et votre destination
        4. Choisissez l'option de paiement et confirmez votre réservation
        5. Un chauffeur partenaire WeGo viendra vous récupérer rapidement et en toute sécurité`
    },
    {
      question: "Quels types de véhicules proposez-vous ?",
      answer: `WeGo met à disposition une flotte moderne et 100% électrique :
        • Moto-taxis électriques : rapides, confortables, économiques et sécurisés
        • Scooters & motos électriques en leasing
        • Véhicules utilitaires légers électriques (en option)`
    },
    {
      question: "Comment puis-je contacter le service client en cas de problème?",
      answer: "En cas de problème, contactez-nous par téléphone au +237 6 595 87 01 15 ou par email info@wegomobility.fr. Notre équipe est disponible 24h/24 et 7j/7."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-12"
        >
          Foire aux questions
        </motion.h1>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left font-semibold text-lg flex justify-between items-center"
              >
                {faq.question}
                <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-4 text-gray-700"
                >
                  {faq.answer.split('\n').map((line, i) => (
                    <p key={i} className="mb-2">{line}</p>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}