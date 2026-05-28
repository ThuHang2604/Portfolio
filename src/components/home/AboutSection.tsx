import { useLanguage } from "../LanguageContext";
import { Shield, Target, Award, Code, Server } from "lucide-react";

function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white transition-colors duration-300 border-y border-slate-100 dark:border-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            {t.about.title}
          </h2>
          <div className="mt-4 h-1.5 w-16 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Profile Card & Biography (5 cols) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            
            {/* Visual Portrait Card */}
            <div className="relative group rounded-3xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-8 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
                <div className="relative h-28 w-28 md:h-32 md:w-32 rounded-2xl overflow-hidden shrink-0 border-2 border-indigo-500/20 group-hover:border-indigo-500/40 transition-colors duration-300">
                  <img
                    src="/AnhCV.jpg"
                    alt="Do Thi Thu Hang"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/200?text=Do+Thi+Thu+Hang";
                    }}
                  />
                </div>
                
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-extrabold text-slate-950 dark:text-white">
                    {t.hero.name}
                  </h3>
                  <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mt-1">
                    {t.hero.role}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 justify-center sm:justify-start">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300">
                      <Server className="h-3 w-3" /> Backend Focus
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300">
                      <Code className="h-3 w-3" /> Java & JS
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Short highlights */}
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-900 grid grid-cols-3 gap-2 text-center text-xs">
                <div>
                  <span className="block text-slate-400 font-semibold uppercase tracking-wider text-[10px]">Location</span>
                  <span className="mt-1 block font-bold text-slate-700 dark:text-slate-200">HCMC, VN</span>
                </div>
                <div>
                  <span className="block text-slate-400 font-semibold uppercase tracking-wider text-[10px]">Degree</span>
                  <span className="mt-1 block font-bold text-slate-700 dark:text-slate-200">SE Bachelor</span>
                </div>
                <div>
                  <span className="block text-slate-400 font-semibold uppercase tracking-wider text-[10px]">Focus</span>
                  <span className="mt-1 block font-bold text-slate-700 dark:text-slate-200">Spring/Node</span>
                </div>
              </div>
            </div>

            {/* Detailed Bio Text */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-950 dark:text-white border-l-4 border-indigo-500 pl-3">
                My Story & Background
              </h3>
              <p className="text-base text-slate-650 dark:text-slate-300 leading-relaxed font-medium">
                {t.about.intro}
              </p>
            </div>
          </div>

          {/* Right Column: Focus & Details Grid (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Backend Focus / Orientation Card */}
            <div className="relative rounded-2xl bg-white dark:bg-slate-950 p-6 md:p-8 shadow-xs hover:shadow-md transition-all duration-300 border border-slate-100 dark:border-slate-800/85 flex flex-col md:flex-row gap-6 group">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/10 group-hover:scale-105 transition-transform duration-300">
                <Shield className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-extrabold text-slate-950 dark:text-white">
                  {t.about.orientationTitle}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {t.about.orientationDesc}
                </p>
              </div>
            </div>

            {/* Career Goals Card */}
            <div className="relative rounded-2xl bg-white dark:bg-slate-950 p-6 md:p-8 shadow-xs hover:shadow-md transition-all duration-300 border border-slate-100 dark:border-slate-800/85 flex flex-col md:flex-row gap-6 group">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/10 group-hover:scale-105 transition-transform duration-300">
                <Target className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-extrabold text-slate-950 dark:text-white">
                  {t.about.goalsTitle}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {t.about.goalsDesc}
                </p>
              </div>
            </div>

            {/* Core Values Card */}
            <div className="relative rounded-2xl bg-white dark:bg-slate-950 p-6 md:p-8 shadow-xs hover:shadow-md transition-all duration-300 border border-slate-100 dark:border-slate-800/85 flex flex-col md:flex-row gap-6 group">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/10 group-hover:scale-105 transition-transform duration-300">
                <Award className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-extrabold text-slate-950 dark:text-white">
                  {t.about.valuesTitle}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {t.about.valuesDesc}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;