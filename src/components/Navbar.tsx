import { useState } from "react";
import { Activity, Menu, X } from "lucide-react";

const navLinks = [
  { label: "SOBRE MÍ", href: "#about" },
  { label: "SERVICIOS", href: "#services" },
  { label: "CONTACTO", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[9999]"
      style={{
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        background: "rgba(10, 10, 11, 0.7)",
        borderBottom: "1px solid rgba(0, 141, 148, 0.1)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Activity className="w-5 h-5 text-primary" strokeWidth={1.5} />
          <span className="text-foreground font-bold text-lg tracking-tight">
            VNDA<span className="text-primary">.DEV</span>
          </span>
        </a>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-md border border-border text-muted-foreground hover:bg-white/10 transition"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground text-xs font-medium tracking-widest uppercase hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background border-t border-border px-6 overflow-hidden z-50 transition-all duration-350 ease-out ${
          open ? "max-h-60 opacity-100 py-2" : "max-h-0 opacity-0 py-0"
        }`}
        style={{
          boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div
          className={`space-y-2 transform transition-transform duration-300 ${
            open ? "translate-y-0" : "-translate-y-1"
          }`}
        >
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-muted-foreground py-2 hover:text-primary transition-colors"
              style={{
                transitionProperty: "opacity, transform",
                transitionDuration: "250ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: `${open ? index * 60 : 0}ms`,
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(-8px)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
