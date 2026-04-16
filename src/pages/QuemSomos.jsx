import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Hash,
  Clock,
  ExternalLink,
  Building2,
  Target,
  ShieldCheck,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import logoImg from "@/imgs/logo-google-ads.png";
// Substitua pelo caminho real da imagem quando disponível:
import fachadaImg from "@/imgs/fachada.png";

const MAPS_URL =
  "https://www.google.com/maps?um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=KQ8G_lgAzciUMf4kroqZTUHX&daddr=R.+Ant%C3%B4nio+Cremasco,+397+-+sala+2+-+Res.+Santa+Maria,+Valinhos+-+SP,+13274-465";

const dadosCadastrais = [
  {
    icon: Hash,
    label: "CNPJ",
    value: "33.337.613/0001-78",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value:
      "R. Antônio Cremasco, 397 — sala 2\nRes. Santa Maria · Valinhos — SP · 13274-465",
    href: MAPS_URL,
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(11) 3379-3044 · (19) 3299-3200",
    href: "tel:+551133793044",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@scanreis.com.br",
    href: "mailto:contato@scanreis.com.br",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Segunda a Sexta · 08h às 18h",
  },
];

const pilares = [
  {
    icon: Target,
    title: "Missão",
    text: "Fornecer soluções de automação com equipamentos de alta performance, garantindo eficiência operacional e suporte técnico especializado para empresas em todo o Brasil.",
    color: "text-[#E6A800]",
    bg: "bg-orange-50 border-orange-100",
  },
  {
    icon: ShieldCheck,
    title: "Compromisso",
    text: "Somos revendedores autorizados das principais fabricantes globais — Zebra, Honeywell, Urovo, Datalogic, Unitech e Compex — garantindo produtos originais com garantia de fábrica.",
    color: "text-emerald-600",
    bg: "bg-emerald-50 border-emerald-100",
  },
  {
    icon: Building2,
    title: "Estrutura",
    text: "Contamos com centro técnico próprio para reparo autorizado, estoque local e equipe especializada para atender demandas de locação, venda e manutenção.",
    color: "text-blue-500",
    bg: "bg-blue-50 border-blue-100",
  },
];

export default function QuemSomos() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEOHead
        title="Quem Somos | Scanreis — 15 Anos em Automação Industrial"
        description="Revenda autorizada Zebra, Honeywell, Urovo e Datalogic. Sede em Valinhos-SP. Centro técnico próprio. Atendimento exclusivo para CNPJ desde 2009."
      />
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
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

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero da página */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-[#E6A800] text-xs font-body font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Nossa História
          </div>
          <h1
            className="font-headline font-black text-gray-900 leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            SCANREIS — ESPECIALISTAS EM AUTOMAÇÃO INDUSTRIAL
          </h1>
          <p className="font-roboto text-gray-500 text-base leading-relaxed max-w-2xl">
            A <strong className="text-gray-800">ScanReis</strong> é uma empresa
            especializada em equipamentos de automação para o mercado B2B, com
            atuação em todo o território nacional. Fundada com o propósito de
            simplificar e modernizar operações logísticas e industriais,
            oferecemos soluções completas de locação, venda e reparo técnico de
            coletores de dados, leitores de código de barras, impressoras de
            etiquetas e access points.
          </p>
          <p className="font-roboto text-gray-500 text-base leading-relaxed max-w-2xl mt-4">
            Ao longo dos anos, construímos parcerias sólidas com os maiores
            fabricantes globais do setor, tornando-nos um elo confiável entre a
            tecnologia de ponta e as necessidades reais das empresas
            brasileiras. Nossa equipe técnica qualificada garante agilidade no
            diagnóstico, precisão no atendimento e qualidade em cada serviço
            prestado.
          </p>
        </div>

        {/* Fachada da empresa */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl border bg-orange-50 border-orange-100 flex items-center justify-center flex-shrink-0">
              <Building2 className="w-4 h-4 text-[#E6A800]" strokeWidth={2} />
            </div>
            <h2 className="font-roboto font-black text-gray-800 text-base uppercase tracking-widest">
              Centro Técnico em Valinhos, SP
            </h2>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {fachadaImg ? (
            <img
              src={fachadaImg}
              alt="Fachada da ScanReis"
              className="w-full h-72 sm:h-96 object-cover rounded-2xl border border-gray-200 shadow-sm"
            />
          ) : (
            <div className="w-full h-64 sm:h-80 rounded-2xl border-2 border-dashed border-gray-300 bg-white flex flex-col items-center justify-center gap-3 text-gray-400">
              <Building2
                className="w-10 h-10 text-gray-300"
                strokeWidth={1.5}
              />
              <p className="font-body text-sm text-center px-4">
                Imagem da fachada
                <br />
                <span className="text-xs text-gray-300">
                  Adicione o arquivo em{" "}
                  <code className="bg-gray-100 px-1 rounded text-gray-400">
                    src/imgs/fachada.jpg
                  </code>{" "}
                  e descomente a importação
                </span>
              </p>
            </div>
          )}
        </div>

        {/* Pilares */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl border bg-orange-50 border-orange-100 flex items-center justify-center flex-shrink-0">
              <Target className="w-4 h-4 text-[#E6A800]" strokeWidth={2} />
            </div>
            <h2 className="font-roboto font-black text-gray-800 text-base uppercase tracking-widest">
              Missão, Compromisso e Estrutura
            </h2>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {pilares.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-white border border-gray-200 rounded-2xl p-6 card-lift"
                >
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${p.bg}`}
                  >
                    <Icon className={`w-5 h-5 ${p.color}`} strokeWidth={2} />
                  </div>
                  <h3 className="font-roboto font-black text-gray-900 text-base mb-2">
                    {p.title}
                  </h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">
                    {p.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dados Cadastrais */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl border bg-orange-50 border-orange-100 flex items-center justify-center flex-shrink-0">
              <Hash className="w-4 h-4 text-[#E6A800]" strokeWidth={2} />
            </div>
            <h2 className="font-roboto font-black text-gray-800 text-base uppercase tracking-widest">
              Informações Corporativas
            </h2>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl divide-y divide-gray-100 overflow-hidden">
            {dadosCadastrais.map((item) => {
              const Icon = item.icon;
              const inner = (
                <div className="flex items-start gap-4 px-6 py-4">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-[#E6A800]" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-roboto font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                      {item.label}
                    </div>
                    <div className="font-roboto text-sm text-gray-800 whitespace-pre-line">
                      {item.value}
                    </div>
                  </div>
                  {item.href && (
                    <ExternalLink className="w-3.5 h-3.5 text-gray-300 flex-shrink-0 mt-1" />
                  )}
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="block hover:bg-orange-50 transition-colors group"
                >
                  {inner}
                </a>
              ) : (
                <div key={item.label}>{inner}</div>
              );
            })}
          </div>
        </div>
      </main>

      <footer className="py-5 text-center mt-8">
        <p className="font-body text-xs text-gray-400">
          © {new Date().getFullYear()} Scanreis · CNPJ 33.337.613/0001-78
        </p>
      </footer>
    </div>
  );
}
