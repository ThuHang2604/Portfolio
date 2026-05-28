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
        <div className="flex flex-col-reverse items-center gap-16 lg:flex-row lg:justify-between lg:gap-8">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left relative">
            {/* Floating decorative shapes for left balance */}
            <div className="absolute -top-10 left-10 text-slate-300 dark:text-slate-800 select-none hidden lg:block animate-float">
              <svg width="30" height="15" viewBox="0 0 30 15" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M0,7.5 L7.5,0 L15,15 L22.5,0 L30,7.5" />
              </svg>
            </div>
            
            <p className="text-base font-normal tracking-tight text-slate-500 dark:text-slate-400 sm:text-lg md:text-xl lg:text-2xl">
              {t.hero.greeting}
            </p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl relative inline-block w-full text-center lg:text-left leading-tight">
              {t.hero.name}
              <span className="absolute -right-8 top-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-800 select-none font-bold text-2xl hidden lg:block">+</span>
            </h1>

            <h2 className="mt-6 text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent sm:text-3xl md:text-4xl pb-2 -mb-2">
              {t.hero.role}
            </h2>

            <p className="mt-8 max-w-xl text-lg text-slate-550 dark:text-slate-300 leading-relaxed mx-auto lg:mx-0 font-medium">
              {t.hero.tagline}
            </p>

            {/* Socials quick-links */}
            <div className="mt-8 flex justify-center lg:justify-start gap-4 text-slate-400 dark:text-slate-500">
              <a 
                href="https://github.com/Thuhang2604" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-indigo-650 dark:hover:text-indigo-400 transition-colors"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/thuhangdo2604" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-indigo-650 dark:hover:text-indigo-400 transition-colors"
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

              <a
                href="/HangDTT_SoftwareEngineer_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/50 dark:bg-indigo-950/20 hover:bg-indigo-100/50 dark:hover:bg-indigo-950/40 px-6 py-3.5 text-sm font-semibold text-indigo-700 dark:text-indigo-400 transition-all duration-300"
              >
                <FileText className="h-4 w-4" />
                <span>{t.hero.downloadCv}</span>
              </a>
            </div>

            {/* Left background shape for visual balance */}
            <div className="absolute -bottom-16 right-20 text-slate-300 dark:text-slate-800 select-none hidden lg:block opacity-40">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className="rotate-[45deg]">
                <polygon points="10,2 18,18 2,18" />
              </svg>
            </div>
          </div>

          {/* Right Content - Creative circle frame similar to Laura template */}
          <div className="flex justify-center flex-1 lg:justify-end shrink-0 relative">
            <div className="relative group w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center overflow-visible">
              
              {/* Large decorative circle in the background */}
              <div className="absolute w-[85%] h-[85%] rounded-full bg-indigo-500/10 dark:bg-indigo-950/20 border border-indigo-200/20 dark:border-indigo-800/10 -z-10 animate-pulse-slow"></div>

              {/* Thin curved decorative lines */}
              <svg className="absolute inset-0 w-full h-full text-slate-200 dark:text-slate-800/30 pointer-events-none -z-10" fill="none">
                <path d="M-100,50 Q120,-80 320,120 T720,50" stroke="currentColor" strokeWidth="1" />
                <path d="M-50,150 Q160,30 360,220 T760,150" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              </svg>

              {/* Floating tilted rounded violet square */}
              <div className="absolute top-12 left-4 w-10 h-10 rounded-xl bg-indigo-600 rotate-12 shadow-sm animate-float z-0"></div>

              {/* Floating tilted rounded cyan square */}
              <div className="absolute top-36 right-8 w-8 h-8 rounded-lg bg-cyan-400 rotate-45 shadow-xs z-0"></div>

              {/* Small floating blue dot bottom-left */}
              <div className="absolute bottom-16 left-8 w-3 h-3 rounded-full bg-indigo-500 z-0"></div>

              {/* Small floating blue dot middle-right */}
              <div className="absolute bottom-32 right-12 w-3.5 h-3.5 rounded-full bg-cyan-400 animate-pulse z-0"></div>

              {/* Small floating dot top-right */}
              <div className="absolute top-20 right-24 w-2 h-2 rounded-full bg-indigo-400 z-0"></div>

              {/* The character cutout (backgroundless PNG) */}
              <div className="absolute inset-0 flex items-center justify-center z-10 overflow-visible">
                <img
                  src="/AnhKhongNen.png"
                  alt="Thu Hang"
                  className="h-[105%] w-auto object-contain drop-shadow-[0_10px_25px_rgba(99,102,241,0.25)] transition-transform duration-500 group-hover:scale-[1.03] select-none"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/AnhCV.jpg";
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