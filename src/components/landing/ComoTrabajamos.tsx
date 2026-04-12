import { Search, PenTool, Code, Rocket, LineChart } from "lucide-react";
import cicloVisual from "@/assets/ciclo-visual.png";

const steps = [
  { icon: Search, number: "1", title: "Diagnóstico de necesidades", description: "Identificamos las brechas de desempeño y las necesidades formativas." },
  { icon: PenTool, number: "2", title: "Diseño instruccional", description: "Diseñamos la estrategia pedagógica y la experiencia de aprendizaje." },
  { icon: Code, number: "3", title: "Desarrollo de contenidos", description: "Producimos los contenidos y materiales formativos." },
  { icon: Rocket, number: "4", title: "Implementación", description: "Desplegamos la solución en la plataforma y capacitamos a los equipos." },
  { icon: LineChart, number: "5", title: "Seguimiento y reportabilidad", description: "Monitoreamos resultados y generamos reportes de impacto." },
];

const ComoTrabajamos = () => {
  return (
    <section className="section-spacing bg-secondary">
      <div className="section-container">
        <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-center mb-16">
          <div className="flex items-center justify-center">
            <img
              src={cicloVisual}
              alt="Diagrama del ciclo de capacitación corporativa"
              className="w-full max-w-2xl"
            />
          </div>
          <div>
            <h2 className="section-title mb-6">Acompañamos todo el ciclo de capacitación</h2>
            <p className="section-subtitle">
              Trabajamos de la mano con los equipos de RRHH en cada etapa del proceso formativo.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Paso {step.number}</span>
              <h3 className="text-base font-semibold text-foreground mt-2 mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoTrabajamos;
