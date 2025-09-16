// import { Plane } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  showNavigation?: boolean;
}

export function Header({ showNavigation = true }: HeaderProps) {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className={`container mx-auto px-4 h-16 flex items-center ${showNavigation ? 'justify-between' : ''}`}>
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image src="/logo-1.svg" alt="Viajecitos" width={40} height={40} />
          {/* <Plane className="h-6 w-6 text-primary" /> */}
          <span className="font-bold text-xl text-foreground">
            Viajecitos y +
          </span>
        </Link>

        {showNavigation && (
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Cómo funciona
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Reseñas
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
