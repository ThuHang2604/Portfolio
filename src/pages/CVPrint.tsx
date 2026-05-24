import { useLanguage } from "../components/LanguageContext";
import { Printer, ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/SocialIcons";
import { Link } from "react-router-dom";

function CVPrint() {
  const { t, language } = useLanguage();

  const handlePrint = () => {
    window.print();
  };

  const projectKeys = ["furniture", "trading", "quiz"] as const;

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-905 py-8 px-4 sm:px-6 transition-colors duration-300">
      
      {/* Top Toolbar - Hidden in Print */}
      <div className="no-print mx-auto max-w-4xl mb-6 flex items-center justify-between bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 p-4 rounded-2xl shadow-xs">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{t.contact.infoTitle}</span>
        </Link>

        <div className="flex items-center gap-3">
          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
            Language: <strong className="text-slate-700 dark:text-slate-200">{language.toUpperCase()}</strong>
          </span>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-4 py-2 text-xs font-bold text-white shadow-xs transition-all duration-300 cursor-pointer"
          >
            <Printer className="h-4 w-4" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* A4 Sheet Container */}
      <div className="print-page mx-auto max-w-4xl bg-white text-slate-800 p-8 md:p-12 shadow-md border border-slate-200/50 rounded-xs print:shadow-none print:border-none print:p-0 print:rounded-none">
        
        {/* CV Header: Name, Title, Contact, and Photo */}
        <div className="flex flex-col-reverse sm:flex-row justify-between items-start gap-6 border-b border-slate-200 pb-8">
          <div className="space-y-3 flex-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 uppercase">
              {t.hero.name}
            </h1>
            <h2 className="text-lg font-bold text-indigo-600 tracking-wide uppercase">
              {t.hero.role}
            </h2>
            
            {/* Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-3 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-slate-400" />
                <span>Ho Chi Minh City, Vietnam</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-slate-400" />
                <a href="mailto:dothuhang2604@gmail.com">dothuhang2604@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-slate-400" />
                <a href="tel:0938633024">0938633024</a>
              </div>
              <div className="flex items-center gap-2">
                <GithubIcon className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                <a href="https://github.com/Thuhang2604" target="_blank" rel="noreferrer">github.com/Thuhang2604</a>
              </div>
              <div className="flex items-center gap-2 sm:col-span-2">
                <LinkedinIcon className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                <a href="https://linkedin.com/in/thuhangdo2604" target="_blank" rel="noreferrer">linkedin.com/in/thuhangdo2604</a>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="h-28 w-28 rounded-xl overflow-hidden shrink-0 border border-slate-200 shadow-xs self-center sm:self-auto">
            <img
              src="/AnhCV.jpg"
              alt="Do Thi Thu Hang"
              className="h-full w-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://via.placeholder.com/150";
              }}
            />
          </div>
        </div>

        {/* Profile Objective / Bio */}
        <div className="py-6 border-b border-slate-200">
          <p className="text-xs text-slate-650 leading-relaxed font-medium">
            {t.hero.tagline}
          </p>
        </div>

        {/* Work Experience */}
        <div className="py-6 border-b border-slate-200">
          <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-4">
            {t.experience.title}
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-0">
                <h4 className="text-xs font-extrabold text-slate-900">
                  {t.experience.internCompany} &mdash; <span className="text-indigo-600">{t.experience.internRole}</span>
                </h4>
                <span className="text-[10px] font-bold text-slate-500">{t.experience.internPeriod}</span>
              </div>
              <span className="text-[10px] font-bold text-slate-400 mt-1 block">{t.experience.internLocation}</span>
              
              <ul className="mt-3 space-y-2 text-xs text-slate-600 pl-4 list-disc">
                {t.experience.internPoints.map((point, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Academic Projects */}
        <div className="py-6 border-b border-slate-200">
          <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-4">
            {t.projects.title} (Academic)
          </h3>
          <div className="space-y-5">
            {projectKeys.map((key) => {
              const project = t.projects.items[key];
              return (
                <div key={key}>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-0">
                    <h4 className="text-xs font-extrabold text-slate-900">
                      {project.title}
                    </h4>
                  </div>
                  <p className="text-[10px] font-bold text-slate-450 mt-1">
                    Tech Stack: <span className="text-indigo-600 font-semibold">{project.techStack.join(", ")}</span>
                  </p>
                  <ul className="mt-2 space-y-1.5 text-xs text-slate-600 pl-4 list-disc leading-relaxed">
                    <li><strong>Objective:</strong> {project.purpose}</li>
                    <li><strong>Challenges:</strong> {project.problems}</li>
                    <li><strong>Resolution:</strong> {project.solutions}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills & Technologies */}
        <div className="py-6 border-b border-slate-200">
          <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-4">
            {t.skills.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <strong className="text-slate-800 text-[11px] block mb-1.5">{t.skills.backend}</strong>
              <span className="text-slate-600">Spring Boot, Node.js, ExpressJS, RESTful APIs, JWT Auth</span>
            </div>
            <div>
              <strong className="text-slate-800 text-[11px] block mb-1.5">{t.skills.frontend}</strong>
              <span className="text-slate-600">ReactJS, Redux Toolkit, TailwindCSS, HTML5, CSS3</span>
            </div>
            <div>
              <strong className="text-slate-800 text-[11px] block mb-1.5">{t.skills.databases}</strong>
              <span className="text-slate-600">MySQL, PostgreSQL, MongoDB, SQL Server</span>
            </div>
            <div>
              <strong className="text-slate-800 text-[11px] block mb-1.5">{t.skills.tools}</strong>
              <span className="text-slate-600">Git/GitLab, Docker, Postman, Vercel, Jira, Trello</span>
            </div>
          </div>
        </div>

        {/* Education & Languages & Extracurriculars */}
        <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Education */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-3">
              {t.education.title}
            </h3>
            <div className="text-xs">
              <strong className="text-slate-800 block">{t.education.school} &mdash; {t.education.period}</strong>
              <span className="text-slate-600 block mt-1">{t.education.degree}</span>
              <span className="text-slate-600 block mt-0.5">{t.education.majorLabel}: {t.education.major}</span>
              <div className="mt-2 text-[10px] text-slate-500 leading-relaxed">
                <strong>Subjects:</strong> {t.education.subjects.join(", ")}
              </div>
            </div>
          </div>

          {/* Languages & Extra */}
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-3">
                Languages
              </h3>
              <ul className="text-xs text-slate-600 space-y-1">
                <li><strong>Vietnamese:</strong> Native</li>
                <li><strong>English:</strong> Intermediate (Working)</li>
                <li><strong>French:</strong> Basic</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[10px] font-extrabold text-slate-900 uppercase tracking-wider mb-1.5">
                Extracurricular
              </h3>
              <p className="text-[10px] text-slate-500 leading-normal">
                Traditional Instrument Club (FTI) - Event coordinator.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CVPrint;
