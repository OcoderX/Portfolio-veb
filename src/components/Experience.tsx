import { useEffect, useRef, useState } from "react";
import { experiences, education, certificates } from "../data";

export default function Experience() {
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
    <section id="experience" className="py-24 bg-slate-800/30 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest">Ish tajribam</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            Ish va <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">o'qish tajribam</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-cyan-500 to-emerald-500" />

              <div className="space-y-8">
                {experiences.map((exp, idx) => (
                  <div
                    key={exp.id}
                    className={`relative pl-16 transition-all duration-700 ${
                      visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                    }`}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <div className={`absolute left-4 top-4 w-4 h-4 rounded-full ${exp.dot} ring-4 ring-slate-900 -translate-x-1/2`} />

                    <div className={`bg-slate-900/70 backdrop-blur-sm border-l-2 ${exp.color} border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300 group`}>
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold text-violet-300">{exp.icon}</span>
                            <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                          </div>
                          <div className="text-violet-400 font-medium">{exp.company}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-slate-400 text-sm">{exp.period}</div>
                          <div className="text-slate-500 text-xs mt-1">{exp.duration}</div>
                          <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-400 text-xs">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement) => (
                          <li key={achievement} className="flex items-start gap-2 text-sm text-slate-400">
                            <span className="text-emerald-400 mt-0.5 flex-shrink-0">-</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <span key={t} className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded-lg">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`space-y-6 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="bg-slate-900/70 border border-white/5 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span>EDU</span> Ta'lim
              </h3>
              <div className="space-y-5">
                {education.map((edu) => (
                  <div key={edu.degree} className="border-l-2 border-violet-500/50 pl-4">
                    <div className="text-white font-medium text-sm mb-1">{edu.degree}</div>
                    <div className="text-slate-400 text-xs mb-1">{edu.school}</div>
                    <div className="text-violet-400 text-xs">{edu.period}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/70 border border-white/5 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span>CERT</span> Sertifikatlar va baho
              </h3>
              <div className="space-y-3">
                {certificates.map((cert) => (
                  <div key={cert.name} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <div>
                      <div className="text-white text-sm font-medium">{cert.name}</div>
                      <div className="text-slate-500 text-xs">{cert.issuer}</div>
                    </div>
                    <span className="text-violet-400 text-xs font-bold">{cert.level}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/70 border border-white/5 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span>LANG</span> Tillar
              </h3>
              <div className="space-y-4">
                {[
                  { lang: "O'zbek tili", level: "Ona tili", percent: 100 },
                  { lang: "Rus tili", level: "Boshlang'ich", percent: 30 },
                  { lang: "Ingliz tili", level: "Yaxshi", percent: 70 },
                ].map((l) => (
                  <div key={l.lang}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-300">{l.lang}</span>
                      <span className="text-slate-500">{l.level}</span>
                    </div>
                    <div className="h-1.5 bg-slate-700 rounded-full">
                      <div
                        className="h-full bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full transition-all duration-1000"
                        style={{ width: `${l.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
