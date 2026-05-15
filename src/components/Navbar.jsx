import { useState, useEffect, useRef } from "react";
import { Menu, X, MessageCircle, ChevronDown, Smartphone, Wifi, ScanLine, Printer, Tablet, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoImg from "@/imgs/logo-google-ads.png";

const WA_LINK =
  "https://wa.me/551133793044?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento";

const CATEGORIAS = [
  { slug: "coletores-de-dados", label: "Coletor de Dados",  icon: Smartphone },
  { slug: "access-points",      label: "Access Point",      icon: Wifi       },
  { slug: "leitores",           label: "Leitores",           icon: ScanLine   },
  { slug: "impressoras",        label: "Impressoras",        icon: Printer    },
  { slug: "tablets",            label: "Tablets",            icon: Tablet     },
  { slug: "acessorios",         label: "Acessórios",         icon: Package    },
];

const navLinks = [
  {
    label: "Portifólio",
    href: "http://scanreis2.hospedagemdesites.ws/datasheet/scanreis/fscanreis.pdf",
    newTab: true,
  },
  { label: "Serviços",    href: "#servicos"    },
  { label: "Marcas",      href: "#marcas"      },
  { label: "Por que nós", href: "#por-que-nos" },
  { label: "Contato",     href: "#contato"     },
  { label: "Quem Somos",  href: "/quem-somos"  },
  { label: "Área Restrita", href: "/area-restrita" },
];

const linkItemClass =
  "px-4 py-2 text-sm font-body font-medium text-gray-600 hover:text-[#FFC124] transition-colors relative group";
const linkUnderline =
  "absolute bottom-0 left-4 right-4 h-0.5 bg-[#FFC124] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200 rounded-full";
const mobileLinkClass =
  "text-left w-full px-4 py-3 text-sm font-body font-medium text-gray-600 hover:text-[#FFC124] hover:bg-orange-50 rounded-lg transition-colors";

function NavItem({ link, mobile = false, onAnchorClick }) {
  const isAnchor   = link.href.startsWith("#");
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

// ── Desktop dropdown ──────────────────────────────────────────────────────────
function ProdutosDropdown({ onScrollProdutos }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const show = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const hide = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      {/* Trigger */}
      <button
        onClick={onScrollProdutos}
        className={`${linkItemClass} flex items-center gap-1`}
      >
        Produtos
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
        <span className={linkUnderline} />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div
          onMouseEnter={show}
          onMouseLeave={hide}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white border border-gray-200 rounded-2xl shadow-xl p-2 w-52 z-50 animate-[fade-in_0.15s_ease-out]"
        >
          {CATEGORIAS.map(({ slug, label, icon: Icon }) => (
            <Link
              key={slug}
              to={`/produtos/${slug}`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-body font-medium text-gray-700 hover:text-[#E6A800] hover:bg-orange-50 transition-colors duration-150"
            >
              <Icon className="w-4 h-4 text-gray-400 flex-shrink-0" strokeWidth={1.75} />
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Mobile produtos accordion ─────────────────────────────────────────────────
function MobileProdutos({ onClose }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className={`${mobileLinkClass} flex items-center justify-between`}
      >
        <span>Produtos</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-orange-100 pl-3">
          {CATEGORIAS.map(({ slug, label, icon: Icon }) => (
            <Link
              key={slug}
              to={`/produtos/${slug}`}
              onClick={onClose}
              className="flex items-center gap-2.5 w-full px-3 py-2.5 text-sm font-body font-medium text-gray-600 hover:text-[#FFC124] hover:bg-orange-50 rounded-lg transition-colors"
            >
              <Icon className="w-4 h-4 text-gray-400 flex-shrink-0" strokeWidth={1.75} />
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main Navbar ───────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

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

  const scrollToProdutos = () => handleAnchorClick("#produtos");

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
            {/* Links before Produtos */}
            {navLinks.slice(0, 2).map((link) => (
              <NavItem key={link.href} link={link} onAnchorClick={handleAnchorClick} />
            ))}

            {/* Produtos dropdown */}
            <ProdutosDropdown onScrollProdutos={scrollToProdutos} />

            {/* Links after Produtos */}
            {navLinks.slice(2).map((link) => (
              <NavItem key={link.href} link={link} onAnchorClick={handleAnchorClick} />
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
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`mobile-menu lg:hidden bg-white border-t border-gray-100 ${mobileOpen ? "open" : "closed"}`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
          {/* Links before Produtos */}
          {navLinks.slice(0, 2).map((link) => (
            <NavItem key={link.href} link={link} mobile onAnchorClick={handleAnchorClick} />
          ))}

          {/* Produtos accordion */}
          <MobileProdutos onClose={() => setMobileOpen(false)} />

          {/* Links after Produtos */}
          {navLinks.slice(2).map((link) => (
            <NavItem key={link.href} link={link} mobile onAnchorClick={handleAnchorClick} />
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
