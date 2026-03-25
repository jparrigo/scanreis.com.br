import { MessageCircle, Mail, MapPin, Phone, Zap, ExternalLink } from 'lucide-react'

const WA_LINK = 'https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento'

const footerLinks = {
  Serviços: [
    { label: 'Locação de Equipamentos', href: '#servicos' },
    { label: 'Venda de Equipamentos', href: '#servicos' },
    { label: 'Reparo Técnico', href: '#servicos' },
  ],
  Produtos: [
    { label: 'Leitores de Código de Barras', href: '#produtos' },
    { label: 'Coletores de Dados', href: '#produtos' },
    { label: 'Impressoras de Etiquetas', href: '#produtos' },
    { label: 'Access Points', href: '#produtos' },
  ],
  Marcas: [
    { label: 'Zebra', href: '#marcas' },
    { label: 'Honeywell', href: '#marcas' },
    { label: 'Urovo', href: '#marcas' },
    { label: 'Datalogic', href: '#marcas' },
    { label: 'Unitech', href: '#marcas' },
    { label: 'Compex', href: '#marcas' },
  ],
}

export default function Footer() {
  const handleNavClick = (href) => {
    const el = document.querySelector(href)
    if (el) {
      const offset = 72
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer id="contato" className="bg-[#080808] border-t border-[#1a1a1a]">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 bg-[#F97316] flex items-center justify-center rounded-sm">
                <Zap className="w-5 h-5 text-[#080808]" strokeWidth={2.5} />
              </div>
              <span className="font-headline font-black text-2xl tracking-widest text-[#FAFAFA]">
                SCANREIS
              </span>
            </div>
            <p className="font-body text-[#737373] text-sm leading-relaxed mb-6 max-w-xs">
              Especialistas em equipamentos de automação para empresas. Locação, venda e reparo de
              leitores, coletores, impressoras e access points de marcas líderes do mercado.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#A3A3A3] hover:text-[#F97316] transition-colors group"
              >
                <div className="w-8 h-8 bg-[#1a1a1a] border border-[#262626] group-hover:border-[#F97316]/40 rounded-sm flex items-center justify-center transition-colors flex-shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#525252] font-body">WhatsApp</div>
                  <div className="text-sm font-body font-medium">(11) 99999-9999</div>
                </div>
              </a>

              <a
                href="mailto:contato@scanreis.com.br"
                className="flex items-center gap-3 text-[#A3A3A3] hover:text-[#F97316] transition-colors group"
              >
                <div className="w-8 h-8 bg-[#1a1a1a] border border-[#262626] group-hover:border-[#F97316]/40 rounded-sm flex items-center justify-center transition-colors flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#525252] font-body">E-mail</div>
                  <div className="text-sm font-body font-medium">contato@scanreis.com.br</div>
                </div>
              </a>

              <div className="flex items-center gap-3 text-[#A3A3A3]">
                <div className="w-8 h-8 bg-[#1a1a1a] border border-[#262626] rounded-sm flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#525252] font-body">Localização</div>
                  <div className="text-sm font-body font-medium">São Paulo — SP, Brasil</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[#A3A3A3]">
                <div className="w-8 h-8 bg-[#1a1a1a] border border-[#262626] rounded-sm flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#525252] font-body">Horário</div>
                  <div className="text-sm font-body font-medium">Seg–Sex · 08h às 18h</div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-[#080808] font-headline font-black uppercase tracking-wider text-sm px-5 py-3 rounded-sm transition-all duration-200 hover:shadow-lg hover:shadow-[#F97316]/20"
            >
              <MessageCircle className="w-4 h-4" />
              Chamar no WhatsApp
            </a>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-headline font-black text-sm uppercase tracking-widest text-[#FAFAFA] mb-5">
                  {category}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link, i) => (
                    <li key={i}>
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="font-body text-sm text-[#737373] hover:text-[#F97316] transition-colors text-left flex items-center gap-1.5 group"
                      >
                        <span className="w-0 h-px bg-[#F97316] group-hover:w-3 transition-all duration-200" />
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-body text-xs text-[#525252] text-center sm:text-left">
              © {new Date().getFullYear()} Scanreis. Todos os direitos reservados.
              {' '}<span className="text-[#404040]">Atendimento exclusivo para CNPJ.</span>
            </p>
            <div className="flex items-center gap-4">
              <span className="font-body text-xs text-[#525252] uppercase tracking-wider">
                B2B · NF-e · CNPJ
              </span>
              <div className="w-px h-4 bg-[#262626]" />
              <span className="font-body text-xs text-[#525252]">
                São Paulo, SP
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
