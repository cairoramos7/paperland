import React from 'react';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { WHATSAPP_NUMBER } from '../constants';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-white">
       <div className="container mx-auto px-4 md:px-6 py-16">
         <div className="max-w-5xl mx-auto bg-white shadow-2xl shadow-gray-200 rounded-3xl overflow-hidden flex flex-col md:flex-row">
           
           {/* Info Side */}
           <div className="bg-primary text-white p-10 md:p-16 md:w-1/2">
             <h2 className="font-serif text-3xl font-bold mb-6">Entre em contato</h2>
             <p className="text-primary-100 mb-12">Estamos ansiosos para tirar suas dúvidas e criar algo especial para você.</p>
             
             <div className="space-y-8">
               <div className="flex items-start gap-4">
                 <Phone className="mt-1" />
                 <div>
                   <h4 className="font-bold text-lg">WhatsApp</h4>
                   <p className="text-primary-100">+55 (64) 99309-1070</p>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <Mail className="mt-1" />
                 <div>
                   <h4 className="font-bold text-lg">E-mail</h4>
                   <p className="text-primary-100">contato@paperland.com.br</p>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <MapPin className="mt-1" />
                 <div>
                   <h4 className="font-bold text-lg">Endereço</h4>
                   <p className="text-primary-100">Goiânia, Goiás</p>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <Clock className="mt-1" />
                 <div>
                   <h4 className="font-bold text-lg">Horário</h4>
                   <p className="text-primary-100">Segunda a Sexta: 9h às 18h</p>
                 </div>
               </div>
             </div>
           </div>

           {/* CTA Side */}
           <div className="p-10 md:p-16 md:w-1/2 bg-white flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <Phone size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Atendimento Rápido</h3>
              <p className="text-gray-600 mb-8">
                Para orçamentos e dúvidas, nosso canal principal é o WhatsApp. Clique abaixo para iniciar uma conversa.
              </p>
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white w-full shadow-green-500/20"
                onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
              >
                Chamar no WhatsApp
              </Button>
           </div>

         </div>
       </div>
    </div>
  );
};