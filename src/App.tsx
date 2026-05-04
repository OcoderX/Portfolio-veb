import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Community = lazy(() => import("./components/Community"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Yengil yuklanish ko'rsatkichi (Fallback)
const Loader = () => (
  <div className="flex items-center justify-center py-24">
    <div className="w-12 h-12 border-4 border-violet-500/20 border-t-violet-500 rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <div className="bg-slate-900 font-[Inter,sans-serif]">
      <Navbar />
      <Hero />
      <Suspense fallback={<Loader />}>
        <About />
        <Skills />
        <Projects />
        <Community />
        <Experience />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}
