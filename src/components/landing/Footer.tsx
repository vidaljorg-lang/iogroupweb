const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <a href="#" className="text-lg font-bold tracking-tight text-foreground">
            IO Group <span className="text-primary">Chile</span>
          </a>
     <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-muted-foreground">

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

  <a
    href="https://wa.me/56999099469"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
  >
    ¡Hablemos por WhatsApp!
  </a>

</div>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} IO Group Chile. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
