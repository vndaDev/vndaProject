import Navbar from "@/components/Navbar";
import BentoCard from "@/components/BentoCard";
import StatusBadge from "@/components/StatusBadge";
import { Video, Cpu, Code, ArrowRight, Zap, User } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[900px] h-[900px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,141,148,0.12) 0%, rgba(0,141,148,0.04) 40%, transparent 70%)",
            animation: "ambient-pulse 6s ease-in-out infinite",
          }}
        />
      </div>

      <Navbar />

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-20 md:pt-24">
        {/* Hero */}
        <section className="pt-36 pb-20 animate-fade-in-up">
          <div className="mb-6">
            <StatusBadge label="ESTADO: EN DESARROLLO" />
          </div>
          <h1
            className="text-4xl md:text-6xl font-extrabold leading-[1.1] mb-6 max-w-3xl"
            style={{
              background: "linear-gradient(180deg, #f2f2f2 0%, #888888 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Ingeniería Digital
            <br />
            Obsesionada con el Rendimiento
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mb-8">
            Mi enfoque no es solo la funcionalidad,
            sino la <span className="text-primary font-medium">velocidad</span>.
            Optimización de sistemas, edición de video y desarrollo
            de soluciones web de alto rendimiento. Esto será algo grande.
          </p>
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-lg text-primary-foreground transition-all duration-300"
            style={{
              background: "hsl(182 100% 29%)",
              boxShadow: "0 0 20px -4px rgba(0, 141, 148, 0.5)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px -2px rgba(0, 141, 148, 0.7)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px -4px rgba(0, 141, 148, 0.5)";
            }}
          >
            Explorar Servicios <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-20 pb-20 animate-fade-in-up">
          <div className="rounded-2xl border border-slate-200/30 bg-slate-950/30 p-6 md:p-10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] backdrop-blur">
            <div className="flex items-center gap-3 mb-4 text-primary animate-fade-in-up">
              <User className="w-4 h-4 text-primary" strokeWidth={1.5} />
              <h3 className="text-xs tracking-widest uppercase font-semibold text-muted-foreground">Sobre mí</h3>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold">Desarrollo enfocado en front-end y WordPress</h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-4xl mt-3">
                Estoy en formación y mi objetivo actual es avanzar como desarrollador front-end y crear sitios en WordPress.
                No soy full-stack, aún estoy aprendiendo React y apenas estoy familiarizándome con herramientas como Vite.
                Me interesa optimizar interfaces, mejorar la experiencia de usuario y dominar las bases del desarrollo web moderno.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-slate-200/40 bg-slate-900/70 p-4">
                <h3 className="text-sm uppercase tracking-wide font-semibold text-primary">Progreso</h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  Migración de proyectos a Vite, MVP con React y primeros benchmarks de render en móvil.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/40 bg-slate-900/70 p-4">
                <h3 className="text-sm uppercase tracking-wide font-semibold text-primary">Foco</h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  Optimización de hardware, edición de video y continuidad de UX para interfaces limpias y rápidas.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200/40 bg-slate-900/70 p-4">
                <h3 className="text-sm uppercase tracking-wide font-semibold text-primary">Ruta</h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  De aprendiz a profesional en ciclos ágiles: pronto más proyectos reales, más prácticas y más rendimiento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid */}
        <section id="services" className="scroll-mt-20 pb-24">
          <div className="flex items-center gap-3 mb-8 animate-fade-in-up delay-200">
            <Zap className="w-4 h-4 text-primary" strokeWidth={1.5} />
            <h2 className="text-muted-foreground text-[11px] font-medium tracking-[0.3em] uppercase">
              Servicios
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="animate-fade-in-up delay-300">
              <BentoCard
                icon={Video}
                tag="/video_production"
                title="Edición de Video Profesional"
                description="En desarrollo: estoy aprendiendo y ajustando el workflow. Pronto ofreceré servicios de edición de video con enfoque en velocidad y calidad."
                status="En desarrollo"
              />
            </div>
            <div className="animate-fade-in-up delay-400">
              <BentoCard
                icon={Cpu}
                tag="/sys_optimization"
                title="Optimización de Hardware"
                description="Configuración de CPU, GPU y RAM para estabilidad y rendimiento extremo: overclock seguro, perfil de energía a medida y pruebas stress/bench con resultados en tiempo real."
              />
            </div>
            <div className="animate-fade-in-up delay-500">
              <BentoCard
                icon={Code}
                tag="/web_solutions"
                title="Desarrollo Front-End"
                description="Especialista en React + Vite y arquitectura avanzada de WordPress. Enfoque en rendimiento para ingeniería de interfaces."
              />
            </div>
            <div className="animate-fade-in-up delay-600">
              <BentoCard
                icon={Cpu}
                tag="/wordpress"
                title="Desarrollo WordPress"
                description="Alternativa futura: solución rápida y económica para sitios básicos, fácil de mantener y de implementar."
                status="Próximamente"
              />
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contact" className="scroll-mt-20 pb-20 animate-fade-in-up delay-600">
          <div
            className="rounded-lg p-8 text-center"
            style={{
              background: "#121214",
              border: "1px solid #1f1f22",
            }}
          >
            <h2 className="text-foreground text-xl font-semibold mb-2">Construyamos Algo Rápido</h2>
            <p className="text-muted-foreground text-sm mb-6">
              Disponible para proyectos freelance y colaboraciones.
            </p>
            <a
              href="https://discord.gg/WMmZEvTJxq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-lg border transition-all duration-300"
              style={{
                borderColor: "rgba(0, 141, 148, 0.3)",
                color: "hsl(182 100% 29%)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "hsl(182 100% 29%)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px -5px rgba(0, 141, 148, 0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0, 141, 148, 0.3)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              Unirse a Discord <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 animate-fade-in-up delay-700" style={{ borderTop: "1px solid #1f1f22" }}>
        <p className="text-center text-muted-foreground text-[11px] tracking-widest uppercase">
          VNDA.DEV © {new Date().getFullYear()} — BAJA LATENCIA
        </p>
      </footer>
    </div>
  );
};

export default Index;
