import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import { Menu, X, Globe, ChevronDown } from "lucide-react";

function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'vi', label: 'Tiếng Việt' },
    { code: 'fr', label: 'Français' }
  ] as const;

  const activeLangLabel = languages.find(l => l.code === language)?.label || 'English';

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink 
          to="/" 
          className="text-2xl font-extrabold tracking-tight text-slate-900 hover:opacity-80 transition-opacity flex items-center gap-2.5"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white font-mono text-xs font-bold shadow-xs">
            &lt;/&gt;
          </div>
          <span className="font-extrabold tracking-tight text-slate-900">
            Thu<span className="text-indigo-600">Hang</span>
          </span>
        </NavLink>

        {/* Desktop Nav Items */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-sm font-semibold transition-colors hover:text-indigo-600 ${
                isActive 
                  ? 'text-indigo-600' 
                  : 'text-slate-600'
              }`
            }
          >
            {t.nav.home}
          </NavLink>

          <NavLink 
            to="/projects" 
            className={({ isActive }) => 
              `text-sm font-semibold transition-colors hover:text-indigo-600 ${
                isActive 
                  ? 'text-indigo-600' 
                  : 'text-slate-600'
              }`
            }
          >
            {t.nav.projects}
          </NavLink>

          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `text-sm font-semibold transition-colors hover:text-indigo-600 ${
                isActive 
                  ? 'text-indigo-600' 
                  : 'text-slate-600'
              }`
            }
          >
            {t.nav.contact}
          </NavLink>

          <a 
            href="/HangDTT_SoftwareEngineer_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold transition-colors text-slate-600 hover:text-indigo-600"
          >
            {t.nav.cv}
          </a>
        </nav>

        {/* Quick controls */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Language selection dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              onBlur={() => setTimeout(() => setLangDropdownOpen(false), 200)}
              className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <Globe className="h-3.5 w-3.5 text-slate-500" />
              <span>{activeLangLabel}</span>
              <ChevronDown className="h-3.5 w-3.5 text-slate-500" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-lg border border-slate-100 bg-white p-1 shadow-lg ring-1 ring-black/5">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`flex w-full items-center rounded-md px-3 py-2 text-left text-xs font-semibold transition-colors hover:bg-slate-50 ${
                      language === lang.code 
                        ? 'text-indigo-600' 
                        : 'text-slate-700'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile controls & menu toggle */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="rounded-lg border border-slate-200 p-2 text-slate-700 hover:bg-slate-50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white py-4 px-6 animate-fade-in">
          <nav className="flex flex-col gap-4 mb-6">
            <NavLink 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800 hover:text-indigo-600"
            >
              {t.nav.home}
            </NavLink>

            <NavLink 
              to="/projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800 hover:text-indigo-600"
            >
              {t.nav.projects}
            </NavLink>

            <NavLink 
              to="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800 hover:text-indigo-600"
            >
              {t.nav.contact}
            </NavLink>

            <a 
              href="/HangDTT_SoftwareEngineer_CV.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800 hover:text-indigo-600"
            >
              {t.nav.cv}
            </a>
          </nav>

          <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Language / Ngôn ngữ / Langue
            </p>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold border transition-colors ${
                    language === lang.code
                      ? 'bg-indigo-50 border-indigo-200 text-indigo-600'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;