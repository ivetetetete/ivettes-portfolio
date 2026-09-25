import Image from "next/image";
import { ExternalLink, Layers } from "lucide-react";

export default function ProjectsBento() {
  const projects = [
    {
      id: "safinder",
      title: "Safinder",
      description:
        "A dating app designed exclusively for lesbian women and non-binary people. The app provides a safe and inclusive space for users to connect, share their experiences, and find meaningful relationships. I contributed to the development of the app, implementing key features and ensuring a smooth user experience. The app is currently live and available for download on the App Store and Google Play.",
      image: "/safinder.png",
      badges: ["In Production", "App Store", "Google Play"],
      badgeColor: "bg-pink-50 text-pink-700 border-pink-200",
      technologies: ["React Native", "TypeScript", "Firebase", "Tailwind CSS", "Mobile UX"],
      liveUrl: "https://safinder.es",
    },
    {
      id: "motia",
      title: "Motia",
      description:
        "An app that helps riders find rides and share their journeys. I contribute to the develpment of the app along with another great developer. The app is currently in private beta, but I'm excited to share it with the world soon!",
      image: "/motia-name.png",
      badges: ["Private Beta", "Mobile App"],
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      technologies: ["React Native", "TypeScript", "Maps / GPS", "Node.js"],
      liveUrl: null,
    },
    {
      id: "findhome",
      title: "Find Home",
      description:
        "A modern real estate web platform developed for a real estate agency in Catalunya, featuring property sales and rentals catalogs along with an interactive multi-step property valuation questionnaire.",
      image: "/findhome-preview.png",
      imageCover: true,
      badges: ["In Production", "Web Platform"],
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Interactive Forms"],
      liveUrl: "https://www.find-home.cat/",
    },
  ];

  const featured = projects[0];
  const secondary = projects.slice(1);

  return (
    <section id="work" className="w-full scroll-mt-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">
            <Layers className="size-3.5 text-neutral-600" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            My work
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-12 bg-white border border-neutral-200/80 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all group overflow-hidden">
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

                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                  {featured.title}
                </h3>

                <p className="text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed">
                  {featured.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {featured.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-lg bg-neutral-100 text-neutral-700 font-medium"
                    >
                      {t}
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
                    <span>Visit Safinder.es</span>
                    <ExternalLink className="size-4" />
                  </a>
                )}
              </div>
            </div>

            <div className="lg:col-span-6 relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-100 group-hover:scale-[1.01] transition-transform">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover object-left-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {secondary.map((proj) => (
          <div
            key={proj.id}
            className="md:col-span-6 bg-white border border-neutral-200/80 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group overflow-hidden"
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
                    className="p-2 rounded-xl text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
                  >
                    <ExternalLink className="size-4" />
                  </a>
                )}
              </div>

              <div className="relative w-full h-36 rounded-xl overflow-hidden bg-neutral-50 border border-neutral-100 mb-4 flex items-center justify-center">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className={`transition-transform duration-300 ${
                    proj.imageCover
                      ? "object-cover group-hover:scale-105"
                      : "object-contain p-4 group-hover:scale-105"
                  }`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <h3 className="text-xl font-bold text-neutral-900">
                {proj.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 mt-2.5 leading-relaxed">
                {proj.description}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-neutral-100">
              <div className="flex flex-wrap gap-1.5">
                {proj.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-700 font-medium"
                  >
                    {tech}
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
