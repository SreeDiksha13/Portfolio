import About from "../components/About";
import HeroSection from "../components/HeroSection";
import { Navbar } from "../components/NavBar";
import SkillsSection from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import Projects from "../components/Projects";
import { ContactSection } from "../components/ContactSection";
import Footer from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">
      <ThemeToggle />
      <StarBackground />
      <Navbar />

      <main>
        <HeroSection />
        <About />
        <SkillsSection />
        <Projects />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};
