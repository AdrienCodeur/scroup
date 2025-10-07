import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Investment from '@/components/Investment'
import Testimonials from '@/components/Testimonials'
import Partner from '@/components/Partner'
import Welcome from '@/components/Welcome'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Faq from '@/components/Faq'
export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Services />
      <About />
      <Contact />

      <Faq />
      <Testimonials />
    </>
  )
}