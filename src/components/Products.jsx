import { useEffect, useRef } from 'react'
import { Scan, Database, Printer, Wifi, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const WA_LINK = 'https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento'

const products = [
  {
    icon: Scan,
    title: 'Leitores de Código de Barras',
    description:
      'Leitores 1D e 2D de alto desempenho para ambientes industriais e logísticos. Modelos fixos, portáteis, resistentes a poeira e impacto (IP65+).',
    tags: ['1D / 2D', 'Industrial IP65', 'Sem fio', 'USB / Serial'],
    brands: ['Zebra', 'Honeywell', 'Datalogic'],
    applications: ['Almoxarifado', 'Linha de produção', 'Varejo'],
  },
  {
    icon: Database,
    title: 'Coletores de Dados',
    description:
      'Terminais móveis robustos com Android e Windows para coleta de dados em campo. Tela touchscreen, bateria de longa duração e scanner integrado.',
    tags: ['Android / Windows', 'RFID Opcional', 'Bateria estendida', 'Wi-Fi / 4G'],
    brands: ['Urovo', 'Unitech', 'Zebra', 'Honeywell'],
    applications: ['Inventário', 'Expedição', 'Field Service'],
  },
  {
    icon: Printer,
    title: 'Impressoras de Etiquetas',
    description:
      'Impressoras térmicas diretas e transferência térmica para etiquetas de alta qualidade. Modelos desktop, industriais e portáteis.',
    tags: ['Térmica direta', 'Transferência térmica', 'Desktop / Industrial', 'Portátil'],
    brands: ['Zebra', 'Datalogic'],
    applications: ['Etiquetagem', 'Rastreamento', 'GS1 / ANVISA'],
  },
  {
    icon: Wifi,
    title: 'Access Points',
    description:
      'Infraestrutura Wi-Fi industrial para ambientes exigentes: armazéns, galpões e fábricas. Alta densidade de dispositivos e cobertura ampla.',
    tags: ['Wi-Fi 6 / 5 GHz', 'PoE', 'Industrial', 'Alta densidade'],
    brands: ['Compex', 'Unitech'],
    applications: ['Armazéns', 'Fábricas', 'Galpões logísticos'],
  },
]

export default function Products() {
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
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    if (sectionRef.current) {
      const els = sectionRef.current.querySelectorAll('.reveal, .reveal-scale')
      els.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="produtos" ref={sectionRef} className="bg-[#080808] py-20 lg:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <div className="reveal flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#F97316]" />
              <span className="text-[#F97316] text-xs font-body font-semibold uppercase tracking-widest">
                Linha de Produtos
              </span>
            </div>
            <h2
              className="reveal font-headline font-black text-[#FAFAFA] leading-tight delay-100"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
            >
              EQUIPAMENTOS <br />
              <span className="text-gradient">DE ALTA PERFORMANCE</span>
            </h2>
          </div>
          <p className="reveal font-body text-[#A3A3A3] text-sm lg:text-base max-w-xs lg:text-right delay-200">
            Portfólio selecionado das principais marcas globais do setor.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, i) => {
            const Icon = product.icon
            return (
              <div
                key={i}
                className="reveal-scale card-glow group relative bg-[#111111] border border-[#262626] rounded-sm p-7 flex flex-col overflow-hidden"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Orange left accent */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#F97316] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] group-hover:border-[#F97316]/40 rounded-sm flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5 text-[#F97316]" strokeWidth={1.8} />
                  </div>
                  <div className="flex flex-wrap gap-1 justify-end max-w-[200px]">
                    {product.brands.map((b, j) => (
                      <span
                        key={j}
                        className="text-[10px] font-body font-semibold uppercase tracking-wider text-[#A3A3A3] bg-[#1a1a1a] border border-[#262626] px-2 py-0.5 rounded-sm"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-headline font-black text-xl lg:text-2xl text-[#FAFAFA] mb-3 leading-tight tracking-wide">
                  {product.title.toUpperCase()}
                </h3>

                {/* Description */}
                <p className="font-body text-[#A3A3A3] text-sm leading-relaxed mb-5 flex-1">
                  {product.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {product.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs font-body text-[#F97316] bg-[#F97316]/10 border border-[#F97316]/20 px-2.5 py-1 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Applications */}
                <div className="flex items-center gap-2 text-xs font-body text-[#737373] mb-6">
                  <span className="uppercase tracking-wider">Aplicações:</span>
                  {product.applications.map((app, j) => (
                    <span key={j} className="text-[#A3A3A3]">
                      {app}{j < product.applications.length - 1 ? ' ·' : ''}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  asChild
                  variant="secondary"
                  size="sm"
                  className="w-full gap-2 group-hover:border-[#F97316]/40 group-hover:text-[#F97316]"
                >
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                    Solicitar Cotação
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </Button>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-10 flex justify-center">
          <Button asChild size="lg" className="gap-2">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              Ver Catálogo Completo via WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
