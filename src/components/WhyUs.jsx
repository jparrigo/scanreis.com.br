import { useEffect, useRef, useState } from 'react'
import {
  Clock,
  HeadphonesIcon,
  Award,
  TrendingUp,
  ShieldCheck,
  Truck,
  CheckCircle2,
} from 'lucide-react'

const stats = [
  { value: 15, suffix: '+', label: 'Anos de mercado', description: 'Experiência consolidada no setor' },
  { value: 500, suffix: '+', label: 'Empresas atendidas', description: 'Em todo o território nacional' },
  { value: 98, suffix: '%', label: 'Taxa de satisfação', description: 'Avaliações de clientes' },
  { value: 24, suffix: 'h', label: 'Diagnóstico técnico', description: 'Resposta rápida garantida' },
]

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Garantia Total',
    description: 'Todos os equipamentos vendidos possuem garantia de fábrica. Produtos reparados saem com garantia de serviço.',
  },
  {
    icon: Truck,
    title: 'Entrega Nacional',
    description: 'Enviamos para todo o Brasil com seguro e rastreamento em tempo real. Embalagem reforçada para equipamentos eletrônicos.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Suporte Especializado',
    description: 'Equipe técnica treinada pelas fabricantes para oferecer suporte pré e pós-venda de qualidade.',
  },
  {
    icon: Clock,
    title: 'Agilidade no Atendimento',
    description: 'Orçamentos em até 2 horas. Diagnóstico técnico em até 24 horas. Você não fica esperando.',
  },
  {
    icon: Award,
    title: 'Revenda Autorizada',
    description: 'Parceria oficial com Zebra, Honeywell, Urovo, Datalogic, Unitech e Compex. Peças e serviços certificados.',
  },
  {
    icon: TrendingUp,
    title: 'ROI Comprovado',
    description: 'Nossas soluções de locação permitem capex zero com total previsibilidade de custos operacionais.',
  },
]

function AnimatedCounter({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const steps = 60
    const increment = target / steps
    let current = 0
    const interval = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(interval)
  }, [started, target, duration])

  return (
    <span ref={ref} className="font-headline font-black text-5xl lg:text-6xl text-[#F97316] leading-none tabular-nums">
      {count}{suffix}
    </span>
  )
}

export default function WhyUs() {
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
      const els = sectionRef.current.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
      els.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="por-que-nos" ref={sectionRef} className="bg-[#0a0a0a] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <div className="reveal flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#F97316]" />
            <span className="text-[#F97316] text-xs font-body font-semibold uppercase tracking-widest">
              Por que escolher a Scanreis
            </span>
          </div>
          <h2
            className="reveal font-headline font-black text-[#FAFAFA] leading-tight delay-100"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            DIFERENCIAIS QUE <br />
            <span className="text-gradient">FAZEM A DIFERENÇA</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#111111] border border-[#1a1a1a] rounded-sm p-6 text-center relative overflow-hidden group hover:border-[#F97316]/30 transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#F97316]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <div className="font-headline font-bold text-sm text-[#FAFAFA] uppercase tracking-wider mt-2">
                {stat.label}
              </div>
              <div className="font-body text-xs text-[#737373] mt-1">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider mb-14" />

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <div
                key={i}
                className="reveal card-glow flex gap-4 bg-[#111111] border border-[#1a1a1a] rounded-sm p-6 card-left-accent"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-10 h-10 bg-[#F97316]/10 border border-[#F97316]/20 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-[#F97316]" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-lg text-[#FAFAFA] mb-2 tracking-wide">
                    {reason.title.toUpperCase()}
                  </h3>
                  <p className="font-body text-sm text-[#A3A3A3] leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* B2B callout */}
        <div className="reveal mt-14 bg-[#111111] border border-[#F97316]/20 rounded-sm p-8 flex flex-col lg:flex-row items-start lg:items-center gap-6">
          <div className="w-12 h-12 bg-[#F97316] rounded-sm flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-7 h-7 text-[#080808]" strokeWidth={2} />
          </div>
          <div className="flex-1">
            <h3 className="font-headline font-black text-2xl text-[#FAFAFA] mb-2 tracking-wide">
              ATENDEMOS EXCLUSIVAMENTE PESSOAS JURÍDICAS (PJ)
            </h3>
            <p className="font-body text-[#A3A3A3] text-sm leading-relaxed">
              Nossa operação é 100% B2B. Emitimos nota fiscal eletrônica, trabalhamos com pedidos de compra,
              contratos de locação e ordens de serviço. CNPJ obrigatório para todas as negociações.
            </p>
          </div>
          <div className="lg:text-right flex-shrink-0">
            <div className="font-headline font-black text-sm text-[#F97316] uppercase tracking-widest">
              CNPJ Obrigatório
            </div>
            <div className="font-body text-xs text-[#737373] mt-1">
              NF-e · Contrato · Ordem de Serviço
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
