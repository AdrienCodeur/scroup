'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.6
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#000000",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400
      }
    },
    tap: {
      scale: 0.95
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
        >
          {/* Texte Section */}
          <motion.div 
            variants={textVariants}
            className="lg:w-1/2"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent mb-6"
            >
              Bienvenue sur <span className="text-primary">WeGo</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-lg text-gray-700 leading-relaxed"
            >
              <p>
                <strong>WeGo</strong> est une solution de mobilité et logistique pensée pour simplifier 
                vos déplacements et vos livraisons à prix bas tout en respectant l'environnement.
              </p>
              
              <p>
                Avec notre réseau de <strong>moto-taxis rapides et sécurisés</strong>, nos services de 
                <strong> livraison de repas et de colis fiables</strong>, ainsi que notre offre de 
                <strong> véhicules électriques en leasing</strong>, nous construisons une alternative 
                moderne, pratique et durable pour répondre à tous vos besoins quotidiens.
              </p>

              <p>
                Notre vision : <strong>améliorer la mobilité urbaine</strong> tout en réduisant 
                le coût de transport et l'empreinte carbone grâce à des solutions innovantes 
                et accessibles à tous.
              </p>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors shadow-lg"
              >
                Télécharger l'application
              </motion.button>
              
            <motion.a
  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
  whileTap={{ scale: 0.95 }}
  className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg border-2 border-gray-300 hover:border-primary transition-colors inline-block"
>
  En savoir plus
</motion.a>

            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl font-bold text-primary mb-2"
                >
                  10K+
                </motion.div>
                <div className="text-sm text-gray-600">Utilisateurs satisfaits</div>
              </div>
              
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl font-bold text-primary mb-2"
                >
                  500+
                </motion.div>
                <div className="text-sm text-gray-600">Chauffeurs partenaires</div>
              </div>
              
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-3xl font-bold text-primary mb-2"
                >
                  24/7
                </motion.div>
                <div className="text-sm text-gray-600">Service disponible</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            variants={imageVariants}
            whileHover="hover"
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about.jpeg"
                alt="WeGo - Solution de mobilité durable"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              {/* Overlay avec effet de gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Badge sur l'image */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute top-4 right-4 bg-primary text-black px-4 py-2 rounded-full font-bold text-sm"
              >
                ♻️ Éco-responsable
              </motion.div>
            </div>

            {/* Éléments décoratifs */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full"
            />
          </motion.div>
        </motion.div>

        {/* Section valeurs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold mb-8">Nos valeurs</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "⚡", title: "Rapidité", desc: "Service ultra-rapide et efficace" },
              { icon: "🛡️", title: "Fiabilité", desc: "Des partenaires de confiance" },
              { icon: "🌱", title: "Écologie", desc: "Solutions 100% électriques" }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About