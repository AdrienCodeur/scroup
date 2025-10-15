'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Services = () => {
  const services = [
    {
      title: 'WeGo Moto Taxi',
      image: '/moto-taxi.jpg',
      features: [
        'Prix connu à l\'avance sur l\'application',
        'Chauffeurs professionnels et assurés',
        'Suivi en temps réel sur l\'application'
      ],
      description: 'Rapide, sûr et économique : vos déplacements n\'ont jamais été aussi simples !'
    },
    {
      title: 'WeGo Livraison',
      image: '/livraison.jpeg',
      features: [
        'Tarifs imbattables',
        'Suivi en temps réel jusqu\'à la livraison',
        'Sécurité garantie avec code de confirmation',
        'Vos livraisons, sans retard'
      ],
      description: 'WeGo, la solution fiable pour vos livraisons quotidiennes.'
    },
    {
      title: 'WeGo Location',
      image: '/location.jpeg',
      features: [
        'Un petit paiement chaque semaine, une moto pour vous',
        'Zéro carburant, recharge à 1.500 FCFA/jour',
        'Assurance complète et maintenance incluse'
      ],
      description: 'WeGo Location, votre moto, votre avenir.'
    }
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 300
      }
    }
  }

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 1.1 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  }

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2
      }
    }
  }

  return (
    <section className="py-20 bg-gradientt-to-b fromm-white to-gray-50  bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent mb-4 text-white"
          >
            Nos services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-grayu-600 text-white max-w-3xl mx-auto"
          >
            Découvrez nos solutions de mobilité complètes adaptées à tous vos besoins
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover="hover"
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image Container */}
              <motion.div 
                variants={imageVariants}
                className="relative h-64 overflow-hidden"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute top-4 left-4">
                  <motion.span 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="bg-primary text-black px-3 py-1 rounded-full text-sm font-bold"
                  >
                    {index + 1}
                  </motion.span>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div 
                variants={textVariants}
                className="p-6 lg:p-8"
              >
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300"
                >
                  {service.title}
                </motion.h3>
                
                <motion.ul 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="space-y-3 mb-6"
                >
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 + (idx * 0.1) }}
                      className="flex items-start"
                    >
                      <motion.span 
                        whileHover={{ scale: 1.2 }}
                        className="w-3 h-3 bg-primary rounded-full mr-3 mt-1.5 flex-shrink-0"
                      />
                      <span className="text-gray-700 text-sm lg:text-base">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                  className="text-gray-600 italic border-l-4 border-primary pl-4 py-1 text-sm lg:text-base"
                >
                  {service.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.9 }}
                  className="mt-6"
                >
                
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-gradient-to-r from-primary to-black p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-black mb-4 text-white">
              Prêt à essayer WeGo ?
            </h3>
            <p className="text-gray-800 mb-6 text-white">
              Téléchargez l'application et bénéficiez de 20% de réduction sur votre première course !
            </p>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(3, 3, 0, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors"
            >
              Télécharger l'App
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services