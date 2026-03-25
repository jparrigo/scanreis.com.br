import { useEffect, useRef } from 'react'
import { MessageCircle, ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const WA_LINK = 'https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento'

export default function CtaBanner() {
  const sectionRef = useRef(null)

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
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      const els = sectionRef.current.querySelectorAll('.reveal, .reveal-left, .reveal-right')
      els.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background: 'linear-gradient(135deg, #EA580C 0%, #F97316 50%, #FB923C 100%)',
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Dark overlay at edges */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.3) 100%)' }} />

      {/* Big background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        aria-hidden
      >
        <span
          className="font-headline font-black text-[18vw] text-black/10 leading-none select-none whitespace-nowrap"
        >
          SCANREIS
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal inline-flex items-center gap-2 bg-black/20 border border-white/20 px-4 py-2 rounded-sm mb-6">
          <Phone className="w-3.5 h-3.5 text-white" />
          <span className="font-body text-white/90 text-xs uppercase tracking-widest font-semibold">
            Atendimento B2B — Resposta em até 2 horas
          </span>
        </div>

        <h2
          className="reveal font-headline font-black text-white leading-[0.9] mb-6 delay-100"
          style={{ fontSize: 'clamp(2.4rem, 7vw, 6rem)' }}
        >
          PRONTO PARA <br />
          OTIMIZAR SUA <br />
          OPERAÇÃO?
        </h2>

        <p className="reveal font-body text-white/80 text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed delay-200">
          Solicite um orçamento agora mesmo via WhatsApp. Nossa equipe vai analisar
          sua necessidade e apresentar a melhor solução para o seu negócio.
        </p>

        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 delay-300">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#080808] text-[#FAFAFA] hover:bg-[#1a1a1a] font-headline font-black uppercase tracking-wider text-base px-8 py-4 rounded-sm transition-all duration-200 hover:shadow-xl hover:shadow-black/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 text-[#F97316]" />
            Solicitar Orçamento no WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>
          <div className="font-body text-white/60 text-sm text-center">
            <div>Resposta garantida em até 2h</div>
            <div className="text-xs text-white/40">Seg–Sex · 08h–18h</div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="reveal mt-12 flex flex-wrap items-center justify-center gap-6 delay-400">
          {[
            'CNPJ Obrigatório',
            'NF-e Garantida',
            'Suporte Especializado',
            'Entrega Nacional',
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 text-white/70">
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
              <span className="font-body text-sm uppercase tracking-wider font-medium">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
