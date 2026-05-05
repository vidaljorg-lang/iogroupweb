import { Globe, Video, Smartphone, BookOpen, Mic } from "lucide-react";
import idiomasVisual from "@/assets/idiomas-visual.png";

const features = [
  { icon: Globe, label: "Modalidad e-learning" },
  { icon: Video, label: "Clases en vivo" },
  { icon: Smartphone, label: "Acceso web y móvil" },
  { icon: BookOpen, label: "Contenidos personalizados" },
  { icon: Mic, label: "Tecnología de reconocimiento de voz" },
];

const Idiomas = () => {
  return (
    <section className="section-spacing bg-secondary">
      <div className="section-container">
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 items-center mb-16">
          <div>
            <h2 className="section-title mb-6">Programas de idiomas para el desarrollo profesional</h2>
            <p className="section-subtitle">
              Programas de idiomas corporativos diseñados para potenciar las competencias comunicativas de tus equipos en un entorno global.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={idiomasVisual}
              alt="Aprendizaje de idiomas corporativo global"
              className="w-full max-w-2xl"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((f) => (
            <div key={f.label} className="bg-background rounded-2xl p-6 border border-border text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">{f.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Idiomas;
