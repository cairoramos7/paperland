import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
               <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-serif font-bold">P</div>
               <span className="font-serif text-xl font-bold text-primary">Paperland Ateliê</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Transformando momentos em memórias desde 2024. Papelaria artesanal feita com amor e dedicação.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif font-bold text-gray-900 mb-6">Navegação</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/" className="hover:text-primary transition-colors">Início</Link></li>
              <li><Link to="/produtos" className="hover:text-primary transition-colors">Produtos</Link></li>
              <li><Link to="/galeria" className="hover:text-primary transition-colors">Galeria</Link></li>
              <li><Link to="/sobre" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
            </ul>
          </div>

          {/* Legal/Help */}
          <div>
            <h4 className="font-serif font-bold text-gray-900 mb-6">Ajuda</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/como-funciona" className="hover:text-primary transition-colors">Como Comprar</Link></li>
              <li><Link to="/calculadora" className="hover:text-primary transition-colors">Orçamento Rápido</Link></li>
              <li><Link to="/contato" className="hover:text-primary transition-colors">Fale Conosco</Link></li>
              <li><span className="text-gray-400 cursor-not-allowed">Política de Privacidade</span></li>
              <li><span className="text-gray-400 cursor-not-allowed">Termos de Uso</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-bold text-gray-900 mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0" size={18} />
                <span>Goiânia, GO<br />Enviamos para todo Brasil</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <span>contato@paperland.com.br</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span>(64) 99309-1070</span>
              </li>
              <li className="pt-2 text-xs text-primary font-semibold">
                Seg - Sex: 9h às 18h
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>&copy; {currentYear} Paperland Ateliê. Todos os direitos reservados.</p>
          <p>Desenvolvido com ❤️</p>
        </div>
      </div>
    </footer>
  );
};