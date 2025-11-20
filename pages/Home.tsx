import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Award, Truck, Star, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, COUPON_CODE, WHATSAPP_NUMBER } from '../constants';

export const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 3); // Pick first 3

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
            <img 
                src="https://picsum.photos/id/20/1920/1080" 
                alt="Mesa de trabalho organizada" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary-900/40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/50 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
               <Sparkles size={16} className="text-yellow-300" />
               <span className="text-sm font-medium tracking-wide">Novidades para 2025 disponíveis</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
              Transforme Momentos em <span className="text-primary-200 italic">Memórias</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-xl">
              Papelaria personalizada feita à mão. Cadernos, planners e presentes únicos que contam a sua história.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/produtos">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-white font-bold hover:bg-primary-800 border-2 border-white/20 hover:border-white transition-all shadow-xl shadow-black/30">
                  Ver Produtos Agora
                </Button>
              </Link>
              <Link to="/como-funciona">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white/10">
                  Como Funciona
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Palette, title: "Personalização Total", desc: "Cada detalhe é escolhido por você, do layout à capa." },
              { icon: Award, title: "Qualidade Premium", desc: "Papéis de alta gramatura e acabamentos impecáveis." },
              { icon: Truck, title: "Entrega Rápida", desc: "Produção ágil e envio seguro para todo o Brasil." }
            ].map((item, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-slate-50 hover:bg-primary-50 transition-colors duration-300 text-center">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white text-primary transition-all duration-300">
                  <item.icon size={32} />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Os Nossos <span className="text-primary">Queridinhos</span></h2>
              <p className="text-gray-600">Produtos que nossos clientes amam e recomendam.</p>
            </div>
            <Link to="/produtos" className="text-primary font-medium flex items-center gap-2 hover:gap-4 transition-all">
              Ver todo o catálogo <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-16">Do Pedido à Entrega</h2>
          <div className="relative">
             {/* Line */}
             <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />
             
             <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {[
                  { step: "01", title: "Escolha", desc: "Selecione seus produtos favoritos" },
                  { step: "02", title: "Personalize", desc: "Defina cores, nomes e detalhes" },
                  { step: "03", title: "Produção", desc: "Produzimos com carinho em até 7 dias" },
                  { step: "04", title: "Envio", desc: "Receba em casa com todo cuidado" },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center bg-white md:bg-transparent p-4 rounded-xl">
                    <div className="w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center text-lg mb-4 shadow-lg shadow-primary/30">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Promo CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-primary rounded-3xl p-8 md:p-16 text-center md:text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
                  Oferta Especial
                </div>
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
                  Primeira vez por aqui?
                </h2>
                <p className="text-primary-100 text-lg mb-6">
                  Use o cupom <span className="font-mono font-bold bg-white/20 px-2 py-1 rounded text-white">{COUPON_CODE}</span> e ganhe 15% de desconto na sua primeira compra de qualquer produto.
                </p>
              </div>
              <div className="shrink-0">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="shadow-xl"
                  onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Olá, gostaria de usar o cupom ${COUPON_CODE}`, '_blank')}
                >
                  Resgatar Cupom
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};