import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import Brands from './components/Brands'
import WhyUs from './components/WhyUs'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'

export default function App() {
  // Global scroll reveal for any leftover .reveal elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#080808] text-[#FAFAFA] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <Brands />
        <WhyUs />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
