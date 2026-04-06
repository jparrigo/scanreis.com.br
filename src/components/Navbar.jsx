import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@/imgs/logo-google-ads.png";

const WA_LINK =
  "https://wa.me/551133793044?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento";

// Tipos de link suportados:
// - href="#ancora"        → scroll suave para a seção
// - href="/rota"          → navegação interna (mesma aba)
// - href="https://..."    → link externo (nova aba por padrão)
// - newTab: true          → força abertura em nova aba
const navLinks = [
  {
    label: "Portifólio",
    href: "http://scanreis2.hospedagemdesites.ws/datasheet/scanreis/fscanreis.pdf",
    newTab: true,
  },
  { label: "Serviços", href: "#servicos" },
  { label: "Produtos", href: "#produtos" },
  { label: "Marcas", href: "#marcas" },
  { label: "Por que nós", href: "#por-que-nos" },
  { label: "Contato", href: "#contato" },
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Área Restrita", href: "/area-restrita" },
];

const linkItemClass =
  "px-4 py-2 text-sm font-body font-medium text-gray-600 hover:text-[#FFC124] transition-colors relative group";
const linkUnderline =
  "absolute bottom-0 left-4 right-4 h-0.5 bg-[#FFC124] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200 rounded-full";
const mobileLinkClass =
  "text-left w-full px-4 py-3 text-sm font-body font-medium text-gray-600 hover:text-[#FFC124] hover:bg-orange-50 rounded-lg transition-colors";

function NavItem({ link, mobile = false, onAnchorClick }) {
  const isAnchor = link.href.startsWith("#");
  const isExternal = link.href.startsWith("http") || link.newTab;

  if (isAnchor) {
    return (
      <button
        onClick={() => onAnchorClick(link.href)}
        className={mobile ? mobileLinkClass : linkItemClass}
      >
        {link.label}
        {!mobile && <span className={linkUnderline} />}
      </button>
    );
  }

  return (
    <a
      href={link.href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={mobile ? mobileLinkClass : linkItemClass}
      onClick={mobile ? () => onAnchorClick(null) : undefined}
    >
      {link.label}
      {!mobile && <span className={linkUnderline} />}
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (href) => {
    setMobileOpen(false);
    if (!href) return;
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-white/80 backdrop-blur-sm border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="Scanreis - Início"
          >
            <img src={logoImg} alt="Scanreis" className="h-40 w-auto" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavItem
                key={link.href}
                link={link}
                onAnchorClick={handleAnchorClick}
              />
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild size="default" className="btn-pulse gap-2">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                Solicitar Orçamento
              </a>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-[#FFC124] transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`mobile-menu lg:hidden bg-white border-t border-gray-100 ${mobileOpen ? "open" : "closed"}`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <NavItem
              key={link.href}
              link={link}
              mobile
              onAnchorClick={handleAnchorClick}
            />
          ))}
          <div className="pt-2 pb-1">
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
  );
}
