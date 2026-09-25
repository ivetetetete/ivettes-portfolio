"use client";

import Image from "next/image";
import { Download, Github, Linkedin, Mail, MapPin, ArrowDown, Code } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/ivetetetete", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ivette-sanjurjo-martínez/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:ivettes.business@gmail.com", label: "Email" },
];

export default function HeroBento() {
  const { t } = useLanguage();

  const stats = [
    { label: t.hero.stats.yearsOfExperience, value: "3" },
    { label: t.hero.stats.projectsEndToEnd, value: "7" },
    { label: t.hero.stats.developmentTeam, value: t.hero.stats.leadValue },
    { label: t.hero.stats.coffeesConsumed, value: "100+" },
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Main Hero Card */}
        <div className="md:col-span-8 bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-between relative overflow-hidden transition-colors">
          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/70 dark:border-emerald-800/60">
                <span className="size-2 rounded-full bg-emerald-500 pulse-dot" />
                {t.hero.availableBadge}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800/80 px-2.5 py-1 rounded-full border border-neutral-200/60 dark:border-neutral-700/60">
                <MapPin className="size-3 text-neutral-400" />
                {t.hero.location}
              </span>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-mono font-bold tracking-tight text-neutral-900 dark:text-neutral-100 typewriter">
                {"{ivy.}"}
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
                Ivette Sanjurjo Martínez
              </h1>
              <p className="text-base sm:text-lg font-medium text-neutral-600 dark:text-neutral-400 flex items-center gap-1.5 pt-1">
                <Code className="size-4 text-neutral-500 dark:text-neutral-400" />
                <span>{t.hero.role}</span>
              </p>
            </div>

            <p className="text-neutral-700 dark:text-neutral-300 mt-5 text-sm sm:text-base leading-relaxed max-w-2xl">
              {t.hero.bio.greeting}
              <span className="font-semibold text-stone-600 dark:text-stone-300">
                {t.hero.bio.passionate}
              </span>
              {" "}
              {t.hero.bio.description.split("hands-on experience")[0] ? "" : ""}
              <span className="font-semibold text-stone-600 dark:text-stone-300">
                {t.hero.bio.experience}
              </span>
              {t.hero.bio.description}
            </p>
          </div>

          <div className="relative z-10 pt-8 mt-6 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm"
              >
                <span>{t.hero.viewWork}</span>
                <ArrowDown className="size-4" />
              </a>

              <a
                href="/pdf/CV_IvetteSanjurjo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-sm font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200/80 dark:border-neutral-700/80 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="size-4 text-neutral-600 dark:text-neutral-400" />
                <span>{t.hero.downloadCv}</span>
              </a>
            </div>

            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-white dark:hover:bg-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 hover:scale-110 active:scale-95 transition-all shadow-2xs"
                >
                  <link.icon className="size-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="absolute -top-16 -right-16 size-48 bg-gradient-to-br from-pink-100/60 to-purple-100/30 dark:from-pink-500/10 dark:to-purple-500/5 rounded-full blur-2xl pointer-events-none" />
        </div>

        {/* Profile Card */}
        <div className="md:col-span-4 bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 rounded-3xl p-5 shadow-xs flex flex-col items-center justify-between text-center relative overflow-hidden group transition-colors">
          <div className="relative w-full aspect-square max-w-[240px] rounded-full overflow-hidden bg-gradient-to-b from-stone-100 to-stone-200/80 dark:from-neutral-800 dark:to-neutral-800/60 border border-neutral-200/60 dark:border-neutral-700/60 flex items-center justify-center p-2">
            <Image
              src="/profile.png"
              alt="Ivette Sanjurjo"
              fill
              priority
              className="object-cover rounded-full pointer-events-none select-none"
            />
          </div>

          <div className="w-full pt-4">
            <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
              {t.hero.sideCard.tagline}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
              {t.hero.sideCard.description}
            </p>
          </div>

          <div className="w-full grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800">
            {stats.slice(0, 2).map((stat) => (
              <div
                key={stat.label}
                className="bg-neutral-50/80 dark:bg-neutral-800/50 rounded-xl p-2.5 border border-neutral-100 dark:border-neutral-800"
              >
                <p className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100">
                  {stat.value}
                </p>
                <p className="text-[10px] text-neutral-500 dark:text-neutral-400 uppercase tracking-tight leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 rounded-2xl p-4 text-center hover:bg-neutral-50 dark:hover:bg-neutral-800/60 hover:shadow-xs transition-all"
          >
            <p className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100">
              {stat.value}
            </p>
            <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-tight mt-0.5">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
