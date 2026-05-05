import { Target, Eye, Briefcase, BarChart3 } from "lucide-react";
import propuestaVisual from "@/assets/propuesta-visual.png";

const items = [
  { icon: Target, title: "Identificación de brechas de desempeño", description: "Analizamos los roles y detectamos las brechas reales que impactan la productividad." },
  { icon: Eye, title: "Conversión en acciones observables", description: "Transformamos las brechas en comportamientos medibles y acciones concretas." },
  { icon: Briefcase, title: "Aprendizaje aplicado al trabajo", description: "Diseñamos experiencias formativas que se aplican directamente en el puesto de trabajo." },
  { icon: BarChart3, title: "Alineación con los objetivos organizacionales", description: "Cada acción de aprendizaje responde a las metas estratégicas de la empresa." },
];

const Propuesta = () => {
  return (
    <section className="section-spacing bg-secondary">
      <div className="section-container">
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 items-center mb-16">
          <div>
            <h2 className="section-title mb-6">Capacitación diseñada para generar desempeño</h2>
            <p className="section-subtitle">
              En IO Group diseñamos estrategias de capacitación orientadas a resultados. Partimos desde las brechas de desempeño reales de los roles dentro de la organización y las convertimos en acciones prácticas de aprendizaje.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={propuestaVisual}
              alt="Ilustración conceptual de mejora de desempeño corporativo"
              className="w-full max-w-2xl"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div key={item.title} className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Propuesta;
