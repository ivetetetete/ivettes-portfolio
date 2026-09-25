import Image from "next/image";
import { Download, Github, Linkedin, Mail, MapPin, ArrowDown, Smartphone } from "lucide-react";

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/ivetetetete", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ivette-sanjurjo-martínez/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:ivettes.business@gmail.com", label: "Email" },
];

const HIGHLIGHT_STATS = [
  { value: "3", label: "Years Experience" },
  { value: "7+", label: "Projects Delivered" },
  { value: "Lead", label: "Frontend Initiative" },
  { value: "100%", label: "Mobile & Web Focus" },
];

export default function HeroBento() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-8 bg-white border border-neutral-200/80 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/70">
                <span className="size-2 rounded-full bg-emerald-500 pulse-dot" />
                Available for opportunities
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-full border border-neutral-200/60">
                <MapPin className="size-3 text-neutral-400" />
                Barcelona, Spain
              </span>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-mono font-bold tracking-tight text-neutral-900 typewriter">
                {"{ivy.}"}
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
                Ivette Sanjurjo Martínez
              </h1>
              <p className="text-base sm:text-lg font-medium text-neutral-600 flex items-center gap-1.5 pt-1">
                <Smartphone className="size-4 text-neutral-500" />
                <span>Full Stack & Mobile Developer</span>
              </p>
            </div>

            <p className="text-neutral-600 mt-5 text-sm sm:text-base leading-relaxed max-w-2xl">
              Passionate developer with <strong className="text-neutral-900 font-semibold">3 years of hands-on experience</strong> creating modern, cross-platform mobile apps and intuitive web interfaces. Dedicated to crafting digital experiences that don&apos;t just function seamlessly, but genuinely feel good to use — with a strong focus on accessibility, clean architecture, and delightful UI.
            </p>
          </div>

          <div className="relative z-10 pt-8 mt-6 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm"
              >
                <span>View My Work</span>
                <ArrowDown className="size-4" />
              </a>

              <a
                href="/pdf/CV_IvetteSanjurjo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-100 text-neutral-800 text-sm font-medium hover:bg-neutral-200 border border-neutral-200/80 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="size-4 text-neutral-600" />
                <span>Download CV</span>
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
                  className="p-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-700 hover:text-neutral-900 hover:bg-white hover:border-neutral-300 hover:scale-110 active:scale-95 transition-all shadow-2xs"
                >
                  <link.icon className="size-4.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="absolute -top-16 -right-16 size-48 bg-gradient-to-br from-pink-100/60 to-purple-100/30 rounded-full blur-2xl pointer-events-none" />
        </div>

        <div className="md:col-span-4 bg-white border border-neutral-200/80 rounded-3xl p-5 shadow-xs flex flex-col items-center justify-between text-center relative overflow-hidden group">
          <div className="relative w-full aspect-square max-w-[240px] rounded-full overflow-hidden bg-gradient-to-b from-stone-100 to-stone-200/80 border border-neutral-200/60 flex items-center justify-center p-2">
            <Image
              src="/profile.png"
              alt="Ivette Sanjurjo"
              fill
              priority
              className="object-cover rounded-full pointer-events-none select-none"
            />
          </div>

          <div className="w-full pt-4">
            <div className="text-lg font-semibold text-neutral-500 uppercase tracking">
              <span>Full Stack Mindset</span>
            </div>
            <p className="text-xs text-neutral-500 mt-1">
              Translating ideas into polished iOS, Android & Web apps.
            </p>
          </div>

          <div className="w-full grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-neutral-100">
            {HIGHLIGHT_STATS.slice(0, 2).map((stat) => (
              <div key={stat.label} className="bg-neutral-50/80 rounded-xl p-2.5 border border-neutral-100">
                <p className="text-lg font-bold text-neutral-900">{stat.value}</p>
                <p className="text-[11px] text-neutral-500 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
        {HIGHLIGHT_STATS.map((stat) => (
          <div
            key={stat.label}
            className="bg-white border border-neutral-200/80 rounded-2xl p-4 text-center hover:bg-neutral-50 hover:shadow-xs transition-all"
          >
            <p className="text-2xl font-bold text-neutral-900">{stat.value}</p>
            <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
