import Header from "../components/landing/Header";
import { useState } from "react";

const Proyectos = () => {
  const categorias = ["Todos", "E-learning", "Videos"];

  const proyectos = [
    {
      id: 1,
      titulo: 'Curso e-learning: "Trabajo en Alturas"',
      categoria: "E-learning",
      imagen: "/images/proyecto-alturas.jpg",
      video: "https://player.vimeo.com/video/1187946500",
      proyecto:
        "Formación técnica integral centrada en el dominio de herramientas, sistemas de anclaje y protocolos de seguridad crítica. El programa permite a los colaboradores reconocer riesgos del entorno y aplicar medidas preventivas rigurosas bajo estándares normativos vigentes.",
      impacto:
        "Asegura el cumplimiento legal (compliance) y reduce significativamente la probabilidad de incidentes de alto potencial. Al digitalizar la teoría mediante casos prácticos, el trabajador eleva su competencia técnica antes de la ejecución en terreno, optimizando los tiempos de supervisión y la seguridad operativa.",
    },
    {
      id: 2,
      titulo:
        'Curso e-learning: "Comité Paritario de Higiene y Seguridad (CPHS)"',
      categoria: "E-learning",
      imagen: "/images/proyecto-cphs.jpg",
      video: "https://player.vimeo.com/video/1187946420",
      proyecto:
        "Solución formativa diseñada para profesionalizar la gestión de los miembros del comité. El programa abarca desde el marco legal y normativo hasta metodologías avanzadas para la investigación de incidentes y detección de brechas de seguridad.",
      impacto:
        "Fomenta una cultura preventiva autónoma y proactiva. Su implementación se traduce en una gestión más eficiente de los riesgos internos y mejora la trazabilidad de las acciones correctivas, facilitando el cumplimiento ante las auditorías de organismos administradores.",
    },
    {
      id: 3,
      titulo: 'Curso e-learning: "Conducción a la Defensiva"',
      categoria: "E-learning",
      imagen: "/images/proyecto-conduccion.jpg",
      video: "https://player.vimeo.com/video/1187946432",
      proyecto:
        "Instancia de aprendizaje técnico-práctica diseñada para entregar herramientas de conducción eficiente. El programa profundiza en la normativa legal vigente, la identificación de factores de riesgo en la vía y los protocolos de seguridad ante condiciones climáticas adversas.",
      impacto:
        "Transforma la conducta del conductor posicionándolo como el agente principal en la prevención de siniestros. Reduce la accidentabilidad y los costos operativos mediante el reconocimiento de los sistemas de seguridad del vehículo y la mitigación de factores críticos, garantizando traslados más seguros y eficientes.",
    },
    {
      id: 4,
      titulo: 'Curso e-learning: "Falabella SAC"',
      categoria: "E-learning",
      imagen: "/images/proyecto-falabella.jpg",
      video: "https://player.vimeo.com/video/1187946455",
      proyecto:
        "Diseño de una trayectoria de aprendizaje ágil centrada en la estandarización de la experiencia de marca. El curso dota al personal de herramientas clave para la resolución de conflictos y la gestión de la atención con excelencia en diversos canales de contacto.",
      impacto:
        "Incremento medible en los índices de satisfacción del cliente (NPS) y optimización del desempeño de la primera línea. Al fortalecer la resiliencia del equipo y entregar protocolos claros, se logra disminuir el agotamiento emocional y la rotación de personal.",
    },
    {
      id: 5,
      titulo: 'Videoanimación: "Los Cuido en Casa" (Gestión REAS)',
      categoria: "Videos",
      imagen: "/images/proyecto-cuido.jpg",
      video: "https://player.vimeo.com/video/1187946525",
      proyecto:
        "Cápsula audiovisual de alta claridad pedagógica enfocada en la instrucción técnica para la segregación, transporte y disposición final de Residuos de Establecimientos de Atención de Salud (REAS).",
      impacto:
        "Mitigación crítica de riesgos biológicos para el personal operativo de aseo. La simplificación de protocolos complejos a través de la animación garantiza que el conocimiento sea transversal a todos los niveles, asegurando estándares sanitarios y evitando sanciones administrativas.",
    },
    {
      id: 6,
      titulo: 'Videoanimación: "La Voz que Educa"',
      categoria: "Videos",
      imagen: "/images/proyecto-voz.jpg",
      video: "https://player.vimeo.com/video/1187946469",
      proyecto:
        "Campaña audiovisual estratégica orientada a la prevención de patologías vocales en docentes. El recurso identifica factores de riesgo ocupacionales y ambientales, entregando técnicas de cuidado profesional para la herramienta de trabajo fundamental en el aula.",
      impacto:
        "Fortalece la salud ocupacional y la continuidad pedagógica al reducir el ausentismo laboral por disfonías. Al involucrar el liderazgo escolar en la prevención, se crea un entorno de trabajo sostenible que protege el bienestar del docente y la calidad de la enseñanza.",
    },
  ];

  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  const [proyectoActivo, setProyectoActivo] = useState(proyectos[0]);

  const proyectosFiltrados =
    categoriaActiva === "Todos"
      ? proyectos
      : proyectos.filter((p) => p.categoria === categoriaActiva);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header active="proyectos" />

      {/* HEADER */}
      <div className="text-center pt-24 pb-16 px-6">
        <h1 className="text-4xl font-bold mb-4">Nuestros Proyectos</h1>
        <p className="max-w-2xl mx-auto text-gray-400">
          Descubre algunos de nuestros casos, experiencias y soluciones
          desarrolladas para nuestros clientes.
        </p>
      </div>

      {/* FILTROS */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaActiva(cat)}
            className={`px-4 py-2 rounded-full border transition ${
              categoriaActiva === cat
                ? "bg-orange-500 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* VIDEO */}
          <div className="w-full lg:w-2/3 transition-all duration-500">
            <iframe
              key={proyectoActivo.id}
              src={proyectoActivo.video}
              className="w-full h-[400px] rounded-xl"
              allow="autoplay; fullscreen"
            />
          </div>

          {/* TEXTO */}
          <div
            key={proyectoActivo.id}
            className="w-full lg:w-1/3 transition-all duration-500 animate-fade"
          >
            <h2 className="text-3xl font-bold mb-4">
              {proyectoActivo.titulo}
            </h2>

            <div className="text-gray-400 space-y-5 leading-relaxed">
              <p>
                <span className="text-white font-bold">
                  El Proyecto:{" "}
                </span>
                {proyectoActivo.proyecto}
              </p>

              <p>
                <span className="text-white font-bold">
                  Impacto en la Operación:{" "}
                </span>
                {proyectoActivo.impacto}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {proyectosFiltrados.map((p) => (
          <div
            key={p.id}
            onClick={() => setProyectoActivo(p)}
            className={`cursor-pointer border rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
              proyectoActivo.id === p.id
                ? "border-orange-500"
                : "border-gray-700"
            }`}
          >
            <img
              src={p.imagen}
              className="w-full h-[180px] object-cover"
            />
            <div className="p-3 text-sm">{p.titulo}</div>
          </div>
        ))}
      </div>

      {/* ANIMACIÓN */}
      <style>{`
        .animate-fade {
          animation: fadeIn 0.4s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Proyectos;
