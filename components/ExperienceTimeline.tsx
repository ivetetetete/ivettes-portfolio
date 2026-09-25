import Image from "next/image";
import { Calendar, MapPin, CheckCircle2, Heart } from "lucide-react";

export default function ExperienceTimeline() {
  const roles = [
    {
      title: "Delivery Specialist & AI Prompt Engineer",
      period: "June 2026 - Present",
      badge: "Current Role",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200/80",
      type: "Full-time - Hybrid",
      bullets: [
        "Strategic coordination and organization of digital projects, ensuring efficient team resource allocation and strict deadline adherence.",
        "Direct collaboration with Account Management, acting as a technical-operational liaison to ensure optimal deliverable execution and client satisfaction.",
        "Design, optimization, and evaluation of prompts for artificial intelligence models, integrating generative AI solutions to improve workflows and product interactivity.",
        "Supervision of development team capacity, internal process facilitation, and proactive resolution of operational blockers throughout the project lifecycle.",
      ],
      technologies: ["AI Prompt Engineering", "Generative AI", "Delivery", "Team Coordination", "Agile"],
    },
    {
      title: "Frontend Developer",
      period: "October 2023 - June 2026",
      badge: "Previous Role",
      badgeColor: "bg-neutral-100 text-neutral-700 border-neutral-200/80",
      type: "Full-time - Hybrid",
      description:
        "I have worked in significant projects for different clients, contributing to the development and maintenance of their applications. Learning and enforcing different frameworks and best practices has been a key part of my role.",
      technologies: ["React Native", "TypeScript", "Next.js", "Tailwind CSS", "REST APIs", "Git"],
    },
  ];

  return (
    <section className="w-full">
      <div className="bg-white border border-neutral-200/80 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
            My journey
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500">
            Twentic & professional growth
          </p>
        </div>

        <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-8 opacity-90">
          Just a girl who loves coding and coffee. I´m a web and mobile app developer passionate about building products that don’t just work well, but genuinely feel good to use. I focus on creating meaningful digital experiences with accessibility and inclusion always in mind.
        </p>

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-neutral-100 gap-3">
            <div className="flex items-center gap-3.5">
              <div className="relative size-12 rounded-xl bg-neutral-50 border border-neutral-200/80 p-1.5 shrink-0 flex items-center justify-center overflow-hidden">
                <Image
                  src="/twentic.png"
                  alt="Twentic"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 leading-tight">
                  Twentic
                </h3>
                <div className="flex flex-col md:flex-row md:items-center md:gap-2 text-xs text-neutral-500 mt-0.5">
                  <span className="flex items-center gap-1">
                    <MapPin className="size-3 text-neutral-400" />
                    Barcelona, Spain
                  </span>
                  <span>October 2023 - Present</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 pt-2 pl-2">
            {roles.map((role, idx) => (
              <div
                key={role.title}
                className="relative pl-6 sm:pl-8 border-l-2 border-neutral-200 hover:border-neutral-900 transition-colors group"
              >
                <div
                  className={`absolute -left-[9px] top-1.5 size-4 rounded-full border-2 transition-all ${idx === 0
                      ? "bg-purple-600 border-purple-600 ring-4 ring-purple-100"
                      : "bg-white border-neutral-400 group-hover:border-neutral-900 group-hover:bg-neutral-900"
                    }`}
                />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900">
                      {role.title}
                    </h4>
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full font-medium border ${role.badgeColor}`}
                    >
                      {role.badge}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs text-neutral-500 bg-neutral-50 px-2.5 py-1 rounded-md border border-neutral-100 font-medium w-fit">
                    <Calendar className="size-3 text-neutral-400" />
                    {role.period}
                  </span>
                </div>

                {role.description && (
                  <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
                    {role.description}
                  </p>
                )}

                {role.bullets && (
                  <div className="mt-3.5 space-y-2">
                    {role.bullets.map((bullet, bIdx) => (
                      <div
                        key={bIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600"
                      >
                        <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {role.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-0.5 rounded-lg bg-neutral-100 text-neutral-700 border border-neutral-200/70 font-medium"
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
