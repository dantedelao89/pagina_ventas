import React from 'react';
import { Brain, Workflow, Target, Users } from 'lucide-react';

const ValueProposition: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
              <Brain className="w-4 h-4" />
              <span className="font-medium">Tecnología Avanzada, Simplicidad Extrema</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Automatiza Todo Tu Negocio
              <br />
              <span className="text-blue-600">Sin Conocimientos Técnicos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre cómo Make + Inteligencia Artificial pueden transformar por completo 
              la forma en que gestionas tu marketing, ventas y creación de contenido.
            </p>
          </div>

          {/* Main value props */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Workflow className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Automatizaciones Visuales Simples
                  </h3>
                  <p className="text-gray-600">
                    Crea flujos de trabajo complejos utilizando una interfaz visual intuitiva. 
                    No necesitas programar, solo conectar bloques como si fuera un juego.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    IA Integrada en Cada Proceso
                  </h3>
                  <p className="text-gray-600">
                    Desde la generación de contenido hasta el análisis de datos, 
                    la inteligencia artificial trabaja 24/7 para optimizar tu negocio.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-xl">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Resultados Medibles Inmediatos
                  </h3>
                  <p className="text-gray-600">
                    Ve el impacto real en tu negocio desde el primer día. 
                    Métricas claras y reportes automatizados que muestran tu ROI.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual representation */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <div className="space-y-6">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">
                    Tu Ecosistema de Automatización
                  </h4>
                </div>
                
                {/* Flow diagram */}
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-200 flex-1 text-center">
                      <div className="text-2xl mb-2">📊</div>
                      <div className="text-sm font-medium text-gray-700">Marketing</div>
                    </div>
                    <div className="w-8 flex justify-center">
                      <div className="w-0 h-0 border-l-4 border-l-blue-500 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                    </div>
                    <div className="bg-blue-600 rounded-lg p-4 flex-1 text-center">
                      <div className="text-2xl mb-2">🤖</div>
                      <div className="text-sm font-medium text-white">IA + Make</div>
                    </div>
                    <div className="w-8 flex justify-center">
                      <div className="w-0 h-0 border-l-4 border-l-blue-500 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-200 flex-1 text-center">
                      <div className="text-2xl mb-2">💰</div>
                      <div className="text-sm font-medium text-gray-700">Ventas</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-200 inline-block">
                      <div className="text-2xl mb-2">📝</div>
                      <div className="text-sm font-medium text-gray-700">Contenido Automatizado</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="w-5 h-5" />
              <span className="font-medium">Para Emprendedores Digitales</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">
              Únete a una Comunidad de Innovadores
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Más de 500 emprendedores ya están automatizando sus negocios y escalando 
              sus ingresos con nuestras estrategias probadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
