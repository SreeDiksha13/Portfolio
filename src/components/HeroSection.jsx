import React from "react";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container-w-4xl mx-auto text-center z-10">
        <div className="space-y-6 ">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi </span>
            <span className=" opacity-0 animate-fade-in-delay-1"> , I'm</span>
            <span className="text-primary text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Diksha
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Curious mind at the crossroads of business, finance, development,
            and analysis. I build, decode, and discover patterns that turn ideas
            into impact.
          </p>
          <div className=" pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium;
  transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)];
  hover:scale-105 active:scale-95"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
