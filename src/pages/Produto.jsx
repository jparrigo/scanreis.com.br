import { useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  ArrowLeft,
  Check,
  PackageSearch,
} from 'lucide-react'
import logoImg from '@/imgs/logo-google-ads.png'
import { produtos } from '@/data/produtos'
import SEOHead from '@/components/SEOHead'

const WA_NUMBER = '551133793044'

export default function Produto() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const produto = produtos[slug]
  const [currentIdx, setCurrentIdx] = useState(0)

  useEffect(() => {
    setCurrentIdx(0)
    window.scrollTo({ top: 0 })
  }, [slug])

  const prev = useCallback(() => {
    if (!produto) return
    setCurrentIdx((i) => (i === 0 ? produto.fotos.length - 1 : i - 1))
  }, [produto])

  const next = useCallback(() => {
    if (!produto) return
    setCurrentIdx((i) => (i === produto.fotos.length - 1 ? 0 : i + 1))
  }, [produto])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [prev, next])

  if (!produto) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-gray-900 px-4 text-center">
        <PackageSearch className="w-16 h-16 text-gray-300 mb-5" strokeWidth={1.5} />
        <h1 className="font-headline font-black text-3xl mb-2">Produto não encontrado</h1>
        <p className="font-body text-gray-500 mb-8 max-w-xs">
          O produto <span className="text-gray-700">"{slug}"</span> não existe no nosso catálogo.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-[#FFC124] hover:bg-[#E6A800] text-gray-900 font-body font-semibold px-6 py-3 rounded-xl transition-colors duration-150"
        >
          Voltar ao site
        </button>
      </div>
    )
  }

  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(produto.whatsappMensagem)}`
  const hasMultiple = produto.fotos.length > 1

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEOHead
        title={`${produto.nome} | Scanreis`}
        description={produto.descricao}
        noIndex={false}
      />

      {/* Header */}
      <header className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <img src={logoImg} alt="Scanreis" className="h-32 w-auto" />
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm font-body font-medium text-gray-500 hover:text-[#FFC124] transition-colors duration-150"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao site
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">

        {/* Breadcrumb */}
        <p className="font-body text-xs text-gray-400 mb-8 uppercase tracking-widest">
          {produto.categoria} / {produto.nome}
        </p>

        {/* Product grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── Carousel ── */}
          <div className="space-y-3">

            {/* Main image */}
            <div className="relative aspect-square bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden flex items-center justify-center group">
              <img
                key={currentIdx}
                src={produto.fotos[currentIdx]}
                alt={`${produto.nome} — foto ${currentIdx + 1}`}
                className="w-full h-full object-contain p-8 animate-[fade-in_0.3s_ease-out]"
              />

              {hasMultiple && (
                <>
                  <button
                    onClick={prev}
                    aria-label="Foto anterior"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 hover:bg-[#FFC124] text-gray-700 hover:text-gray-900 rounded-full flex items-center justify-center transition-all duration-150 border border-gray-200 shadow-sm opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Próxima foto"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 hover:bg-[#FFC124] text-gray-700 hover:text-gray-900 rounded-full flex items-center justify-center transition-all duration-150 border border-gray-200 shadow-sm opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Counter */}
                  <span className="absolute bottom-3 right-4 font-body text-xs text-gray-400">
                    {currentIdx + 1}/{produto.fotos.length}
                  </span>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {hasMultiple && (
              <div className="flex gap-2.5 justify-center flex-wrap">
                {produto.fotos.map((foto, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIdx(i)}
                    aria-label={`Ver foto ${i + 1}`}
                    className={`w-16 h-16 rounded-xl border-2 overflow-hidden flex-shrink-0 transition-all duration-150 ${
                      i === currentIdx
                        ? 'border-[#FFC124] opacity-100'
                        : 'border-gray-200 opacity-50 hover:opacity-80'
                    }`}
                  >
                    <img
                      src={foto}
                      alt=""
                      className="w-full h-full object-contain p-1 bg-gray-50"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Dots */}
            {hasMultiple && (
              <div className="flex gap-1.5 justify-center pt-1">
                {produto.fotos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIdx(i)}
                    aria-label={`Foto ${i + 1}`}
                    className={`rounded-full transition-all duration-200 ${
                      i === currentIdx
                        ? 'w-5 h-2 bg-[#FFC124]'
                        : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* ── Product Info ── */}
          <div className="space-y-6 lg:pt-2">

            {/* Brand + category */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-block bg-[#FFC124]/10 border border-[#FFC124]/30 text-[#E6A800] text-xs font-body font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
                {produto.marca}
              </span>
              <span className="inline-block bg-gray-100 border border-gray-200 text-gray-500 text-xs font-body px-3 py-1 rounded-full">
                {produto.categoria}
              </span>
            </div>

            {/* Name */}
            <h1
              className="font-headline font-black text-gray-900 leading-none"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
            >
              {produto.nome}
            </h1>

            {/* Description */}
            <p className="font-body text-gray-500 text-base leading-relaxed">
              {produto.descricao}
            </p>

            {/* Highlights */}
            {produto.destaques?.length > 0 && (
              <ul className="space-y-2.5">
                {produto.destaques.map((d, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#FFC124]/15 border border-[#FFC124]/25 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#E6A800]" strokeWidth={2.5} />
                    </span>
                    <span className="font-body text-sm text-gray-600 leading-snug">{d}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Divider */}
            <div className="border-t border-gray-200" />

            {/* WhatsApp CTA */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#FFC124] hover:bg-[#E6A800] text-gray-900 font-body font-bold text-base rounded-2xl py-4 transition-colors duration-150 shadow-md shadow-[#FFC124]/20 active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={2} />
              Solicitar orçamento via WhatsApp
            </a>

            <p className="font-body text-xs text-gray-400 text-center -mt-2">
              Resposta em até 2 horas úteis · Seg a Sex, 08h–18h
            </p>
          </div>
        </div>

        {/* ── Technical Specs ── */}
        {produto.informacoesTecnicas &&
          Object.keys(produto.informacoesTecnicas).length > 0 && (
            <section className="mt-16 lg:mt-24">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="font-headline font-black text-2xl text-gray-900">
                  Informações Técnicas
                </h2>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              <div className="border border-gray-200 rounded-2xl overflow-hidden">
                {Object.entries(produto.informacoesTecnicas).map(([key, value], i) => (
                  <div
                    key={key}
                    className={`flex border-b border-gray-100 last:border-0 ${
                      i % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    <div className="w-2/5 sm:w-1/3 px-5 py-3.5 font-body text-sm text-gray-500 font-medium border-r border-gray-100 flex-shrink-0">
                      {key}
                    </div>
                    <div className="flex-1 px-5 py-3.5 font-body text-sm text-gray-800">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        {/* Bottom CTA repeat */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#FFC124] hover:bg-[#E6A800] text-gray-900 font-body font-bold text-sm rounded-2xl px-8 py-4 transition-colors duration-150 shadow-md shadow-[#FFC124]/20"
          >
            <MessageCircle className="w-5 h-5" strokeWidth={2} />
            Solicitar orçamento do {produto.nome}
          </a>
          <p className="font-body text-xs text-gray-400">
            Enviamos proposta em até 2 horas úteis
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16 py-6 text-center">
        <p className="font-body text-xs text-gray-400">
          © {new Date().getFullYear()} Scanreis · CNPJ 33.337.613/0001-78
        </p>
      </footer>
    </div>
  )
}
