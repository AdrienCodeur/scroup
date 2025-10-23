'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Validation personnalisée
  const validateForm = () => {
    const newErrors = {}

    // Validation du nom
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Le nom doit contenir au moins 2 caractères'
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email) {
      newErrors.email = 'L\'email est requis'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Veuillez entrer un email valide'
    }

    // Validation du message
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Envoi des données vers l'API d'envoi d'email
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Message envoyé avec succès!')
        setFormData({ name: '', email: '', message: '' })
        setErrors({})
      } else {
        // throw new Error('Erreur lors de l\'envoi')
        return null
      }
    } catch (error) {
      // console.error('Erreur:', error)
      // alert('Une erreur est survenue lors de l\'envoi du message.')
      return null
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Effacer l'erreur du champ quand l'utilisateur commence à taper
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const socialNetworks = [
    { name: 'Facebook', icon: '/facebook.png', url: '#' },
    { name: 'LinkedIn', icon: '/linkedin.png', url: '#' },
    { name: 'TikTok', icon: '/tiktok.png', url: '#' }
  ]

  return (
    <div className="min-h-screen bg-[#000] py-20" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold text-center mb-12 bg-gradient-to-r text-white from-black to-gray-700 bg-clip-text"
          >
            Contactez-nous
          </motion.h1>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg text-white mb-6">
                Pour toute demande d'information, n'hésitez pas à nous contacter en remplissant le formulaire ci-dessous.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Nom :
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Votre nom complet"
                    required
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Adresse e-mail :
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="votre@email.com"
                    required
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Message :
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Votre message..."
                    required
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                
                <motion.button
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-[#000] py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le formulaire'}
                </motion.button>
              </form>
            </motion.div>

            {/* Carte Maps et Réseaux sociaux */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              {/* Carte Maps */}
          <div className="bg-[#000] rounded-lg shadow-lg overflow-hidden">
  <div className="h-64 bg-gray-200 relative">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7159999999997!2d9.704583!3d4.048538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDInNTQuNyJOIDnCsDQyJzE2LjUiRQ!5e0!3m2!1sfr!2scm!4v1234567890"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Localisation WeGo"
      className="absolute inset-0"
    />
    
    <div className="absolute bottom-4 left-4 bg-black/80 text-white p-3 rounded-lg">
      <h4 className="font-bold">WeGo Headquarters</h4>
      <p className="text-sm">Rue Léman Akwa Douala</p>
    </div>
  </div>
</div>

              {/* Réseaux sociaux */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-bold mb-6 text-center">Suivez-nous sur les réseaux</h3>
                
                <div className="flex justify-center space-x-8">
                  {socialNetworks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ 
                        scale: 1.3,
                        y: -5
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gray-100 p-4 rounded-full hover:bg-blue-100 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-8 h-8 relative">
                        {/* Icône temporaire - à remplacer par vos vraies icônes */}
                       
                        {/* Décommentez quand vous aurez les vraies icônes */}
                        <Image
                          src={social.icon}
                          alt={social.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </motion.a>
                  ))}
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-center text-gray-600 mt-6 text-sm"
                >
                  Restez connecté avec l'actualité WeGo
                </motion.p>
              </motion.div>

              {/* Informations supplémentaires */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-blue-500/20 rounded-lg p-4 text-center border border-blue-500/30"
              >
                <p className="text-sm text-white mb-3">
                  <strong>💡 Conseil :</strong> Pour une réponse plus rapide, contactez-nous via WhatsApp
                </p>
                <motion.a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                  whileHover={{ scale: 1.05 }}
                  className="inline-block bg-black text-white px-6 py-3 rounded-lg text-sm font-medium  transition-colors"
                >
                  💬 Discuter sur WhatsApp
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}