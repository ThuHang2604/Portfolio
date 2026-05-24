import { useLanguage } from "../LanguageContext";
import { Code2, Server, Database, Wrench } from "lucide-react";

function SkillsSection() {
  const { t } = useLanguage();

  const skillGroups = [
    {
      title: t.skills.backend,
      icon: <Server className="h-5 w-5" />,
      colorClass: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200/50 dark:border-indigo-900/40",
      skills: ["Spring Boot", "Node.js", "ExpressJS", "RESTful APIs", "JWT Authentication"]
    },
    {
      title: t.skills.frontend,
      icon: <Code2 className="h-5 w-5" />,
      colorClass: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200/50 dark:border-purple-900/40",
      skills: ["ReactJS", "Redux Toolkit", "TailwindCSS", "HTML5", "CSS3"]
    },
    {
      title: t.skills.databases,
      icon: <Database className="h-5 w-5" />,
      colorClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-900/40",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server"]
    },
    {
      title: t.skills.tools,
      icon: <Wrench className="h-5 w-5" />,
      colorClass: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-200/50 dark:border-rose-900/40",
      skills: ["Git / GitLab", "Docker", "Postman", "Vercel", "Jira / Trello"]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            {t.skills.title}
          </h2>
          <div className="mt-4 h-1.5 w-16 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Skill Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, idx) => (
            <div 
              key={idx}
              className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 p-6 flex flex-col hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl border flex items-center justify-center ${group.colorClass}`}>
                  {group.icon}
                </div>
                <h3 className="font-bold text-slate-950 dark:text-white text-base">
                  {group.title}
                </h3>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5 mt-auto">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center rounded-lg bg-white dark:bg-slate-900 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-800/80 shadow-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;