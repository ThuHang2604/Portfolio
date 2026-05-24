import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import { Mail, Phone, MapPin, ArrowRight, FileText } from "lucide-react";

function ContactSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            {t.contact.title}
          </h2>
          <div className="mt-4 h-1.5 w-16 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Layout */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-12 items-center justify-between">
          <div className="space-y-6 flex-1 w-full">
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
              {t.contact.infoTitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6 mt-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/50 shadow-xs">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">Email</span>
                  <a href="mailto:dothuhang2604@gmail.com" className="text-sm font-bold text-slate-900 dark:text-slate-100 hover:text-indigo-500 transition-colors">
                    dothuhang2604@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/50 shadow-xs">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">{t.contact.phoneLabel}</span>
                  <a href="tel:0938633024" className="text-sm font-bold text-slate-900 dark:text-slate-100 hover:text-indigo-500 transition-colors">
                    0938633024
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/50 shadow-xs">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">{t.contact.locationLabel}</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    Ho Chi Minh City, Vietnam
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action column */}
          <div className="flex flex-col gap-4 w-full md:w-auto shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 shadow-md shadow-indigo-500/10 group"
            >
              <span>{t.nav.contact}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 px-6 py-4 text-sm font-semibold text-slate-800 dark:text-slate-200 transition-all duration-300 shadow-xs"
            >
              <FileText className="h-4 w-4 text-slate-400" />
              <span>{t.contact.printCvBtn}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;