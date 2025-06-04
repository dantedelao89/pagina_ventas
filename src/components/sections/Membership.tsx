import React from 'react';
import { 
  Video, 
  MessageCircle, 
  Settings, 
  FileDown, 
  CheckCircle,
  Calendar,
  HeadphonesIcon,
  Zap
} from 'lucide-react';

const Membership: React.FC = () => {
  const features = [
    {
      icon: Video,
      title: "Clases en Vivo Semanales",
      description: "Sesiones interactivas cada semana donde construimos automatizaciones en tiempo real. Preguntas y respuestas en directo.",
      highlight: "Todos los miércoles 8PM (hora de México)"
    },
    {
      icon: MessageCircle,
      title: "Soporte Directo de la Comunidad",
      description: "Acceso 24/7 a nuestra comunidad privada. Resuelve dudas, comparte logros y conecta con otros emprendedores.",
      highlight: "Respuesta promedio: 2 horas"
    },
    {
      icon: Settings,
      title: "Automatizaciones Probadas",
      description: "Biblioteca completa de automatizaciones listas para usar. Desde lead magnets hasta secuencias de email marketing.",
      highlight: "+50 automatizaciones disponibles"
    },
    {
      icon: FileDown,
      title: "Recursos y Plantillas",
      description: "Templates de Make, prompts de IA optimizados, scripts listos y guías paso a paso para implementar todo rápidamente.",
      highlight: "Actualizado mensualmente"
    }
  ];

  const bonuses = [
    "Masterclass exclusiva: 'IA para Copy de Alto Impacto'",
    "Kit completo de prompts para marketing digital",
    "Plantillas de funnels de ventas automatizados",
    "Sesiones mensuales de Q&A con expertos",
    "Acceso anticipado a nuevas automatizaciones",
    "Descuentos especiales en herramientas recomendadas"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4" />
              <span className="font-medium">Membresía Completa</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Todo Lo Que Necesitas Para
              <br />
              <span className="text-blue-600">Automatizar Tu Éxito</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una membresía diseñada para emprendedores serios que quieren resultados reales. 
              Contenido actualizado, soporte premium y herramientas de clase mundial.
            </p>
          </div>

          {/* Main features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-3 leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="bg-white rounded-lg px-3 py-2 border border-blue-200">
                        <span className="text-sm font-medium text-blue-700">
                          {feature.highlight}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bonus section */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Bonos Exclusivos de Lanzamiento</h3>
              <p className="text-purple-100">Valor adicional de +$500 USD incluido sin costo extra</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {bonuses.map((bonus, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100">{bonus}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Support emphasis */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Contenido Semanal</h4>
              <p className="text-gray-600">Nuevas automatizaciones y estrategias cada semana</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <HeadphonesIcon className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Soporte Premium</h4>
              <p className="text-gray-600">Ayuda directa cuando la necesites</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Settings className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Implementación Guiada</h4>
              <p className="text-gray-600">Te acompañamos paso a paso hasta el éxito</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
