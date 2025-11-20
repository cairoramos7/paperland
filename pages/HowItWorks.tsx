import React from 'react';
import { MessageCircle, FileText, CheckCircle, Package, Truck } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    { icon: MessageCircle, title: "Contato", desc: "Você escolhe o produto e nos chama no WhatsApp." },
    { icon: FileText, title: "Orçamento", desc: "Definimos os detalhes da personalização e valores." },
    { icon: CheckCircle, title: "Aprovação", desc: "Após o pagamento, criamos a arte para sua aprovação." },
    { icon: Package, title: "Produção", desc: "Seu pedido entra em produção (2 a 7 dias úteis)." },
    { icon: Truck, title: "Entrega", desc: "Enviamos pelos Correios e você recebe o rastreio." },
  ];

  return (
    <div className="min-h-screen pt-20">
      
      {/* Header */}
      <div className="bg-primary-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-primary mb-4">Como Funciona</h1>
          <p className="text-gray-600">Entenda nosso processo de criação e envio.</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 mb-12 last:mb-0 relative group">
              {index !== steps.length - 1 && (
                <div className="absolute left-[26px] top-14 bottom-[-48px] w-0.5 bg-gray-200 group-hover:bg-primary/30 transition-colors" />
              )}
              
              <div className="shrink-0 w-14 h-14 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center shadow-lg relative z-10">
                <step.icon size={24} />
              </div>
              
              <div className="pt-2">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white py-20 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-50 p-6 rounded-xl">
              <h4 className="font-bold text-lg mb-2 text-primary">Qual o prazo de produção?</h4>
              <p className="text-gray-600">Nosso prazo padrão é de 2 a 7 dias úteis após a aprovação da arte. Para pedidos grandes, o prazo pode variar.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h4 className="font-bold text-lg mb-2 text-primary">Quais as formas de pagamento?</h4>
              <p className="text-gray-600">Aceitamos PIX, Cartão de Crédito (parcelamento via link) e Boleto.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h4 className="font-bold text-lg mb-2 text-primary">Vocês enviam para todo Brasil?</h4>
              <p className="text-gray-600">Sim! Enviamos via Correios (PAC ou SEDEX). O frete é calculado com base no seu CEP.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h4 className="font-bold text-lg mb-2 text-primary">Posso personalizar com minha logo?</h4>
              <p className="text-gray-600">Com certeza! Especialmente para os brindes corporativos e papelaria de escritório.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};