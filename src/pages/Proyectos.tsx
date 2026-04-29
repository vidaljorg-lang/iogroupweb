import Header from "../components/landing/Header";
import { useState } from "react";

const Proyectos = () => {
  const [videoActivo, setVideoActivo] = useState<string | null>(null);
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");

  const categorias = ["Todos", "E-learning", "IA", "Videos"];

  const proyectos = [
    {
      titulo: "Proyecto 1",
      categoria: "E-learning",
      imagen: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
      video: "https://player.vimeo.com/video/76979871"
    },
    {
      titulo: "Proyecto 2",
      categoria: "E-learning",
      imagen: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      video: "https://player.vimeo.com/video/22439234"
    },
    {
      titulo: "Proyecto 3",
      categoria: "IA",
      imagen: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      video: "https://player.vimeo.com/video/76979871"
    },
    {
      titulo: "Proyecto 4",
      categoria: "IA",
      imagen: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      video: "https://player.vimeo.com/video/22439234"
    },
    {
      titulo: "Proyecto 5",
      categoria: "Videos",
      imagen: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      video: "https://player.vimeo.com/video/76979871"
    },
    {
      titulo: "Proyecto 6",
      categoria: "Videos",
      imagen: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      video: "https://player.vimeo.com/video/22439234"
    },
    {
      titulo: "Proyecto 7",
      categoria: "E-learning",
      imagen: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
      video: "https://player.vimeo.com/video/76979871"
    },
    {
      titulo: "Proyecto 8",
      categoria: "IA",
      imagen: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
      video: "https://player.vimeo.com/video/22439234"
    },
    {
      titulo: "Proyecto 9",
      categoria: "Videos",
      imagen: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      video: "https://player.vimeo.com/video/76979871"
    }
  ];

  const proyectosFiltrados =
    categoriaActiva === "Todos"
      ? proyectos
      : proyectos.filter(p => p.categoria === categoriaActiva);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header active="proyectos" />

      {/* HEADER */}
      <div className="text-center pt-24 pb-16 px-6">
        <h1 className="text-4xl font-bold mb-4">Nuestros Proyectos</h1>
        <p className="max-w-2xl mx-auto text-gray-600">
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

      {/* HERO + ROW */}
      <div className="max-w-7xl mx-auto px-6 pb-20">

        {/* HERO */}
        <div className="flex flex-col lg:flex-row gap-10 items-center mb-12">

          <div className="w-full lg:w-2/3">
            <iframe
              src={proyectosFiltrados[0]?.video}
              className="w-full h-[400px] rounded-xl"
              allow="autoplay; fullscreen"
            />
          </div>

          <div className="w-full lg:w-1/3">
            <h2 className="text-3xl font-bold mb-4">
              {proyectosFiltrados[0]?.titulo || "Proyecto"}
            </h2>
            <p className="text-gray-400">
              Descripción del proyecto. Aquí puedes explicar qué se hizo, impacto, cliente, etc.
            </p>
          </div>

        </div>

        {/* ROW */}
        <div className="flex gap-6 overflow-x-auto pb-4">
          {proyectosFiltrados.map((p, i) => (
            <div
              key={i}
              className="min-w-[220px] cursor-pointer group"
              onClick={() => setVideoActivo(p.video)}
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

      {/* MODAL */}
      {videoActivo && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl">
            <iframe
              src={videoActivo}
              className="w-full h-[500px]"
              allow="autoplay; fullscreen"
            />
            <div className="text-center p-4">
              <button
                onClick={() => setVideoActivo(null)}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Proyectos;
