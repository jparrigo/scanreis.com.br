import { useEffect, useRef } from 'react'
import { Package, Wrench, HandCoins, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const WA_LINK = 'https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento'

const services = [
  {
    icon: HandCoins,
    title: 'Locação',
    subtitle: 'Equipamentos sob demanda',
    description:
      'Aluguel de equipamentos com contrato flexível, manutenção inclusa e suporte técnico dedicado. Ideal para projetos sazonais, picos de operação ou empresas que preferem capex zero.',
    features: [
      'Contratos mensais ou anuais',
      'Manutenção preventiva inclusa',
      'Substituição em caso de falha',
      'Gerenciamento de frota',
    ],
    cta: 'Solicitar Locação',
    accent: '#F97316',
  },
  {
    icon: Package,
    title: 'Venda',
    subtitle: 'Equipamentos novos e recondicionados',
    description:
      'Fornecimento de equipamentos originais das melhores marcas do mercado. Garantia de fábrica, assistência pós-venda e entrega para todo o Brasil.',
    features: [
      'Equipamentos novos e certificados',
      'Garantia de fábrica',
      'Suporte técnico pós-venda',
      'Entrega para todo o Brasil',
    ],
    cta: 'Ver Equipamentos',
    accent: '#F97316',
    featured: true,
  },
  {
    icon: Wrench,
    title: 'Reparo',
    subtitle: 'Manutenção autorizada',
    description:
      'Centro técnico especializado com mão de obra qualificada para conserto de leitores, coletores e impressoras. Diagnóstico rápido e peças originais.',
    features: [
      'Diagnóstico em até 24h',
      'Peças originais certificadas',
      'Orçamento sem compromisso',
      'Garantia no serviço realizado',
    ],
    cta: 'Solicitar Reparo',
    accent: '#F97316',
  },
]

export default function Services() {
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (sectionRef.current) {
      const els = sectionRef.current.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
      els.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicos" ref={sectionRef} className="bg-[#0a0a0a] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-14">
          <div className="reveal flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#F97316]" />
            <span className="text-[#F97316] text-xs font-body font-semibold uppercase tracking-widest">
              Nossos Serviços
            </span>
          </div>
          <h2 className="reveal font-headline font-black text-[#FAFAFA] leading-tight delay-100"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            TUDO QUE SUA <br />
            <span className="text-gradient">OPERAÇÃO PRECISA</span>
          </h2>
          <p className="reveal font-body text-[#A3A3A3] text-base lg:text-lg max-w-xl mt-4 delay-200">
            Oferecemos três modalidades de serviço para atender diferentes realidades
            empresariais com máxima eficiência e custo-benefício.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={i}
                className={`reveal card-glow delay-${(i + 1) * 100} relative flex flex-col rounded-sm border bg-[#111111] p-8 ${
                  service.featured
                    ? 'border-[#F97316]/40 bg-gradient-to-b from-[#F97316]/5 to-[#111111]'
                    : 'border-[#262626]'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-8">
                    <span className="bg-[#F97316] text-[#080808] text-xs font-headline font-black px-3 py-1 rounded-sm uppercase tracking-wider">
                      Mais Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-12 h-12 rounded-sm flex items-center justify-center mb-6 ${
                  service.featured ? 'bg-[#F97316]' : 'bg-[#1a1a1a] border border-[#262626]'
                }`}>
                  <Icon
                    className={`w-6 h-6 ${service.featured ? 'text-[#080808]' : 'text-[#F97316]'}`}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Title */}
                <div className="mb-1">
                  <span className="text-xs font-body text-[#A3A3A3] uppercase tracking-wider">
                    {service.subtitle}
                  </span>
                </div>
                <h3 className="font-headline font-black text-3xl text-[#FAFAFA] mb-4 tracking-wide">
                  {service.title.toUpperCase()}
                </h3>

                {/* Divider */}
                <div className="h-px bg-[#262626] mb-5" />

                {/* Description */}
                <p className="font-body text-[#A3A3A3] text-sm leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm font-body text-[#D4D4D4]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] mt-2 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  variant={service.featured ? 'default' : 'outline'}
                  size="default"
                  className="w-full gap-2"
                >
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                    {service.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
