import { useLanguage } from "../LanguageContext";
import { GraduationCap, BookOpen, Music, Calendar } from "lucide-react";

function EducationSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            {t.education.title}
          </h2>
          <div className="mt-4 h-1.5 w-16 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Degree Card (Takes 1 Col) */}
          <div className="rounded-2xl bg-slate-50 dark:bg-slate-900 p-8 border border-slate-100 dark:border-slate-800 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white shadow-md shadow-indigo-500/20">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-slate-950 dark:text-white">
                {t.education.school}
              </h3>
              <p className="mt-2 text-base font-semibold text-slate-700 dark:text-slate-300">
                {t.education.degree}
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <Calendar className="h-4 w-4" />
                <span>{t.education.period}</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                {t.education.majorLabel}
              </span>
              <span className="text-base font-bold text-indigo-600 dark:text-indigo-400 block mt-1">
                {t.education.major}
              </span>
            </div>
          </div>

          {/* Subjects Card (Takes 1 Col) */}
          <div className="rounded-2xl bg-slate-50 dark:bg-slate-900 p-8 border border-slate-100 dark:border-slate-800 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                {t.education.subjectsTitle}
              </h3>
            </div>
            
            <div className="mt-6 grid grid-cols-1 gap-2.5">
              {t.education.subjects.map((sub, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2.5 rounded-lg bg-white dark:bg-slate-950 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200/40 dark:border-slate-800/40 shadow-xs"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500 shrink-0"></span>
                  <span>{sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Extracurricular activities Card (Takes 1 Col) */}
          <div className="rounded-2xl bg-slate-50 dark:bg-slate-900 p-8 border border-slate-100 dark:border-slate-800 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Music className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                  {t.education.extracurricularTitle}
                </h3>
              </div>
              
              <p className="mt-6 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.education.extracurricularDesc}
              </p>
            </div>

            <div className="mt-8 rounded-xl bg-amber-500/5 border border-amber-500/10 p-4 text-xs font-medium text-amber-800 dark:text-amber-400/95 leading-relaxed">
              Developing soft skills: team leadership, cultural event logistics, communication, and collaboration.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
