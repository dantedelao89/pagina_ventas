import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Coach Digital",
      avatar: "MG",
      content: "En solo 6 semanas logré automatizar todo mi proceso de captación de leads. Ahora mi negocio funciona mientras duermo. El ROI ha sido increíble.",
      rating: 5,
      highlight: "Automatizó 100% su captación"
    },
    {
      name: "Carlos Hernández",
      role: "E-commerce Owner",
      avatar: "CH",
      content: "Las automatizaciones de email marketing me han permitido recuperar el 35% de carritos abandonados. Ya recuperé mi inversión 10 veces.",
      rating: 5,
      highlight: "35% más conversiones"
    },
    {
      name: "Ana Martínez",
      role: "Infoproductora",
      avatar: "AM",
      content: "Crear contenido para redes sociales era mi pesadilla. Ahora la IA genera todo mi contenido mensual en 2 horas. Increíble resultado.",
      rating: 5,
      highlight: "90% menos tiempo en contenido"
    },
    {
      name: "Roberto Silva",
      role: "Consultor Marketing",
      avatar: "RS",
      content: "La comunidad es oro puro. Cada semana aprendo algo nuevo que aplico inmediatamente en mi agencia. Mis clientes están fascinados.",
      rating: 5,
      highlight: "Expandió su agencia 3x"
    },
    {
      name: "Laura Pérez",
      role: "Emprendedora Digital",
      avatar: "LP",
      content: "Sin conocimientos técnicos pude crear un funnel completo que me genera leads constantemente. El soporte de la comunidad es excepcional.",
      rating: 5,
      highlight: "De cero a experta en automatización"
    },
    {
      name: "Diego Morales",
      role: "Freelancer",
      avatar: "DM",
      content: "Automaticé mis propuestas comerciales y seguimiento a clientes. Ahora cierro 60% más proyectos dedicando menos tiempo a tareas administrativas.",
      rating: 5,
      highlight: "60% más ventas automatizadas"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4" />
              <span className="font-medium">Testimonios Reales</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Lo Que Dicen Nuestros
              <br />
              <span className="text-blue-600">Miembros Exitosos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Historias reales de emprendedores que transformaron sus negocios 
              con nuestras automatizaciones. Tú podrías ser el siguiente.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 relative"
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-blue-200 absolute top-4 right-4" />
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Highlight */}
                <div className="bg-blue-50 text-blue-800 text-sm font-medium px-3 py-2 rounded-lg mb-4">
                  ✨ {testimonial.highlight}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-6">Resultados Promedio de Nuestros Miembros</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">4.9/5</div>
                <div className="text-blue-100">Calificación promedio</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">87%</div>
                <div className="text-blue-100">Reduce tiempo manual</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">3.2x</div>
                <div className="text-blue-100">Aumento en leads</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">$1,847</div>
                <div className="text-blue-100">Ahorro promedio/mes</div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Únete a más de 500 emprendedores exitosos</p>
            <div className="flex justify-center items-center gap-2">
              <div className="flex -space-x-2">
                {['MG', 'CH', 'AM', 'RS', 'LP'].map((initials, index) => (
                  <div 
                    key={index}
                    className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold border-2 border-white"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <span className="text-gray-600 ml-2">+495 más</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
