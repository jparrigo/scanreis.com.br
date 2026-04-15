import { useNavigate } from "react-router-dom";
import {
  DollarSign,
  Mail,
  BarChart2,
  ClipboardList,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import logoImg from "@/imgs/logo-google-ads.png";

const PTAX_URL =
  "https://www.noticiasagricolas.com.br/cotacoes/mercado-financeiro/cambio-ptax";
const WEBMAIL_URL = "https://webmail-seguro.com.br/scanreis.com.br/"; // Substituir pela URL real do webmail

const cards = [
  {
    icon: DollarSign,
    label: "Dólar PTAX",
    description: "Consulta o boletim oficial de câmbio do Banco Central.",
    href: PTAX_URL,
    external: true,
    color: "text-emerald-500",
    bg: "bg-emerald-50 border-emerald-100",
    hoverBorder: "hover:border-emerald-400",
  },
  {
    icon: Mail,
    label: "Webmail",
    description: "Acesso ao e-mail corporativo da ScanReis.",
    href: WEBMAIL_URL,
    external: true,
    color: "text-blue-500",
    bg: "bg-blue-50 border-blue-100",
    hoverBorder: "hover:border-blue-400",
  },
  {
    icon: BarChart2,
    label: "Gestão Gerencial",
    description: "Painéis e indicadores estratégicos para a gestão.",
    href: "/area-restrita/gestao-gerencial",
    external: false,
    color: "text-[#E6A800]",
    bg: "bg-orange-50 border-orange-100",
    hoverBorder: "hover:border-[#FFC124]",
  },
  {
    icon: ClipboardList,
    label: "Gestão Operacional",
    description: "Controle e acompanhamento das operações do dia a dia.",
    href: "/area-restrita/gestao-operacional",
    external: false,
    color: "text-violet-500",
    bg: "bg-violet-50 border-violet-100",
    hoverBorder: "hover:border-violet-400",
  },
];

export default function AreaRestrita() {
  const navigate = useNavigate();

  const handleClick = (card) => {
    if (card.external) {
      window.open(card.href, "_blank", "noopener,noreferrer");
    } else {
      navigate(card.href);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <img src={logoImg} alt="Scanreis" className="h-36 w-auto" />
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm font-body font-medium text-gray-500 hover:text-[#FFC124] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao site
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-3xl">
          {/* Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-[#E6A800] text-xs font-body font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
              Acesso Interno
            </div>
            <h1
              className="font-headline font-black text-gray-900 leading-tight"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              ÁREA{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #FFC124 0%, #E6A800 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                RESTRITA
              </span>
            </h1>
            <p className="font-body text-gray-500 text-sm mt-3">
              Selecione o módulo que deseja acessar.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <button
                  key={card.label}
                  onClick={() => handleClick(card)}
                  className={`card-lift group text-left bg-white border ${card.hoverBorder} border-gray-200 rounded-2xl p-6 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC124]`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${card.bg}`}
                  >
                    <Icon className={`w-5 h-5 ${card.color}`} strokeWidth={2} />
                  </div>

                  <div className="flex items-start justify-between gap-2">
                    <h2 className="font-roboto font-black text-gray-900 text-lg leading-snug">
                      {card.label}
                    </h2>
                    {card.external && (
                      <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-gray-400 flex-shrink-0 mt-0.5 transition-colors" />
                    )}
                  </div>

                  <p className="font-body text-sm text-gray-500 mt-1.5 leading-relaxed">
                    {card.description}
                  </p>
                </button>
              );
            })}
          </div>
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
