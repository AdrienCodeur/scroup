'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Eva",
      role: "Utilisatrice régulière",
      text: "Avec WeGo, mes trajets en ville sont devenus beaucoup plus simples et agréables. Je n'ai plus à négocier les prix ou perdre de temps sous le soleil à chercher un chauffeur, en plus le service est toujours ponctuel et sécurisé.",
      image: "/eva.jpg"
    },
    {
      name: "Amadou",
      role: "Chauffeur partenaire",
      text: "Grâce au leasing de WeGo, j'ai pu lancer mon activité sans avoir à faire un gros investissement de départ. Avec la moto électrique, j'économise plus de 2 000 FCFA par jour en carburant – c'est un vrai plus pour mes revenus. En plus, c'est très pratique au quotidien : je suis assuré en cas d'accident et la moto est livrée avec tous les papiers nécessaires.",
      image: "/moto-taxi.jpg"
    },
    {
      name: "Junior",
      role: "Client livraison",
      text: "J'utilise WeGo pour mes commandes de repas et l'envoi de colis. Les livreurs sont rapides, souriants et surtout fiables. Je sais que mes commandes arrivent toujours à temps !",
      image: "/junior.jpg"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-gray-100">
      <div className="container mx-auto px-4">
        <motion.h3 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Témoignages de nos clients
        </motion.h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-lg">
                  <Image 
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
