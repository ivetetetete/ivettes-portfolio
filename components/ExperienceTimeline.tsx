"use client";

import Image from "next/image";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ExperienceTimeline() {
  const { t } = useLanguage();

  return (
    <section className="w-full">
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
            {t.experience.title}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
            {t.experience.subtitle}
          </p>
        </div>

        <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed mb-8 opacity-90">
          {t.experience.intro}
        </p>

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-neutral-100 dark:border-neutral-800 gap-3">
            <div className="flex items-center gap-3.5">
              <div className="relative size-12 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700/80 p-1.5 shrink-0 flex items-center justify-center overflow-hidden">
                <Image
                  src="/twentic.png"
                  alt={t.experience.companyName}
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight">
                  {t.experience.companyName}
                </h3>
                <div className="flex flex-col md:flex-row md:items-center md:gap-2 text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                  <span className="flex items-center gap-1">
                    <MapPin className="size-3 text-neutral-400" />
                    {t.experience.companyLocation}
                  </span>
                  <span>{t.experience.companyPeriod}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 pt-2 pl-2">
            {t.experience.roles.map((role, idx) => (
              <div
                key={role.title}
                className="relative pl-6 sm:pl-8 border-l-2 border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors group"
              >
                <div
                  className={`absolute -left-[9px] top-1.5 size-4 rounded-full border-2 transition-all ${
                    idx === 0
                      ? "bg-purple-600 border-purple-600 ring-4 ring-purple-100 dark:ring-purple-900/50"
                      : "bg-white dark:bg-neutral-900 border-neutral-400 dark:border-neutral-600 group-hover:border-neutral-900 dark:group-hover:border-neutral-100 group-hover:bg-neutral-900 dark:group-hover:bg-white"
                  }`}
                />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100">
                      {role.title}
                    </h4>
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full font-medium border ${role.badgeColor}`}
                    >
                      {role.badge}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-800/80 px-2.5 py-1 rounded-md border border-neutral-100 dark:border-neutral-700/60 font-medium w-fit">
                    <Calendar className="size-3 text-neutral-400" />
                    {role.period}
                  </span>
                </div>

                {role.description && (
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-3 leading-relaxed">
                    {role.description}
                  </p>
                )}

                {role.bullets && (
                  <div className="mt-3.5 space-y-2">
                    {role.bullets.map((bullet, bIdx) => (
                      <div
                        key={bIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300"
                      >
                        <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {role.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-0.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/70 dark:border-neutral-700/70 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
