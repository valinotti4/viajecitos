import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

function PrivacyPolicyBanner() {
  return (
    <section className="bg-gradient-to-r from-primary/10 to-orange-500/10 py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Política de Privacidad</h1>
        <p className="text-muted-foreground text-lg">
          Última actualización: {new Date().toLocaleDateString('es-ES')}
        </p>
      </div>
    </section>
  );
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <Header showNavigation={false} />
      <PrivacyPolicyBanner />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none space-y-6">

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Información que Recopilamos</h2>
            <p>
              En Viajecitos, recopilamos la siguiente información cuando te suscribes a nuestro servicio:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Nombre:</strong> Para personalizar las ofertas de viaje</li>
              <li><strong>Dirección de correo electrónico:</strong> Para enviarte ofertas y comunicaciones</li>
              <li><strong>Ciudad:</strong> Para ofrecerte viajes relevantes desde tu ubicación</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Cómo Utilizamos tu Información</h2>
            <p>
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Enviarte ofertas de viaje personalizadas</li>
              <li>Comunicarte sobre promociones especiales</li>
              <li>Mejorar nuestros servicios</li>
              <li>Responder a tus consultas y solicitudes</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. Compartir Información</h2>
            <p>
              No vendemos, intercambiamos ni transferimos tu información personal a terceros sin tu consentimiento,
              excepto en los siguientes casos:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proveedores de servicios de confianza que nos ayudan a operar nuestro sitio web</li>
              <li>Cuando sea requerido por ley</li>
              <li>Para proteger nuestros derechos o la seguridad de otros usuarios</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Seguridad de los Datos</h2>
            <p>
              Implementamos medidas de seguridad apropiadas para proteger tu información personal contra
              acceso, alteración, divulgación o destrucción no autorizados. Utilizamos encriptación SSL
              y otras tecnologías de seguridad estándar de la industria.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Cookies y Tecnologías Similares</h2>
            <p>
              Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web,
              analizar el tráfico y personalizar el contenido. Puedes configurar tu navegador para rechazar
              cookies, aunque esto puede afectar la funcionalidad del sitio.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Tus Derechos</h2>
            <p>
              Tienes derecho a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acceder a tu información personal</li>
              <li>Rectificar datos incorrectos</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Darte de baja de nuestras comunicaciones en cualquier momento</li>
              <li>Portabilidad de tus datos</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Retención de Datos</h2>
            <p>
              Conservamos tu información personal solo durante el tiempo necesario para cumplir con los
              propósitos descritos en esta política, a menos que la ley requiera un período de retención más largo.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">8. Cambios en la Política</h2>
            <p>
              Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento.
              Te notificaremos sobre cambios significativos publicando la nueva política en esta página
              y actualizando la fecha de &ldquo;última actualización&rdquo;.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">9. Contacto</h2>
            <p>
              Si tienes preguntas sobre esta política de privacidad o el tratamiento de tus datos personales,
              puedes contactarnos en:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p><strong>Email:</strong> privacy@viajecitos.com</p>
              <p><strong>Dirección:</strong> [Tu dirección de empresa]</p>
            </div>
          </section>

          <div className="border-t pt-8 mt-12">
            <p className="text-sm text-muted-foreground text-center">
              Esta política de privacidad cumple con el Reglamento General de Protección de Datos (GDPR)
              y la normativa española de protección de datos.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}