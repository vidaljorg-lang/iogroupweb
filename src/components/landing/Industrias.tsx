const industries = [
  { sector: "Banca y Servicios Financieros", companies: "Banco de Chile, BancoEstado, BCI, Banco Falabella" },
  { sector: "Retail y Consumo Masivo", companies: "Walmart, Falabella, Ripley, Sodimac, Jumbo, Tottus, Cencosud" },
  { sector: "Minería, Energía e Industria", companies: "Codelco, Arauco, Lipigas, Holcim, Sandvik" },
  { sector: "Salud", companies: "Clínica Alemana, Clínica Santa María, Mutual de Seguridad" },
  { sector: "Servicios y Facility Management", companies: "Sodexo, Aramark, Prosegur, Adecco" },
  { sector: "Telecomunicaciones y Tecnología", companies: "DirecTV, Tigo" },
  { sector: "Seguros y Previsión", companies: "MAPFRE, Colmena, Seguros Falabella" },
];

const Industrias = () => {
  return (
    <section id="clientes" className="section-spacing">
      <div className="section-container">
        <div className="max-w-3xl mb-16">
          <h2 className="section-title mb-6">Industrias que han confiado en nosotros</h2>
          <p className="section-subtitle">
            Hemos trabajado con grandes empresas en distintos sectores de la economía.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <div key={ind.sector} className="bg-secondary rounded-2xl p-6">
              <h3 className="text-base font-semibold text-foreground mb-2">{ind.sector}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{ind.companies}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industrias;
