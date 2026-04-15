import { useEffect, useRef, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// Leitores
import leitor1 from "@/imgs/leitores/Gryphon4200Series.png";
import leitor2 from "@/imgs/leitores/QS2200Series.png";
import leitor3 from "@/imgs/leitores/Heron HD3430.png";
import leitor4 from "@/imgs/leitores/RIDA.png";

// Coletores
import coletor1 from "@/imgs/coletores/mc22.jpg";
import coletor2 from "@/imgs/coletores/ct48.jpg";
import coletor3 from "@/imgs/coletores/dt50.png";
import coletor4 from "@/imgs/coletores/rt40-hand.png";

// Impressoras
import imp1 from "@/imgs/impressoras/zd400-series-right-3x2-3600.jpg";
import imp2 from "@/imgs/impressoras/zt510-front-left-3x2-3600.jpg";
import imp3 from "@/imgs/impressoras/pd42.webp";
import imp4 from "@/imgs/impressoras/tsc-ml.png";

// Access Points
import ap1 from "@/imgs/access-point/AP5010-1024x842.png";
import ap2 from "@/imgs/access-point/U6+.png";
import ap3 from "@/imgs/access-point/ap460c_wr_1.png";
import ap4 from "@/imgs/access-point/ProApACGNInside.png";

const WA_LINK =
  "https://wa.me/551133793044?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento";

const products = [
  {
    title: "Leitores de Código de Barras",
    description:
      "Leitores 1D e 2D para ambientes industriais e logísticos. Modelos fixos, portáteis e resistentes (IP65+).",
    tags: ["1D / 2D", "Industrial IP65", "USB / BT"],
    brands: ["Zebra", "Honeywell", "Datalogic"],
    images: [leitor1, leitor2, leitor3, leitor4],
    waText:
      "Olá%2C%20tenho%20interesse%20em%20Leitores%20de%20Código%20de%20Barras",
  },
  {
    title: "Coletores de Dados",
    description:
      "Terminais móveis robustos com Android para coleta em campo. Scanner integrado e bateria de longa duração.",
    tags: ["Android", "RFID Opcional", "Wi-Fi / 4G"],
    brands: ["Urovo", "Unitech", "Zebra", "Honeywell", "Compex"],
    images: [coletor1, coletor2, coletor3, coletor4],
    waText: "Olá%2C%20tenho%20interesse%20em%20Coletores%20de%20Dados",
  },
  {
    title: "Impressoras de Etiquetas",
    description:
      "Impressoras térmicas diretas e transferência térmica. Desktop, industriais e portáteis para alta qualidade.",
    tags: ["Térmica direta", "Transferência térmica", "Industrial"],
    brands: ["Zebra", "Honeywell", "TSC"],
    images: [imp1, imp2, imp3, imp4],
    waText: "Olá%2C%20tenho%20interesse%20em%20Impressoras%20de%20Etiquetas",
  },
  {
    title: "Access Points",
    description:
      "Infraestrutura Wi-Fi para armazéns e fábricas. Alta densidade de conexões e cobertura ampla.",
    tags: ["Wi-Fi 6 / 5 GHz", "PoE", "Alta densidade"],
    brands: ["Ubiquiti", "Unitech"],
    images: [ap1, ap2, ap3, ap4],
    waText: "Olá%2C%20tenho%20interesse%20em%20Access%20Points",
  },
];

function ProductCard({ product, index }) {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div
      className="reveal-scale card-lift group bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image area */}
      <div className="relative bg-white h-56 overflow-hidden">
        <img
          src={product.images[activeImg]}
          alt={`${product.title} — ${product.brands[activeImg] || product.brands[0]} | Scanreis`}
          className="w-full h-full object-contain p-6 transition-all duration-500"
        />
        {/* Orange top bar on hover */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#FFC124] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-none" />

        {/* Thumbnails */}
        <div className="absolute bottom-2.5 left-3 flex gap-1.5">
          {product.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={`w-8 h-8 rounded-lg border overflow-hidden transition-all duration-200 ${
                activeImg === i
                  ? "border-[#FFC124] ring-1 ring-[#FFC124]/30 opacity-100"
                  : "border-gray-200 opacity-60 hover:opacity-100 hover:border-orange-300"
              }`}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-contain bg-white p-0.5"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Brands */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {product.brands.map((b, j) => (
            <span
              key={j}
              className="text-[10px] font-body font-semibold uppercase tracking-wider text-gray-400 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded-full"
            >
              {b}
            </span>
          ))}
        </div>

        <h3 className="font-headline font-black text-lg text-gray-900 mb-2 leading-snug">
          {product.title}
        </h3>

        <p className="font-body text-gray-500 text-sm leading-relaxed mb-4 flex-1">
          {product.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.tags.map((tag, j) => (
            <span
              key={j}
              className="text-xs font-body text-[#E6A800] bg-orange-50 border border-orange-100 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <Button asChild variant="default" size="sm" className="w-full gap-2">
          <a
            href={`https://wa.me/551133793044?text=${product.waText}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Solicitar Cotação
            <ArrowRight className="w-3.5 h-3.5 ml-auto" />
          </a>
        </Button>
      </div>
    </div>
  );
}

export default function Products() {
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
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    if (sectionRef.current) {
      sectionRef.current
        .querySelectorAll(".reveal, .reveal-scale")
        .forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="produtos" ref={sectionRef} className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="reveal inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-[#E6A800] text-xs font-body font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Linha de Produtos
          </div>
          <h2
            className="reveal font-headline font-black text-gray-900 leading-tight delay-100"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            LEITORES, COLETORES,{" "}
            <span className="text-gradient">IMPRESSORAS E ACCESS POINTS</span>
          </h2>
          <p className="reveal font-body text-gray-500 text-sm lg:text-base max-w-md mx-auto mt-3 delay-200">
            Portfólio das principais marcas globais. Clique nas miniaturas para
            ver os modelos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <ProductCard key={i} product={product} index={i} />
          ))}
        </div>

        <div className="reveal mt-10 flex justify-center">
          <Button asChild size="lg" className="gap-2">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              Ver Catálogo Completo via WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
