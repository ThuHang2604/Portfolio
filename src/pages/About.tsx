import { useLanguage } from "../components/LanguageContext";
import EducationSection from "../components/home/EducationSection";
import ExperienceSection from "../components/home/ExperienceSection";
import { Target, Compass, Award } from "lucide-react";

function About() {
  const { t } = useLanguage();

  return (
    <div className="py-12 bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Intro Hero banner inside About */}
        <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 md:p-12 mb-16 shadow-xs flex flex-col md:flex-row gap-8 items-center">
          <div className="h-32 w-32 md:h-40 md:w-40 rounded-2xl overflow-hidden shrink-0 border-2 border-indigo-500/30">
            <img
              src="/AnhCV.jpg"
              alt="Do Thi Thu Hang"
              className="h-full w-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://via.placeholder.com/200?text=Do+Thi+Thu+Hang";
              }}
            />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-slate-950 dark:text-white sm:text-4xl">
              {t.hero.name}
            </h1>
            <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-2">
              {t.hero.role}
            </p>
            <p className="mt-4 text-slate-600 dark:text-slate-450 leading-relaxed text-sm md:text-base">
              {t.about.intro}
            </p>
          </div>
        </div>

        {/* Career Philosophy/Details grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="rounded-2xl border border-slate-100 dark:border-slate-800 p-6 flex flex-col gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
              <Compass className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-950 dark:text-white">
              Backend Focus
            </h3>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              {t.about.orientationTitle}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-450 leading-relaxed mt-2">
              {t.about.orientationDesc}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 dark:border-slate-800 p-6 flex flex-col gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-950 dark:text-white">
              Strategic Vision
            </h3>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              {t.about.goalsTitle}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-450 leading-relaxed mt-2">
              {t.about.goalsDesc}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 dark:border-slate-800 p-6 flex flex-col gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-950 dark:text-white">
              Key Values
            </h3>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Core Principles
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-455 leading-relaxed mt-2">
              Prioritizing database efficiency, writing clean testable code (Jest/JUnit), building secure APIs (JWT, HTTPS, input validation), and working in fast-paced Agile sprint teams.
            </p>
          </div>
        </div>

        {/* Embed work experience & education details natively */}
        <div className="border-t border-slate-100 dark:border-slate-900 pt-16">
          <ExperienceSection />
        </div>

        <div className="border-t border-slate-100 dark:border-slate-900 pt-16">
          <EducationSection />
        </div>

      </div>
    </div>
  );
}

export default About;