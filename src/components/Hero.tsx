import { useEffect, useState } from "react";

const roles = [
  "Python Telegram Bot Developer",
  "Django Developer",
  "OcoderX community manager",
  "Kiberxavfsizlik mutaxassisi",
  "Sun'iy intellekt mutaxassisi",
  "Sun'iy intellekt o'qitish",
  "Mexatronika va robototexnika mutaxassisi",
  "IoT mutaxassisi",
  
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 60 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, roleIndex]);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('images/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900" />

      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl" />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-violet-400/60 rounded-full animate-bounce"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${2 + Math.random() * 4}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">


        {/* Name */}
        <h1
          className={`text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Salom, Men{" "}
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Hojakbar
          </span>
        </h1>

        {/* Typewriter */}
        <div
          className={`grid grid-cols-2 gap-3 mb-8 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-right">
            <span className="text-2xl md:text-4xl font-light text-slate-400">Men —</span>
          </div>
          <div className="text-left">
            <span className="text-2xl md:text-4xl font-bold text-white font-mono">
              {displayed}
              <span className="animate-pulse text-violet-400">|</span>
            </span>
          </div>
        </div>

        {/* Description */}
        <p
          className={`text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Python Telegram botlar va Django asosida web ilovalar yarataman.
          2022-2025-yillarda TATU talabalari uchun yirik Telegram kanallarini yuritganman.
          Hozir TypeScript bilan sayt tuzishni, kiberxavfsizlik asoslarini va
          sun'iy intellekt yo'nalishini chuqurroq o'rganyapman.
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={() => scrollToSection("#projects")}
            className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-violet-500/40 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
          >
            Loyihalarni ko'rish
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button
            onClick={() => scrollToSection("#contact")}
            className="px-8 py-4 rounded-2xl border border-white/20 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
          >
            Bog'lanish
          </button>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-3 gap-8 max-w-lg mx-auto transition-all duration-700 delay-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { value: "Bot", label: "Python Telegram" },
            { value: "TATU", label: "Community" },
            { value: "2K+", label: "OcoderX kanali" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-9 rounded-full border border-slate-600 flex justify-center pt-2">
          <div className="w-1 h-2 bg-violet-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
