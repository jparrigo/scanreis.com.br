import { useEffect, useRef } from "react";
import { Package, Wrench, HandCoins, ArrowRight, Check, Monitor, ShoppingCart, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

const WA_LINK =
  "https://wa.me/551133793044?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento";

const services = [
  {
    icon: HandCoins,
    title: "Locação de Equipamentos",
    subtitle: "Equipamentos sob demanda",
    description:
      "Aluguel flexível com manutenção inclusa e suporte dedicado. Ideal para projetos sazonais ou empresas que preferem capex zero.",
    features: [
      "Contratos mensais ou anuais",
      "Manutenção preventiva inclusa",
      "Substituição em caso de falha",
      "Gerenciamento de frota",
    ],
    cta: "Solicitar Locação",
  },
  {
    icon: Package,
    title: "Venda de Equipamentos",
    subtitle: "Equipamentos novos",
    description:
      "Fornecimento de equipamentos originais das melhores marcas. Garantia de fábrica, suporte pós-venda e entrega para todo o Brasil.",
    features: [
      "Equipamentos novos e certificados",
      "Garantia de fábrica",
      "Suporte técnico pós-venda",
      "Entrega para todo o Brasil",
    ],
    cta: "Ver Equipamentos",
    featured: true,
  },
  {
    icon: Wrench,
    title: "Reparo Técnico Autorizado",
    subtitle: "Manutenção autorizada",
    description:
      "Centro técnico especializado para conserto de leitores, coletores e impressoras. Diagnóstico rápido com peças originais.",
    features: [
      "Diagnóstico em até 3 dias",
      "Peças originais certificadas",
      "Orçamento sem compromisso",
      "Garantia no serviço realizado",
    ],
    cta: "Solicitar Reparo",
  },
];

const softwares = [
  {
    title: "Inventário para Estoque",
    tag: "Gestão de Estoque",
    description:
      "Sistema completo para controle e rastreamento de estoque em tempo real, com leitura de código de barras e relatórios gerenciais.",
  },
  {
    title: "Glink",
    tag: "Integração",
    description:
      "Solução de integração para coletores de dados, conectando dispositivos móveis industriais ao seu ERP com agilidade.",
  },
  {
    title: "Wavelink",
    tag: "Conectividade",
    description:
      "Plataforma de gerenciamento de sessões e conectividade wireless para ambientes corporativos e industriais exigentes.",
  },
  {
    title: "Urmobo",
    tag: "MDM",
    description:
      "Gerenciamento e monitoramento centralizado de dispositivos móveis empresariais, com controle de apps, localização e segurança.",
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    if (sectionRef.current) {
      sectionRef.current
        .querySelectorAll(".reveal, .reveal-scale")
        .forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="bg-gray-50 py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="reveal inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-[#E6A800] text-xs font-body font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Nossos Serviços
          </div>
          <h2
            className="reveal font-headline font-black text-gray-900 leading-tight delay-100"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            SERVIÇOS DE <span className="text-gradient">LOCAÇÃO, VENDA E REPARO</span>
          </h2>
          <p className="reveal font-body text-gray-500 text-base lg:text-lg max-w-xl mx-auto mt-4 delay-200">
            Três modalidades de serviço para atender diferentes realidades
            empresariais com eficiência e custo-benefício.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className={`reveal-scale card-lift flex flex-col rounded-2xl border p-8 ${
                  service.featured
                    ? "bg-[#FFC124] border-[#E6A800] text-white"
                    : "bg-white border-gray-200"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {service.featured && (
                  <div className="mb-4">
                    <span className="bg-white/20 border border-white/30 text-white text-xs font-headline font-black px-3 py-1 rounded-full uppercase tracking-wider">
                      Mais Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    service.featured
                      ? "bg-white/20"
                      : "bg-orange-50 border border-orange-100"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${service.featured ? "text-white" : "text-[#FFC124]"}`}
                    strokeWidth={2}
                  />
                </div>

                <div
                  className={`text-xs font-body font-semibold uppercase tracking-wider mb-1 ${service.featured ? "text-white/70" : "text-gray-400"}`}
                >
                  {service.subtitle}
                </div>
                <h3
                  className={`font-headline font-black text-3xl mb-4 ${service.featured ? "text-white" : "text-gray-900"}`}
                >
                  {service.title}
                </h3>

                <div
                  className={`h-px mb-5 ${service.featured ? "bg-white/20" : "bg-gray-100"}`}
                />

                <p
                  className={`font-body text-sm leading-relaxed mb-6 flex-1 ${service.featured ? "text-white/85" : "text-gray-500"}`}
                >
                  {service.description}
                </p>

                <ul className="space-y-2.5 mb-8">
                  {service.features.map((feat, j) => (
                    <li
                      key={j}
                      className={`flex items-center gap-2.5 text-sm font-body ${service.featured ? "text-white" : "text-gray-700"}`}
                    >
                      <Check
                        className={`w-4 h-4 flex-shrink-0 ${service.featured ? "text-white" : "text-[#FFC124]"}`}
                        strokeWidth={2.5}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={service.featured ? "secondary" : "default"}
                  size="default"
                  className={`w-full gap-2 ${service.featured ? "bg-white text-[#FFC124] hover:bg-gray-50" : ""}`}
                >
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                    {service.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="section-divider my-16 reveal" />

        {/* Software Section */}
        <div className="mb-10 text-center">
          <div className="reveal inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-[#E6A800] text-xs font-body font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            <Monitor className="w-3.5 h-3.5" />
            Softwares
          </div>
          <h2
            className="reveal font-headline font-black text-gray-900 leading-tight delay-100"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            LICENÇAS DE <span className="text-gradient">SOFTWARE</span>
          </h2>
          <p className="reveal font-body text-gray-500 text-base max-w-xl mx-auto mt-4 delay-200">
            Venda ou locação mensal de licenças. Escolha o modelo que melhor se encaixa na sua operação.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {softwares.map((sw, i) => (
            <div
              key={i}
              className="reveal-scale card-lift flex flex-col bg-white border border-gray-200 rounded-2xl p-6"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-4">
                <Monitor className="w-5 h-5 text-[#FFC124]" strokeWidth={2} />
              </div>

              <span className="text-xs font-body font-semibold text-gray-400 uppercase tracking-wider mb-1">
                {sw.tag}
              </span>
              <h3 className="font-headline font-black text-gray-900 text-lg leading-snug mb-3">
                {sw.title}
              </h3>

              <div className="h-px bg-gray-100 mb-3" />

              <p className="font-body text-sm text-gray-500 leading-relaxed flex-1 mb-5">
                {sw.description}
              </p>

              <div className="flex flex-col gap-2">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#FFC124] hover:bg-[#E6A800] text-white text-xs font-body font-semibold px-4 py-2.5 transition-colors duration-200"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  Comprar Licença
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 hover:border-[#FFC124] text-gray-600 hover:text-[#E6A800] text-xs font-body font-semibold px-4 py-2.5 transition-colors duration-200"
                >
                  <CalendarDays className="w-3.5 h-3.5" />
                  Alugar por Mês
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
