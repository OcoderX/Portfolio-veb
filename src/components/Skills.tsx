import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Python & Web",
    icon: "PY",
    color: "from-violet-500 to-purple-500",
    skills: [
      { name: "Python", level: 85, icon: "PY" },
      { name: "aiogram (2/3)", level: 84, icon: "AIO" },
      { name: "Telegram Bot", level: 86, icon: "BOT" },
      { name: "REST API", level: 74, icon: "API" },
      { name: "SQLite/PostgreSQL", level: 67, icon: "DB" },
    ],
  },
  {
    title: "Sayt tuzish",
    icon: "WEB",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "HTML/CSS", level: 70, icon: "UI" },
      { name: "JavaScript", level: 58, icon: "JS" },
      { name: "TypeScript", level: 48, icon: "TS" },
      { name: "React", level: 45, icon: "RX" },
      { name: "Git/GitHub", level: 68, icon: "GIT" },
    ],
  },
  {
    title: "AI & Security",
    icon: "AI",
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Sun'iy intellekt", level: 66, icon: "AI" },
      { name: "Mexatronika", level: 60, icon: "MX" },
      { name: "Robototexnika", level: 60, icon: "RB" },
      { name: "Kiberxavfsizlik asoslari", level: 45, icon: "SEC" },
      { name: "Linux", level: 60, icon: "LX" },
    ],
  },
];

const techStack = [
  "Python",
  "aiogram",
  "Telegram Bot",
  "openpyxl",
  "xlrd",
  "aiohttp",
  "reportlab",
  "REST API",
  "PostgreSQL",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Git/GitHub",
  "Docker (basic)",
  "Linux",
  "AI",
];

function SkillBar({ name, level, icon, delay }: { name: string; level: number; icon: string; delay: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), delay);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-violet-300 w-8">{icon}</span>
          <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">{name}</span>
        </div>
        <span className="text-violet-400 text-sm font-bold">{width}%</span>
      </div>
      <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 bg-slate-800/50 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-violet-600/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-cyan-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest">Bilimlarim</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            Mening <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">ko'nikmalarim</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.title}
              className={`bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${catIdx * 150}ms` }}
            >
              <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-gradient-to-r ${category.color} bg-opacity-20 mb-6`}>
                <span className="text-xs font-bold text-white">{category.icon}</span>
                <span className="text-white font-bold">{category.title}</span>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, idx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                    delay={catIdx * 200 + idx * 100}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-slate-400 text-sm uppercase tracking-widest mb-6">Texnologiyalar steki</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, idx) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-800 border border-white/10 rounded-full text-slate-300 text-sm hover:border-violet-500/50 hover:text-white hover:bg-violet-500/10 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
