"use client";

import { Code2, Smartphone, Server, Wrench } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function SkillsBento() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      category: t.skills.categories.frontend,
      icon: Smartphone,
      skills: [
        {
          name: "React Native",
          badgeClass:
            "bg-cyan-50 dark:bg-cyan-950/40 text-cyan-800 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/60 hover:bg-cyan-100 dark:hover:bg-cyan-900/50",
        },
        {
          name: "TypeScript",
          badgeClass:
            "bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800/60 hover:bg-blue-100 dark:hover:bg-blue-900/50",
        },
        {
          name: "Next JS",
          badgeClass:
            "bg-purple-50 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800/60 hover:bg-purple-100 dark:hover:bg-purple-900/50",
        },
        {
          name: "React.js",
          badgeClass:
            "bg-sky-50 dark:bg-sky-950/40 text-sky-800 dark:text-sky-300 border-sky-200 dark:border-sky-800/60 hover:bg-sky-100 dark:hover:bg-sky-900/50",
        },
        {
          name: "Tailwind CSS",
          badgeClass:
            "bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300 border-teal-200 dark:border-teal-800/60 hover:bg-teal-100 dark:hover:bg-teal-900/50",
        },
        {
          name: "JavaScript",
          badgeClass:
            "bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800/60 hover:bg-amber-100 dark:hover:bg-amber-900/50",
        },
        {
          name: "HTML5 / CSS",
          badgeClass:
            "bg-orange-50 dark:bg-orange-950/40 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-800/60 hover:bg-orange-100 dark:hover:bg-orange-900/50",
        },
      ],
    },
    {
      category: t.skills.categories.backend,
      icon: Server,
      skills: [
        {
          name: "Firebase",
          badgeClass:
            "bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800/60 hover:bg-amber-100 dark:hover:bg-amber-900/50",
        },
        {
          name: "Laravel",
          badgeClass:
            "bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-800/60 hover:bg-rose-100 dark:hover:bg-rose-900/50",
        },
        {
          name: "MySQL",
          badgeClass:
            "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/50",
        },
        {
          name: "Node.js",
          badgeClass:
            "bg-green-50 dark:bg-green-950/40 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800/60 hover:bg-green-100 dark:hover:bg-green-900/50",
        },
        {
          name: "REST APIs",
          badgeClass:
            "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/50",
        },
      ],
    },
    {
      category: t.skills.categories.tools,
      icon: Wrench,
      skills: [
        {
          name: "Git",
          badgeClass:
            "bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-300 border-stone-300 dark:border-stone-700 hover:bg-stone-200 dark:hover:bg-stone-700/80",
        },
        {
          name: "Figma",
          badgeClass:
            "bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border-rose-200 dark:border-rose-800/60 hover:bg-rose-100 dark:hover:bg-rose-900/50",
        },
        {
          name: "Postman",
          badgeClass:
            "bg-orange-50 dark:bg-orange-950/40 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-800/60 hover:bg-orange-100 dark:hover:bg-orange-900/50",
        },
        {
          name: "Prompt Engineering",
          badgeClass:
            "bg-purple-50 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800/60 hover:bg-purple-100 dark:hover:bg-purple-900/50",
        },
        {
          name: "Generative AI",
          badgeClass:
            "bg-violet-50 dark:bg-violet-950/40 text-violet-800 dark:text-violet-300 border-violet-200 dark:border-violet-800/60 hover:bg-violet-100 dark:hover:bg-violet-900/50",
        },
        {
          name: "App Store & Play Console",
          badgeClass:
            "bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300 border-teal-200 dark:border-teal-800/60 hover:bg-teal-100 dark:hover:bg-teal-900/50",
        },
      ],
    },
  ];

  return (
    <section className="w-full">
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-1">
          <Code2 className="size-3.5 text-neutral-600 dark:text-neutral-400" />
          <span>{t.skills.sectionTag}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
          {t.skills.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skillCategories.map((cat) => (
          <div
            key={cat.category}
            className="bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                  <cat.icon className="size-4.5" />
                </div>
                <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100">
                  {cat.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center text-xs px-3 py-1.5 rounded-xl border font-medium transition-all duration-200 hover:scale-105 active:scale-95 cursor-default ${skill.badgeClass}`}
                  >
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
