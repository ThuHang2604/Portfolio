import { useLanguage } from "../LanguageContext";
import { Briefcase, Calendar, MapPin, Building } from "lucide-react";

function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            {t.experience.title}
          </h2>
          <div className="mt-4 h-1.5 w-16 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central line for desktop */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 hidden md:block"></div>

          {/* Internship entry */}
          <div className="relative flex flex-col md:flex-row items-start md:justify-between gap-8 md:gap-0 mb-12">
            {/* Left Column (Period & Company Logo placeholder on desktop) */}
            <div className="w-full md:w-[45%] flex flex-col md:items-end text-left md:text-right">
              <div className="inline-flex items-center gap-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/30 px-3 py-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50 self-start md:self-end">
                <Calendar className="h-3.5 w-3.5" />
                <span>{t.experience.internPeriod}</span>
              </div>
              <h3 className="mt-4 text-2xl font-extrabold text-slate-950 dark:text-white flex items-center gap-2 justify-start md:justify-end">
                <Building className="h-5 w-5 text-indigo-500 shrink-0" />
                <span>{t.experience.internCompany}</span>
              </h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2 justify-start md:justify-end">
                <MapPin className="h-4 w-4 text-slate-400 shrink-0" />
                <span>{t.experience.internLocation}</span>
              </p>
            </div>

            {/* Timeline center node */}
            <div className="absolute left-4 md:left-1/2 top-1.5 h-9 w-9 rounded-full bg-indigo-500 text-white flex items-center justify-center -translate-x-1/2 shadow-lg shadow-indigo-500/25 border-4 border-white dark:border-slate-950 z-10 hidden md:flex">
              <Briefcase className="h-4 w-4" />
            </div>

            {/* Right Column (Duties & Achievements) */}
            <div className="w-full md:w-[45%] pl-8 md:pl-0">
              <div className="rounded-2xl bg-white dark:bg-slate-950 p-6 md:p-8 border border-slate-100 dark:border-slate-800 shadow-sm relative">
                {/* Left arrow decoration for desktop */}
                <div className="absolute top-6 -left-2.5 h-5 w-5 rotate-45 border-b border-l border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 hidden md:block"></div>
                
                <h4 className="text-xl font-bold text-slate-950 dark:text-white">
                  {t.experience.internRole}
                </h4>

                <ul className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed list-disc pl-4">
                  {t.experience.internPoints.map((point, idx) => (
                    <li key={idx} className="marker:text-indigo-500">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
