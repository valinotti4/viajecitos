import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

function AboutUsBanner() {
  return (
    <section className="bg-gradient-to-r from-primary/10 to-orange-500/10 py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1>
        <p className="text-muted-foreground text-lg">
          Descubre quiénes somos y qué nos mueve
        </p>
      </div>
    </section>
  );
}

export default function AboutUs() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutUsBanner />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none space-y-8">
          <section className="space-y-6">
            <p className="text-lg leading-relaxed">
              En <strong>Viajecitos y+</strong> creemos que viajar no tiene por
              qué ser caro ni complicado. La idea nació de nuestra pasión por
              descubrir nuevos lugares en poco tiempo y con presupuestos
              ajustados, adaptados a vidas de personas que tienen un trabajo
              normal y no pueden tomarse vacaciones todo el tiempo, o que no
              tienen grandes presupuestos cada vez.
            </p>

            <p className="text-lg leading-relaxed">
              Nos encanta aprovechar cada fin de semana largo o escapada para
              conocer ciudades increíbles y hacer lo máximo posible en el tiempo
              que tenemos.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-semibold">Nuestra Misión</h2>
            <p className="text-lg leading-relaxed">
              Sabemos lo difícil que es encontrar información clara y precios
              reales entre tanta oferta poco transparente. Por eso, nuestro
              objetivo es ayudarte a organizar viajes alcanzables y
              disfrutables, con vuelos en horarios cómodos, alojamientos bien
              ubicados y actividades que realmente valen la pena.
            </p>

            <p className="text-lg leading-relaxed">
              Y sobre todo que puedas recibir notificaciones periódicas sobre
              qué lugares y opciones se ajustan mejor acorde a las diferentes
              épocas del año y ofertas de aerolíneas, hotelería y agencias de
              actividades, o dándote la opción de hacerlo por tu cuenta.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-semibold">Nuestra Visión</h2>
            <p className="text-lg leading-relaxed">
              Queremos que puedas viajar más seguido, sin necesidad de esperar a
              las vacaciones largas ni pasarte del presupuesto que tenías
              establecido. O que simplemente descubras que puedes hacer una
              escapada de fin de semana que no tenías en mente, debido a una
              buena oferta.
            </p>

            <p className="text-lg leading-relaxed">
              Te mostramos destinos europeos y escapadas de fin de semana con
              itinerarios pensados para que aproveches cada día al máximo. Y
              sobre todo, hablando desde la experiencia, recomendando lugares a
              los que ya fuimos, y vimos con nuestros propios ojos.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-semibold">Nuestros Valores</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-muted p-6 rounded-lg space-y-3">
                <div className="text-2xl">🌍</div>
                <h3 className="text-xl font-semibold">Autenticidad</h3>
                <p>Precios y planes reales, nada de &ldquo;ofertas imposibles&rdquo;.</p>
              </div>

              <div className="bg-muted p-6 rounded-lg space-y-3">
                <div className="text-2xl">🕒</div>
                <h3 className="text-xl font-semibold">Practicidad</h3>
                <p>Itinerarios cortos y claros, ideales para escapadas.</p>
              </div>

              <div className="bg-muted p-6 rounded-lg space-y-3">
                <div className="text-2xl">💸</div>
                <h3 className="text-xl font-semibold">Asequibilidad</h3>
                <p>Optimizar tu presupuesto para que viajes más.</p>
              </div>

              <div className="bg-muted p-6 rounded-lg space-y-3">
                <div className="text-2xl">✨</div>
                <h3 className="text-xl font-semibold">Pasión viajera</h3>
                <p>
                  Porque creemos que cada viaje, por pequeño que sea, suma
                  recuerdos inolvidables.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-primary/5 to-orange-500/5 p-8 rounded-lg space-y-4">
            <div className="text-2xl">👉</div>
            <h3 className="text-2xl font-semibold">¡Únete a la Aventura!</h3>
            <p className="text-lg">
              Si querés recibir nuestras escapadas más recientes con vuelos,
              hoteles y actividades al mejor precio, suscríbete gratis a la
              newsletter.
            </p>
            <p className="text-xl font-semibold text-primary">
              ¡Nos vemos en tu próximo viajecito!
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
