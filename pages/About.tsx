import React from 'react';
import { Heart, Lightbulb, Users } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      
      {/* Hero */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 animate-fade-in-up">
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Conheça Nossa <span className="text-primary">História</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A Paperland Ateliê nasceu em 2024 do sonho de trazer mais cor e organização para o dia a dia das pessoas. O que começou como um pequeno hobby de encadernação manual na sala de casa, rapidamente se transformou em uma paixão por criar produtos que contam histórias.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Acreditamos que a papelaria tem o poder de materializar sonhos, seja através de um planner onde você escreve suas metas, ou de um álbum onde você guarda suas melhores lembranças.
              </p>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://picsum.photos/id/103/800/600" 
                alt="Fundadora trabalhando" 
                className="relative rounded-3xl shadow-xl w-full object-cover h-[400px]" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
             <h2 className="font-serif text-3xl font-bold text-gray-900">Nossos Valores</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart size={32} />
              </div>
              <h3 className="font-bold text-xl mb-4">Feito com Amor</h3>
              <p className="text-gray-600">Cada produto é produzido artesanalmente, com atenção a cada detalhe e acabamento.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-yellow-50 text-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb size={32} />
              </div>
              <h3 className="font-bold text-xl mb-4">Criatividade</h3>
              <p className="text-gray-600">Buscamos sempre inovar em estampas e formatos para trazer exclusividade aos seus itens.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={32} />
              </div>
              <h3 className="font-bold text-xl mb-4">Foco no Cliente</h3>
              <p className="text-gray-600">Seu sorriso ao abrir a nossa caixinha é o que nos move todos os dias.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-16">O que dizem por aí</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="bg-primary-800 p-8 rounded-2xl relative">
                <div className="text-primary-300 text-6xl font-serif absolute top-4 left-4 opacity-30">"</div>
                <p className="relative z-10 text-lg mb-6 leading-relaxed italic">{t.text}</p>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-primary-300">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};