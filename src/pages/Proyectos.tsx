import Header from "../components/landing/Header";
import { useState } from "react";

const Proyectos = () => {
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");

  const categorias = ["Todos", "E-learning", "IA", "Videos"];

  const proyectos = [
    {
      titulo: 'Curso e-learning: "Trabajo en Alturas"',
      categoria: "E-learning",
      imagen: "/images/proyecto1.jpg",
      video: "https://player.vimeo.com/video/76979871",
      descripcion: `Formación técnica integral centrada en el dominio de herramientas, sistemas de anclaje y protocolos de seguridad crítica. El programa permite a los colaboradores reconocer riesgos del entorno y aplicar medidas preventivas rigurosas bajo estándares normativos vigentes.

Impacto en la Operación: Asegura el cumplimiento legal (compliance) y reduce significativamente la probabilidad de incidentes de alto potencial. Al digitalizar la teoría mediante casos prácticos, el trabajador eleva su competencia técnica antes de la ejecución en terreno, optimizando los tiempos de supervisión y la seguridad operativa.`
    },
    {
      titulo: 'Curso e-learning: "Comité Paritario de Higiene y Seguridad (CPHS)"',
      categoria: "E-learning",
      imagen: "/images/proyecto2.jpg",
      video: "https://player.vimeo.com/video/22439234",
      descripcion: `Solución formativa diseñada para profesionalizar la gestión de los miembros del comité. El programa abarca desde el marco legal y normativo hasta metodologías avanzadas para la investigación de incidentes y detección de brechas de seguridad.

Impacto en la Operación: Fomenta una cultura preventiva autónoma y proactiva. Su implementación se traduce en una gestión más eficiente de los riesgos internos y mejora la trazabilidad de las acciones correctivas, facilitando el cumplimiento ante las auditorías de organismos administradores.`
    },
    {
      titulo: 'Curso e-learning: "Falabella SAC"',
      categoria: "E-learning",
      imagen: "/images/proyecto3.jpg",
      video: "https://player.vimeo.com/video/76979871",
      descripcion: `Diseño de una trayectoria de aprendizaje ágil centrada en la estandarización de la experiencia de marca. El curso dota al personal de herramientas para la resolución de conflictos y la gestión de la atención en diversos canales de contacto.

Impacto en la Operación: Incremento medible en los índices de satisfacción del cliente (NPS) y optimización del desempeño de la primera línea. Al reducir los tiempos de resolución y fortalecer la resiliencia del equipo, se logra disminuir el agotamiento emocional y la rotación de personal.`
    },
    {
      titulo: 'Videoanimación: "Me Cuido en Casa" (Gestión REAS)',
      categoria: "Videos",
      imagen: "/images/proyecto4.jpg",
      video: "https://player.vimeo.com/video/22439234",
      descripcion: `Cápsula audiovisual de alta claridad pedagógica enfocada en la instrucción técnica para la segregación, transporte y disposición final de Residuos de Establecimientos de Atención de Salud (REAS).

Impacto en la Operación: Mitigación crítica de riesgos biológicos para el personal operativo de aseo. La simplificación de protocolos complejos a través de la animación garantiza que el conocimiento sea transversal a todos los niveles, asegurando estándares sanitarios y evitando sanciones administrativas.`
    },
    {
      titulo: 'Videoanimación: "La Voz que Educa"',
      categoria: "Videos",
      imagen: "/images/proyecto5.jpg",
      video: "https://player.vimeo.com/video/76979871",
      descripcion: `Campaña audiovisual estratégica orientada a la prevención de patologías vocales en docentes. El recurso identifica factores de riesgo ocupacionales, ambientales y personales, entregando técnicas de cuidado para el uso profesional de la voz.

Impacto en la Operación: Fortalece la salud ocupacional y la continuidad pedagógica al reducir el ausentismo laboral por disfonías. Al involucrar el liderazgo escolar en la prevención, se crea un entorno de trabajo sostenible que reconoce la voz como la herramienta productiva fundamental del docente.`
    }
  ];

  const [videoActivo, setVideoActivo] = useState(proyectos[0].video);

  const proyectosFiltrados =
    categoriaActiva === "Todos"
      ? proyectos
      : proyectos.filter(p => p.categoria === categoriaActiva);

  const proyectoActivo = proyectos.find(p => p.video === videoActivo);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header active="proyectos" />

      {/* HEADER */}
      <div className="text-center pt-24 pb-16 px-6">
        <h1 className="text-4xl font-bold mb-4">Nuestros Proyectos</h1>
        <p className="max-w-2xl mx-auto text-gray-400">
          Descubre algunos de nuestros casos, experiencias y soluciones desarrolladas para nuestros clientes.
        </p>
      </div>

      {/* FILTROS */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categorias.map(cat => (
          <button
            key={cat}
            onClick={() => setCategoriaActiva(cat)}
            className={`px-4 py-2 rounded-full border ${
              categoriaActiva === cat
                ? "bg-orange-500 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* CONTENIDO */}
      <div className="max-w-7xl mx-auto px-6 pb-20">

        {/* HERO */}
        <div className="flex flex-col lg:flex-row gap-10 items-center mb-12">

          <div className="w-full lg:w-2/3">
            <iframe
              src={videoActivo}
              className="w-full h-[400px] rounded-xl"
              allow="autoplay; fullscreen"
            />
          </div>

          <div className="w-full lg:w-1/3">
            <h2 className="text-3xl font-bold mb-4">
              {proyectoActivo?.titulo}
            </h2>

            <p className="text-gray-400 whitespace-pre-line">
              {proyectoActivo?.descripcion}
            </p>
          </div>

        </div>

        {/* ROW */}
        <div className="flex gap-6 overflow-x-auto pb-4">
          {proyectosFiltrados.map((p, i) => (
            <div
              key={i}
              onClick={() => setVideoActivo(p.video)}
              className={`min-w-[220px] cursor-pointer group ${
                videoActivo === p.video ? "ring-2 ring-orange-500" : ""
              }`}
            >
              <div className="rounded-lg overflow-hidden">
                <img
                  src={p.imagen}
                  className="w-full h-[130px] object-cover group-hover:scale-105 transition"
                />
              </div>

              <p className="mt-2 text-sm group-hover:text-orange-500">
                {p.titulo}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Proyectos;
