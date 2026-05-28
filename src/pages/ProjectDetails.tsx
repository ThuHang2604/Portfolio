import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { useLanguage } from "../components/LanguageContext";
import { ArrowLeft, ChevronLeft, ChevronRight, Server, Compass, AlertCircle, CheckCircle, Maximize2, X } from "lucide-react";
import { GithubIcon } from "../components/SocialIcons";

const getMockUrl = (src: string) => {
  if (src.includes("/furnimart-image/")) {
    if (src.includes("home-page")) return "https://furnimart.com";
    if (src.includes("product-catalog")) return "https://furnimart.com/catalog";
    if (src.includes("product-detail-3d")) return "https://furnimart.com/product/wooden-chair-3d";
    if (src.includes("checkout-out")) return "https://furnimart.com/checkout/payment";
    if (src.includes("pos-dashboard")) return "https://furnimart.com/pos/terminal";
    if (src.includes("dashboard-seller")) return "https://furnimart.com/seller/dashboard";
    if (src.includes("warehouse-layout")) return "https://furnimart.com/warehouse/layout-grid";
    return "https://furnimart.com";
  }
  if (src.includes("/ev-battery-image/")) {
    if (src.includes("home-page")) return "https://ev-battery-marketplace.com";
    if (src.includes("login")) return "https://ev-battery-marketplace.com/login";
    if (src.includes("search")) return "https://ev-battery-marketplace.com/search";
    if (src.includes("detail")) return "https://ev-battery-marketplace.com/items/102";
    if (src.includes("post-page")) return "https://ev-battery-marketplace.com/post-listing";
    if (src.includes("chat")) return "https://ev-battery-marketplace.com/messages";
    if (src.includes("admin-dashboard")) return "https://ev-battery-marketplace.com/admin";
    if (src.includes("api-docs_")) return "https://api.ev-battery-marketplace.com/docs";
    return "https://ev-battery-marketplace.com";
  }
  if (src.includes("/quiz-image/")) {
    if (src.includes("login-page")) return "https://quiz-platform.com/login";
    if (src.includes("student-home")) return "https://quiz-platform.com/dashboard";
    if (src.includes("take-the-quiz")) return "https://quiz-platform.com/quiz/take/104";
    if (src.includes("quiz-result")) return "https://quiz-platform.com/quiz/result/104";
    if (src.includes("admin-dashboard")) return "https://quiz-platform.com/admin/dashboard";
    if (src.includes("manage-question")) return "https://quiz-platform.com/admin/questions";
    if (src.includes("create-quiz")) return "https://quiz-platform.com/admin/quiz/new";
    return "https://quiz-platform.com";
  }
  return "https://myportfolio.dev";
};

