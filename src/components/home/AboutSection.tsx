import { useLanguage } from "../LanguageContext";
import { Shield, Target } from "lucide-react";

function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            {t.about.title}
          </h2>
          <div className="mt-4 h-1.5 w-16 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.about.intro}
          </p>
        </div>

        {/* Content Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Career Orientation Card */}
          <div className="relative rounded-2xl bg-white dark:bg-slate-950 p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {t.about.orientationTitle}
              </h3>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.about.orientationDesc}
              </p>
            </div>
          </div>

          {/* Career Goals Card */}
          <div className="relative rounded-2xl bg-white dark:bg-slate-950 p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400">
              <Target className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {t.about.goalsTitle}
              </h3>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.about.goalsDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;