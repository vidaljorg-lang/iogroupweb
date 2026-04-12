import metodologiaVisual from "@/assets/metodologia-visual.png";

const steps = [
  { number: "01", title: "Meta de desempeño", description: "Definimos el resultado de negocio que la capacitación debe impactar." },
  { number: "02", title: "Acciones clave", description: "Identificamos las acciones que las personas deben realizar para alcanzar la meta." },
  { number: "03", title: "Práctica", description: "Diseñamos actividades de práctica realistas que replican el contexto laboral." },
  { number: "04", title: "Información de apoyo", description: "Proporcionamos solo la información necesaria para ejecutar las acciones." },
];

const Metodologia = () => {
  return (
    <section id="metodologia" className="section-spacing">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-title mb-6">Metodología: aprender haciendo</h2>
            <p className="section-subtitle mb-12">
              Utilizamos el enfoque de Action Mapping para diseñar capacitaciones orientadas a la acción y al desempeño real en el puesto de trabajo.
            </p>
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-5">
                  <span className="text-3xl font-bold text-primary/30 leading-none mt-0.5">{step.number}</span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={metodologiaVisual}
              alt="Diagrama conceptual de la metodología Action Mapping"
              className="w-full max-w-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metodologia;
