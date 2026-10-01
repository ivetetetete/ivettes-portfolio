"use client";

import Image from "next/image";
import { ExternalLink, Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsBento() {
  const { t } = useLanguage();

  const projects = t.projects.projects;
  const featured = projects[0];
  const secondary = projects.slice(1);

  return (
    <section id="work" className="w-full scroll-mt-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-1">
            <Layers className="size-3.5 text-neutral-600 dark:text-neutral-400" />
            <span>{t.projects.sectionTag}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
            {t.projects.title}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Featured Project */}
        {featured && (
          <div className="md:col-span-12 bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all group overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {featured.badges.map((badge) => (
                      <span
                        key={badge}
                        className={`text-xs px-2.5 py-0.5 rounded-full font-medium border ${featured.badgeColor}`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                    {featured.title}
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 mt-3 leading-relaxed">
                    {featured.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {featured.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {featured.liveUrl && (
                    <a
                      href={featured.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-pink-600 text-white text-sm font-medium hover:bg-pink-700 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xs"
                    >
                      <span>{featured.ctaText || `Visit ${featured.title}`}</span>
                      <ExternalLink className="size-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="lg:col-span-6 relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800 group-hover:scale-[1.01] transition-transform flex items-center justify-center">
                {featured.image ? (
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover object-left-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-2 text-neutral-400 dark:text-neutral-500">
                    <Layers className="size-8 opacity-40" />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Secondary Projects */}
        {secondary.map((proj, idx) => {
          const colSpanClass =
            secondary.length === 3
              ? idx === 2
                ? "md:col-span-12 lg:col-span-4"
                : "md:col-span-6 lg:col-span-4"
              : secondary.length % 2 === 0
              ? "md:col-span-6 lg:col-span-6"
              : "md:col-span-6 lg:col-span-4";

          return (
            <div
              key={proj.id}
              className={`${colSpanClass} bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group overflow-hidden`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.badges.map((badge) => (
                      <span
                        key={badge}
                        className={`text-xs px-2.5 py-0.5 rounded-full font-medium border ${proj.badgeColor}`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${proj.title}`}
                      className="p-2 rounded-xl text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  )}
                </div>

                {proj.liveUrl ? (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${proj.title}`}
                    className="block relative w-full h-36 rounded-xl overflow-hidden bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800 mb-4 flex items-center justify-center"
                  >
                    {proj.image ? (
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        className={`transition-transform duration-300 ${
                          proj.imageCover
                            ? "object-cover group-hover:scale-105"
                            : "object-contain p-4 group-hover:scale-105"
                        }`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-neutral-400 dark:text-neutral-500 bg-neutral-100/60 dark:bg-neutral-800/40">
                        <ExternalLink className="size-6 opacity-40 group-hover:opacity-80 group-hover:scale-110 transition-all" />
                        <span className="text-xs font-medium opacity-60">
                          {proj.title}
                        </span>
                      </div>
                    )}
                  </a>
                ) : (
                  <div className="relative w-full h-36 rounded-xl overflow-hidden bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800 mb-4 flex items-center justify-center">
                    {proj.image ? (
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        className={`transition-transform duration-300 ${
                          proj.imageCover
                            ? "object-cover group-hover:scale-105"
                            : "object-contain p-4 group-hover:scale-105"
                        }`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-neutral-400 dark:text-neutral-500 bg-neutral-100/60 dark:bg-neutral-800/40">
                        <Layers className="size-6 opacity-40" />
                        <span className="text-xs font-medium opacity-60">
                          {proj.title}
                        </span>
                      </div>
                    )}
                  </div>
                )}

              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                {proj.liveUrl ? (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
                  >
                    {proj.title}
                  </a>
                ) : (
                  proj.title
                )}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mt-2.5 leading-relaxed">
                {proj.description}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-neutral-100 dark:border-neutral-800">
              <div className="flex flex-wrap gap-1.5">
                {proj.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
      </div>
    </section>
  );
}
