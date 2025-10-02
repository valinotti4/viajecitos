"use client";

import { useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function UnsubscribeForm() {
  const searchParams = useSearchParams();
  const emailFromUrl = searchParams.get("email");

  const [email, setEmail] = useState(emailFromUrl || "");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setMessage(data.message);
      } else {
        setMessage(data.message || "Error al procesar la solicitud");
      }
    } catch (error) {
      setMessage("Error al procesar la solicitud. Por favor inténtalo más tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Link href="/" className="flex items-center gap-2 text-2xl font-black text-primary">
              <Plane className="w-6 h-6" />
              Viajecitos y +
            </Link>
          </div>
          <CardTitle className="text-2xl">Cancelar Suscripción</CardTitle>
          <CardDescription>
            Lamentamos que te vayas. Ingresa tu email para darte de baja de nuestra lista.
          </CardDescription>
        </CardHeader>

        {!isSuccess ? (
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>

              {message && !isSuccess && (
                <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md p-3">
                  {message}
                </div>
              )}
            </CardContent>

            <CardFooter className="flex flex-col gap-3">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 cursor-pointer"
                disabled={isLoading}
              >
                {isLoading ? "Procesando..." : "Darme de Baja"}
              </Button>
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors text-center">
                Volver al inicio
              </Link>
            </CardFooter>
          </form>
        ) : (
          <CardContent className="text-center py-8">
            <div className="mb-4 text-green-600">
              <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-lg text-foreground mb-6">{message}</p>
            <Link href="/">
              <Button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 cursor-pointer">
                Volver al Inicio
              </Button>
            </Link>
          </CardContent>
        )}
      </Card>
    </div>
  );
}

export default function UnsubscribePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Link href="/" className="flex items-center gap-2 text-2xl font-black text-primary">
                <Plane className="w-6 h-6" />
                Viajecitos y +
              </Link>
            </div>
            <CardTitle className="text-2xl">Cancelar Suscripción</CardTitle>
            <CardDescription>
              Cargando...
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    }>
      <UnsubscribeForm />
    </Suspense>
  );
}
