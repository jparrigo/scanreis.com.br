import { useState, useEffect } from 'react'
import { Menu, X, MessageCircle, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

const WA_LINK = 'https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento'

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Marcas', href: '#marcas' },
  { label: 'Por que nós', href: '#por-que-nos' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      const offset = 72
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080808]/95 backdrop-blur-md border-b border-[#262626] shadow-lg shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center gap-2 group"
            aria-label="Scanreis - Início"
          >
            <div className="w-8 h-8 bg-[#F97316] flex items-center justify-center rounded-sm group-hover:bg-[#EA580C] transition-colors">
              <Zap className="w-5 h-5 text-[#080808]" strokeWidth={2.5} />
            </div>
            <span className="font-headline font-black text-2xl tracking-widest text-[#FAFAFA] group-hover:text-[#F97316] transition-colors">
              SCANREIS
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-body font-medium text-[#A3A3A3] hover:text-[#F97316] transition-colors uppercase tracking-wide relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-px bg-[#F97316] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              size="default"
              className="btn-pulse gap-2"
            >
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                Solicitar Orçamento
              </a>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-[#A3A3A3] hover:text-[#F97316] transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu lg:hidden bg-[#0d0d0d] border-t border-[#262626] ${mobileOpen ? 'open' : 'closed'}`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left px-4 py-3 text-sm font-body font-medium text-[#A3A3A3] hover:text-[#F97316] hover:bg-[#F97316]/5 rounded-sm transition-colors uppercase tracking-wide"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 pb-1">
            <Button asChild size="default" className="w-full gap-2">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                Solicitar Orçamento via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
