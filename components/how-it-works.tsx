import { Card, CardContent } from "@/components/ui/card"
import { UserPlus, Heart, Plane } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Join our community in seconds with just your email. Tell us your travel preferences!",
    },
    {
      icon: Heart,
      title: "Get Personalized Deals",
      description: "We curate amazing weekend trip deals based on your interests, budget, and location.",
    },
    {
      icon: Plane,
      title: "Travel!",
      description: "Book your perfect getaway and create unforgettable memories. Share your adventures with us!",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting your dream weekend trip is easier than you think. Here's how we make it happen:
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
