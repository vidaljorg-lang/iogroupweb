import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo-iog.svg";
const Header = ({ active }: { active?: string }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Soluciones", href: "/#soluciones" },
  { label: "Metodología", href: "/#metodologia" },
  { label: "Plataformas", href: "/#plataformas" },
  { label: "Clientes", href: "/#clientes" },
  { label: "Proyectos", href: "/proyectos" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="section-container flex items-center justify-between h-18">
<a href="/">
<img
  src={logo}
  alt="IO Group"
  className="h-16 md:h-18 w-auto py-2"
  />
</a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
  active === item.label.toLowerCase()
    ? "text-orange-500 font-semibold"
    : "text-muted-foreground hover:text-foreground"
}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Solicitar reunión
          </a>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="section-container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2 rounded-lg text-center hover:opacity-90 transition-opacity"
              onClick={() => setMobileOpen(false)}
            >
              Solicitar reunión
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
