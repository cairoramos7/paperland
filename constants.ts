import { Product, Testimonial, GalleryItem, BlogPost } from './types';

// Images mapped to placeholders as per request structure using Lorem Picsum
const IMAGES = {
  planner: 'https://picsum.photos/id/24/800/800', // Book/Planner vibe
  invitation: 'https://picsum.photos/id/42/800/800', // Coffee/Table vibe
  agenda: 'https://picsum.photos/id/366/800/800', // Notebook vibe
  hero: 'https://picsum.photos/id/20/1920/1080', // Desk setup
  gallery1: 'https://picsum.photos/id/252/600/600',
  gallery2: 'https://picsum.photos/id/355/600/800',
  gallery3: 'https://picsum.photos/id/445/600/600',
  gallery4: 'https://picsum.photos/id/531/600/800',
};

export const PRODUCTS: Product[] = [
  // Planejamento
  { id: 1, name: 'Planner 2025', price: 38.00, category: 'Planejamento', badge: 'Mais Vendido', image: IMAGES.planner, description: 'Organize seu ano com estilo.' },
  { id: 4, name: 'Agenda Diária', price: 45.00, category: 'Planejamento', badge: 'Novidade 2025', image: IMAGES.planner },
  { id: 13, name: 'Calendário de Mesa', price: 25.00, category: 'Planejamento', image: IMAGES.planner },
  { id: 14, name: 'Planner Financeiro', price: 42.00, category: 'Planejamento', badge: 'Organização', image: IMAGES.planner },
  
  // Papelaria
  { id: 2, name: 'Caderno Personalizado', price: 28.00, category: 'Papelaria', badge: 'Popular', image: IMAGES.planner },
  { id: 3, name: 'Bloco de Notas', price: 15.00, category: 'Papelaria', badge: 'Essencial', image: IMAGES.planner },
  { id: 16, name: 'Sketchbook A5', price: 32.00, category: 'Papelaria', image: IMAGES.agenda },
  { id: 5, name: 'Impressão de Fotos', price: 3.00, category: 'Papelaria', badge: 'Até A4', image: IMAGES.invitation, isPricePerUnit: true },
  { id: 6, name: 'Polaroides', price: 2.50, category: 'Papelaria', badge: 'Trending', image: IMAGES.invitation, isPricePerUnit: true },
  { id: 8, name: 'Cartela de Adesivos', price: 1.50, category: 'Papelaria', badge: 'Personalizável', image: IMAGES.invitation, isPricePerUnit: true },
  { id: 15, name: 'Marca Páginas', price: 5.00, category: 'Papelaria', isPricePerUnit: true, image: IMAGES.invitation },

  // Brindes
  { id: 9, name: 'Bottons 3.5cm', price: 4.00, category: 'Brindes', badge: 'Criativo', image: IMAGES.agenda, isPricePerUnit: true },
  { id: 10, name: 'Caneca Porcelana', price: 35.00, category: 'Brindes', badge: 'Durável', image: IMAGES.agenda },
  { id: 11, name: 'Kit Corporativo', price: 120.00, category: 'Brindes', badge: 'Para Empresas', image: IMAGES.agenda },
  { id: 12, name: 'Chaveiro Acrílico', price: 8.00, category: 'Brindes', badge: 'Sob Encomenda', image: IMAGES.agenda, isPricePerUnit: true },
  { id: 18, name: 'Ecobag Algodão', price: 25.00, category: 'Brindes', badge: 'Sustentável', image: IMAGES.agenda },

  // Eventos
  { id: 7, name: 'Álbum de Memórias', price: 65.00, category: 'Eventos', badge: 'Especial', image: IMAGES.invitation },
  { id: 17, name: 'Convites Personalizados', price: 8.50, category: 'Eventos', isPricePerUnit: true, badge: 'Sob Medida', image: IMAGES.invitation },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Ana Clara", text: "O planner é simplesmente perfeito! A qualidade do papel é incrível e a capa ficou exatamente como eu queria.", role: "Estudante" },
  { id: 2, name: "Empresa Tech", text: "Fizemos os kits de boas-vindas com a Paperland e todos os colaboradores amaram. Entrega super rápida.", role: "RH" },
  { id: 3, name: "Beatriz S.", text: "As polaroides ficaram lindas no meu mural. Atendimento nota 10 pelo WhatsApp.", role: "Cliente" }
];

export const GALLERY: GalleryItem[] = [
  { id: 1, image: IMAGES.gallery1, title: "Casamento Juliana & Pedro", category: "Convites" },
  { id: 2, image: IMAGES.gallery2, title: "Planner 2024 Floral", category: "Planejamento" },
  { id: 3, image: IMAGES.gallery3, title: "Kit Onboarding", category: "Corporativo" },
  { id: 4, image: IMAGES.gallery4, title: "Álbum do Bebê", category: "Memórias" },
];

export const BLOG_POSTS: BlogPost[] = [
  { 
    id: 1, 
    title: 'Dicas para organizar seu Planner', 
    excerpt: 'Aprenda a utilizar seu planner da melhor forma possível com essas dicas incríveis de organização.', 
    image: IMAGES.planner, 
    date: '12 Jan 2025', 
    category: 'Dicas' 
  },
  { 
    id: 2, 
    title: 'Tendências de Papelaria para 2025', 
    excerpt: 'Confira o que está em alta no mundo da papelaria criativa e comece o ano com estilo.', 
    image: IMAGES.agenda, 
    date: '05 Fev 2025', 
    category: 'Novidades' 
  },
  { 
    id: 3, 
    title: 'Como montar um Kit de Boas-vindas', 
    excerpt: 'Surpreenda novos colaboradores com um kit onboarding personalizado e inesquecível.', 
    image: IMAGES.hero, 
    date: '20 Fev 2025', 
    category: 'Corporativo' 
  },
];

export const WHATSAPP_NUMBER = "5564993091070";
export const COUPON_CODE = "BEMVINDO15";