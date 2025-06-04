import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Realmente no necesito conocimientos técnicos para usar las automatizaciones?",
      answer: "Absolutamente no. Nuestro enfoque está diseñado específicamente para emprendedores sin experiencia técnica. Utilizamos Make.com, que es una plataforma visual donde simplemente conectas bloques como si fuera un juego. Además, te proporcionamos plantillas listas para usar y te guiamos paso a paso en cada implementación. Si sabes usar un smartphone, puedes crear estas automatizaciones."
    },
    {
      question: "¿Qué tipo de automatizaciones voy a poder crear?",
      answer: "Podrás automatizar prácticamente todo tu negocio: email marketing secuencial, captación de leads desde redes sociales, creación de contenido con IA, seguimiento automático de clientes, reportes de ventas, distribución de contenido en múltiples plataformas, lead scoring, encuestas automatizadas y mucho más. Tenemos más de 50 automatizaciones probadas disponibles."
    },
    {
      question: "¿Qué soporte recibo si tengo problemas?",
      answer: "Tienes acceso 24/7 a nuestra comunidad privada en Discord donde recibes ayuda de otros miembros y nuestro equipo. Además, tenemos sesiones de Q&A en vivo cada semana donde resolvemos dudas específicas. El tiempo promedio de respuesta en la comunidad es de menos de 2 horas. También incluye soporte por email y acceso a una biblioteca completa de tutoriales."
    },
    {
      question: "¿Cuánto tiempo necesito dedicar cada semana?",
      answer: "Con solo 2-3 horas semanales puedes implementar las automatizaciones principales. Las clases en vivo duran 1 hora por semana. Una vez configuradas, las automatizaciones funcionan completamente solas. La mayoría de nuestros miembros reportan que recuperan entre 10-20 horas semanales después del primer mes de implementación."
    },
    {
      question: "¿Las automatizaciones funcionan para cualquier tipo de negocio?",
      answer: "Sí, nuestras automatizaciones están diseñadas para cualquier negocio online: coaches, consultores, infoproductores, e-commerce, agencias, freelancers, etc. Los principios de automatización de marketing, ventas y contenido son universales. Adaptamos las estrategias según tu modelo de negocio específico."
    },
    {
      question: "¿Qué herramientas necesito comprar además de la membresía?",
      answer: "Make.com tiene un plan gratuito que es suficiente para empezar. Para funcionalidades avanzadas, su plan básico cuesta $9/mes. La mayoría de herramientas de IA como ChatGPT tienen planes gratuitos o muy económicos. Te enseñamos a optimizar costos y usar alternativas gratuitas siempre que sea posible. Muchos miembros empiezan con $0 en herramientas adicionales."
    },
    {
      question: "¿Cuánto tiempo tardaré en ver resultados?",
      answer: "Los primeros resultados los ves inmediatamente después de implementar tu primera automatización (generalmente en la primera semana). Resultados significativos en generación de leads: 2-4 semanas. Automatizaciones completas de marketing y ventas: 4-8 semanas. El 89% de nuestros miembros reporta ROI positivo en el primer mes."
    },
    {
      question: "¿Hay garantía de devolución?",
      answer: "Sí, ofrecemos 30 días de garantía completa. Si no estás satisfecho por cualquier razón, te devolvemos el 100% de tu dinero sin preguntas. Estamos tan seguros del valor que proporcionamos que asumimos todo el riesgo. Solo necesitas enviar un email y procesamos la devolución en 24-48 horas."
    },
    {
      question: "¿Puedo cancelar mi membresía cuando quiera?",
      answer: "Por supuesto. Puedes cancelar tu membresía en cualquier momento sin penalizaciones ni complicaciones. No hay contratos ni permanencias mínimas. Tu acceso continúa hasta el final de tu período de facturación actual. Mantienes acceso a todo lo que hayas descargado durante tu membresía."
    },
    {
      question: "¿Las clases quedan grabadas si no puedo asistir en vivo?",
      answer: "Sí, todas las clases en vivo se graban automáticamente y están disponibles en nuestra plataforma privada. Puedes verlas cuando quieras, las veces que necesites. También incluimos transcripciones y recursos descargables de cada sesión. El contenido está organizado por temas para encontrar rápidamente lo que buscas."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
              <HelpCircle className="w-4 h-4" />
              <span className="font-medium">Resolvemos Tus Dudas</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aquí encontrarás respuestas a las dudas más comunes sobre IA Content Academy 
              y nuestras automatizaciones. Si tienes más preguntas, contáctanos directamente.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden hover:border-blue-300 transition-colors duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              ¿Tienes más preguntas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestro equipo está disponible para resolver cualquier duda específica sobre tu caso particular.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:soporte@iacontentacademy.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                📧 Contactar Soporte
              </a>
              <a 
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                💬 Chat en Vivo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
