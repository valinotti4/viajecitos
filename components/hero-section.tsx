"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Calendar, Sparkles, Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Por favor ingresa un email válido"),
  city: z.string().min(1, "Por favor selecciona una ciudad"),
});

type FormData = z.infer<typeof formSchema>;

export function HeroSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const selectedCity = watch("city");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage({ type: 'success', text: result.message });
        reset();
      } else {
        setSubmitMessage({ type: 'error', text: result.message });
      }
    } catch {
      setSubmitMessage({ type: 'error', text: 'Algo salió mal. Por favor inténtalo de nuevo.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/beautiful-tropical-beach-with-crystal-clear-water-.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 text-balance">
            ¡Descubre Tu Escapada de Fin de Semana Perfecta!
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 text-pretty">
            Recibe ofertas personalizadas de vuelos, hoteles y actividades
            directamente en tu bandeja de entrada.
            <span className="text-secondary font-semibold">
              {" "}
              ¡Sin spam, solo aventuras increíbles!
            </span>
          </p>

          {/* Subscription Form */}
          <Card className="max-w-md mx-auto p-6 bg-white/95 backdrop-blur">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex items-center gap-2 text-primary mb-4">
                <Sparkles className="h-5 w-5" />
                <span className="font-semibold">
                  Únete a 10,000+ Aventureros de Fin de Semana
                </span>
              </div>

              <div className="space-y-1">
                <Input
                  {...register("name")}
                  type="text"
                  placeholder="Ingresa tu nombre"
                  className="text-center"
                />
                {errors.name && (
                  <p className="text-xs text-red-500 text-center">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-1">
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="Ingresa tu email"
                  className="text-center"
                />
                {errors.email && (
                  <p className="text-xs text-red-500 text-center">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-1">
                <Select value={selectedCity || ""} onValueChange={(value) => setValue("city", value)}>
                  <SelectTrigger className="text-center">
                    <SelectValue placeholder="Selecciona tu ciudad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="madrid">Madrid</SelectItem>
                    <SelectItem value="barcelona">Barcelona</SelectItem>
                    <SelectItem value="valencia">Valencia</SelectItem>
                    <SelectItem value="sevilla">Sevilla</SelectItem>
                    <SelectItem value="bilbao">Bilbao</SelectItem>
                    <SelectItem value="malaga">Málaga</SelectItem>
                    <SelectItem value="zaragoza">Zaragoza</SelectItem>
                    <SelectItem value="murcia">Murcia</SelectItem>
                    <SelectItem value="palma">Palma de Mallorca</SelectItem>
                    <SelectItem value="las-palmas">Las Palmas</SelectItem>
                  </SelectContent>
                </Select>
                {errors.city && (
                  <p className="text-xs text-red-500 text-center">{errors.city.message}</p>
                )}
              </div>

              {submitMessage && (
                <div className={`p-3 rounded-md text-sm text-center ${
                  submitMessage.type === 'success' 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {submitMessage.text}
                </div>
              )}

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Suscribiendo...
                  </>
                ) : (
                  'Recibir Ofertas de Viaje 🌴'
                )}
              </Button>

              <p className="text-xs text-muted-foreground">
                Gratis • Cancela cuando quieras • No se requiere tarjeta
              </p>
            </form>
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
