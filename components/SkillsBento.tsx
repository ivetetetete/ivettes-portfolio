import { Code2, Smartphone, Server, Wrench } from "lucide-react";

export default function SkillsBento() {
  const skillCategories = [
    {
      category: "Frontend",
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
          name: "Next JS",
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
          name: "JavaScript",
          badgeClass: "bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100",
        },
        {
          name: "HTML5 / CSS",
          badgeClass: "bg-orange-50 text-orange-800 border-orange-200 hover:bg-orange-100",
        },
      ],
    },
    {
      category: "Backend",
      icon: Server,
      skills: [
        {
          name: "Firebase",
          badgeClass: "bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100",
        },
        {
          name: "Laravel",
          badgeClass: "bg-rose-50 text-rose-800 border-rose-200 hover:bg-rose-100",
        },
        {
          name: "MySQL",
          badgeClass: "bg-indigo-50 text-indigo-800 border-indigo-200 hover:bg-indigo-100",
        },
        {
          name: "Node.js",
          badgeClass: "bg-green-50 text-green-800 border-green-200 hover:bg-green-100",
        },
        {
          name: "REST APIs",
          badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100",
        },
      ],
    },
    {
      category: "Tools",
      icon: Wrench,
      skills: [
        {
          name: "Git",
          badgeClass: "bg-stone-100 text-stone-800 border-stone-300 hover:bg-stone-200",
        },
        {
          name: "Figma",
          badgeClass: "bg-rose-50 text-rose-800 border-rose-200 hover:bg-rose-100",
        },
        {
          name: "Postman",
          badgeClass: "bg-orange-50 text-orange-800 border-orange-200 hover:bg-orange-100",
        },
        {
          name: "Prompt Engineering",
          badgeClass: "bg-purple-50 text-purple-800 border-purple-200 hover:bg-purple-100",
        },
        {
          name: "Generative AI",
          badgeClass: "bg-violet-50 text-violet-800 border-violet-200 hover:bg-violet-100",
        },
        {
          name: "App Store & Play Console",
          badgeClass: "bg-teal-50 text-teal-800 border-teal-200 hover:bg-teal-100",
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
          Skills & Tools
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skillCategories.map((cat) => (
          <div
            key={cat.category}
            className="bg-white border border-neutral-200/80 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
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
