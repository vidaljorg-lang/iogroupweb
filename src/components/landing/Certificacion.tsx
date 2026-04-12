import { ShieldCheck, Award, Building2, Briefcase } from "lucide-react";

const items = [
  { icon: ShieldCheck, text: "OTEC certificado bajo norma NCh 2728" },
  { icon: Award, text: "Amplia experiencia en capacitación corporativa" },
  { icon: Building2, text: "Proyectos para grandes empresas de Latinoamérica" },
  { icon: Briefcase, text: "Enfoque en aprendizaje aplicado al trabajo" },
];

const Certificacion = () => {
  return (
    <section className="section-spacing bg-secondary">
      <div className="section-container">
        <div className="max-w-3xl mb-16">
          <h2 className="section-title mb-6">Experiencia y respaldo</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div key={item.text} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificacion;
