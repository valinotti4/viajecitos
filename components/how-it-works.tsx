import { Card, CardContent } from "@/components/ui/card"
import { UserPlus, Heart, Plane } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: "Regístrate",
      description: "Únete a nuestra comunidad en segundos con solo tu email. ¡Cuéntanos tus preferencias de viaje!",
    },
    {
      icon: Heart,
      title: "Recibe Ofertas Personalizadas",
      description: "Seleccionamos increíbles ofertas de escapadas de fin de semana basadas en tus intereses, presupuesto y ubicación.",
    },
    {
      icon: Plane,
      title: "¡Viaja!",
      description: "Reserva tu escapada perfecta y crea recuerdos inolvidables. ¡Comparte tus aventuras con nosotros!",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">Cómo Funciona</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conseguir tu viaje de fin de semana soñado es más fácil de lo que piensas. Así es como lo hacemos posible:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="text-center bg-card border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
