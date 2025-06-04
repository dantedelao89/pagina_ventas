import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Users, Zap } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 rounded-full px-6 py-2 mb-8 backdrop-blur-sm">
            <Clock className="w-4 h-4 text-red-400" />
            <span className="text-red-300 text-sm font-medium">
              ⏰ Solo 48 horas para precio de lanzamiento
            </span>
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-300 bg-clip-text text-transparent leading-tight">
            ¿Listo Para Automatizar
            <br />
            Tu Camino Al Éxito?
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Únete a cientos de emprendedores que ya están escalando sus negocios con 
            <span className="text-blue-300 font-semibold"> automatización inteligente</span>. 
            Tu futuro comienza hoy.
          </p>

          {/* Social proof */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-10">
            <div className="flex items-center gap-2 text-white/80">
              <Users className="w-5 h-5 text-blue-400" />
              <span>500+ miembros activos</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Zap className="w-5 h-5 text-purple-400" />
              <span>1000+ automatizaciones creadas</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Clock className="w-5 h-5 text-green-400" />
              <span>24/7 soporte comunitario</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-10 py-5 rounded-xl text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
            >
              🚀 Comenzar Mi Transformación Ahora
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>

          {/* Value reinforcement */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <div className="text-3xl font-bold text-blue-400 mb-2">$39</div>
              <div className="text-white/80 text-sm">Menos de $1.30 por día</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <div className="text-3xl font-bold text-green-400 mb-2">30</div>
              <div className="text-white/80 text-sm">Días de garantía</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-white/80 text-sm">Potencial de crecimiento</div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-2">
              💚 Garantía de Satisfacción 100%
            </h3>
            <p className="text-green-200">
              Si en los primeros 30 días no ves resultados concretos en tu negocio, 
              te devolvemos cada centavo. Sin preguntas, sin complicaciones.
            </p>
          </div>

          {/* Final push */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-400 mb-4">
              No dejes que tus competidores se adelanten...
            </p>
            <p className="text-2xl font-semibold text-white">
              ⚡ <span className="text-yellow-400">El futuro es automatizado</span> ⚡
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
