import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ClipboardList,
  Smartphone,
  ScanLine,
  Wrench,
  Wifi,
  Printer,
  Package,
  TrendingUp,
  Table2,
  Users,
  FileText,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import logoImg from "@/imgs/logo-google-ads.png";

const categories = [
  {
    label: "Estoque",
    icon: Package,
    color: "text-[#E6A800]",
    iconBg: "bg-orange-50 border-orange-100",
    accent: "border-l-[#FFC124]",
    items: [
      { label: "Estoque Coletores", icon: Smartphone, href: "#" },
      { label: "Estoque Leitores", icon: ScanLine, href: "#" },
      { label: "Estoque Acessórios", icon: Wrench, href: "#" },
      { label: "Estoque Access Point", icon: Wifi, href: "#" },
      { label: "Estoque Impressoras", icon: Printer, href: "#" },
      { label: "Estoque Terceiros", icon: Package, href: "#" },
    ],
  },
  {
    label: "Utilitários",
    icon: ClipboardList,
    color: "text-violet-500",
    iconBg: "bg-violet-50 border-violet-100",
    accent: "border-l-violet-400",
    items: [
      { label: "Funil de Vendas", icon: TrendingUp, href: "#" },
      { label: "Tabela Scanreis", icon: Table2, href: "#" },
      { label: "Clientes", icon: Users, href: "#" },
    ],
  },
  {
    label: "Tabela de Preço",
    icon: FileText,
    color: "text-blue-500",
    iconBg: "bg-blue-50 border-blue-100",
    accent: "border-l-blue-400",
    items: [
      { label: "Tabela ATSI Allied", icon: FileText, href: "#" },
      { label: "Tabela Honeywell / Intermec", icon: FileText, href: "#" },
      { label: "Tabela KNC", icon: FileText, href: "#" },
      { label: "Tabela Unitech", icon: FileText, href: "#" },
      { label: "Tabela Zebra / Motorola", icon: FileText, href: "#" },
    ],
  },
];

export default function GestaoOperacional() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <img src={logoImg} alt="Scanreis" className="h-36 w-auto" />
          <button
            onClick={() => navigate("/area-restrita")}
            className="flex items-center gap-2 text-sm font-body font-medium text-gray-500 hover:text-[#FFC124] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Page title */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-[#E6A800] text-xs font-body font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
            Área Restrita
          </div>
          <h1
            className="font-headline font-black text-gray-900 leading-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            GESTÃO{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FFC124 0%, #E6A800 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              OPERACIONAL
            </span>
          </h1>
        </div>

        {/* Categories */}
        <div className="space-y-8">
          {categories.map((cat) => {
            const CatIcon = cat.icon;
            return (
              <section key={cat.label}>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center flex-shrink-0 ${cat.iconBg}`}>
                    <CatIcon className={`w-4 h-4 ${cat.color}`} strokeWidth={2} />
                  </div>
                  <h2 className="font-headline font-black text-gray-800 text-base uppercase tracking-widest">
                    {cat.label}
                  </h2>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* Items grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {cat.items.map((item) => {
                    const ItemIcon = item.icon;
                    const isExternal = item.href.startsWith("http");
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={isExternal ? "_blank" : "_self"}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className={`card-lift group flex items-center gap-3 bg-white border-l-4 ${cat.accent} border border-gray-200 rounded-xl px-4 py-3.5 hover:border-l-4 transition-all duration-200`}
                      >
                        <div className={`w-8 h-8 rounded-lg border flex items-center justify-center flex-shrink-0 ${cat.iconBg}`}>
                          <ItemIcon className={`w-4 h-4 ${cat.color}`} strokeWidth={2} />
                        </div>
                        <span className="font-body text-sm font-medium text-gray-700 group-hover:text-gray-900 flex-1 transition-colors">
                          {item.label}
                        </span>
                        {isExternal ? (
                          <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-400 flex-shrink-0 transition-colors" />
                        ) : (
                          <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-400 flex-shrink-0 transition-colors" />
                        )}
                      </a>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <footer className="py-5 text-center">
        <p className="font-body text-xs text-gray-400">
          © {new Date().getFullYear()} Scanreis · CNPJ 33.337.613/0001-78
        </p>
      </footer>
    </div>
  );
}
