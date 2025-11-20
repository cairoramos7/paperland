export type ProductCategory = 'Todos' | 'Papelaria' | 'Planejamento' | 'Brindes' | 'Eventos';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: ProductCategory;
  badge?: string;
  image: string;
  isPricePerUnit?: boolean;
  description?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  role?: string;
}

export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}