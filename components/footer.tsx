import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plane, Instagram, Twitter, Mail, Sparkles } from "lucide-react";
import { SubscriptionForm } from "@/components/subscription-form";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-card py-16">
      <div className="container mx-auto px-4">
        {/* Newsletter Signup */}
        <Card className="max-w-2xl mx-auto p-6 md:p-8 mb-12 bg-primary/5 border-primary/20">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-black text-card-foreground">
                ¿Listo para tu Próxima Aventura?
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              No te pierdas las ofertas exclusivas de fin de semana. ¡Únete a
              nuestra comunidad hoy!
            </p>

            <SubscriptionForm
              layout="horizontal"
              buttonText="Suscribirme Ahora 🌴"
              namePlaceholder="Tu nombre"
              emailPlaceholder="Tu email"
              cityPlaceholder="Tu ciudad"
              confettiOrigin={{ y: 0.3 }}
            />
          </div>
        </Card>

        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Plane className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl text-card-foreground">
                Viajecitos y más
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tu compañero perfecto para descubrir escapadas de fin de semana
              increíbles. Encuentra destinos únicos y ofertas exclusivas sin
              gastar de más.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="p-2">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="hover:text-card-foreground transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-card-foreground transition-colors"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <a
                  href="/#how-it-works"
                  className="hover:text-card-foreground transition-colors"
                >
                  Cómo Funciona
                </a>
              </li>
              <li>
                <a
                  href="/#testimonials"
                  className="hover:text-card-foreground transition-colors"
                >
                  Reseñas
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/privacy_policy"
                  className="hover:text-card-foreground transition-colors"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/aviso-legal"
                  className="hover:text-card-foreground transition-colors"
                >
                  Aviso Legal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; 2024 Viajecitos y más. Hecho con ❤️ para aventureros de fin
            de semana.
          </p>
        </div>
      </div>
    </footer>
  );
}
