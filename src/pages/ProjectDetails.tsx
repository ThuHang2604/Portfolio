import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { useLanguage } from "../components/LanguageContext";
import { ArrowLeft, ChevronLeft, ChevronRight, Server, Compass, AlertCircle, CheckCircle } from "lucide-react";

function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!id || !(id in t.projects.items)) {
    return <Navigate to="/projects" replace />;
  }

  const projectKey = id as "furniture" | "trading" | "quiz";
  const project = t.projects.items[projectKey];

  // Simulated project slides (each slide showcases a different perspective overlaying the default image)
  const slides = [
    {
      src: "/default.jpg",
      label: "System Architecture & Layout Overview",
      desc: "Comprehensive display of database schemas, caching layers, and client-server relations."
    },
    {
      src: "/default.jpg",
      label: "Operational Admin Dashboard",
      desc: "Real-time logging, transaction tracking, user behavior matrices, and service health checkups."
    },
    {
      src: "/default.jpg",
      label: "Primary Client Interface",
      desc: "Responsive buyer catalog, instant interactive chat thread, and checkout verification."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="py-16 bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 animate-fade-in">
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Back navigation */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>{t.projects.backToList}</span>
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl leading-tight text-slate-950 dark:text-white">
            {project.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="inline-flex items-center rounded-lg bg-indigo-50 dark:bg-indigo-950/40 px-3.5 py-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Visual Carousel (Multiple Images) */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 shadow-md mb-16 aspect-video max-h-[500px]">
          <div className="relative h-full w-full">
            <img
              src={slides[currentSlide].src}
              alt={`${project.title} - Slide ${currentSlide + 1}`}
              className="h-full w-full object-cover object-center transition duration-500"
            />
            {/* Dark vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

            {/* Custom Interactive Slide Overlay */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 text-white z-10">
              <span className="inline-flex items-center rounded-md bg-indigo-600 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider mb-2">
                Slide {currentSlide + 1} of {slides.length}
              </span>
              <h3 className="text-lg md:text-2xl font-extrabold tracking-tight leading-snug">
                {slides[currentSlide].label}
              </h3>
              <p className="mt-2 text-xs md:text-sm text-slate-350 dark:text-slate-300 font-medium max-w-xl">
                {slides[currentSlide].desc}
              </p>
            </div>

            {/* Slide Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/60 hover:bg-slate-900/80 backdrop-blur-xs p-2 text-white border border-white/10 transition-colors z-20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-950/60 hover:bg-slate-900/80 backdrop-blur-xs p-2 text-white border border-white/10 transition-colors z-20"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="absolute top-4 right-4 flex gap-1.5 z-20">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? "w-6 bg-indigo-500" : "bg-slate-300/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Detailed Project Story (Purpose, Solves, Problems, Solutions) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Content (Purpose & Solves) - 2 Columns */}
          <div className="md:col-span-2 space-y-10">
            {/* Purpose */}
            <div>
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white flex items-center gap-3">
                <Compass className="h-5 w-5 text-indigo-500" />
                <span>{t.projects.purposeLabel}</span>
              </h2>
              <div className="mt-3 h-0.5 w-12 bg-indigo-500 rounded-full"></div>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.purpose}
              </p>
            </div>

            {/* Solves */}
            <div>
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white flex items-center gap-3">
                <Server className="h-5 w-5 text-indigo-500" />
                <span>{t.projects.solvesLabel}</span>
              </h2>
              <div className="mt-3 h-0.5 w-12 bg-indigo-500 rounded-full"></div>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.solves}
              </p>
            </div>
          </div>

          {/* Challenges & Solutions (Sidebar style) - 1 Column */}
          <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 space-y-8 h-fit shadow-xs">
            {/* Problems Encountered */}
            <div>
              <h3 className="text-lg font-bold text-rose-600 dark:text-rose-400 flex items-center gap-2">
                <AlertCircle className="h-4.5 w-4.5 shrink-0" />
                <span>{t.projects.problemsLabel}</span>
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.problems}
              </p>
            </div>

            {/* Solutions */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-850">
              <h3 className="text-lg font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                <CheckCircle className="h-4.5 w-4.5 shrink-0" />
                <span>{t.projects.solutionsLabel}</span>
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.solutions}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProjectDetails;
