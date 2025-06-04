import React from 'react';
import { 
  TrendingUp, 
  FileText, 
  Clock, 
  GraduationCap, 
  Users, 
  Rocket,
  BarChart3,
  MessageSquare
} from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Automatiza Marketing y Ventas",
      description: "Crea funnels inteligentes que convierten visitantes en clientes mientras duermes. Email marketing, seguimiento automático y nurturing de leads sin intervención manual.",
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      icon: FileText,
      title: "Contenido con IA Automatizado",
      description: "Genera posts para redes sociales, artículos de blog, newsletters y copy de ventas usando IA. Programa y publica contenido en múltiples plataformas automáticamente.",
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Ahorra Tiempo y Escala",
      description: "Recupera hasta 20 horas semanales automatizando tareas repetitivas. Dedica ese tiempo a estrategia y crecimiento mientras tu negocio funciona solo.",
      color: "bg-green-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      icon: GraduationCap,
      title: "Sin Conocimientos Técnicos",
      description: "Metodología paso a paso diseñada para emprendedores. Interfaces visuales simples, plantillas listas y soporte constante para que cualquiera pueda implementarlo.",
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600"
    },
    {
      icon: Users,
      title: "Comunidad de Emprendedores",
      description: "Conecta con más de 500 emprendedores digitales. Comparte experiencias, resuelve dudas y crea partnerships que aceleren tu crecimiento.",
      color: "bg-indigo-500",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600"
    },
    {
      icon: Rocket,
      title: "Escalamiento Exponencial",
      description: "Multiplica tu capacidad operativa sin aumentar costos. Atiende más clientes, procesa más leads y genera más contenido con la misma energía.",
      color: "bg-pink-500",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
              <BarChart3 className="w-4 h-4" />
              <span className="font-medium">Beneficios Comprobados</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transforma Tu Negocio Con
              <br />
              <span className="text-blue-600">Automatización Inteligente</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre cómo nuestros miembros están revolucionando sus negocios 
              y alcanzando resultados extraordinarios en tiempo récord.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group"
                >
                  <div className={`${benefit.bgColor} p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-6 h-6 ${benefit.textColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Success metrics */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Resultados Reales de Nuestros Miembros</h3>
              <p className="text-blue-100">Datos actualizados de los últimos 90 días</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">87%</div>
                <div className="text-blue-100">Reducción en tiempo de gestión</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">3.2x</div>
                <div className="text-blue-100">Aumento en generación de leads</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">150%</div>
                <div className="text-blue-100">Incremento en conversiones</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Operación automatizada</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
