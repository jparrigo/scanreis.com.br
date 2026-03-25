import { useEffect, useRef } from 'react'
import { MessageCircle, ChevronDown, ArrowRight, Building2, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

const WA_LINK = 'https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento'

export default function Hero() {
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const badgesRef = useRef(null)

  useEffect(() => {
    const items = [
      { ref: headlineRef, delay: 100 },
      { ref: subRef, delay: 300 },
      { ref: ctaRef, delay: 500 },
      { ref: badgesRef, delay: 700 },
    ]
    items.forEach(({ ref, delay }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current?.classList.add('visible')
        }, delay)
      }
    })
  }, [])

  const scrollToServices = () => {
    const el = document.getElementById('servicos')
    if (el) {
      const offset = 72
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#080808] hero-grid"
    >
      {/* Background gradient blobs */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)',
          transform: 'translate(-30%, -30%)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(234,88,12,0.06) 0%, transparent 70%)',
          transform: 'translate(30%, 30%)',
        }}
      />

      {/* Vertical orange accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#F97316] to-transparent opacity-40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <div ref={badgesRef} className="reveal flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-[#F97316]/10 border border-[#F97316]/30 text-[#F97316] text-xs font-body font-semibold px-3 py-1.5 rounded-sm uppercase tracking-widest">
              <Building2 className="w-3 h-3" />
              Exclusivo B2B — Venda para CNPJ
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#1a1a1a] border border-[#262626] text-[#A3A3A3] text-xs font-body font-semibold px-3 py-1.5 rounded-sm uppercase tracking-widest">
              <ShieldCheck className="w-3 h-3 text-[#F97316]" />
              Locação · Venda · Reparo
            </span>
          </div>

          {/* Main headline */}
          <h1
            ref={headlineRef}
            className="reveal font-headline font-black leading-[0.92] tracking-tight mb-6"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            <span className="block text-[#FAFAFA]">TECNOLOGIA</span>
            <span className="block text-[#FAFAFA]">INDUSTRIAL PARA</span>
            <span className="block text-gradient">SUA EMPRESA</span>
          </h1>

          {/* Animated accent line */}
          <span className="accent-line mb-8" />

          {/* Subtext */}
          <p
            ref={subRef}
            className="reveal font-body text-[#A3A3A3] text-lg lg:text-xl leading-relaxed max-w-2xl mb-10"
          >
            Equipamentos de automação de alta performance para operações logísticas e industriais.
            Leitores de código de barras, coletores de dados, impressoras de etiquetas e access points —
            com suporte especializado.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="reveal flex flex-wrap gap-4 items-center">
            <Button
              asChild
              size="xl"
              className="btn-pulse gap-2 text-base"
            >
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Solicitar Orçamento
              </a>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="gap-2 text-base"
              onClick={scrollToServices}
            >
              Ver Serviços
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Stats row */}
          <div className="mt-16 pt-8 border-t border-[#1a1a1a] grid grid-cols-3 gap-6 max-w-lg">
            {[
              { value: '15+', label: 'Anos de mercado' },
              { value: '500+', label: 'Empresas atendidas' },
              { value: '98%', label: 'Satisfação dos clientes' },
            ].map((stat, i) => (
              <div key={i} className="text-left">
                <div className="font-headline font-black text-3xl lg:text-4xl text-[#F97316] leading-none">
                  {stat.value}
                </div>
                <div className="font-body text-xs text-[#A3A3A3] mt-1 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#A3A3A3] hover:text-[#F97316] transition-colors group"
        aria-label="Rolar para baixo"
      >
        <span className="text-xs font-body uppercase tracking-widest">Ver mais</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>

      {/* Bottom edge decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F97316]/30 to-transparent" />
    </section>
  )
}
