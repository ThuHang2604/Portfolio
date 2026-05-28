import { useLanguage } from "./LanguageContext";
import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Column */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Thu Hang
            </h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {t.hero.role}
            </p>
            <p className="mt-4 text-xs text-slate-400 dark:text-slate-500 leading-relaxed">
              Crafting reliable backend services, database architectures, and full-stack solutions.
            </p>
          </div>

          {/* Quick Info Column */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider">
              {t.contact.infoTitle}
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-slate-400" />
                <a href="mailto:dothuhang2604@gmail.com" className="hover:text-indigo-500 transition-colors">
                  dothuhang2604@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-slate-400" />
                <a href="tel:0938633024" className="hover:text-indigo-500 transition-colors">
                  0938633024
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-slate-400" />
                <span>Ho Chi Minh City, Vietnam</span>
              </li>
            </ul>
          </div>

          {/* Socials Column */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider">
              Social Links
            </h4>
            <div className="mt-4 flex gap-4">
              <a
                href="https://github.com/Thuhang2604"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-200 dark:border-slate-800 p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-300"
                aria-label="GitHub"
              >
                <GithubIcon className="h-5 w-5" />
              </a>

              <a
                href="https://linkedin.com/in/thuhangdo2604"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-200 dark:border-slate-800 p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-6 text-xs text-slate-400 dark:text-slate-500">
              &copy; {new Date().getFullYear()} ThuHang. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;