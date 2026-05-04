import { useEffect, useRef, useState } from "react";

const managedChannels = [
  {
    name: "TATUga Aloqador",
    handle: "@tatuda",
    period: "2022 - 2025",
    audience: "TATU talabalari",
    description:
      "TATU talabalariga oid yangiliklar, talabalar hayoti va foydali e'lonlar bilan katta auditoriyani ushlab turgan kanal.",
    href: "https://t.me/tatuda",
    source: "https://tginsider.app/en/channel/@tatuda",
    accent: "from-violet-500 to-indigo-600",
  },
  {
    name: "TATU BAZA",
    handle: "@tatu_baza",
    period: "2022 - 2025",
    audience: "Bazalar arxivi",
    description:
      "Fanlar, materiallar va talabalarga kerak bo'ladigan bazalarni tartibli tarqatish uchun yuritilgan arxiv kanali.",
    href: "https://t.me/tatu_baza",
    source: "https://t.me/tatu_baza",
    accent: "from-cyan-500 to-blue-600",
  },
  {
    name: "TATU1K",
    handle: "@tatu1k",
    period: "2022 - 2025",
    audience: "1-kurslar va quizlar",
    description:
      "1-kurs talabalari, quiz havolalari va TATU ichidagi foydali guruhlarni jamlagan community kanali.",
    href: "https://t.me/tatu1k",
    source: "https://nicegram.app/hub/group/tatu1k",
    accent: "from-emerald-500 to-teal-600",
  },
];

const identityCards = [
  {
    label: "OcoderX nomi",
    value: "TATU talabalari orasida tanilgan nickname",
    detail:
      "Ochiq Telegram profilida TATU bilan bog'langan @OcoderX akkaunti va xabar uchun @OcoderXbot ko'rsatilgan.",
    href: "https://t.me/OcoderX",
    action: "Profilni ko'rish",
  },
  {
    label: "OcoderX kanali",
    value: "2 mingdan ortiq obunachiga ega ta'lim yo'nalishidagi kanal",
    detail:
      "Telemetrio ochiq sahifasida OcoderX kanali Uzbekistan va Education kategoriyalarida ko'rsatilgan.",
    href: "https://t.me/ocoderxs",
    source: "https://telemetr.io/en/channels/1868922720-ocoderxs",
    action: "Kanalni ko'rish",
  },
  {
    label: "Kitob tarjimalari",
    value: "Kitoblardan ma'noli joylar va iqtiboslar",
    detail:
      "Tarjima kanallarida o'qilgan kitoblardan qisqa, mazmunli parcha va iqtiboslar ulashilgan.",
    href: "#contact",
    action: "Aloqa",
  },
];

export default function Community() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="community" className="py-24 bg-slate-800/40 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest">Community</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            TATU kanallari va <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">OcoderX</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-600 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 mt-5 max-w-3xl mx-auto leading-relaxed">
            2022-yildan 2025-yilgacha TATU atrofidagi yirik Telegram kanallarini yuritib,
            talabalar uchun yangilik, baza, quiz va foydali havolalarni tartibli yetkazib borganman.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {managedChannels.map((channel, idx) => (
            <article
              key={channel.name}
              className={`group bg-slate-900/70 border border-white/5 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-500/10 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${channel.accent} flex items-center justify-center text-white text-xs font-black mb-5`}>
                TG
              </div>
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-white font-bold text-xl group-hover:text-violet-300 transition-colors">
                    {channel.name}
                  </h3>
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 text-sm hover:text-cyan-300"
                  >
                    {channel.handle}
                  </a>
                </div>
                <span className="px-3 py-1 rounded-full bg-violet-500/15 text-violet-300 text-xs font-bold whitespace-nowrap">
                  {channel.period}
                </span>
              </div>
              <div className="text-slate-500 text-xs uppercase tracking-wide mb-3">
                {channel.audience}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                {channel.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-xl bg-slate-800 text-white text-sm font-semibold border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-colors"
                >
                  Kanalni ko'rish
                </a>
                <a
                  href={channel.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-xl text-slate-400 text-sm border border-white/10 hover:text-white hover:border-violet-500/50 transition-colors"
                >
                  Manba
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className={`grid md:grid-cols-3 gap-5 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {identityCards.map((card) => (
            <article
              key={card.label}
              className="bg-slate-900/60 border border-white/5 rounded-2xl p-5 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300"
            >
              <div className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-2">
                {card.label}
              </div>
              <h3 className="text-white font-bold text-base mb-2">
                {card.value}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {card.detail}
              </p>
              <div className="flex flex-wrap gap-3 mt-5">
                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="text-cyan-400 text-sm font-semibold hover:text-cyan-300"
                >
                  {card.action}
                </a>
                {card.source && (
                  <a
                    href={card.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 text-sm font-semibold hover:text-white"
                  >
                    Manba
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
