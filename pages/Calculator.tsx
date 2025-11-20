import React, { useState, useEffect } from 'react';
import { Calculator as CalcIcon, Check, RotateCcw, Plus, Minus, Trash2, ShoppingCart } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { WHATSAPP_NUMBER } from '../constants';
import { PRODUCTS } from '../constants';

interface CartItem {
  id: string;
  productName: string;
  productPrice: number;
  quantity: number;
  extras: string[]; // Array of IDs
  notes: string;
  subtotal: number;
}

export const Calculator: React.FC = () => {
  // Cart State
  const [items, setItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);

  // Form State
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  
  // Quantity State (string to allow empty while typing)
  const [quantityStr, setQuantityStr] = useState<string>('1');
  
  const [currentExtras, setCurrentExtras] = useState<string[]>([]);
  const [notes, setNotes] = useState<string>('');

  // Options
  const productOptions = PRODUCTS.map(p => ({ id: p.id, name: p.name, price: p.price }));
  
  const extraOptions = [
    { id: 'gift-wrap', name: 'Embalagem para Presente', price: 5.00 },
    { id: 'urgency', name: 'Taxa de Urgência (2 dias)', price: 15.00 },
    { id: 'custom-name', name: 'Nome na Capa (Foil)', price: 10.00 },
  ];

  // Recalculate total whenever items change
  useEffect(() => {
    const newTotal = items.reduce((acc, item) => acc + item.subtotal, 0);
    setTotal(newTotal);
  }, [items]);

  // Helper to update quantity string and respect limits
  const updateQuantity = (val: number) => {
    if (val < 1) val = 1;
    if (val > 250) val = 250;
    setQuantityStr(val.toString());
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    // Allow empty string for better typing UX
    if (val === '') {
      setQuantityStr('');
      return;
    }
    const num = parseInt(val);
    if (!isNaN(num)) {
      // Don't clamp while typing, only on blur or buttons
      setQuantityStr(val); 
    }
  };

  const handleQuantityBlur = () => {
    let num = parseInt(quantityStr);
    if (isNaN(num) || num < 1) num = 1;
    if (num > 250) num = 250;
    setQuantityStr(num.toString());
  };

  const toggleExtra = (id: string) => {
    setCurrentExtras(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const addItem = () => {
    const quantity = parseInt(quantityStr) || 1;
    
    if (!selectedProduct) return;
    const product = productOptions.find(p => p.name === selectedProduct);
    if (!product) return;

    let itemSubtotal = product.price * quantity;

    // Calculate extras
    currentExtras.forEach(extraId => {
      const extra = extraOptions.find(e => e.id === extraId);
      if (extra) {
        if (extraId === 'urgency') {
             itemSubtotal += extra.price; 
        } else {
             itemSubtotal += extra.price * quantity;
        }
      }
    });

    const newItem: CartItem = {
      id: Date.now().toString(),
      productName: product.name,
      productPrice: product.price,
      quantity,
      extras: currentExtras,
      notes,
      subtotal: itemSubtotal
    };

    setItems([...items, newItem]);

    // Reset Form partials
    setSelectedProduct('');
    setQuantityStr('1');
    setCurrentExtras([]);
    setNotes('');
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleWhatsApp = () => {
    if (items.length === 0) return;

    let message = `*Novo Pedido / Orçamento - Paperland Ateliê*\n-----------------------------\n`;

    items.forEach((item, index) => {
      message += `\n*Item ${index + 1}: ${item.productName}*\n`;
      message += `Qtd: ${item.quantity} un | R$ ${item.productPrice.toFixed(2)}/un\n`;
      
      if (item.extras.length > 0) {
        const extraNames = item.extras.map(id => extraOptions.find(e => e.id === id)?.name).join(', ');
        message += `Extras: ${extraNames}\n`;
      }
      
      if (item.notes) {
        message += `Obs: ${item.notes}\n`;
      }
      
      message += `Subtotal Item: R$ ${item.subtotal.toFixed(2)}\n`;
    });

    message += `\n-----------------------------\n*Total Estimado: R$ ${total.toFixed(2)}*`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const selectedProductPrice = productOptions.find(p => p.name === selectedProduct)?.price || 0;
  const isProductSelected = !!selectedProduct;

  return (
    <div className="min-h-screen pt-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-6 shadow-lg shadow-primary/30">
              <CalcIcon size={32} />
            </div>
            <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">Monte seu Pedido</h1>
            <p className="text-gray-600">Adicione produtos, defina quantidades e envie para nós.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-3xl shadow-sm p-8 border border-gray-100">
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Plus size={20} className="text-primary" /> Adicionar Item
                </h3>

                <div className="space-y-6">
                  {/* Product Input */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Produto</label>
                    <select 
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      value={selectedProduct}
                      onChange={(e) => setSelectedProduct(e.target.value)}
                    >
                      <option value="">Selecione um produto...</option>
                      {productOptions.map(p => (
                        <option key={p.id} value={p.name}>{p.name} (R$ {p.price.toFixed(2)})</option>
                      ))}
                    </select>
                  </div>

                  {/* Quantity Control */}
                  <div className={!isProductSelected ? "opacity-50 pointer-events-none grayscale transition-all" : "transition-all"}>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Quantidade <span className="font-normal text-gray-400 text-xs">(Mín: 1, Máx: 250)</span></label>
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => updateQuantity((parseInt(quantityStr) || 0) - 1)}
                        className="w-12 h-12 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors disabled:cursor-not-allowed"
                        type="button"
                        disabled={!isProductSelected}
                      >
                        <Minus size={20} />
                      </button>
                      
                      <input 
                        type="number"
                        value={quantityStr}
                        onChange={handleQuantityChange}
                        onBlur={handleQuantityBlur}
                        disabled={!isProductSelected}
                        className="w-24 h-12 text-center font-bold text-lg bg-white border border-gray-200 rounded-xl focus:border-primary outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none disabled:bg-gray-50"
                      />

                      <button 
                        onClick={() => updateQuantity((parseInt(quantityStr) || 0) + 1)}
                        className="w-12 h-12 rounded-xl bg-primary text-white hover:bg-primary-600 flex items-center justify-center transition-colors shadow-md shadow-primary/20 disabled:bg-gray-300 disabled:text-gray-500 disabled:shadow-none disabled:cursor-not-allowed"
                        type="button"
                        disabled={!isProductSelected}
                      >
                        <Plus size={20} />
                      </button>

                      {/* Subtotal Hint */}
                      {selectedProduct && (
                        <div className="ml-auto text-sm text-gray-500 hidden sm:block">
                          Parcial: <span className="font-bold text-primary">R$ {(selectedProductPrice * (parseInt(quantityStr) || 0)).toFixed(2)}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Extras */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">Adicionais</label>
                    <div className="flex flex-wrap gap-3">
                      {extraOptions.map(extra => (
                        <button
                          key={extra.id}
                          onClick={() => toggleExtra(extra.id)}
                          disabled={!isProductSelected}
                          className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all flex items-center gap-2 ${
                            !isProductSelected
                            ? 'opacity-50 cursor-not-allowed bg-gray-50 border-gray-200 text-gray-400'
                            : currentExtras.includes(extra.id) 
                              ? 'border-primary bg-primary-50 text-primary' 
                              : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                          }`}
                        >
                          {currentExtras.includes(extra.id) && <Check size={14} />}
                          {extra.name} (+R$ {extra.price})
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Observations */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Observações do Item</label>
                    <textarea 
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      disabled={!isProductSelected}
                      placeholder={!isProductSelected ? "Selecione um produto para adicionar observações..." : "Ex: Quero a capa na cor azul marinho, nome 'Ana' em dourado..."}
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all h-24 resize-none disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                  </div>

                  <Button 
                    className="w-full border-2" 
                    size="lg"
                    variant="outline"
                    disabled={!selectedProduct}
                    onClick={addItem}
                  >
                    Adicionar ao Pedido
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column: List & Total */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full max-h-[600px]">
                <div className="p-6 bg-gray-50 border-b border-gray-100">
                  <h3 className="font-serif text-xl font-bold text-gray-800 flex items-center gap-2">
                    <ShoppingCart size={20} /> Seus Itens ({items.length})
                  </h3>
                </div>

                <div className="flex-grow overflow-y-auto p-4 space-y-4">
                  {items.length === 0 ? (
                    <div className="text-center py-10 text-gray-400">
                      <p>Nenhum item adicionado ainda.</p>
                    </div>
                  ) : (
                    items.map((item) => (
                      <div key={item.id} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow relative group">
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="absolute top-3 right-3 text-gray-300 hover:text-red-500 transition-colors p-1"
                          title="Remover item"
                        >
                          <Trash2 size={18} />
                        </button>
                        
                        <h4 className="font-bold text-gray-800 pr-8">{item.productName}</h4>
                        <div className="text-sm text-gray-500 mt-1">
                          {item.quantity}x R$ {item.productPrice.toFixed(2)}
                        </div>
                        
                        {item.extras.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {item.extras.map(eId => {
                                const eName = extraOptions.find(o => o.id === eId)?.name;
                                return eName ? <span key={eId} className="text-[10px] bg-primary-50 text-primary px-2 py-1 rounded-full">{eName}</span> : null;
                            })}
                          </div>
                        )}

                        {item.notes && (
                          <p className="text-xs text-gray-500 mt-2 italic bg-gray-50 p-2 rounded border border-gray-100">
                            "{item.notes}"
                          </p>
                        )}

                        <div className="mt-3 text-right font-bold text-primary">
                          R$ {item.subtotal.toFixed(2)}
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <div className="p-6 bg-gray-900 text-white mt-auto">
                  <div className="flex justify-between items-end mb-6">
                    <span className="text-gray-400 text-sm">Total Estimado</span>
                    <span className="text-3xl font-bold">R$ {total.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="secondary" 
                      className="bg-gray-800 text-white border-gray-700 hover:bg-gray-700 px-3"
                      onClick={() => { setItems([]); }}
                      title="Limpar tudo"
                    >
                      <RotateCcw size={18} />
                    </Button>
                    <Button 
                      className="w-full bg-green-500 hover:bg-green-600 text-white border-none shadow-lg shadow-green-900/20"
                      disabled={items.length === 0}
                      onClick={handleWhatsApp}
                    >
                      Finalizar no WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};