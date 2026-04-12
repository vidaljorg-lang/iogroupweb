import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => {
  return (
    <section className="pt-36 pb-24 md:pt-48 md:pb-40">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.08] mb-6">
              Soluciones de capacitación corporativa para tu capital humano.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              Diseñamos experiencias e-learning, contenidos formativos y plataformas de aprendizaje para empresas que buscan capacitar equipos de forma efectiva y escalable.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-10">
              IO Group acompaña a las áreas de RRHH en el diseño e implementación de soluciones formativas orientadas al desempeño laboral.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground font-medium px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity text-sm"
              >
                Solicitar reunión
              </a>
              <a
                href="#soluciones"
                className="inline-flex items-center justify-center border border-border text-foreground font-medium px-8 py-3.5 rounded-lg hover:bg-secondary transition-colors text-sm"
              >
                Conocer nuestras soluciones
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={heroIllustration}
              alt="Ilustración de aprendizaje digital corporativo"
              className="w-full max-w-lg"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
