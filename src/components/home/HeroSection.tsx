import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import { FileText, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../SocialIcons";

function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      {/* Background glowing decorations */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 -z-10 h-80 w-80 rounded-full bg-purple-500/10 dark:bg-purple-500/10 blur-3xl animate-pulse-slow"></div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between lg:gap-8">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="inline-flex items-center gap-2 rounded-full bg-indigo-50 dark:bg-indigo-950/50 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
              {t.hero.greeting}
            </p>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {t.hero.name}
            </h1>

            <h2 className="mt-3 text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent sm:text-3xl md:text-4xl">
              {t.hero.role}
            </h2>

            <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed mx-auto lg:mx-0">
              {t.hero.tagline}
            </p>

            {/* Socials quick-links */}
            <div className="mt-6 flex justify-center lg:justify-start gap-4 text-slate-500 dark:text-slate-400">
              <a 
                href="https://github.com/Thuhang2604" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/thuhangdo2604" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg hover:shadow-indigo-500/20 hover:bg-indigo-500 transition-all duration-300 group"
              >
                <span>{t.hero.viewProjects}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900/50 dark:hover:bg-slate-900 px-6 py-3.5 text-sm font-semibold text-slate-800 dark:text-slate-200 transition-all duration-300"
              >
                {t.hero.contactMe}
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/50 dark:bg-indigo-950/20 hover:bg-indigo-100/50 dark:hover:bg-indigo-950/40 px-6 py-3.5 text-sm font-semibold text-indigo-700 dark:text-indigo-400 transition-all duration-300"
              >
                <FileText className="h-4 w-4" />
                <span>{t.hero.downloadCv}</span>
              </Link>
            </div>
          </div>

          {/* Right Content - Animated Profile Frame */}
          <div className="flex justify-center flex-1 lg:justify-end">
            <div className="relative group">
              {/* Outer decorative gradient rings */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-60 blur-lg transition duration-1000 group-hover:opacity-80 group-hover:duration-200 animate-float"></div>
              
              <div className="relative h-72 w-72 md:h-80 md:w-80 overflow-hidden rounded-2xl border-2 border-white/10 shadow-2xl transition duration-500 group-hover:scale-[1.02]">
                <img
                  src="/AnhCV.jpg"
                  alt="Do Thi Thu Hang - Software Engineer"
                  className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/400?text=Do+Thi+Thu+Hang";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;