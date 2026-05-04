export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            &lt;OcoderX /&gt;
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            {["Bosh sahifa", "Haqimda", "Ko'nikmalar", "Loyihalar", "Bog'lanish"].map((item) => (
              <a
                key={item}
                href={`#${item === "Bosh sahifa" ? "home" : item === "Haqimda" ? "about" : item === "Ko'nikmalar" ? "skills" : item === "Loyihalar" ? "projects" : "contact"}`}
                className="hover:text-violet-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-300 hover:-translate-y-1"
            title="Yuqoriga"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>

        <div className="border-t border-white/5 mt-8 pt-6 text-center">
          <p className="text-slate-600 text-sm">
            © {currentYear} Khojiakbar Obidov. Barcha huquqlar himoyalangan. 
            <span className="text-violet-500 mx-1">♥</span> 
            React & Tailwind CSS bilan yaratildi
          </p>
        </div>
      </div>
    </footer>
  );
}
