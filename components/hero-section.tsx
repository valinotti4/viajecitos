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
import { MapPin, Calendar, Sparkles } from "lucide-react";

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
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 text-balance">
            Discover Your Perfect Weekend Getaway!
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 text-pretty">
            Get personalized travel deals for flights, hotels & activities
            delivered straight to your inbox.
            <span className="text-secondary font-semibold">
              {" "}
              No spam, just amazing adventures!
            </span>
          </p>

          {/* Subscription Form */}
          <Card className="max-w-md mx-auto p-6 bg-white/95 backdrop-blur">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary mb-4">
                <Sparkles className="h-5 w-5" />
                <span className="font-semibold">
                  Join 10,000+ Weekend Warriors
                </span>
              </div>

              <Input
                type="text"
                placeholder="Enter your name"
                className="text-center"
              />

              <Input
                type="email"
                placeholder="Enter your email address"
                className="text-center"
              />

              <Select>
                <SelectTrigger className="text-center">
                  <SelectValue placeholder="Select your city" />
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

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3">
                Get My Travel Deals 🌴
              </Button>

              <p className="text-xs text-muted-foreground">
                Free to join • Unsubscribe anytime • No credit card required
              </p>
            </div>
          </Card>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-6 mt-8 text-white/80">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">50+ Destinations</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">Weekly Deals</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm">Personalized</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
