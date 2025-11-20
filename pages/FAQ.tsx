import React from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    {
      question: "Qual o prazo de produção?",
      answer: "Nosso prazo de produção varia entre 2 a 7 dias úteis após a confirmação do pagamento e aprovação da arte. Para pedidos maiores, o prazo pode ser estendido."
    },
    {
      question: "Vocês fazem arte personalizada?",
      answer: "Sim! Podemos criar uma arte exclusiva para você ou adaptar modelos existentes com suas cores e nome. A arte é enviada para aprovação antes da produção."
    },
    {
      question: "Quais as formas de pagamento?",
      answer: "Aceitamos PIX com 5% de desconto, Cartão de Crédito (parcelamento disponível) e Boleto Bancário."
    },
    {
      question: "Enviam para todo o Brasil?",
      answer: "Sim, enviamos via Correios (PAC ou SEDEX) para todo o território nacional. O valor do frete é calculado de acordo com seu CEP."
    },
    {
      question: "Existe quantidade mínima para pedidos?",
      answer: "Para a maioria dos itens de papelaria pessoal (planners, agendas), não há mínimo. Para brindes corporativos e lembrancinhas, o mínimo geralmente é de 10 a 20 unidades."
    },
    {
      question: "Posso alterar o pedido depois de pago?",
      answer: "Se a produção ainda não tiver iniciado, é possível fazer alterações. Entre em contato imediatamente pelo WhatsApp."
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-slate-50">
      <div className="bg-white py-16 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-primary mb-4">Perguntas Frequentes</h1>
          <p className="text-gray-600">Tire suas dúvidas sobre nossos produtos e processos.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-800 flex items-center gap-3">
                  <HelpCircle size={20} className="text-primary" />
                  {faq.question}
                </span>
                {openIndex === index ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
              </button>
              
              <div className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-600 pl-8 leading-relaxed border-l-2 border-primary/20 ml-2">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};