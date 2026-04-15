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
import SEOHead from './components/SEOHead'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Scanreis',
  description: 'Especialistas em equipamentos de automação para logística e indústria. Locação, venda e reparo de leitores, coletores, impressoras e access points.',
  url: 'https://scanreis.com.br',
  telephone: '+55-11-3379-3044',
  email: 'contato@scanreis.com.br',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'R. Antônio Cremasco, 397 — sala 2',
    addressLocality: 'Valinhos',
    addressRegion: 'SP',
    postalCode: '13274-465',
    addressCountry: 'BR',
  },
  openingHours: 'Mo-Fr 08:00-18:00',
  priceRange: '$$',
  areaServed: 'BR',
}

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
      <SEOHead
        title="Locação e Venda de Equipamentos de Automação B2B | Scanreis"
        description="Leitores, coletores, impressoras e access points para logística. Locação, venda e reparo técnico autorizado. Orçamento em até 2h. CNPJ obrigatório."
        schema={localBusinessSchema}
      />
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
      <Route
        path="/area-restrita"
        element={
          <>
            <SEOHead
              title="Área Restrita | Scanreis"
              description="Acesso interno Scanreis."
              noIndex={true}
            />
            <AreaRestrita />
          </>
        }
      />
      <Route
        path="/area-restrita/gestao-gerencial"
        element={
          <>
            <SEOHead
              title="Gestão Gerencial | Scanreis"
              description="Acesso interno Scanreis."
              noIndex={true}
            />
            <GestaoGerencial />
          </>
        }
      />
      <Route
        path="/area-restrita/gestao-operacional"
        element={
          <>
            <SEOHead
              title="Gestão Operacional | Scanreis"
              description="Acesso interno Scanreis."
              noIndex={true}
            />
            <GestaoOperacional />
          </>
        }
      />
    </Routes>
  )
}
