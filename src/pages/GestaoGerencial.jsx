import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BarChart2,
  FileSpreadsheet,
  Wallet,
  ShoppingBag,
  UserCheck,
  Trophy,
  Receipt,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import logoImg from "@/imgs/logo-google-ads.png";

const categories = [
  {
    label: "DRE",
    icon: FileSpreadsheet,
    color: "text-[#E6A800]",
    iconBg: "bg-orange-50 border-orange-100",
    accent: "border-l-[#FFC124]",
    items: [
      {
        label: "DRE 2023",
        href: "http://scanreis2.hospedagemdesites.ws/contr_int/drescanreis2023.pdf",
      },
      {
        label: "DRE 2024",
        href: "http://scanreis2.hospedagemdesites.ws/contr_int/drescanreis2024.pdf",
      },
      {
        label: "DRE 2025",
        href: "http://scanreis2.hospedagemdesites.ws/contr_int/drescanreis2025.pdf",
      },
    ],
  },
  {
    label: "Finanças",
    icon: Wallet,
    color: "text-emerald-600",
    iconBg: "bg-emerald-50 border-emerald-100",
    accent: "border-l-emerald-400",
    items: [
      {
        label: "Finanças 2023",
        href: "http://scanreis2.hospedagemdesites.ws/contr_int/saldo2023.pdf",
      },
      {
        label: "Finanças 2024",
        href: "http://scanreis2.hospedagemdesites.ws/contr_int/saldo2024.pdf",
      },
      {
        label: "Finanças 2025",
        href: "http://scanreis2.hospedagemdesites.ws/contr_int/saldo2025.pdf",
      },
    ],
  },
  {
    label: "Vendas",
    icon: ShoppingBag,
    color: "text-blue-500",
    iconBg: "bg-blue-50 border-blue-100",
    accent: "border-l-blue-400",
    items: [
      {
        label: "Vendas 2023",
        href: "http://scanreis2.hospedagemdesites.ws/contr_int/vendas2023.pdf",
      },
      {
        label: "Vendas 2024",
        href: "http://scanreis2.hospedagemdesites.ws/contr_int/vendas2024.pdf",
      },
      {
        label: "Vendas 2025",
        href: "http://scanreis2.hospedagemdesites.ws/contr_int/vendas2025.pdf",
      },
    ],
  },
  {
    label: "Agente",
    icon: UserCheck,
    color: "text-violet-500",
    iconBg: "bg-violet-50 border-violet-100",
    accent: "border-l-violet-400",
    items: [
      {
        label: "Agente 2023",
        href: "http://scanreis2.hospedagemdesites.ws/contr_int/agente2023.pdf",
      },
      {
        label: "Agente 2024",
        href: "http://scanreis2.hospedagemdesites.ws/contr_int/agente2024.pdf",
      },
      {
        label: "Agente 2025",
        href: "http://scanreis2.hospedagemdesites.ws/contr_int/agente2025.pdf",
      },
    ],
  },
  {
    label: "Ranking",
    icon: Trophy,
    color: "text-amber-500",
    iconBg: "bg-amber-50 border-amber-100",
    accent: "border-l-amber-400",
    items: [
      {
        label: "Ranking 2023",
        href: "http://scanreis2.hospedagemdesites.ws/contr_int/ranking2023.pdf",
      },
      {
        label: "Ranking 2024",
        href: "http://scanreis2.hospedagemdesites.ws/contr_int/ranking2024.pdf",
      },
      {
        label: "Ranking 2025",
        href: "http://scanreis2.hospedagemdesites.ws/contr_int/ranking2025.pdf",
      },
    ],
  },
];

const EXTRATO_URL =
  "http://scanreis2.hospedagemdesites.ws/contr_int/extratob.pdf"; // Substituir pela URL real

export default function GestaoGerencial() {
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
              GERENCIAL
            </span>
          </h1>
        </div>

        {/* Categories */}
        <div className="space-y-8">
          {categories.map((cat) => {
            const CatIcon = cat.icon;
            return (
              <section key={cat.label}>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-9 h-9 rounded-xl border flex items-center justify-center flex-shrink-0 ${cat.iconBg}`}
                  >
                    <CatIcon
                      className={`w-4 h-4 ${cat.color}`}
                      strokeWidth={2}
                    />
                  </div>
                  <h2 className="font-headline font-black text-gray-800 text-base uppercase tracking-widest">
                    {cat.label}
                  </h2>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {cat.items.map((item) => {
                    const isExternal = item.href.startsWith("http");
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={isExternal ? "_blank" : "_self"}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className={`card-lift group flex items-center gap-3 bg-white border-l-4 ${cat.accent} border border-gray-200 rounded-xl px-4 py-3.5 transition-all duration-200`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg border flex items-center justify-center flex-shrink-0 ${cat.iconBg}`}
                        >
                          <CatIcon
                            className={`w-4 h-4 ${cat.color}`}
                            strokeWidth={2}
                          />
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

          {/* Extrato — botão link destacado */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl border bg-gray-50 border-gray-200 flex items-center justify-center flex-shrink-0">
                <Receipt className="w-4 h-4 text-gray-500" strokeWidth={2} />
              </div>
              <h2 className="font-headline font-black text-gray-800 text-base uppercase tracking-widest">
                Extrato
              </h2>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <a
              href={EXTRATO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#FFC124] hover:bg-[#E6A800] text-white font-headline font-bold uppercase tracking-wider text-sm px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#FFC124]/25"
            >
              <Receipt className="w-4 h-4" />
              Acessar Extrato
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </section>
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
