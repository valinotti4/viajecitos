import { Button } from "@/components/ui/button"
import { Plane, Instagram, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card py-16">
      <div className="container mx-auto px-4">

        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Plane className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl text-card-foreground">Viajecitos y más</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tu compañero perfecto para descubrir escapadas de fin de semana increíbles. Encuentra destinos únicos y ofertas exclusivas sin gastar de más.
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
            <h4 className="font-semibold text-card-foreground mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-card-foreground transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-card-foreground transition-colors">
                  Cómo Funciona
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-card-foreground transition-colors">
                  Destinos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-card-foreground transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Soporte</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-card-foreground transition-colors">
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-card-foreground transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-card-foreground transition-colors">
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-card-foreground transition-colors">
                  Cancelar Suscripción
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Viajecitos y más. Hecho con ❤️ para aventureros de fin de semana.</p>
        </div>
      </div>
    </footer>
  )
}
