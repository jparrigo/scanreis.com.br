import { useEffect, useRef, useState } from "react";
import {
  MessageCircle,
  ChevronDown,
  ArrowRight,
  Building2,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import img1 from "@/imgs/coletores/tc15.webp";
import img2 from "@/imgs/coletores/DT50X.png";
import img3 from "@/imgs/coletores/rt40.png";
import img4 from "@/imgs/coletores/ct48.webp";

const heroImages = [
  { src: img1, alt: "Zebra TC15" },
  { src: img2, alt: "Urovo DT50X" },
  { src: img3, alt: "Urovo RT-40" },
  { src: img4, alt: "Honeywell CT48" },
];

const WA_LINK =
  "https://wa.me/551133793044?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento";

export default function Hero() {
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const badgesRef = useRef(null);
  const imgRef = useRef(null);
  const [activeImg, setActiveImg] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActiveImg((prev) => (prev + 1) % heroImages.length);
        setFading(false);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const items = [
      { ref: badgesRef, delay: 80 },
      { ref: headlineRef, delay: 200 },
      { ref: subRef, delay: 380 },
      { ref: ctaRef, delay: 520 },
      { ref: imgRef, delay: 300 },
    ];
    items.forEach(({ ref, delay }) => {
      if (ref.current) {
        setTimeout(() => ref.current?.classList.add("visible"), delay);
      }
    });
  }, []);

  const scrollToServices = () => {
    const el = document.getElementById("servicos");
    if (el)
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 72,
        behavior: "smooth",
      });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white hero-grid"
    >
      {/* Soft orange blob top-right */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 65%)",
          transform: "translate(20%, -20%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            {/* Badges */}
            <div
              ref={badgesRef}
              className="reveal flex flex-wrap items-center gap-3 mb-6"
            >
              <span className="inline-flex items-center gap-1.5 bg-orange-50 border border-orange-200 text-[#E6A800] text-xs font-body font-semibold px-3 py-1.5 rounded-full uppercase tracking-widest">
                <Building2 className="w-3 h-3" />
                Exclusivo B2B — Venda para CNPJ
              </span>
              <span className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 text-gray-600 text-xs font-body font-semibold px-3 py-1.5 rounded-full uppercase tracking-widest">
                <ShieldCheck className="w-3 h-3 text-[#FFC124]" />
                Locação · Venda · Reparo
              </span>
            </div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="reveal font-headline font-black leading-[1.0] tracking-tight mb-4"
              style={{ fontSize: "clamp(2.6rem, 6vw, 5.5rem)" }}
            >
              <span className="block text-gray-900">REDUZA CUSTOS,</span>
              <span className="block text-gradient">AUMENTE</span>
              <span className="block text-gray-900">EFICIÊNCIA</span>
            </h1>

            <span className="accent-line mb-6" />

            {/* Subtext */}
            <p
              ref={subRef}
              className="reveal font-body text-gray-500 text-lg leading-relaxed max-w-lg mb-8"
            >
              Equipamentos de automação para operações logísticas e industriais.
              Leitores, Coletores, Impressoras e Access Points das melhores
              marcas do mundo.
            </p>

            {/* CTAs */}
            <div
              ref={ctaRef}
              className="reveal flex flex-wrap gap-4 items-center"
            >
              <Button asChild size="lg" className="btn-pulse gap-2 text-base">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Solicitar Orçamento
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 text-base"
                onClick={scrollToServices}
              >
                Ver Serviços
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Stats row */}
            <div className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-3 gap-4 max-w-md">
              {[
                { value: "15+", label: "Anos de mercado" },
                { value: "800+", label: "Empresas atendidas" },
                { value: "98%", label: "Satisfação" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="font-headline font-black text-3xl text-[#FFC124] leading-none">
                    {stat.value}
                  </div>
                  <div className="font-body text-xs text-gray-400 mt-1 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product image */}
          <div
            ref={imgRef}
            className="reveal hidden lg:flex justify-center items-center relative"
          >
            {/* Orange circle bg */}
            <div className="absolute w-[420px] h-[420px] rounded-full bg-orange-50 border border-orange-100" />
            {/* Floating card badges */}
            <div className="absolute top-8 right-4 bg-white rounded-xl shadow-lg px-4 py-2.5 border border-gray-100 z-10">
              <div className="text-xs text-gray-400 font-body uppercase tracking-wide">
                Diversas Marcas
              </div>
              <div className="font-headline font-black text-gray-900 text-sm">
                Disponíveis
              </div>
            </div>
            <div className="absolute bottom-10 left-4 bg-white rounded-xl shadow-lg px-4 py-2.5 border border-gray-100 z-10">
              <div className="text-xs text-[#FFC124] font-body font-semibold uppercase tracking-wide">
                Entrega Nacional
              </div>
              <div className="font-body text-gray-600 text-sm">
                Todo o Brasil · NF-e
              </div>
            </div>
            {/* Main product image */}
            <img
              src={heroImages[activeImg].src}
              alt={heroImages[activeImg].alt}
              className="relative z-10 w-72 h-72 object-contain drop-shadow-2xl"
              style={{
                opacity: fading ? 0 : 1,
                transition: "opacity 0.4s ease",
              }}
            />
            {/* Dot indicators */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setFading(true);
                    setTimeout(() => {
                      setActiveImg(i);
                      setFading(false);
                    }, 400);
                  }}
                  className={`rounded-full transition-all duration-300 ${
                    activeImg === i
                      ? "w-5 h-2 bg-[#FFC124]"
                      : "w-2 h-2 bg-orange-200 hover:bg-orange-300"
                  }`}
                  aria-label={`Ver ${heroImages[i].alt}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400 hover:text-[#FFC124] transition-colors group"
        aria-label="Rolar para baixo"
      >
        <span className="text-xs font-body uppercase tracking-widest">
          Ver mais
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}
