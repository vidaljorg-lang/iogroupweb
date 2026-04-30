const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 min-h-[90vh] flex items-center">
        
        <div className="grid lg:grid-cols-2 gap-10 items-center w-full">
          
          {/* TEXTO */}
          <div className="z-10 animate-fade-in-up">
            <p className="text-orange-500 mb-4 text-sm font-medium tracking-wide">
              SOLUCIONES DE CAPACITACIÓN
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Soluciones de capacitación corporativa para tu capital humano.
            </h1>

            <p className="text-gray-600 text-lg mb-6 max-w-lg">
              Diseñamos experiencias e-learning, contenidos formativos y plataformas de aprendizaje para empresas que buscan capacitar equipos de forma efectiva y escalable.
            </p>

            <p className="text-gray-500 text-sm mb-8 max-w-md">
              IO Group acompaña a las áreas de RRHH en el diseño e implementación de soluciones formativas orientadas al desempeño laboral.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-lg text-center"
              >
                Solicitar reunión
              </a>

              <a
                href="#soluciones"
                className="border border-gray-300 hover:border-gray-400 transition px-6 py-3 rounded-lg text-center"
              >
                Conocer nuestras soluciones
              </a>
            </div>
          </div>

          {/* IMAGEN */}
          <div className="relative">
            <div className="relative lg:absolute lg:-right-40 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[140%] h-[420px] lg:h-[600px]">
              
              <img
                src="/images/hero.jpg"
                alt="Capacitación corporativa"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />

              {/* OVERLAY SUAVE */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-50 via-gray-50/60 to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
