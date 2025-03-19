
import React, { useRef } from 'react';
import { DollarSign, Star, ChevronDown } from 'lucide-react';
import FloatingSymbols from './FloatingSymbols';

const HeroSection = () => {
  const floatingRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative bg-gradient-to-b from-white to-lightblue/20 py-16 md:py-24 overflow-hidden">
      <FloatingSymbols />
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-lightblue rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/3 -right-20 w-60 h-60 bg-highlight/10 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-block px-3 py-1 bg-lightblue text-highlight rounded-full mb-4 text-sm font-medium animate-scale-in">
            Nova maneira de ganhar dinheiro online
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ganhe Dinheiro Fazendo{' '}
            <span className="relative text-highlight">
              Avaliações
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M1 5.5C32.5 2.5 109 -0.499997 299 5.5" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mb-8">
            Compartilhe suas opiniões sobre empresas no Google e seja pago por isso.
            É rápido, fácil e você pode fazer do conforto da sua casa.
          </p>
          
          <div className="flex gap-4 mb-8">
            <a 
              href="#inscrever" 
              className="cta-button flex items-center gap-2 animate-pulse-soft"
            >
              <DollarSign className="h-5 w-5" />
              Comece a Ganhar Agora
            </a>
            
            <a 
              href="#como-funciona" 
              className="px-8 py-4 border border-gray-300 text-gray-700 font-medium rounded-full transition-all hover:border-gray-400 flex items-center gap-2"
            >
              Como Funciona
            </a>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span>Mais de 10.000 usuários satisfeitos</span>
          </div>
        </div>
        
        <div className="relative mt-12 mx-auto w-fit">
          <div 
            ref={floatingRef}
            className="flex gap-2 items-center opacity-0 absolute -top-12 -right-10 bg-white p-3 rounded-lg shadow-lg z-20"
          >
            <DollarSign className="h-5 w-5 text-green-500" />
            <span className="text-sm font-medium">+R$50 por avaliação</span>
          </div>
          
          <div className="flex gap-2 items-center opacity-0 absolute -top-6 -left-16 bg-white p-3 rounded-lg shadow-lg z-20">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">Simples e rápido!</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-gray-400" />
      </div>
    </section>
  );
};

export default HeroSection;
