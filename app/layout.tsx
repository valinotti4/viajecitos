import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Viajecitos y más - Escapadas de Fin de Semana Perfectas",
  description: "Descubre las mejores ofertas de viaje para escapadas de fin de semana. Vuelos, hoteles y actividades personalizadas para jóvenes aventureros. ¡Sin spam, solo aventuras increíbles!",
  keywords: "viajes fin de semana, ofertas viajes, escapadas cortas, vuelos baratos, hoteles España, turismo joven, aventuras fin de semana",
  authors: [{ name: "Viajecitos y más" }],
  creator: "Viajecitos y más",
  publisher: "Viajecitos y más",
  openGraph: {
    type: "website",
    title: "Viajecitos y más - Escapadas de Fin de Semana Perfectas",
    description: "Tu compañero perfecto para descubrir escapadas de fin de semana increíbles. Ofertas exclusivas en vuelos, hoteles y actividades.",
    siteName: "Viajecitos y más",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viajecitos y más - Escapadas de Fin de Semana Perfectas",
    description: "Descubre las mejores ofertas de viaje para escapadas de fin de semana. ¡Sin spam, solo aventuras increíbles!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
