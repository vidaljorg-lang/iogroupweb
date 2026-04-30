import { BookOpen, Users, ClipboardCheck, Award, BarChart3 } from "lucide-react";
import lmsVisual from "@/assets/lms-visual.png";

const features = [
  { icon: BookOpen, label: "Gestión de cursos" },
  { icon: Users, label: "Gestión de usuarios" },
  { icon: ClipboardCheck, label: "Evaluaciones" },
  { icon: Award, label: "Certificación automática" },
  { icon: BarChart3, label: "Reportes para RRHH" },
];

const PlataformasLMS = () => {
  return (
    <section id="plataformas" className="section-spacing">
      <div className="section-container">
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 items-center">

          {/* TEXTO */}
          <div>
            <h2 className="section-title mb-6">
              Academias corporativas y plataformas LMS
            </h2>

            <p className="section-subtitle mb-8">
              Implementamos plataformas de aprendizaje basadas en Moodle, adaptadas a la identidad y necesidades de cada organización.
            </p>

            <div className="space-y-4">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGEN */}
          <div className="flex items-center justify-center">
            <img
              src={lmsVisual}
              alt="Interfaz de plataforma LMS corporativa"
              className="w-full max-w-2xl shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default PlataformasLMS;
