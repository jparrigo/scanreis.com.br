import { useParams, useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, MessageCircle, PackageSearch } from 'lucide-react'
import logoImg from '@/imgs/logo-google-ads.png'
import { CATEGORIAS, getProdutosPorMarca } from '@/data/produtos'
import SEOHead from '@/components/SEOHead'

const WA_LINK = 'https://wa.me/551133793044?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento'

export default function Categoria() {
  const { categoriaSlug } = useParams()
  const navigate = useNavigate()

  const categoriaLabel = CATEGORIAS[categoriaSlug]
  const produtosPorMarca = categoriaLabel ? getProdutosPorMarca(categoriaSlug) : null
  const marcas = produtosPorMarca ? Object.keys(produtosPorMarca).sort() : []

  if (!categoriaLabel) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-gray-900 px-4 text-center">
        <PackageSearch className="w-16 h-16 text-gray-300 mb-5" strokeWidth={1.5} />
        <h1 className="font-headline font-black text-3xl mb-2">Categoria não encontrada</h1>
        <p className="font-body text-gray-500 mb-8">
          A categoria <span className="text-gray-700">"{categoriaSlug}"</span> não existe.
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

  const totalProdutos = Object.values(produtosPorMarca).reduce((acc, arr) => acc + arr.length, 0)

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEOHead
        title={`${categoriaLabel} | Scanreis`}
        description={`Conheça nossa linha de ${categoriaLabel} para logística e indústria. Locação e venda com suporte técnico especializado.`}
        noIndex={false}
      />

      {/* Header */}
      <header className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" aria-label="Scanreis">
            <img src={logoImg} alt="Scanreis" className="h-32 w-auto" />
          </a>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm font-body font-medium text-gray-500 hover:text-[#FFC124] transition-colors duration-150"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao site
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">

        {/* Breadcrumb */}
        <p className="font-body text-xs text-gray-400 mb-6 uppercase tracking-widest">
          Produtos / {categoriaLabel}
        </p>

        {/* Page title */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1
              className="font-headline font-black text-gray-900 leading-none mb-2"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
            >
              {categoriaLabel.toUpperCase()}
            </h1>
            <p className="font-body text-sm text-gray-400">
              {totalProdutos} {totalProdutos === 1 ? 'produto' : 'produtos'} · {marcas.length} {marcas.length === 1 ? 'marca' : 'marcas'}
            </p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FFC124] hover:bg-[#E6A800] text-gray-900 font-body font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors duration-150 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            Solicitar orçamento
          </a>
        </div>

        {/* Brand sections */}
        <div className="space-y-12">
          {marcas.map((marca) => (
            <section key={marca}>
              {/* Brand header */}
              <div className="flex items-center gap-4 mb-5">
                <h2 className="font-headline font-black text-xl text-gray-900 uppercase tracking-wide">
                  {marca}
                </h2>
                <div className="flex-1 h-px bg-gray-100" />
                <span className="font-body text-xs text-gray-400">
                  {produtosPorMarca[marca].length} {produtosPorMarca[marca].length === 1 ? 'produto' : 'produtos'}
                </span>
              </div>

              {/* Products grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {produtosPorMarca[marca].map((produto) => (
                  <Link
                    key={produto.slug}
                    to={`/produto/${produto.slug}`}
                    className="group bg-white border border-gray-200 hover:border-[#FFC124] rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                  >
                    {/* Product image */}
                    <div className="aspect-square bg-gray-50 flex items-center justify-center p-4 overflow-hidden">
                      {produto.fotos?.[0] ? (
                        <img
                          src={produto.fotos[0]}
                          alt={produto.nome}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <PackageSearch className="w-12 h-12 text-gray-300" strokeWidth={1.5} />
                      )}
                    </div>

                    {/* Product info */}
                    <div className="px-4 pb-4 pt-3">
                      <p className="font-body font-semibold text-sm text-gray-900 leading-snug group-hover:text-[#E6A800] transition-colors duration-150 line-clamp-2">
                        {produto.nome}
                      </p>
                      <p className="font-body text-xs text-[#E6A800] mt-1.5 font-medium">
                        Ver detalhes →
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 border border-gray-200 rounded-2xl p-8 text-center bg-gray-50">
          <p className="font-headline font-black text-xl text-gray-900 mb-1">
            Não encontrou o que procura?
          </p>
          <p className="font-body text-sm text-gray-500 mb-5">
            Fale com nossa equipe — trabalhamos com outros modelos por encomenda.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FFC124] hover:bg-[#E6A800] text-gray-900 font-body font-semibold px-6 py-3 rounded-xl transition-colors duration-150"
          >
            <MessageCircle className="w-4 h-4" />
            Falar com especialista
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-12 py-6 text-center">
        <p className="font-body text-xs text-gray-400">
          © {new Date().getFullYear()} Scanreis · CNPJ 33.337.613/0001-78
        </p>
      </footer>
    </div>
  )
}
