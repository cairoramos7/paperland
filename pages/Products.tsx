import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Search } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, WHATSAPP_NUMBER } from '../constants';
import { ProductCategory } from '../types';
import { Button } from '../components/ui/Button';

export const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const categories: ProductCategory[] = ['Todos', 'Papelaria', 'Planejamento', 'Brindes', 'Eventos'];

  return (
    <div className="min-h-screen pt-20">
      
      {/* Header */}
      <div className="bg-primary-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Nossos Produtos</h1>
          <p className="text-primary-200 max-w-2xl mx-auto">
            Explore nossa coleção de itens feitos à mão para organizar sua vida e encantar quem você ama.
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat 
                  ? 'bg-primary text-white shadow-md shadow-primary/30' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-72">
            <input 
              type="text" 
              placeholder="Buscar produtos..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>

        {/* Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-in">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
            <Filter size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-bold text-gray-600 mb-2">Nenhum produto encontrado</h3>
            <p className="text-gray-500 mb-6">Tente mudar a categoria ou o termo de busca.</p>
            <Button variant="outline" onClick={() => { setSelectedCategory('Todos'); setSearchQuery(''); }}>
              Limpar Filtros
            </Button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-20 bg-primary-50 rounded-2xl p-8 text-center">
          <h3 className="font-serif text-2xl font-bold text-primary mb-4">Não encontrou o que procura?</h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Trabalhamos com encomendas 100% personalizadas. Se você tem uma ideia especial, entre em contato e vamos criar juntos!
          </p>
          <Button onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}>
            Falar com Atendente
          </Button>
        </div>
      </div>
    </div>
  );
};