import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import { ArrowRight, Code } from "lucide-react";

function ProjectsSection() {
  const { t } = useLanguage();

  const projectKeys = ["furniture", "trading", "quiz"] as const;

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              {t.projects.title}
            </h2>
            <div className="mt-4 h-1.5 w-16 bg-indigo-500 rounded-full"></div>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors group self-start md:self-auto"
          >
            <span>{t.nav.projects}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectKeys.map((key) => {
            const project = t.projects.items[key];
            return (
              <div 
                key={key}
                className="group flex flex-col rounded-2xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800/80 shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Image panel */}
                <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src="/default.jpg"
                    alt={project.title}
                    className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
                    <Code className="h-3 w-3" />
                    <span>Academic</span>
                  </div>
                </div>

                {/* Info Content */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                      {project.shortDesc}
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                    {/* Tech stack row */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center rounded-md bg-slate-50 dark:bg-slate-900 px-2 py-1 text-[10px] font-bold text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800/60"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="inline-flex items-center rounded-md bg-slate-50 dark:bg-slate-900 px-2 py-1 text-[10px] font-bold text-slate-400 border border-slate-100 dark:border-slate-800/60">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    <Link
                      to={`/projects/${key}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-905 dark:hover:bg-slate-800 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300"
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
    </section>
  );
}

export default ProjectsSection;