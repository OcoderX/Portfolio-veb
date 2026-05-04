import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Andijon Murojaat Boti",
    description:
      "aiogram 3 asosida murojaatlarni qabul qilish, SQLite saqlash, admin ko'rik va XLSX statistik eksport funksiyalariga ega Telegram bot.",
    image: "images/project1.jpg",
    tags: ["Python", "aiogram", "SQLite", "openpyxl", "Telegram Bot"],
    github: "https://github.com/OcoderX/UniconSoft_Token_key",
    demo: "https://github.com/OcoderX/UniconSoft_Token_key#readme",
    featured: true,
    color: "from-violet-600 to-purple-700",
  },
  {
    id: 2,
    title: "USHM Telegram Bot",
    description:
      "Monitoring Excel fayllarini Telegram ichida avtomatik qayta ishlaydigan, oy bo'yicha saralaydigan va tayyor natija qaytaradigan amaliy bot.",
    image: "images/project2.jpg",
    tags: ["Python", "aiogram", "openpyxl", "xlrd", "Excel Automation"],
    github: "https://github.com/OcoderX/UniconSoft_Hujjatlar_monitoringi",
    demo: "https://github.com/OcoderX/UniconSoft_Hujjatlar_monitoringi#readme",
    featured: true,
    color: "from-cyan-600 to-blue-700",
  },
  {
    id: 3,
    title: "Anonim Chat Telegram",
    description:
      "Username va deep-link orqali anonim xabar almashish, admin boshqaruvi va hisobot imkoniyatlariga ega Telegram bot loyihasi.",
    image: "images/project3.jpg",
    tags: ["Python", "aiogram", "Telegram Bot", "reportlab", "openpyxl"],
    github: "https://github.com/OcoderX/Anonim_Chat_telegram",
    demo: "https://github.com/OcoderX/Anonim_Chat_telegram#readme",
    featured: false,
    color: "from-emerald-600 to-teal-700",
  },
  {
    id: 4,
    title: "Real Madrid Telegram Bot",
    description:
      "Real Madrid o'yinlari bo'yicha dashboard, admin approve/reject, obuna va kelgusi o'yin xabarnomalari uchun Telegram bot.",
    image: "images/project1.jpg",
    tags: ["Python", "aiogram", "aiohttp", "Telegram Bot", "Notifier"],
    github: "https://github.com/OcoderX/RealMadrid",
    demo: "https://github.com/OcoderX/RealMadrid#readme",
    featured: false,
    color: "from-rose-600 to-pink-700",
  },
  {
    id: 5,
    title: "tatu",
    description:
      "Telegram chatda maxsus buyruq asosida matnni avtomatik formatga o'zgartirishga mo'ljallangan kichik bot yordamchisi.",
    image: "images/project2.jpg",
    tags: ["Python", "Telegram Bot", "Automation"],
    github: "https://github.com/OcoderX/tatu",
    demo: "https://github.com/OcoderX/tatu#readme",
    featured: false,
    color: "from-amber-600 to-orange-700",
  },
  {
    id: 6,
    title: "robo_ai",
    description:
      "AI va robototexnika yo'nalishidagi hamkorlik repository (OcoderX va IbrohimMath).",
    image: "images/project3.jpg",
    tags: ["AI", "Robotics", "Research"],
    github: "https://github.com/OcoderX/robo_ai",
    demo: "https://github.com/OcoderX/robo_ai",
    featured: false,
    color: "from-indigo-600 to-violet-700",
  },
];

const filters = ["Barchasi", "Python", "Telegram Bot", "aiogram", "AI", "Excel Automation"];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Barchasi");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered =
    activeFilter === "Barchasi"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-24 bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest">Mening ishlarim</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            Amaliy <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">loyihalar</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25"
                  : "bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 border border-white/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, idx) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative bg-slate-800/50 rounded-2xl overflow-hidden border border-white/5 hover:border-violet-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  loading="lazy"
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 group-hover:opacity-80 transition-opacity duration-300`} />

                <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 ${hoveredId === project.id ? "opacity-100" : "opacity-0"}`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-colors"
                  >
                    README
                  </a>
                </div>

                {project.featured && (
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-violet-600/90 backdrop-blur-sm text-white text-xs font-bold">
                    Asosiy loyiha
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-700/50 text-slate-400 text-xs rounded-lg border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a
            href="https://github.com/OcoderX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-violet-500/40 text-violet-400 font-semibold hover:bg-violet-500/10 transition-all duration-300 hover:-translate-y-1"
          >
            GitHub profilim: OcoderX
          </a>
        </div>
      </div>
    </section>
  );
}
