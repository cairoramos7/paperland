import React from 'react';
import { Product } from '../types';
import { Button } from './ui/Button';
import { ShoppingBag } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleBuy = () => {
    const message = `Olá! Gostaria de saber mais sobre o produto: ${product.name}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      {product.badge && (
        <div className="absolute top-3 left-3 z-10 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          {product.badge}
        </div>
      )}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-xs font-medium text-primary-400 mb-1 uppercase tracking-wide">{product.category}</div>
        <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">A partir de</span>
            <span className="font-bold text-lg text-primary">
              R$ {product.price.toFixed(2).replace('.', ',')}
              {product.isPricePerUnit && <span className="text-xs font-normal text-gray-500">/un</span>}
            </span>
          </div>
          <Button onClick={handleBuy} size="sm" variant="secondary" className="rounded-full w-10 h-10 p-0 flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
             <ShoppingBag size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};