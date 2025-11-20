import React from 'react';
import { BLOG_POSTS } from '../constants';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

export const Blog: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-slate-50">
      <div className="bg-white border-b border-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">Blog Paperland</h1>
          <p className="text-gray-600">Dicas, inspirações e novidades do mundo da papelaria.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map(post => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1 text-primary font-medium"><Tag size={12} /> {post.category}</span>
                </div>
                <h2 className="font-serif text-xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="mt-auto text-primary font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Ler mais <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};