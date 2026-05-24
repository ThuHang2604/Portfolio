import { Link } from "react-router-dom";
import { useLanguage } from "../components/LanguageContext";
import { ArrowRight, Code, Server, Terminal } from "lucide-react";

function Projects() {
  const { t } = useLanguage();

  const projectList = [
    {
      key: "furniture",
      icon: <Terminal className="h-4 w-4" />,
      tag: "Full-Stack / 3D"
    },
    {
      key: "trading",
      icon: <Server className="h-4 w-4" />,
      tag: "Backend-heavy"
    },
    {
      key: "quiz",
      icon: <Code className="h-4 w-4" />,
      tag: "REST API"
    }
  ] as const;

  return (
    <div className="py-16 bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 animate-fade-in min-h-[80vh]">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            {t.projects.title}
          </h1>
          <div className="mt-4 h-1.5 w-16 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-base text-slate-500 dark:text-slate-400">
            A deep-dive collection of systems, dashboards, and APIs I designed. Click any project to see detailed problem statements, challenges, and implementation designs.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((item) => {
            const project = t.projects.items[item.key];
            return (
              <div 
                key={item.key}
                className="group flex flex-col rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Visual Panel */}
                <div className="relative h-56 overflow-hidden bg-slate-200 dark:bg-slate-950">
                  <img
                    src="/default.jpg"
                    alt={project.title}
                    className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
                  
                  {/* Badge Row */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="flex items-center gap-1.5 rounded-lg bg-indigo-600/90 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
                      {item.icon}
                      <span>{item.tag}</span>
                    </div>
                  </div>
                </div>

                {/* Body details */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm text-slate-650 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {project.shortDesc}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-800/50">
                    {/* Tech tag details */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center rounded-lg bg-white dark:bg-slate-950 px-2.5 py-1 text-[10px] font-bold text-slate-600 dark:text-slate-450 border border-slate-200/50 dark:border-slate-800/80 shadow-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/projects/${item.key}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 px-4 py-3.5 text-xs font-semibold text-white transition-all duration-300"
                    >
                      <span>{t.projects.viewDetails}</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
