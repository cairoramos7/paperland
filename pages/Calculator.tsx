import React, { useState, useEffect } from 'react';
import { Calculator as CalcIcon, Check, RotateCcw } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { WHATSAPP_NUMBER } from '../constants';
import { PRODUCTS } from '../constants';

export const Calculator: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [extras, setExtras] = useState<string[]>([]);
  const [total, setTotal] = useState<number>(0);

  // Flatten products for the select dropdown
  const productOptions = PRODUCTS.map(p => ({ id: p.id, name: p.name, price: p.price }));

  const extraOptions = [
    { id: 'gift-wrap', name: 'Embalagem para Presente', price: 5.00 },
    { id: 'urgency', name: 'Taxa de Urgência (2 dias)', price: 15.00 },
    { id: 'custom-name', name: 'Nome na Capa (Foil)', price: 10.00 },
  ];

  useEffect(() => {
    const product = productOptions.find(p => p.name === selectedProduct);
    if (!product) {
      setTotal(0);
      return;
    }

    let calc = product.price * quantity;
    
    // Add fixed extras
    extras.forEach(extraId => {
      const extra = extraOptions.find(e => e.id === extraId);
      if (extra) {
        // Some extras might be per unit (gift wrap), others fixed (urgency). 
        // For simplicity in this demo, let's make Gift Wrap per unit, others flat.
        if (extraId === 'gift-wrap' || extraId === 'custom-name') {
            calc += extra.price * quantity;
        } else {
            calc += extra.price;
        }
      }
    });

    setTotal(calc);
  }, [selectedProduct, quantity, extras]);

  const toggleExtra = (id: string) => {
    setExtras(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleWhatsApp = () => {
    if (total === 0) return;
    const product = productOptions.find(p => p.name === selectedProduct);
    const extraNames = extras.map(id => extraOptions.find(e => e.id === id)?.name).join(', ');
    
    const text = `
*Orçamento Simulado - Paperland Ateliê*
-----------------------------
Produto: ${product?.name}
Quantidade: ${quantity}
Extras: ${extraNames || 'Nenhum'}
-----------------------------
*Total Estimado: R$ ${total.toFixed(2)}*
    `.trim();

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen pt-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-6 shadow-lg shadow-primary/30">
              <CalcIcon size={32} />
            </div>
            <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">Simulador de Orçamento</h1>
            <p className="text-gray-600">Tenha uma estimativa de valor para o seu pedido.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12 space-y-8">
              
              {/* Step 1: Product */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">1. Escolha o Produto</label>
                <select 
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                >
                  <option value="">Selecione...</option>
                  {productOptions.map(p => (
                    <option key={p.id} value={p.name}>{p.name} - R$ {p.price.toFixed(2)}</option>
                  ))}
                </select>
              </div>

              {/* Step 2: Quantity */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">2. Quantidade</label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    value={quantity} 
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="w-20 p-3 bg-gray-50 border border-gray-200 rounded-xl text-center font-bold text-lg">
                    {quantity}
                  </div>
                </div>
              </div>

              {/* Step 3: Extras */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-4">3. Adicionais</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {extraOptions.map(extra => (
                    <div 
                      key={extra.id}
                      onClick={() => toggleExtra(extra.id)}
                      className={`cursor-pointer p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
                        extras.includes(extra.id) 
                        ? 'border-primary bg-primary-50 text-primary' 
                        : 'border-gray-100 bg-white hover:border-gray-200'
                      }`}
                    >
                      <span className="font-medium">{extra.name}</span>
                      {extras.includes(extra.id) && <Check size={18} />}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Result Footer */}
            <div className="bg-gray-900 text-white p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Total Estimado</p>
                  <div className="text-4xl font-bold">R$ {total.toFixed(2)}</div>
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                  <Button 
                    variant="secondary" 
                    onClick={() => { setSelectedProduct(''); setQuantity(1); setExtras([]); }}
                    className="bg-gray-800 text-white border-gray-700 hover:bg-gray-700"
                  >
                    <RotateCcw size={18} />
                  </Button>
                  <Button 
                    className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white border-none"
                    disabled={total === 0}
                    onClick={handleWhatsApp}
                  >
                    Finalizar no WhatsApp
                  </Button>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-6 text-center md:text-left">
                *Este valor é uma estimativa. O preço final pode variar de acordo com a complexidade da arte e frete.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};