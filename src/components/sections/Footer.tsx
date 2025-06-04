import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Mail, 
  MessageCircle, 
  Shield, 
  Clock,
  Users,
  Zap
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Final CTA Section */}
          <div className="text-center mb-16 pb-16 border-b border-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              No Dejes Pasar Esta Oportunidad
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Únete a IA Content Academy hoy y comienza a automatizar tu camino hacia el éxito. 
              Tu competencia ya está adelantándose.
            </p>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-10 py-5 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 mb-6"
            >
              🚀 Comenzar Mi Transformación - $39/mes
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <div className="flex justify-center items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Garantía 30 días</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>Cancela cuando quieras</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-400" />
                <span>+500 miembros</span>
              </div>
            </div>
          </div>

          {/* Footer links */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand column */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">IA Content Academy</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                La comunidad líder en automatización de negocios con Inteligencia Artificial. 
                Transformamos emprendedores en expertos de la automatización.
              </p>
              
              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-400">soporte@iacontentacademy.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-400">Discord: IA Content Academy</span>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Automatizaciones</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Comunidad</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Centro de Ayuda</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Preguntas Frecuentes</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Términos de Servicio</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Política de Privacidad</a></li>
              </ul>
            </div>
          </div>

          {/* Social proof */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">Nuestros Miembros En Números</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="text-2xl font-bold text-blue-400">500+</div>
                  <div className="text-sm text-gray-400">Miembros Activos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">1000+</div>
                  <div className="text-sm text-gray-400">Automatizaciones</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">87%</div>
                  <div className="text-sm text-gray-400">Ahorro de Tiempo</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">4.9★</div>
                  <div className="text-sm text-gray-400">Calificación</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 IA Content Academy. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>🇲🇽 Hecho con 💙 en México</span>
              <span>🤖 Powered by AI</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
