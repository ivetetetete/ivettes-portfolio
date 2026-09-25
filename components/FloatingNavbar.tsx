"use client";

import { useState, useEffect } from "react";
import { Briefcase, FolderGit2, Sparkles, Mail, User } from "lucide-react";

export default function FloatingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["contact", "skills", "work", "experience", "top"];
      const scrollPos = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#top", id: "top", icon: User },
    { label: "Experience", href: "#experience", id: "experience", icon: Briefcase },
    { label: "Work", href: "#work", id: "work", icon: FolderGit2 },
    { label: "Skills", href: "#skills", id: "skills", icon: Sparkles },
    { label: "Contact", href: "#contact", id: "contact", icon: Mail },
  ];

  return (
    <header className="fixed top-2.5 sm:top-4 left-0 right-0 z-50 flex justify-center px-2 sm:px-4 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto flex items-center gap-1 sm:gap-1.5 p-1 sm:px-4 sm:py-2 rounded-2xl border transition-all duration-300 max-w-[calc(100vw-1rem)] sm:max-w-max shadow-xs ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-neutral-300/80 shadow-md"
            : "bg-white/80 backdrop-blur-sm border-neutral-200/80"
        }`}
      >
        <a
          href="#top"
          className="font-mono font-bold text-xs sm:text-base text-neutral-900 px-2 sm:px-2.5 py-1 rounded-xl hover:bg-neutral-100 transition-colors shrink-0"
        >
          {"{ivy.}"}
        </a>

        <div className="h-4 w-px bg-neutral-200 shrink-0 mx-0.5 sm:mx-1" />

        <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                title={item.label}
                aria-label={item.label}
                className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? "bg-neutral-900 text-white shadow-2xs"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                }`}
              >
                <item.icon className="size-4 sm:size-3.5 shrink-0" />
                <span className="hidden md:inline">{item.label}</span>
              </a>
            );
          })}
        </div>

        <div className="hidden lg:block h-4 w-px bg-neutral-200 shrink-0 mx-1" />

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 text-white text-xs font-medium hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shrink-0"
        >
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
}