function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!id || !(id in t.projects.items)) {
    return <Navigate to="/projects" replace />;
  }

  const projectKey = id as "furniture" | "trading" | "quiz";
  const project = t.projects.items[projectKey];

  // Simulated project slides (each slide showcases a different perspective overlaying the default image)
  const slides = project.slides && project.slides.length > 0
    ? project.slides
    : [
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
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
          <div className="mt-6 flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center rounded-lg bg-indigo-50 dark:bg-indigo-950/40 px-3.5 py-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-3">
              {project.githubFront && (
                <a
                  href={project.githubFront}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-105 px-4 py-2.5 text-xs font-bold text-white transition-all shadow-xs border border-slate-200 dark:border-transparent cursor-pointer hover:-translate-y-0.5 duration-200"
                >
                  <GithubIcon size={16} className="h-4 w-4" />
                  <span>Frontend GitHub</span>
                </a>
              )}
              {project.githubBack && (
                <a
                  href={project.githubBack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-105 px-4 py-2.5 text-xs font-bold text-white transition-all shadow-xs border border-slate-200 dark:border-transparent cursor-pointer hover:-translate-y-0.5 duration-200"
                >
                  <GithubIcon size={16} className="h-4 w-4" />
                  <span>Backend GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Project Visual Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Area: Browser Mockup Frame (8 columns) */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200/70 dark:border-slate-800/80 shadow-md overflow-hidden transition-all duration-300">
            {/* macOS Browser Header Bar */}
            <div className="flex items-center justify-between px-4 py-3.5 bg-slate-100 dark:bg-slate-900 border-b border-slate-250/60 dark:border-slate-800/80 select-none">
              <div className="flex gap-1.5 items-center shrink-0">
                <span className="w-3.5 h-3.5 rounded-full bg-rose-500 shadow-inner"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-amber-500 shadow-inner"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 shadow-inner"></span>
              </div>
              
              {/* URL Address Bar */}
              <div className="flex-1 max-w-md mx-4 px-4 py-1.5 bg-slate-200/70 dark:bg-slate-950/60 rounded-lg text-xs font-semibold text-slate-500 dark:text-slate-400 text-center flex items-center justify-center gap-1.5 select-none truncate border border-slate-300/10">
                <span className="text-emerald-500 text-[10px]">🔒</span>
                <span>{getMockUrl(slides[currentSlide].src)}</span>
              </div>
              
              <div className="flex items-center gap-1 shrink-0">
                <button 
                  onClick={() => setIsLightboxOpen(true)}
                  className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-805 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                  title={language === 'vi' ? 'Toàn màn hình' : language === 'fr' ? 'Plein écran' : 'Fullscreen'}
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Screenshot Frame Area */}
            <div className="relative group overflow-hidden bg-slate-50 dark:bg-slate-900/40 flex items-center justify-center p-3 sm:p-4 min-h-[300px] sm:min-h-[420px] lg:min-h-[480px]">
              <img
                src={slides[currentSlide].src}
                alt={`${project.title} - ${slides[currentSlide].label}`}
                className="w-full h-auto max-h-[300px] sm:max-h-[420px] lg:max-h-[480px] object-contain rounded-lg transition-transform duration-500 shadow-xs select-none"
              />
              
              {/* Hover Dark Overlay Zoom Indicator */}
              <div 
                onClick={() => setIsLightboxOpen(true)}
                className="absolute inset-0 bg-slate-950/20 dark:bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-zoom-in"
              >
                <div className="flex items-center gap-2 px-4.5 py-2.5 rounded-full bg-slate-900/90 backdrop-blur-xs text-white text-xs font-bold shadow-lg border border-white/10 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                  <Maximize2 className="h-4 w-4" />
                  <span>
                    {language === 'vi' 
                      ? 'Xem toàn màn hình' 
                      : language === 'fr' 
                      ? 'Plein écran (qualité originale)' 
                      : 'View full screen (original resolution)'}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Area: Interactive Tour Card Sidebar (4 columns) */}
          <div className="lg:col-span-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200/70 dark:border-slate-800/80 p-6 shadow-sm flex flex-col justify-between h-full min-h-[480px] lg:min-h-[552px]">
            <div>
              {/* Slide Counter and Navigation Buttons */}
              <div className="flex items-center justify-between mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/45 rounded-full border border-indigo-100/50 dark:border-indigo-900/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                  {language === 'vi' ? 'Phân hệ' : language === 'fr' ? 'Module' : 'Module'} {currentSlide + 1} / {slides.length}
                </span>
                
                {/* Arrow Controls */}
                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    className="p-2 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/70 dark:border-slate-800 text-slate-655 dark:text-slate-355 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 dark:hover:border-indigo-900/40 transition-all cursor-pointer shadow-2xs"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/70 dark:border-slate-800 text-slate-655 dark:text-slate-355 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 dark:hover:border-indigo-900/40 transition-all cursor-pointer shadow-2xs"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {/* Active Slide Details */}
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-black text-slate-950 dark:text-white tracking-tight leading-snug">
                  {slides[currentSlide].label}
                </h3>
                <p className="text-sm text-slate-655 dark:text-slate-355 font-semibold leading-relaxed">
                  {slides[currentSlide].desc}
                </p>
              </div>
            </div>
            
            {/* Interactive Screen Picker list */}
            <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/80">
              <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3.5">
                {language === 'vi' 
                  ? 'Hướng dẫn tham quan hệ thống' 
                  : language === 'fr' 
                  ? 'Sélectionner une étape de la visite' 
                  : 'System Tour Interface Steps'}
              </h4>
              
              <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1 select-none scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-800 scrollbar-track-transparent">
                {slides.map((slide, idx) => {
                  const isActive = currentSlide === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-full text-left px-3.5 py-3 rounded-xl border text-[11px] font-bold flex items-center gap-3 transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-indigo-600 border-indigo-600 text-white shadow-sm shadow-indigo-600/10"
                          : "bg-white dark:bg-slate-950/40 border-slate-200/60 dark:border-slate-800/80 text-slate-700 dark:text-slate-355 hover:bg-slate-100 dark:hover:bg-slate-850 hover:border-slate-300 dark:hover:border-slate-700"
                      }`}
                    >
                      <span className={`flex items-center justify-center shrink-0 w-5.5 h-5.5 rounded-lg text-[10px] font-black ${
                        isActive 
                          ? "bg-white/20 text-white" 
                          : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                      }`}>
                        {idx + 1}
                      </span>
                      <span className="leading-5 line-clamp-1 flex-1">{slide.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          
        </div>

        {/* Detailed Project Story (Purpose, Solves, Problems, Solutions) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column: Purpose & What It Solves */}
          <div className="space-y-8">
            {/* Purpose Card */}
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/80 shadow-xs">
              <h2 className="text-xl font-bold text-slate-950 dark:text-white flex items-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">
                  <Compass className="h-5 w-5" />
                </div>
                <span>{t.projects.purposeLabel}</span>
              </h2>
              <p className="mt-4 text-sm text-slate-655 dark:text-slate-355 leading-relaxed">
                {project.purpose}
              </p>
            </div>

            {/* What It Solves Card */}
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/80 shadow-xs">
              <h2 className="text-xl font-bold text-slate-950 dark:text-white flex items-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">
                  <Server className="h-5 w-5" />
                </div>
                <span>{t.projects.solvesLabel}</span>
              </h2>
              <p className="mt-4 text-sm text-slate-655 dark:text-slate-355 leading-relaxed">
                {project.solves}
              </p>
            </div>
          </div>

          {/* Right Column: Challenges & Solutions */}
          <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/65 dark:border-slate-800/80 shadow-xs space-y-6">
            
            {/* Problems Encountered */}
            <div className="p-5 rounded-xl bg-rose-50/50 dark:bg-rose-950/10 border border-rose-100 dark:border-rose-900/20">
              <h3 className="text-base font-bold text-rose-750 dark:text-rose-450 flex items-center gap-2.5">
                <AlertCircle className="h-5 w-5 shrink-0" />
                <span>{t.projects.problemsLabel}</span>
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.problems}
              </p>
            </div>

            {/* Solutions */}
            <div className="p-5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-100 dark:border-emerald-900/20">
              <h3 className="text-base font-bold text-emerald-750 dark:text-emerald-450 flex items-center gap-2.5">
                <CheckCircle className="h-5 w-5 shrink-0" />
                <span>{t.projects.solutionsLabel}</span>
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.solutions}
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 cursor-zoom-out animate-fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Top Header of Lightbox */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white select-none pointer-events-none">
            <div className="bg-slate-900/80 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-white/10 text-xs font-semibold">
              {slides[currentSlide].label}
            </div>
            <button 
              className="p-2 rounded-lg bg-slate-900/80 backdrop-blur-xs border border-white/10 hover:bg-slate-800 transition-colors pointer-events-auto cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setIsLightboxOpen(false);
              }}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Main Image */}
          <div className="relative max-w-7xl max-h-[80vh] w-full flex items-center justify-center pointer-events-none select-none">
            <img
              src={slides[currentSlide].src}
              alt={slides[currentSlide].label}
              className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-lg shadow-2xl border border-white/5 animate-scale-in"
            />
          </div>

          {/* Slide Info Footer */}
          <div className="absolute bottom-6 left-6 right-6 max-w-xl mx-auto text-center pointer-events-none select-none">
            <p className="text-xs text-slate-300 bg-slate-900/80 backdrop-blur-xs px-4 py-2.5 rounded-xl border border-white/10">
              {slides[currentSlide].desc}
            </p>
          </div>

          {/* Left/Right controls inside Lightbox */}
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-white/10 transition-colors pointer-events-auto cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-white/10 transition-colors pointer-events-auto cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default ProjectDetails;
