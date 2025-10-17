'use client'

import About from './About'

const Welcome = () => {


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
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
         {/* <motion.div 
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
          </motion.div> */}
<About />
      </div>
    </section>
  )
}

export default Welcome