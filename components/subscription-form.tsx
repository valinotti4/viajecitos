"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, ExternalLink } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Por favor ingresa un email válido"),
  city: z.string().min(1, "Por favor selecciona una ciudad"),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar la política de privacidad",
  }),
});

type FormData = z.infer<typeof formSchema>;

interface SubscriptionFormProps {
  layout?: "vertical" | "horizontal";
  buttonText?: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  cityPlaceholder?: string;
  confettiOrigin?: { y: number };
  className?: string;
}

export function SubscriptionForm({
  layout = "vertical",
  buttonText = "Recibir Ofertas de Viaje 🌴",
  namePlaceholder = "Ingresa tu nombre",
  emailPlaceholder = "Ingresa tu email",
  cityPlaceholder = "Selecciona tu ciudad",
  confettiOrigin = { y: 0.6 },
  className = "",
}: SubscriptionFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const selectedCity = watch("city");
  const privacyPolicyAccepted = watch("privacyPolicy");

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: confettiOrigin,
      colors: ["#ea580c", "#f97316", "#fb923c", "#fed7aa"],
    });
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage({ type: "success", text: result.message });
        reset();
        triggerConfetti();
      } else {
        setSubmitMessage({ type: "error", text: result.message });
      }
    } catch {
      setSubmitMessage({
        type: "error",
        text: "Algo salió mal. Por favor inténtalo de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClassName = layout === "vertical" ? "text-center" : "text-center";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`space-y-4 ${className}`}
    >
      <div
        className={
          layout === "horizontal" ? "grid md:grid-cols-3 gap-4" : "space-y-4"
        }
      >
        <div className="space-y-1">
          <Input
            {...register("name")}
            type="text"
            placeholder={namePlaceholder}
            className={inputClassName}
          />
          {errors.name && (
            <p className="text-xs text-red-500 text-center">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <Input
            {...register("email")}
            type="email"
            placeholder={emailPlaceholder}
            className={inputClassName}
          />
          {errors.email && (
            <p className="text-xs text-red-500 text-center">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <Select
            value={selectedCity || ""}
            onValueChange={(value) => setValue("city", value)}
          >
            <SelectTrigger className={inputClassName}>
              <SelectValue placeholder={cityPlaceholder} />
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
          {errors.city && (
            <p className="text-xs text-red-500 text-center">
              {errors.city.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-center space-x-2">
        <Checkbox
          id="privacyPolicy"
          checked={privacyPolicyAccepted || false}
          onCheckedChange={(checked: boolean) =>
            setValue("privacyPolicy", checked)
          }
        />
        <div className="space-y-1">
          <label
            htmlFor="privacyPolicy"
            className="text-sm text-muted-foreground cursor-pointer"
          >
            Acepto la{" "}
            <Link
              href="/privacy_policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              política de privacidad
              <ExternalLink className="h-3 w-3" />
            </Link>
          </label>
          {errors.privacyPolicy && (
            <p className="text-xs text-red-500">
              {errors.privacyPolicy.message}
            </p>
          )}
        </div>
      </div>

      {submitMessage && (
        <div
          className={`p-3 rounded-md text-sm text-center ${
            submitMessage.type === "success"
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {submitMessage.text}
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Suscribiendo...
          </>
        ) : (
          buttonText
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Gratis • Cancela cuando quieras • No se requiere tarjeta
      </p>
    </form>
  );
}
