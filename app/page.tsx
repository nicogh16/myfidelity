import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Solution from './components/Solution'
import Advantages from './components/Advantages'
import AppShowcase from './components/AppShowcase'
import Ecology from './components/Ecology'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Solution />
      <Advantages />
      <AppShowcase />
      <Ecology />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
} 