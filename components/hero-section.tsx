import { Card } from "@/components/ui/card";
import { MapPin, Calendar, Sparkles } from "lucide-react";
import { SubscriptionForm } from "@/components/subscription-form";

export function HeroSection() {

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/beautiful-tropical-beach-with-crystal-clear-water-.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto bg-black/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 text-balance drop-shadow-lg">
            ¡Descubre tu escapada de fin de semana perfecta!
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 text-pretty drop-shadow-md">
            Recibe ofertas personalizadas de vuelos, hoteles y actividades
            directamente en tu bandeja de entrada.
            <span className="text-secondary font-semibold">
              {" "}
              ¡Sin spam, solo aventuras increíbles!
            </span>
          </p>

          {/* Subscription Form */}
          <Card className="max-w-md mx-auto p-6 bg-white/95 backdrop-blur">
            <div className="flex items-center gap-2 text-primary mb-4">
              <Sparkles className="h-5 w-5" />
              <span className="font-semibold">
                Únete a 10,000+ Aventureros de Fin de Semana
              </span>
            </div>

            <SubscriptionForm
              layout="vertical"
              buttonText="Recibir Ofertas de Viaje 🌴"
              namePlaceholder="Ingresa tu nombre"
              emailPlaceholder="Ingresa tu email"
              cityPlaceholder="Selecciona tu ciudad"
              confettiOrigin={{ y: 0.6 }}
            />
          </Card>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-6 mt-8 text-white/80">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">50+ Destinos</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">Ofertas Semanales</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm">Personalizado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
