import React from "react";
import { Code, ChartNoAxesCombined, BrainCircuit } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl mf:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 ">
            <h3 className="text-2xl font-semibold">
              Insightful Analyst & Web Developer
            </h3>
            <p className="text-muted-foreground ">
              I am a web developer and data-driven analyst with experience
              building responsive applications and extracting actionable
              insights from complex data.
            </p>

            <p className="text-muted-foreground">
              By combining coding skills with strong analytical thinking, I help
              turn business and financial data into meaningful solutions and
              impactful decisions.
            </p>

            <div className="flex felx-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium;
  transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)];
  hover:scale-105 active:scale-95"
              >
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/13AVyWETpl7z4c8QRHmTGkS4Sy74Mk4zL/view?usp=drive_link"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {" "}
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building engaging, fun websites with clean, user-friendly
                    interfaces using modern technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ChartNoAxesCombined className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Business Analytics</h4>
                  <p className="text-muted-foreground">
                    Analyzing complex business and financial data using BI tools
                    to uncover actionable insights, helping organizations make
                    smarter, data-driven decisions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Analytics and ML</h4>
                  <p className="text-muted-foreground">
                    Leveraging analytics and machine learning to turn complex
                    data into actionable insights and smart solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
