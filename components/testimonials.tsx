import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Los Angeles",
      text: "Found an amazing weekend in Bali for $400! The deals are actually legit and the recommendations are spot on.",
      rating: 5,
      avatar: "/young-woman-smiling-headshot.png",
    },
    {
      name: "Jake R.",
      location: "New York",
      text: "Best travel newsletter ever! Booked 3 trips this year through their deals. My friends are so jealous 😂",
      rating: 5,
      avatar: "/young-man-smiling-headshot.jpg",
    },
    {
      name: "Emma K.",
      location: "Chicago",
      text: "The personalization is incredible. They actually understand what I like and send deals that match my vibe perfectly.",
      rating: 5,
      avatar: "/smiling-curly-woman.png",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">What Our Community Says</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy travelers who&apos;ve discovered their perfect weekend getaways
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-card-foreground mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
