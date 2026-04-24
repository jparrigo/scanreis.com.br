import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DollarSign,
  Mail,
  BarChart2,
  ClipboardList,
  ArrowLeft,
  ExternalLink,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import logoImg from "@/imgs/logo-google-ads.png";
import { isAuthenticated, login } from "@/auth";

const PTAX_URL =
  "https://www.noticiasagricolas.com.br/cotacoes/mercado-financeiro/cambio-ptax";
const WEBMAIL_URL = "https://webmail-seguro.com.br/scanreis.com.br/";

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

function PasswordGate({ onSuccess, blocked }) {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(password)) {
      setError("");
      onSuccess();
    } else {
      setError("Senha incorreta. Tente novamente.");
      setPassword("");
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
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

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-50 border border-orange-200 mb-5">
              <Lock className="w-6 h-6 text-[#E6A800]" strokeWidth={2} />
            </div>
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-[#E6A800] text-xs font-body font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
              Acesso Interno
            </div>
            <h1
              className="font-headline font-black text-gray-900 leading-tight"
              style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}
            >
              ÁREA{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #FFC124 0%, #E6A800 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                RESTRITA
              </span>
            </h1>
            {blocked ? (
              <p className="font-body text-sm text-amber-600 mt-3 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2">
                Digite a senha para acessar esta área.
              </p>
            ) : (
              <p className="font-body text-gray-500 text-sm mt-3">
                Digite a senha para continuar.
              </p>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className={`bg-white border border-gray-200 rounded-2xl p-6 shadow-sm transition-all duration-150 ${shake ? "animate-shake" : ""}`}
          >
            <label className="block text-sm font-body font-medium text-gray-700 mb-2">
              Senha
            </label>
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                placeholder="••••••••••••"
                autoFocus
                className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-12 text-sm font-body text-gray-900 placeholder-gray-300 outline-none focus:border-[#FFC124] focus:ring-2 focus:ring-[#FFC124]/20 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {error && (
              <p className="text-sm font-body text-red-500 mb-4 -mt-1">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-[#FFC124] hover:bg-[#E6A800] text-gray-900 font-body font-semibold text-sm rounded-xl py-3 transition-colors duration-150"
            >
              Entrar
            </button>
          </form>
        </div>
      </main>

      <footer className="py-5 text-center">
        <p className="font-body text-xs text-gray-400">
          © {new Date().getFullYear()} Scanreis · CNPJ 33.337.613/0001-78
        </p>
      </footer>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
        }
        .animate-shake { animation: shake 0.45s ease; }
      `}</style>
    </div>
  );
}

export default function AreaRestrita() {
  const navigate = useNavigate();
  const location = useLocation();
  const blocked = location.state?.blocked === true;
  const [authed, setAuthed] = useState(isAuthenticated());

  const handleClick = (card) => {
    if (card.external) {
      window.open(card.href, "_blank", "noopener,noreferrer");
    } else {
      navigate(card.href);
    }
  };

  if (!authed) {
    return <PasswordGate blocked={blocked} onSuccess={() => setAuthed(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
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

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-3xl">
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
