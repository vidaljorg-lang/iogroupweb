const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-8">

        {/* BLOQUE IZQUIERDO */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4">

          <a
            href="#"
            className="text-lg font-bold tracking-tight text-foreground"
          >
            IO Group <span className="text-primary">Chile</span>
          </a>

          <div className="flex flex-col items-center md:flex-row md:items-center gap-4 text-sm text-muted-foreground">

            <a
              href="https://www.iog.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              www.iog.cl
            </a>

            <a
              href="mailto:jorgev@iogroupchile.com"
              className="hover:text-foreground transition-colors"
            >
              jorgev@iogroupchile.com
            </a>

            <a
              href="mailto:omarw@iogroupchile.com"
              className="hover:text-foreground transition-colors"
            >
              omarw@iogroupchile.com
            </a>

          </div>

          {/* BOTÓN WHATSAPP */}
          <a
            href="https://wa.me/56999099469"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white text-sm font-medium px-5 py-2.5 rounded-md hover:bg-green-600 transition-colors"
          >
            ¡Hablemos por WhatsApp!
          </a>

          {/* DIRECCIÓN */}
          <p className="text-sm text-muted-foreground max-w-xs">
            Av. Nueva de Lyon 72 · Piso 18 · Providencia · Santiago · Chile
          </p>

        </div>

        {/* COPYRIGHT */}
        <p className="text-xs text-muted-foreground text-center md:text-right">
          © {new Date().getFullYear()} IO Group Chile. Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
