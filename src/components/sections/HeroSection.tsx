import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Zap, TrendingUp } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-black overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden">
        <Bot className="absolute top-1/4 left-1/5 w-8 h-8 text-blue-400/30 animate-float" />
        <Zap className="absolute top-1/3 right-1/5 w-6 h-6 text-purple-400/30 animate-float-delayed" />
        <TrendingUp className="absolute bottom-1/3 left-1/3 w-7 h-7 text-blue-300/30 animate-float" />
      </div>

      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-2 mb-8 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">
              La Revolución de la Automatización con IA
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent leading-tight">
            Automatiza Tu Negocio
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Con Inteligencia Artificial
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Únete a <strong className="text-white">IA CONTENT ACADEMY</strong> y aprende a crear automatizaciones 
            poderosas para tu marketing, ventas y contenido. 
            <span className="text-blue-300"> Sin conocimientos técnicos necesarios.</span>
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <div className="text-2xl font-bold text-blue-400">+1000</div>
              <div className="text-gray-400 text-sm">Automatizaciones Creadas</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <div className="text-2xl font-bold text-purple-400">24/7</div>
              <div className="text-gray-400 text-sm">Soporte Comunitario</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <div className="text-2xl font-bold text-green-400">$39</div>
              <div className="text-gray-400 text-sm">USD por mes</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
            >
              Únete Ahora a la Academia
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl text-lg backdrop-blur-sm transition-all duration-300"
            >
              Ver Automatizaciones
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
