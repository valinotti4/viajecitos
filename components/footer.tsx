import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Plane, Instagram, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card py-16">
      <div className="container mx-auto px-4">
        {/* Newsletter Signup */}
        <Card id="subscribe" className="max-w-2xl mx-auto p-8 mb-12 bg-primary/5 border-primary/20">
          <div className="text-center">
            <h3 className="text-2xl font-black text-card-foreground mb-4">Ready for Your Next Adventure?</h3>
            <p className="text-muted-foreground mb-6">
              Don't miss out on exclusive weekend deals. Join our community today!
            </p>

            <div className="flex gap-3 max-w-md mx-auto">
              <Input type="email" placeholder="Your email address" className="flex-1" />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </Card>

        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Plane className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl text-card-foreground">WeekendWings</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Curating the best weekend travel deals for young adventurers. Discover amazing destinations without
              breaking the bank.
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
            <h4 className="font-semibold text-card-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-card-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-card-foreground transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-card-foreground transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-card-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-card-foreground transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-card-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-card-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-card-foreground transition-colors">
                  Unsubscribe
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 WeekendWings. Made with ❤️ for weekend warriors everywhere.</p>
        </div>
      </div>
    </footer>
  )
}
