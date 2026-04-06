import { MessageCircle, Mail, MapPin, Clock, Phone } from "lucide-react";
import logoImg from "@/imgs/logo-google-ads.png";

const WA_LINK =
  "https://wa.me/551133793044?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento";

const footerLinks = {
  Serviços: [
    { label: "Locação de Equipamentos", href: "#servicos" },
    { label: "Venda de Equipamentos", href: "#servicos" },
    { label: "Reparo Técnico", href: "#servicos" },
  ],
  Produtos: [
    { label: "Leitores de Código de Barras", href: "#produtos" },
    { label: "Coletores de Dados", href: "#produtos" },
    { label: "Impressoras de Etiquetas", href: "#produtos" },
    { label: "Access Points", href: "#produtos" },
  ],
  Marcas: [
    { label: "Zebra", href: "#marcas" },
    { label: "Honeywell", href: "#marcas" },
    { label: "Urovo", href: "#marcas" },
    { label: "Datalogic", href: "#marcas" },
    { label: "Unitech", href: "#marcas" },
    { label: "Compex", href: "#marcas" },
  ],
};

export default function Footer() {
  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el)
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 72,
        behavior: "smooth",
      });
  };

  return (
    <footer id="contato" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <img
              src={logoImg}
              alt="Scanreis"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="font-body text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Especialistas em equipamentos de automação para empresas. Locação,
              venda e reparo de leitores, coletores, impressoras e access
              points.
            </p>

            <div className="space-y-3 mb-6">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-[#FFC124] transition-colors group"
              >
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFC124]/10 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-gray-600 font-body">
                    WhatsApp
                  </div>
                  <div className="text-sm font-body font-medium">
                    (11) 3379-3044
                  </div>
                </div>
              </a>

              <a
                href="mailto:contato@scanreis.com.br"
                className="flex items-center gap-3 text-gray-400 hover:text-[#FFC124] transition-colors group"
              >
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFC124]/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-gray-600 font-body">
                    E-mail
                  </div>
                  <div className="text-sm font-body font-medium">
                    contato@scanreis.com.br
                  </div>
                </div>
              </a>

              <a
                href="https://www.google.com/maps?um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=KQ8G_lgAzciUMf4kroqZTUHX&daddr=R.+Ant%C3%B4nio+Cremasco,+397+-+sala+2+-+Res.+Santa+Maria,+Valinhos+-+SP,+13274-465"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-[#FFC124] transition-colors group"
              >
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFC124]/10 transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-gray-600 font-body">
                    Sede
                  </div>
                  <div className="text-sm font-body font-medium">
                    R. Antônio Cremasco, 397 — sala 2
                  </div>
                  <div className="text-xs font-body text-gray-500">
                    Valinhos — SP, 13274-465
                  </div>
                </div>
              </a>

              <a
                href="tel:+551133793044"
                className="flex items-center gap-3 text-gray-400 hover:text-[#FFC124] transition-colors group"
              >
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFC124]/10 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-gray-600 font-body">
                    Telefone
                  </div>
                  <div className="text-sm font-body font-medium">
                    (19) 3299-3200
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-gray-600 font-body">
                    Horário
                  </div>
                  <div className="text-sm font-body font-medium">
                    Seg–Sex · 08h às 18h
                  </div>
                </div>
              </div>
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FFC124] hover:bg-[#E6A800] text-white font-headline font-bold uppercase tracking-wider text-sm px-5 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#FFC124]/25"
            >
              <MessageCircle className="w-4 h-4" />
              Chamar no WhatsApp
            </a>
          </div>

          {/* Links */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-headline font-black text-sm uppercase tracking-widest text-white mb-4">
                  {category}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link, i) => (
                    <li key={i}>
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="font-body text-sm text-gray-500 hover:text-[#FFC124] transition-colors text-left"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-body text-xs text-gray-600 text-center sm:text-left">
              © {new Date().getFullYear()} Scanreis. Todos os direitos
              reservados.
              <span className="text-gray-700">
                {" "}
                · Atendimento exclusivo para CNPJ.
              </span>
            </p>
            <div className="flex items-center gap-3">
              <span className="font-body text-xs text-gray-600 uppercase tracking-wider">
                CNPJ 33.337.613/0001-78
              </span>
              <div className="w-px h-4 bg-gray-700" />
              <span className="font-body text-xs text-gray-600">
                Valinhos, SP
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
