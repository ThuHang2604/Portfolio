import { useState } from "react";
import type { FormEvent } from "react";
import { useLanguage } from "../components/LanguageContext";
import { Mail, Phone, MapPin, Send, FileText, CheckCircle } from "lucide-react";

function Contact() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    setStatus("sending");
    // Simulate API request
    setTimeout(() => {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <div className="py-16 bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 animate-fade-in min-h-[85vh]">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            {t.contact.title}
          </h1>
          <div className="mt-4 h-1.5 w-16 bg-indigo-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-base text-slate-500 dark:text-slate-400">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Info Card - 5 cols */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 md:p-10 flex flex-col justify-between shadow-xs">
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                {t.contact.infoTitle}
              </h2>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">Email</span>
                    <a href="mailto:dothuhang2604@gmail.com" className="text-base font-bold text-slate-900 dark:text-slate-100 hover:text-indigo-500 transition-colors">
                      dothuhang2604@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900/50">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">{t.contact.phoneLabel}</span>
                    <a href="tel:0938633024" className="text-base font-bold text-slate-900 dark:text-slate-100 hover:text-indigo-500 transition-colors">
                      0938633024
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/50">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">{t.contact.locationLabel}</span>
                    <span className="text-base font-bold text-slate-900 dark:text-slate-100">
                      Ho Chi Minh City, Vietnam
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive CV viewer trigger */}
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                Curriculum Vitae
              </h3>
              <a
                href="/HangDTT_SoftwareEngineer_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 px-6 py-4 text-sm font-semibold text-white shadow-md shadow-indigo-500/10 transition-all duration-300"
              >
                <FileText className="h-4.5 w-4.5" />
                <span>{t.contact.printCvBtn}</span>
              </a>
            </div>
          </div>

          {/* Form - 7 cols */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-100 dark:border-slate-800 p-8 md:p-10 bg-white dark:bg-slate-950 shadow-xs flex flex-col justify-between">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center h-full py-12">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/60 mb-6">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                  Message Sent!
                </h3>
                <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm max-w-sm">
                  {t.contact.successMsg}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 px-4 py-3.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-hidden focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 px-4 py-3.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-hidden focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 px-4 py-3.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-hidden focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 disabled:opacity-50 px-6 py-4 text-sm font-semibold text-white transition-all duration-300"
                >
                  <Send className="h-4.5 w-4.5" />
                  <span>
                    {status === "sending" ? t.contact.sending : t.contact.sendBtn}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;