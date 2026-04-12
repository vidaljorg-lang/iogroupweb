import { Zap, Gamepad2, Smartphone, Brain, Layers } from "lucide-react";
import innovacionVisual from "@/assets/innovacion-visual.png";

const items = [
  { icon: Zap, title: "Microlearning", description: "Cápsulas breves de contenido diseñadas para el aprendizaje ágil." },
  { icon: Gamepad2, title: "Gamificación", description: "Mecánicas de juego que aumentan la motivación y el engagement." },
  { icon: Smartphone, title: "Aprendizaje mobile-first", description: "Experiencias optimizadas para dispositivos móviles." },
  { icon: Brain, title: "Inteligencia artificial", description: "IA aplicada a la personalización del aprendizaje." },
  { icon: Layers, title: "Contenidos modulares escalables", description: "Arquitectura de contenidos flexible y reutilizable." },
];

const Innovacion = () => {
  return (
    <section className="section-spacing">
      <div className="section-container">
        <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-center mb-16">
          <div className="flex items-center justify-center">
            <img
              src={innovacionVisual}
              alt="Innovación en aprendizaje digital con inteligencia artificial"
              className="w-full max-w-2xl"
            />
          </div>
          <div>
            <h2 className="section-title mb-6">Innovación en inteligencia artificial aplicada al e-learning</h2>
            <p className="section-subtitle">
              <p className="text-muted-foreground max-w-xl">
  Utilizamos inteligencia artificial para potenciar el análisis y diseño instruccional creado por nuestros expertos, dando como resultado experiencias de aprendizaje fuertemente alineadas a los desafíos organizacionales.
</p>

<p className="text-muted-foreground max-w-xl mt-3">
  Esto nos permite desarrollar soluciones estratégicas que aseguran resultados concretos y sostenibles para las áreas de formación.
</p>
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item) => (
            <div key={item.title} className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Innovacion;
