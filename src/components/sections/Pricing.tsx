import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Shield, 
  Star,
  TrendingUp,
  DollarSign
} from 'lucide-react';

const Pricing: React.FC = () => {
  const includedFeatures = [
    "Clases en vivo semanales",
    "Biblioteca de +50 automatizaciones",
    "Soporte 24/7 de la comunidad",
    "Plantillas y recursos premium",
    "Masterclass exclusivas mensuales",
    "Actualizaciones constantes",
    "Acceso a Discord privado",
    "Bonos de lanzamiento (+$500 valor)"
  ];

  const valueComparison = [
    { service: "Consultoría 1:1", price: "$200/hora", sessions: "x10 sesiones = $2,000" },
    { service: "Curso de automatización", price: "$997", sessions: "una sola vez" },
    { service: "Herramientas Make Pro", price: "$29/mes", sessions: "solo la plataforma" },
    { service: "IA Content Academy", price: "$39/mes", sessions: "TODO incluido", highlight: true }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 rounded-full px-4 py-2 mb-6">
              <DollarSign className="w-4 h-4" />
              <span className="font-medium">Precio de Lanzamiento</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Inversión Que Se Paga Sola
              <br />
              <span className="text-blue-600">En Los Primeros 30 Días</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recupera tu inversión automatizando solo 1 hora de trabajo al día. 
              El ROI promedio de nuestros miembros es del 400% en el primer trimestre.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Pricing Card */}
            <div className="relative">
              {/* Popular badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Precio de Lanzamiento
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative">
                {/* Price */}
                <div className="text-center mb-8">
                  <div className="text-gray-500 mb-2">Antes: <span className="line-through">$97/mes</span></div>
                  <div className="text-6xl font-bold text-gray-900 mb-2">
                    $39
                    <span className="text-2xl text-gray-600">/mes</span>
                  </div>
                  <div className="text-blue-600 font-medium">USD - Facturación mensual</div>
                  <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm mt-3 inline-block">
                    ⏰ Oferta por tiempo limitado
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {includedFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Comenzar Ahora - Únete a la Academia
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                {/* Guarantees */}
                <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>Garantía 30 días</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>Cancela cuando quieras</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Comparison */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Comparación de Valor en el Mercado
                </h3>
                <div className="space-y-4">
                  {valueComparison.map((item, index) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-lg border-2 ${
                        item.highlight 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 bg-white'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className={`font-semibold ${
                            item.highlight ? 'text-blue-900' : 'text-gray-900'
                          }`}>
                            {item.service}
                          </div>
                          <div className="text-sm text-gray-600">{item.sessions}</div>
                        </div>
                        <div className={`text-xl font-bold ${
                          item.highlight ? 'text-blue-600' : 'text-gray-900'
                        }`}>
                          {item.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ROI Calculator */}
              <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 text-white">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Calculadora de ROI
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Tiempo ahorrado por día:</span>
                    <span className="font-semibold">2 horas</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Valor por hora tu tiempo:</span>
                    <span className="font-semibold">$25 USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ahorro mensual:</span>
                    <span className="font-semibold">$1,500 USD</span>
                  </div>
                  <hr className="border-white/30" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>ROI mensual:</span>
                    <span>3,746%</span>
                  </div>
                </div>
              </div>

              {/* Testimonial preview */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    JM
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Juan Martínez</div>
                    <div className="text-sm text-gray-600">E-commerce Owner</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "En 2 meses automaticé todo mi funnel de ventas. Ahora genero 40% más ingresos 
                  trabajando la mitad del tiempo. La inversión se pagó en las primeras 3 semanas."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
