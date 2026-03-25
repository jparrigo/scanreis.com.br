import { useRef, useEffect } from 'react'

const brands = [
  { name: 'UROVO', tagline: 'Mobile Computing' },
  { name: 'ZEBRA', tagline: 'Enterprise Technology' },
  { name: 'DATALOGIC', tagline: 'Automatic Data Capture' },
  { name: 'HONEYWELL', tagline: 'Sensing & Safety' },
  { name: 'UNITECH', tagline: 'Industrial Mobility' },
  { name: 'COMPEX', tagline: 'Wireless Networks' },
]

// Duplicate for seamless loop
const allBrands = [...brands, ...brands]

export default function Brands() {
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
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      const els = sectionRef.current.querySelectorAll('.reveal, .reveal-left')
      els.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="marcas" ref={sectionRef} className="bg-[#0d0d0d] py-16 lg:py-20 relative overflow-hidden">
      {/* Top / bottom dividers */}
      <div className="section-divider mb-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <div className="reveal flex items-center gap-3 mb-3">
              <span className="h-px w-10 bg-[#F97316]" />
              <span className="text-[#F97316] text-xs font-body font-semibold uppercase tracking-widest">
                Marcas Parceiras
              </span>
            </div>
            <h2
              className="reveal font-headline font-black text-[#FAFAFA] leading-tight delay-100"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              TRABALHAMOS COM AS{' '}
              <span className="text-gradient">LÍDERES DO MERCADO</span>
            </h2>
          </div>
          <p className="reveal font-body text-[#A3A3A3] text-sm max-w-xs delay-200">
            Distribuidor autorizado e parceiro oficial das principais fabricantes globais de equipamentos de automação.
          </p>
        </div>
      </div>

      {/* Marquee container */}
      <div className="relative overflow-hidden py-4">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
             style={{ background: 'linear-gradient(90deg, #0d0d0d, transparent)' }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
             style={{ background: 'linear-gradient(-90deg, #0d0d0d, transparent)' }} />

        <div className="marquee-track">
          {allBrands.map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-6 flex items-center gap-3 group cursor-default"
              style={{ minWidth: '180px' }}
            >
              {/* Brand badge */}
              <div className="flex flex-col items-start bg-[#111111] border border-[#262626] group-hover:border-[#F97316]/40 px-5 py-3 rounded-sm transition-all duration-300 group-hover:bg-[#F97316]/5 min-w-[160px]">
                <span className="font-headline font-black text-xl tracking-widest text-[#525252] group-hover:text-[#F97316] transition-colors duration-300">
                  {brand.name}
                </span>
                <span className="font-body text-[9px] uppercase tracking-widest text-[#404040] group-hover:text-[#737373] transition-colors mt-0.5">
                  {brand.tagline}
                </span>
              </div>

              {/* Separator dot */}
              <div className="w-1.5 h-1.5 rounded-full bg-[#262626] flex-shrink-0 ml-2" />
            </div>
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { value: '6', label: 'Marcas parceiras' },
            { value: '200+', label: 'Modelos em estoque' },
            { value: 'Autorizados', label: 'Reparos certificados' },
            { value: 'Nacional', label: 'Atendimento no Brasil' },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#111111] border border-[#1a1a1a] rounded-sm px-5 py-4 text-center"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="font-headline font-black text-2xl text-[#F97316] leading-none">
                {item.value}
              </div>
              <div className="font-body text-xs text-[#737373] uppercase tracking-wide mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-12" />
    </section>
  )
}
