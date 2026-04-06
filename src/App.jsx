import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import Brands from './components/Brands'
import WhyUs from './components/WhyUs'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'
import AreaRestrita from './pages/AreaRestrita'
import GestaoGerencial from './pages/GestaoGerencial'
import GestaoOperacional from './pages/GestaoOperacional'
import QuemSomos from './pages/QuemSomos'

function Home() {
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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
      .forEach((el) => observer.observe(el))
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quem-somos" element={<QuemSomos />} />
      <Route path="/area-restrita" element={<AreaRestrita />} />
      <Route path="/area-restrita/gestao-gerencial" element={<GestaoGerencial />} />
      <Route path="/area-restrita/gestao-operacional" element={<GestaoOperacional />} />
    </Routes>
  )
}
