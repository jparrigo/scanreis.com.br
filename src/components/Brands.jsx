import { useRef, useEffect } from "react";
import logoUrovo from "@/imgs/fornecedores/urovo-54.png";
import logoZebra from "@/imgs/fornecedores/zebra-54.png";
import logoDatalogic from "@/imgs/fornecedores/datalogic-54.png";
import logoHoneywell from "@/imgs/fornecedores/honeywell-54.png";
import logoUnitech from "@/imgs/fornecedores/unitech.webp";
import logoCompex from "@/imgs/fornecedores/compex.png";

const brands = [
  { name: "Urovo", tagline: "Mobile Computing", logo: logoUrovo },
  { name: "Zebra", tagline: "Enterprise Technology", logo: logoZebra },
  { name: "Datalogic", tagline: "Automatic Data Capture", logo: logoDatalogic },
  { name: "Honeywell", tagline: "Sensing & Safety", logo: logoHoneywell },
  { name: "Unitech", tagline: "Industrial Mobility", logo: logoUnitech },
  { name: "Compex", tagline: "Wireless Networks", logo: logoCompex },
];

// 4 cópias: a animação translada -50%, então a primeira metade deve cobrir
// pelo menos a largura da viewport. Com ~190px por card × 24 itens ≈ 4560px → 50% ≈ 2280px.
const allBrands = [...brands, ...brands, ...brands, ...brands];

export default function Brands() {
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
      { threshold: 0.1 },
    );
    if (sectionRef.current) {
      sectionRef.current
        .querySelectorAll(".reveal")
        .forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="marcas"
      ref={sectionRef}
      className="bg-orange-50 py-16 lg:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <div className="reveal inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-[#E6A800] text-xs font-body font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
              Marcas Parceiras
            </div>
            <h2
              className="reveal font-headline font-black text-gray-900 leading-tight delay-100"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              TRABALHAMOS COM AS{" "}
              <span className="text-gradient">LÍDERES DO MERCADO</span>
            </h2>
          </div>
          <p className="reveal font-body text-gray-500 text-sm max-w-xs delay-200">
            Revenda autorizada das principais fabricantes globais de
            equipamentos de automação.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden py-3">
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #fff7ed, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(-90deg, #fff7ed, transparent)",
          }}
        />

        <div className="marquee-track">
          {allBrands.map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-4 group cursor-default"
              style={{ minWidth: "160px" }}
            >
              <div className="bg-white border border-orange-100 group-hover:border-[#FFC124] px-5 py-4 rounded-2xl shadow-sm transition-all duration-300 group-hover:shadow-md min-w-[150px] flex flex-col items-center gap-2">
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-8 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                ) : (
                  <span className="font-headline font-black text-lg tracking-widest text-gray-300 group-hover:text-[#FFC124] transition-colors duration-300 leading-none">
                    {brand.name.toUpperCase()}
                  </span>
                )}
                <span className="font-body text-[9px] uppercase tracking-widest text-gray-300 group-hover:text-gray-500 transition-colors text-center">
                  {brand.tagline}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { value: "6", label: "Marcas parceiras" },
            { value: "200+", label: "Modelos em estoque" },
            { value: "Autorizados", label: "Reparos certificados" },
            { value: "Nacional", label: "Atendimento no Brasil" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-orange-100 rounded-2xl px-5 py-4 text-center shadow-sm"
            >
              <div className="font-headline font-black text-2xl text-[#FFC124] leading-none">
                {item.value}
              </div>
              <div className="font-body text-xs text-gray-400 uppercase tracking-wide mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
