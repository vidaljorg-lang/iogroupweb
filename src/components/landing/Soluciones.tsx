import { Monitor, Video, GraduationCap, Users, FileText } from "lucide-react";

// ✅ IMPORT REAL (esto es la clave)
import solucionesImg from "@/assets/soluciones-visual.png";

const solutions = [
  {
    title: "Cursos e-learning a medida",
    description:
      "Contenidos interactivos diseñados según las necesidades específicas de tu organización.",
    image: "/images/solucion-elearning.jpg",
    icon: Monitor,
  },
  {
    title: "Cápsulas audiovisuales formativas",
    description:
      "Videos cortos y dinámicos que facilitan el aprendizaje de conceptos clave.",
    image: "/images/solucion-capsulas.jpg",
    icon: Video,
  },
  {
    title: "Programas de capacitación corporativa",
    description:
      "Programas integrales que combinan múltiples formatos y metodologías.",
    image: "/images/solucion-programas.jpg",
    icon: GraduationCap,
  },
  {
    title: "Talleres y capacitación aplicada",
    description:
      "Sesiones prácticas facilitadas por expertos, enfocadas en la aplicación real.",
    image: "/images/solucion-talleres.jpg",
    icon: Users,
  },
  {
    title: "Material de apoyo para el aprendizaje",
    description:
      "Recursos complementarios que refuerzan el aprendizaje y facilitan la transferencia.",
    image: "/images/solucion-material.jpg",
    icon: FileText,
  },
];

const Soluciones = () => {
  return (
    <section id="soluciones" className="section-spacing bg-secondary">
      <div className="section-container">

        {/* Header */}
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 items-center mb-16">
          
          {/* Texto */}
          <div>
            <h2 className="section-title mb-6">Nuestras soluciones</h2>
            <p className="section-subtitle">
              Ofrecemos un portafolio completo de soluciones de capacitación adaptadas a las necesidades de grandes organizaciones.
            </p>
          </div>

          {/* ✅ Imagen correcta */}
          <div className="flex items-center justify-center">
            <img
              src={solucionesImg}
              alt="Soluciones de capacitación"
              className="w-full max-w-2xl rounded-2xl shadow-md object-cover"
            />
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">

          {solutions.map((sol) => (
            <div
              key={sol.title}
              className="bg-background rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              
              {/* Imagen */}
              <div className="overflow-hidden">
                <img
                  src={sol.image}
                  alt={sol.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Contenido */}
              <div className="p-5 flex flex-col flex-grow">

                {/* Icono */}
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <sol.icon className="w-5 h-5 text-primary" />
                </div>

                {/* Título */}
                <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
                  {sol.title}
                </h3>

                {/* Texto */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {sol.description}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Soluciones;
