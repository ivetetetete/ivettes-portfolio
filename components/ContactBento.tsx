"use client";

import { useState } from "react";
import { Mail, Check, Copy, Linkedin, Github, MapPin, Send, Heart, Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactBento() {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();
  const email = "ivettes.business@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section id="contact" className="w-full scroll-mt-20">
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 rounded-3xl p-6 sm:p-10 shadow-xs relative overflow-hidden transition-colors">
        <div className="absolute -bottom-20 -right-20 size-80 bg-gradient-to-tr from-pink-100/70 via-purple-100/40 to-transparent dark:from-pink-500/10 dark:via-purple-500/5 dark:to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-16 -left-16 size-64 bg-gradient-to-br from-stone-100/80 to-transparent dark:from-neutral-800/30 dark:to-transparent rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-950/40 text-pink-700 dark:text-pink-300 border border-pink-200/80 dark:border-pink-800/60 mb-3">
            <Send className="size-3.5 text-pink-600 dark:text-pink-400" />
            <span className="uppercase">{t.contact.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            {t.contact.title}
          </h2>

          <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 mt-4 leading-relaxed max-w-xl">
            {t.contact.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={handleCopy}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-xs ${
                copied
                  ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700"
                  : "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100"
              }`}
            >
              {copied ? (
                <>
                  <Check className="size-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{t.contact.emailCopied}</span>
                </>
              ) : (
                <>
                  <Copy className="size-4 text-neutral-400 dark:text-neutral-500" />
                  <span>{t.contact.copyEmail}</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-sm font-medium hover:bg-neutral-200/90 dark:hover:bg-neutral-700 border border-neutral-200/80 dark:border-neutral-700/80 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail className="size-4 text-neutral-600 dark:text-neutral-400" />
              <span>{t.contact.directEmail}</span>
            </a>

            <a
              href="/pdf/CV_IvetteSanjurjo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-sm font-medium hover:bg-neutral-200/90 dark:hover:bg-neutral-700 border border-neutral-200/80 dark:border-neutral-700/80 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="size-4 text-neutral-600 dark:text-neutral-400" />
              <span>{t.contact.resumePdf}</span>
            </a>
          </div>

          <div className="mt-10 pt-6 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="flex items-center gap-1.5 font-medium text-neutral-700 dark:text-neutral-300">
                <MapPin className="size-3.5 text-neutral-400" />
                {t.contact.location}
              </span>
              <a
                href={`mailto:${email}`}
                className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors underline underline-offset-2"
              >
                {email}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/ivette-sanjurjo-martínez/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors flex items-center gap-1.5 p-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                <Linkedin className="size-4 text-neutral-600 dark:text-neutral-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/ivetetetete"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors flex items-center gap-1.5 p-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                <Github className="size-4 text-neutral-600 dark:text-neutral-400" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-8 text-center text-xs text-neutral-500 dark:text-neutral-400 pb-12 flex flex-col sm:flex-row items-center justify-center gap-2">
        <span className="font-mono font-bold text-neutral-800 dark:text-neutral-200">{"{ivy.}"}</span>
        <span>{t.contact.footerRights}</span>
        <span className="flex items-center gap-1 text-neutral-500 dark:text-neutral-400">
          {t.contact.footerCrafted}
          <Heart className="size-3 text-pink-500 fill-pink-500 inline ml-0.5" />
        </span>
      </footer>
    </section>
  );
}
