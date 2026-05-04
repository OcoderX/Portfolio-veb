import { useEffect, useRef, useState } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest">Mening haqimda</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            Men <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">kimman?</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className={`relative transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-violet-500/30" />
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-gradient-to-br from-violet-600/20 to-cyan-600/20" />

              <img
                src="images/profile.png"
                loading="lazy"
                alt="Khojiakbar - Python Telegram bot va Django dasturchisi"
                onError={(event) => {
                  event.currentTarget.src = "images/profile.jpg";
                }}
                className="relative z-10 w-full rounded-2xl object-cover aspect-square"
              />

              {/* Floating badges */}
              <div className="absolute -top-5 -right-5 z-20 bg-slate-800 border border-violet-500/40 rounded-xl px-4 py-2 shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <div className="text-white font-bold text-sm">TATU</div>
                    <div className="text-slate-400 text-xs">SI/Mexatronika va robototexnika</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 bg-slate-800 border border-cyan-500/40 rounded-xl px-6 py-3 shadow-xl w-max max-w-[90vw]">
                <div className="flex flex-col items-center text-center gap-1">
                  <span className="text-2xl mb-1">💻</span>
                  <div className="text-white font-bold text-sm">{"OcoderX | AI && Cybersecurity"}</div>
                  <div className="text-slate-400 text-xs">Python, Javascript va Machine learning</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Python botlar, Django va sun'iy intellekt yo'nalishida o'sayotgan dasturchi
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Men Python Telegram botlar va Django bilan ishlashni yaxshi tushunaman.
              Hozir TypeScript va React orqali sayt tuzishni
              bosqichma-bosqich o'rganyapman.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              2021-yilda Toshkent axborot texnologiyalari universitetida bakalavrni
              boshlaganman va 2025-yil iyunda bitirganman. Sun'iy intellekt
              kafedrasida SI/Mexatronika va robototexnika yo'nalishida o'qiganman.
              2022-2025-yillarda TATU talabalari orasida OcoderX nomi bilan tanilib,
              TATUga Aloqador, TATU BAZA va TATU1K kabi Telegram kanallarini
              yuritganman. Kitoblardan ma'noli iqtiboslar beriladigan tarjima
              kanallarida ham kontent qilganman. 2025-yilda Andijonda Saroy ziynati MCHJ buxgalteriyasida ishlaganman.
              2026-yil 1-yanvardan hozirgacha Uniconsoft MCHJda ish tajribamni
              oshiryapman. Qiziqishlarim: kiberxavfsizlik asoslari, sun'iy intellekt,
              mexatronika va robototexnika.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Ism", value: "Khojiakbar Obidov" },
                { label: "Ta'lim", value: "TATU, 2021-2025" },
                { label: "Yo'nalish", value: "SI/Mexatronika va robototexnika" },
                { label: "Hozirgi ish joyi", value: "Uniconsoft MCHJ" },
                { label: "Community", value: "TATU kanallari, 2022-2025" },
                { label: "Nickname", value: "OcoderX" },
                { label: "Asosiy yo'nalish", value: "Python Telegram bot, Django" },
              ].map((item) => (
                <div key={item.label} className="bg-slate-800/50 rounded-xl p-3 border border-white/5">
                  <div className="text-slate-500 text-xs uppercase tracking-wide mb-1">{item.label}</div>
                  <div className="text-white font-medium text-sm">{item.value}</div>
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <button className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold hover:shadow-xl hover:shadow-violet-500/30 transition-all duration-300 hover:-translate-y-1">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              CV yuklab olish
              <span className="group-hover:translate-y-1 transition-transform">⬇</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
