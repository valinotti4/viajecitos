import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

function PrivacyPolicyBanner() {
  return (
    <section className="bg-gradient-to-r from-primary/10 to-orange-500/10 py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Política de Privacidad del Sitio Web</h1>
        <h2 className="text-xl font-semibold text-muted-foreground mb-4">
          https://viajecitosymas.com/
        </h2>
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
      <Header />
      <PrivacyPolicyBanner />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none space-y-8">

          <section>
            <h2 className="text-3xl font-bold mb-6">I. POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS</h2>

            <p className="mb-6">
              Respetando lo establecido en la legislación vigente, <strong>Viajecitos y más</strong> (en adelante, también Sitio Web) se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Leyes que incorpora esta política de privacidad</h3>
            <p className="mb-4">
              Esta política de privacidad está adaptada a la normativa española y europea vigente en materia de protección de datos personales en internet. En concreto, la misma respeta las siguientes normas:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>El Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD).</li>
              <li>La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPD-GDD).</li>
              <li>El Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal (RDLOPD).</li>
              <li>La Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Identidad del responsable del tratamiento de los datos personales</h3>
            <p className="mb-4">
              El responsable del tratamiento de los datos personales recogidos en <strong>Viajecitos y más</strong> es: <strong>Yanina Leiva</strong>, con NIF: <strong>60635645D</strong> (en adelante, Responsable del tratamiento). Sus datos de contacto son los siguientes:
            </p>
            <div className="bg-muted p-4 rounded-lg mb-6">
              <p><strong>Dirección:</strong> Roger de Flor 148</p>
              <p><strong>Teléfono de contacto:</strong> 687865039</p>
              <p><strong>Email de contacto:</strong> contacto@viajecitosymas.com</p>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Registro de Datos de Carácter Personal</h3>
            <p className="mb-6">
              En cumplimiento de lo establecido en el RGPD y la LOPD-GDD, le informamos que los datos personales recabados por <strong>Viajecitos y más</strong>, mediante los formularios extendidos en sus páginas quedarán incorporados y serán tratados en nuestro fichero con el fin de poder facilitar, agilizar y cumplir los compromisos establecidos entre <strong>Viajecitos y más</strong> y el Usuario o el mantenimiento de la relación que se establezca en los formularios que este rellene, o para atender una solicitud o consulta del mismo.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Principios aplicables al tratamiento de los datos personales</h3>
            <p className="mb-4">
              El tratamiento de los datos personales del Usuario se someterá a los siguientes principios recogidos en el artículo 5 del RGPD y en el artículo 4 y siguientes de la Ley Orgánica 3/2018:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Principio de licitud, lealtad y transparencia:</strong> se requerirá en todo momento el consentimiento del Usuario previa información completamente transparente de los fines para los cuales se recogen los datos personales.</li>
              <li><strong>Principio de limitación de la finalidad:</strong> los datos personales serán recogidos con fines determinados, explícitos y legítimos.</li>
              <li><strong>Principio de minimización de datos:</strong> los datos personales recogidos serán únicamente los estrictamente necesarios en relación con los fines para los que son tratados.</li>
              <li><strong>Principio de exactitud:</strong> los datos personales deben ser exactos y estar siempre actualizados.</li>
              <li><strong>Principio de limitación del plazo de conservación:</strong> los datos personales solo serán mantenidos de forma que se permita la identificación del Usuario durante el tiempo necesario para los fines de su tratamiento.</li>
              <li><strong>Principio de integridad y confidencialidad:</strong> los datos personales serán tratados de manera que se garantice su seguridad y confidencialidad.</li>
              <li><strong>Principio de responsabilidad proactiva:</strong> el Responsable del tratamiento será responsable de asegurar que los principios anteriores se cumplen.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Categorías de datos personales</h3>
            <p className="mb-6">
              Las categorías de datos que se tratan en <strong>Viajecitos y más</strong> son únicamente datos identificativos. En ningún caso, se tratan categorías especiales de datos personales en el sentido del artículo 9 del RGPD.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Base legal para el tratamiento de los datos personales</h3>
            <p className="mb-4">
              La base legal para el tratamiento de los datos personales es el consentimiento. <strong>Viajecitos y más</strong> se compromete a recabar el consentimiento expreso y verificable del Usuario para el tratamiento de sus datos personales para uno o varios fines específicos.
            </p>
            <p className="mb-6">
              El Usuario tendrá derecho a retirar su consentimiento en cualquier momento. Será tan fácil retirar el consentimiento como darlo. Como regla general, la retirada del consentimiento no condicionará el uso del Sitio Web.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Fines del tratamiento a que se destinan los datos personales</h3>
            <p className="mb-4">
              Los datos personales son recabados y gestionados por <strong>Viajecitos y más</strong> con la finalidad de poder facilitar, agilizar y cumplir los compromisos establecidos entre el Sitio Web y el Usuario o el mantenimiento de la relación que se establezca en los formularios que este último rellene o para atender una solicitud o consulta.
            </p>
            <p className="mb-6">
              Igualmente, los datos podrán ser utilizados con una finalidad comercial de personalización, operativa y estadística, y actividades propias del objeto social de <strong>Viajecitos y más</strong>, así como para la extracción, almacenamiento de datos y estudios de marketing para adecuar el Contenido ofertado al Usuario, así como mejorar la calidad, funcionamiento y navegación por el Sitio Web.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Períodos de retención de los datos personales</h3>
            <p className="mb-6">
              Los datos personales solo serán retenidos durante el tiempo mínimo necesario para los fines de su tratamiento y, en todo caso, únicamente durante el siguiente plazo: <strong>12 meses</strong>, o hasta que el Usuario solicite su supresión.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Destinatarios de los datos personales</h3>
            <p className="mb-6">
              Los datos personales del Usuario no serán compartidos con terceros salvo en los casos establecidos por la ley.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Datos personales de menores de edad</h3>
            <p className="mb-6">
              Respetando lo establecido en los artículos 8 del RGPD y 7 de la Ley Orgánica 3/2018, solo los mayores de 14 años podrán otorgar su consentimiento para el tratamiento de sus datos personales de forma lícita por <strong>Viajecitos y más</strong>. Si se trata de un menor de 14 años, será necesario el consentimiento de los padres o tutores para el tratamiento.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Secreto y seguridad de los datos personales</h3>
            <p className="mb-4">
              <strong>Viajecitos y más</strong> se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos, de forma que se garantice la seguridad de los datos de carácter personal y se evite la destrucción, pérdida o alteración accidental o ilícita de datos personales.
            </p>
            <p className="mb-6">
              El Sitio Web cuenta con un certificado SSL (Secure Socket Layer), que asegura que los datos personales se transmiten de forma segura y confidencial, al ser la transmisión de los datos entre el servidor y el Usuario totalmente cifrada o encriptada.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Derechos derivados del tratamiento de los datos personales</h3>
            <p className="mb-4">
              El Usuario tiene sobre <strong>Viajecitos y más</strong> y podrá ejercer frente al Responsable del tratamiento los siguientes derechos reconocidos en el RGPD:
            </p>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li><strong>Derecho de acceso:</strong> Es el derecho del Usuario a obtener confirmación de si <strong>Viajecitos y más</strong> está tratando o no sus datos personales y, en caso afirmativo, obtener información sobre sus datos concretos de carácter personal y del tratamiento realizado.</li>
              <li><strong>Derecho de rectificación:</strong> Es el derecho del Usuario a que se modifiquen sus datos personales que resulten ser inexactos o incompletos.</li>
              <li><strong>Derecho de supresión (&ldquo;el derecho al olvido&rdquo;):</strong> Es el derecho del Usuario a obtener la supresión de sus datos personales cuando estos ya no sean necesarios para los fines para los cuales fueron recogidos.</li>
              <li><strong>Derecho a la limitación del tratamiento:</strong> Es el derecho del Usuario a limitar el tratamiento de sus datos personales en determinadas circunstancias.</li>
              <li><strong>Derecho a la portabilidad de los datos:</strong> En caso de que el tratamiento se efectúe por medios automatizados, el Usuario tendrá derecho a recibir sus datos personales en un formato estructurado.</li>
              <li><strong>Derecho de oposición:</strong> Es el derecho del Usuario a que no se lleve a cabo el tratamiento de sus datos de carácter personal o se cese el tratamiento de los mismos.</li>
            </ul>

            <p className="mb-4">
              El Usuario podrá ejercitar sus derechos mediante comunicación escrita dirigida al Responsable del tratamiento con la referencia &ldquo;RGPD-https://viajecitosymas.com/&rdquo;, especificando:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Nombre, apellidos del Usuario y copia del DNI</li>
              <li>Petición con los motivos específicos de la solicitud</li>
              <li>Domicilio a efecto de notificaciones</li>
              <li>Fecha y firma del solicitante</li>
            </ul>

            <div className="bg-muted p-4 rounded-lg mb-6">
              <p><strong>Dirección postal:</strong> Roger de Flor 148</p>
              <p><strong>Correo electrónico:</strong> contacto@viajecitosymas.com</p>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Enlaces a sitios web de terceros</h3>
            <p className="mb-6">
              El Sitio Web puede incluir hipervínculos o enlaces que permiten acceder a páginas web de terceros distintos de <strong>Viajecitos y más</strong>. Los titulares de dichos sitios web dispondrán de sus propias políticas de protección de datos.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Reclamaciones ante la autoridad de control</h3>
            <p className="mb-6">
              En caso de que el Usuario considere que existe un problema o infracción de la normativa vigente, tendrá derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.aepd.es/</a>).
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">II. ACEPTACIÓN Y CAMBIOS EN ESTA POLÍTICA DE PRIVACIDAD</h2>

            <p className="mb-4">
              Es necesario que el Usuario haya leído y esté conforme con las condiciones sobre la protección de datos de carácter personal contenidas en esta Política de Privacidad, así como que acepte el tratamiento de sus datos personales para que el Responsable del tratamiento pueda proceder al mismo en la forma, durante los plazos y para las finalidades indicadas.
            </p>

            <p className="mb-6">
              <strong>Viajecitos y más</strong> se reserva el derecho a modificar su Política de Privacidad, de acuerdo a su propio criterio, o motivado por un cambio legislativo, jurisprudencial o doctrinal de la Agencia Española de Protección de Datos.
            </p>

            <div className="border-t pt-8 mt-12">
              <p className="text-sm text-muted-foreground text-center">
                Esta Política de Privacidad fue actualizada para adaptarse al Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD) y a la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales.
              </p>
              <p className="text-sm text-muted-foreground text-center mt-4">
                Documento creado el 28/09/2025.
              </p>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}