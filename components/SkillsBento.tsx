import { Code2, Smartphone, Server, Wrench } from "lucide-react";

export default function SkillsBento() {
  const skillCategories = [
    {
      category: "Frontend & Mobile",
      icon: Smartphone,
      skills: [
        {
          name: "React Native",
          badgeClass: "bg-cyan-50 text-cyan-800 border-cyan-200 hover:bg-cyan-100",
        },
        {
          name: "TypeScript",
          badgeClass: "bg-blue-50 text-blue-800 border-blue-200 hover:bg-blue-100",
        },
        {
          name: "Next.js",
          badgeClass: "bg-purple-50 text-purple-800 border-purple-200 hover:bg-purple-100",
        },
        {
          name: "React.js",
          badgeClass: "bg-sky-50 text-sky-800 border-sky-200 hover:bg-sky-100",
        },
        {
          name: "Tailwind CSS",
          badgeClass: "bg-teal-50 text-teal-800 border-teal-200 hover:bg-teal-100",
        },
        {
          name: "JavaScript (ES6+)",
          badgeClass: "bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100",
        },
        {
          name: "HTML5 / Semantic CSS",
          badgeClass: "bg-orange-50 text-orange-800 border-orange-200 hover:bg-orange-100",
        },
        {
          name: "Mobile UI / UX",
          badgeClass: "bg-pink-50 text-pink-800 border-pink-200 hover:bg-pink-100",
        },
      ],
    },
    {
      category: "Backend & Cloud",
      icon: Server,
      skills: [
        {
          name: "Firebase (Auth, Firestore)",
          badgeClass: "bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100",
        },
        {
          name: "REST APIs",
          badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100",
        },
        {
          name: "Laravel",
          badgeClass: "bg-rose-50 text-rose-800 border-rose-200 hover:bg-rose-100",
        },
        {
          name: "Node.js",
          badgeClass: "bg-green-50 text-green-800 border-green-200 hover:bg-green-100",
        },
        {
          name: "MySQL",
          badgeClass: "bg-indigo-50 text-indigo-800 border-indigo-200 hover:bg-indigo-100",
        },
        {
          name: "JSON Web Tokens",
          badgeClass: "bg-fuchsia-50 text-fuchsia-800 border-fuchsia-200 hover:bg-fuchsia-100",
        },
      ],
    },
    {
      category: "AI, Delivery & Ecosystem",
      icon: Wrench,
      skills: [
        {
          name: "Prompt Engineering",
          badgeClass: "bg-purple-50 text-purple-800 border-purple-200 hover:bg-purple-100",
        },
        {
          name: "Generative AI",
          badgeClass: "bg-violet-50 text-violet-800 border-violet-200 hover:bg-violet-100",
        },
        {
          name: "Project Delivery",
          badgeClass: "bg-blue-50 text-blue-800 border-blue-200 hover:bg-blue-100",
        },
        {
          name: "Git & GitHub",
          badgeClass: "bg-stone-100 text-stone-800 border-stone-300 hover:bg-stone-200",
        },
        {
          name: "Figma Handoff",
          badgeClass: "bg-rose-50 text-rose-800 border-rose-200 hover:bg-rose-100",
        },
        {
          name: "App Store & Play Console",
          badgeClass: "bg-teal-50 text-teal-800 border-teal-200 hover:bg-teal-100",
        },
        {
          name: "WCAG Accessibility",
          badgeClass: "bg-lime-50 text-lime-800 border-lime-200 hover:bg-lime-100",
        },
      ],
    },
  ];

  return (
    <section className="w-full">
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">
          <Code2 className="size-3.5 text-neutral-600" />
          <span>Technical Toolkit</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
          Skills & Technologies
        </h2>
        <p className="text-xs sm:text-sm text-neutral-500 mt-1">
          Modern stack applied to production mobile apps, websites, AI workflows, and delivery systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skillCategories.map((cat) => (
          <div
            key={cat.category}
            className="bg-white border border-neutral-200/80 rounded-3xl p-6 shadow-xs   flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="p-2 rounded-xl bg-neutral-100 text-neutral-800">
                  <cat.icon className="size-4.5" />
                </div>
                <h3 className="font-bold text-base text-neutral-900">
                  {cat.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-xl border font-medium transition-all duration-200 hover:scale-105 active:scale-95 cursor-default ${skill.badgeClass}`}
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
