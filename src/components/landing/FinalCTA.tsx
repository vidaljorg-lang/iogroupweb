const FinalCTA = () => {
  return (
    <section id="contacto" className="section-spacing">
      <div className="section-container text-center max-w-3xl mx-auto">
        <h2 className="section-title mb-6">
          Conversemos sobre tu próximo proyecto de capacitación
        </h2>
        <p className="section-subtitle mx-auto mb-10">
          Ayudamos a las organizaciones a diseñar soluciones formativas que generan impacto real en el desempeño de las personas.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:omarw@iogroupchile.com"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            Solicitar reunión
          </a>
          <a
            href="mailto:omarw@iogroupchile.com"
            className="inline-flex items-center justify-center border border-border text-foreground font-medium px-8 py-3 rounded-lg hover:bg-secondary transition-colors text-sm"
          >
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
