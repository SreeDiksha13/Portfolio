import React from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "BlogApp",
    description:
      "A MERN stack blog application where users can view and comment on blogs, and the admin can manage content and comments.",
    image: "/projects/BlogApp.png",
    tags: ["MongoDB", "Tailwind", "React", "Node.js", "Gemini API"],
    demoURL: "https://blogapp-1-x2nz.onrender.com/",
    gitHubURL: "https://github.com/SreeDiksha13/BlogApp",
  },
  {
    id: 2,
    title: "QuoteApp",
    description:
      "A simple interactive quote app that displays inspiring quotes. Users can view, refresh, and share quotes.",
    image: "/projects/QuoteApp.png",
    tags: ["React.js", "Tailwind", "Gemini API"],
    demoURL: "https://rainbow-cendol-b55154.netlify.app/",
    gitHubURL: "https://github.com/SreeDiksha13/Quote_App-React",
  },
  {
    id: 3,
    title: "MovieLens Recommendation System",
    description:
      "Personalized movie recommender using the MovieLens 10M dataset.",
    image: "/projects/MovieLens.png",
    tags: ["R", "ML", "Recommendation System", "Data Analytics"],
    demoURL: "https://rpubs.com/ReadingWithDiksha/1208699",
    gitHubURL: "#",
  },
  {
    id: 4,
    title: "ChatBot",
    description:
      "A smart chatbot that provides real-time, helpful responses in a smooth conversational interface.",
    image: "/projects/chatbot.png",
    tags: ["GenAI", "Gemini API", "React.js"],
    demoURL: "#",
    gitHubURL: "https://github.com/SreeDiksha13/ChatBot",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of projects highlighting my skills in web development,
          analytics, and building impactful solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.gitHubURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/SreeDiksha13"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check out my GitHub! <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
