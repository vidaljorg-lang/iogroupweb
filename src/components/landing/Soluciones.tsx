import { Monitor, Video, GraduationCap, Users, FileText } from "lucide-react";
import solucionesVisual from "@/assets/soluciones-visual.png";

const solutions = [
  { icon: Monitor, title: "Cursos e-learning a medida", description: "Contenidos interactivos diseñados según las necesidades específicas de tu organización." },
  { icon: Video, title: "Cápsulas audiovisuales formativas", description: "Videos cortos y dinámicos que facilitan el aprendizaje de conceptos clave." },
  { icon: GraduationCap, title: "Programas de capacitación corporativa", description: "Programas integrales que combinan múltiples formatos y metodologías." },
  { icon: Users, title: "Talleres y capacitación aplicada", description: "Sesiones prácticas facilitadas por expertos, enfocadas en la aplicación real." },
  { icon: FileText, title: "Material de apoyo para el aprendizaje", description: "Recursos complementarios que refuerzan el aprendizaje y facilitan la transferencia." },
];

const Soluciones = () => {
  return (
    <section id="soluciones" className="section-spacing bg-secondary">
      <div className="section-container">
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 items-center mb-16">
          <div>
            <h2 className="section-title mb-6">Nuestras soluciones</h2>
            <p className="section-subtitle">
              Ofrecemos un portafolio completo de soluciones de capacitación adaptadas a las necesidades de grandes organizaciones.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={solucionesVisual}
              alt="Plataformas de capacitación digital corporativa"
              className="w-full max-w-2xl"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol) => (
            <div
              key={sol.title}
              className="bg-background rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <sol.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{sol.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{sol.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Soluciones;
