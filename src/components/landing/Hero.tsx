import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* TEXTO */}
          <div className="animate-fade-in-up">
            <p className="text-sm text-primary font-semibold tracking-wide mb-4">
              SOLUCIONES DE CAPACITACIÓN
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Soluciones de capacitación corporativa para tu capital humano.
            </h1>

            <p className="text-lg text-muted-foreground mb-6 max-w-xl">
              Diseñamos experiencias e-learning, contenidos formativos y plataformas de aprendizaje para empresas que buscan capacitar equipos de forma efectiva y escalable.
            </p>

            <p className="text-base text-muted-foreground mb-8 max-w-lg">
              IO Group acompaña a las áreas de RRHH en el diseño e implementación de soluciones formativas orientadas al desempeño laboral.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
              >
                Solicitar reunión
              </a>

              <a
                href="#soluciones"
                className="border px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
              >
                Conocer nuestras soluciones
              </a>
            </div>
          </div>

          {/* IMAGEN */}
          <div className="relative lg:translate-x-10">
            <img
              src={heroIllustration}
              alt="Soluciones de capacitación"
              className="
                w-full 
                rounded-xl 
                shadow-2xl 
                object-cover 
                animate-fade-in-up
                scale-[1.02]
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
