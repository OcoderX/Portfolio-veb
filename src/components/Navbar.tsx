import { useState, useEffect } from "react";

const navLinks = [
  { label: "Bosh sahifa", href: "#home" },
  { label: "Haqimda", href: "#about" },
  { label: "Ko'nikmalar", href: "#skills" },
  { label: "Loyihalar", href: "#projects" },
  { label: "Tajriba", href: "#experience" },
  { label: "Bog'lanish", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ScrollSpy (Dinamik menyu faolligi)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    navLinks.forEach((link) => {
      const sectionId = link.href;
      const el = document.querySelector(sectionId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Menyuni ochganda orqa fonni skrol qilishni to'xtatish
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setActiveLink(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="text-2xl font-black tracking-tight bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            &lt;OcoderX /&gt;
          </a>

          {/* Desktop Links (lg va undan kattasi uchun) */}
          <ul className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative group ${
                    activeLink === link.href
                      ? "text-violet-400 bg-violet-500/10"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  {/* Active Indicator */}
                  {activeLink === link.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-violet-400 rounded-t-full shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
                  )}
                  {/* Hover effect */}
                  <span className={`absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10 ${activeLink === link.href ? "hidden" : ""}`} />
                </a>
              </li>
            ))}
          </ul>

          {/* Status Badge & CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-300 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Ishda
            </div>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] border border-violet-500/30"
            >
              Men bilan bog'laning
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-50 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-left ${menuOpen ? "rotate-45 translate-x-0.5" : ""}`} />
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-0" : ""}`} />
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-left ${menuOpen ? "-rotate-45 translate-x-0.5" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Drawer (O'ng tarafdan chiquvchi parda) */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[280px] bg-slate-900/95 backdrop-blur-2xl border-l border-white/10 z-50 lg:hidden transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full px-6 py-24">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link, i) => (
              <li 
                key={link.href}
                className={`transform transition-all duration-500 ${menuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
                style={{ transitionDelay: `${menuOpen ? i * 70 + 100 : 0}ms` }}
              >
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`flex items-center px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                    activeLink === link.href
                      ? "text-violet-400 bg-violet-500/10 border border-violet-500/20 shadow-[inset_0_0_12px_rgba(139,92,246,0.1)]"
                      : "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div 
            className={`mt-auto mb-8 transform transition-all duration-500 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            style={{ transitionDelay: `${menuOpen ? navLinks.length * 70 + 100 : 0}ms` }}
          >
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="flex justify-center w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-base font-semibold border border-violet-500/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] active:scale-95 transition-all"
            >
              Men bilan bog'laning
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
