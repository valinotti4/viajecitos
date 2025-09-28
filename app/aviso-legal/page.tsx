import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

function AvisoLegalBanner() {
  return (
    <section className="bg-gradient-to-r from-primary/10 to-orange-500/10 py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Aviso Legal</h1>
        <h2 className="text-xl font-semibold text-muted-foreground mb-4">
          https://viajecitosymas.com/
        </h2>
        <p className="text-muted-foreground text-lg">
          Última actualización: 28/09/2025
        </p>
      </div>
    </section>
  );
}

export default function AvisoLegal() {
  return (
    <main className="min-h-screen">
      <Header />
      <AvisoLegalBanner />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none space-y-8">

          <section>
            <h2 className="text-3xl font-bold mb-6">I. DATOS IDENTIFICATIVOS</h2>

            <p className="mb-6">
              En cumplimiento con el deber de información establecido en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se indican a continuación los datos de información general del presente sitio web:
            </p>

            <div className="bg-muted p-6 rounded-lg mb-6">
              <p><strong>Titular:</strong> Yanina Leiva</p>
              <p><strong>NIF:</strong> 60635645D</p>
              <p><strong>Dirección:</strong> Roger de Flor 148</p>
              <p><strong>Teléfono de contacto:</strong> 687865039</p>
              <p><strong>Correo electrónico:</strong> contacto@viajecitosymas.com</p>
            </div>

            <p className="mb-6">
              En adelante, <strong>&ldquo;Viajecitos y más&rdquo;</strong> o <strong>&ldquo;el Sitio Web&rdquo;</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">II. OBJETO</h2>

            <p className="mb-4">
              El presente Aviso Legal regula el acceso, navegación y uso del sitio web <strong>https://viajecitosymas.com/</strong>, sin perjuicio de que el titular se reserve el derecho a modificar la presentación, configuración y contenidos del mismo, así como las condiciones de acceso y/o uso.
            </p>

            <p className="mb-6">
              El acceso y/o utilización del Sitio Web atribuye la condición de Usuario, que acepta, desde dicho acceso y/o utilización, el presente Aviso Legal.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">III. CONDICIONES DE USO DEL SITIO WEB</h2>

            <p className="mb-4">
              El Usuario se compromete a hacer un uso adecuado, lícito y responsable de los contenidos y servicios ofrecidos en el Sitio Web.
            </p>

            <p className="mb-4 font-semibold">Queda prohibido:</p>

            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Utilizar los contenidos con fines ilícitos o contrarios a la buena fe y al orden público.</li>
              <li>Difundir contenidos o propaganda de carácter racista, xenófobo, ilegal, de apología del terrorismo o que atente contra los derechos humanos.</li>
              <li>Provocar daños en los sistemas físicos y lógicos de Viajecitos y más, de sus proveedores o de terceras personas, introducir o difundir en la red virus informáticos o cualquier otro sistema susceptible de provocar daños.</li>
            </ul>

            <p className="mb-6">
              Viajecitos y más no se hace responsable del uso indebido que terceros hagan de la información publicada en el Sitio Web.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">IV. PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>

            <p className="mb-4">
              Todos los contenidos del Sitio Web (textos, fotografías, gráficos, imágenes, iconos, software, código fuente, diseño gráfico, etc.) son titularidad de Viajecitos y más, o bien dispone de licencia o autorización expresa para su uso.
            </p>

            <p className="mb-6">
              Queda prohibida su reproducción, distribución, comunicación pública, transformación o cualquier otra forma de explotación sin autorización expresa y por escrito del titular.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">V. ENLACES EXTERNOS</h2>

            <p className="mb-6">
              El Sitio Web puede contener enlaces a otros sitios web gestionados por terceros, sobre los que Viajecitos y más no ejerce control alguno. Por ello, no asume responsabilidad alguna por el contenido, información o servicios que pudieran aparecer en dichos sitios.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">VI. EXCLUSIÓN DE RESPONSABILIDAD</h2>

            <p className="mb-4">
              Viajecitos y más no se responsabiliza de los daños y perjuicios de cualquier naturaleza que pudieran derivarse de:
            </p>

            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>La falta de disponibilidad del Sitio Web.</li>
              <li>El mal funcionamiento técnico o caídas de servidor.</li>
              <li>La transmisión de virus o programas maliciosos a través de la red.</li>
            </ul>

            <p className="mb-6">
              El uso del Sitio Web se realiza por cuenta y riesgo del Usuario.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">VII. PROTECCIÓN DE DATOS</h2>

            <p className="mb-6">
              El tratamiento de los datos personales de los Usuarios se rige por lo dispuesto en la Política de Privacidad disponible en el propio Sitio Web.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">VIII. LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h2>

            <p className="mb-6">
              La relación entre Viajecitos y más y el Usuario se regirá por la normativa española vigente y cualquier controversia se someterá a los juzgados y tribunales de la ciudad de Barcelona, salvo que la normativa aplicable disponga lo contrario.
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}