import Hero from './../components/Hero'
import Services from './../components/Services'
import Testimonials from './../components/Testimonials'
import Welcome from './../components/Welcome'
import Contact from './../components/Contact'
import Faq from './../components/Faq'
export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Services />
    
      <Faq />
      <Testimonials />
      <Contact />
    </>
  )
}