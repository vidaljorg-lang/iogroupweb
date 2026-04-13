import { useState } from "react";

const proyectos = [
  {
    titulo: "Proyecto 1",
    imagen: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    video: "https://player.vimeo.com/video/76979871"
  },
  {
    titulo: "Proyecto 2",
    imagen: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    video: "https://player.vimeo.com/video/22439234"
  }
];

const Proyectos = () => {
  const [videoActivo, setVideoActivo] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* HEADER */}
      <div className="text-center py-16 px-6">
        <h1 className="text-4xl font-bold mb-4">
          Nuestros Proyectos
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          Descubre algunos de nuestros casos, experiencias y soluciones
          desarrolladas para nuestros clientes.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 pb-20">
        {proyectos.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition cursor-pointer border-b-4 border-orange-500"
            onClick={() => setVideoActivo(p.video)}
          >
            <img
              src={p.imagen}
              alt={p.titulo}
              className="rounded-t-xl w-full h-56 object-cover"
            />
            <div className="p-4">
              <p className="font-semibold">{p.titulo}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL VIDEO */}
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
