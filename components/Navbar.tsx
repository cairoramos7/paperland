import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Instagram } from 'lucide-react';
import { Button } from './ui/Button';
import { WHATSAPP_NUMBER } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Como Funciona', path: '/como-funciona' },
    { name: 'Galeria', path: '/galeria' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Calculadora', path: '/calculadora' },
    { name: 'Contato', path: '/contato' },
  ];

  // Pill Styles
  const activeLinkClass = "bg-primary text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-md shadow-primary/20";
  const normalLinkClass = "text-gray-600 hover:text-primary hover:bg-primary-50 px-4 py-2 rounded-full text-sm font-medium transition-all";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-white/50 backdrop-blur-sm py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 z-50">
             <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-serif font-bold text-lg">P</div>
             <span className="font-serif text-xl md:text-2xl font-bold text-primary tracking-tight">Paperland<span className="text-primary-400 font-sans text-sm font-light ml-1 hidden sm:inline-block">Ateliê</span></span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path}
                className={({ isActive }) => isActive ? activeLinkClass : normalLinkClass}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
            <Button 
              size="sm" 
              onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
            >
              <ShoppingBag size={16} className="mr-2" /> Loja
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-gray-600 hover:text-primary z-50 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-6 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        {navLinks.map((link) => (
          <NavLink 
            key={link.path} 
            to={link.path}
            className={({ isActive }) => `text-2xl font-serif ${isActive ? 'text-primary font-bold' : 'text-gray-600'}`}
          >
            {link.name}
          </NavLink>
        ))}
        <div className="mt-8 flex gap-4">
          <Button onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}>
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </nav>
  );
};