import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import BlurBackground from "./components/BlurBackground";
import SkillsSection from "./components/SkillsSection";

const App = () => {
  return (
    <>
      <BlurBackground />
      <Navbar />
      <main className="antialiased overflow-hidden max-w-7xl mx-auto relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <SkillsSection />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
};

export default App;
