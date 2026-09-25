import Image from "next/image";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function ExperienceTimeline() {
  const experiences = [
    {
      company: "Twentic",
      logo: "/twentic.png",
      totalPeriod: "October 2023 — Present",
      location: "Barcelona, Spain (Hybrid)",
      roles: [
        {
          title: "Delivery Specialist & AI Prompt Engineer",
          period: "June 2026 — Present",
          badge: "Current Role",
          badgeColor: "bg-purple-50 text-purple-700 border-purple-200/80",
          description:
            "Leading strategic project delivery and operational synchronization while engineering and evaluating AI prompt workflows to integrate generative AI solutions into products and team operations.",
          keyAchievements: [
            "Strategic coordination and organization of digital projects, ensuring optimal resource allocation and strict deadline adherence.",
            "Direct collaboration with Account Management as a technical-operational liaison, guaranteeing optimal deliverable execution and high client satisfaction.",
            "Design, optimization, and evaluation of prompts for generative AI models, embedding AI solutions to improve workflows and product interactivity.",
            "Development team capacity oversight, process facilitation, and proactive unblocking of operational hurdles across project lifecycles.",
          ],
          technologies: [
            "Prompt Engineering",
            "Generative AI",
            "Project Delivery",
            "Team Operations",
            "Agile Workflow",
          ],
        },
        {
          title: "Frontend & Mobile Developer",
          period: "October 2023 — June 2026",
          badge: "Previous Role",
          badgeColor: "bg-neutral-100 text-neutral-700 border-neutral-200/80",
          description:
            "Engineered multiplatform mobile and web applications for major clients, enforcing best practices, accessibility standards, and clean component architectures.",
          keyAchievements: [
            "Architected scalable mobile features using React Native and TypeScript, ensuring cross-platform parity on iOS and Android.",
            "Integrated robust REST APIs, authentication flows, and real-time state management.",
            "Enforced web accessibility (WCAG) guidelines and performance best practices across client codebases.",
            "Collaborated with product designers in Figma to transform design systems into reusable, pixel-perfect component libraries.",
          ],
          technologies: [
            "React Native",
            "TypeScript",
            "Next.js",
            "Tailwind CSS",
            "REST APIs",
            "Git",
          ],
        },
      ],
    },
  ];

  return (
    <section className="w-full">
      <div className="bg-white border border-neutral-200/80 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 rounded-2xl bg-neutral-100 text-neutral-800">
            <Briefcase className="size-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
              Work Experience
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500">
              Career progression, engineering & AI delivery
            </p>
          </div>
        </div>

        {experiences.map((company) => (
          <div key={company.company} className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-neutral-100 gap-3">
              <div className="flex items-center gap-3.5">
                <div className="relative size-12 rounded-xl bg-neutral-50 border border-neutral-200/80 p-1.5 shrink-0 flex items-center justify-center overflow-hidden">
                  <Image
                    src={company.logo}
                    alt={company.company}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 leading-tight">
                    {company.company}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-neutral-500 mt-0.5">
                    <span className="flex items-center gap-1">
                      <MapPin className="size-3 text-neutral-400" />
                      {company.location}
                    </span>
                    <span>Full-time</span>
                  </div>
                </div>
              </div>

              <div className="text-xs font-medium text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-xl border border-neutral-200/60 self-start sm:self-auto">
                {company.totalPeriod}
              </div>
            </div>

            <div className="space-y-8 pt-2 pl-2">
              {company.roles.map((role, idx) => (
                <div
                  key={role.title}
                  className="relative pl-6 sm:pl-8 border-l-2 border-neutral-200"
                >
                  <div
                    className={`absolute -left-[9px] top-1.5 size-4 rounded-full border-2 transition-all ${
                      idx === 0
                        ? "bg-purple-600 border-purple-600 ring-4 ring-purple-100"
                        : "bg-white border-neutral-400"
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

                    <span className="inline-flex items-center gap-1.5 text-xs text-neutral-500 bg-neutral-50 px-2.5 py-1 rounded-md border border-neutral-100 font-medium">
                      <Calendar className="size-3 text-neutral-400" />
                      {role.period}
                    </span>
                  </div>

                  <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
                    {role.description}
                  </p>

                  <div className="mt-3.5 space-y-2">
                    {role.keyAchievements.map((achievement, aIdx) => (
                      <div
                        key={aIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600"
                      >
                        <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>

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
        ))}
      </div>
    </section>
  );
}
