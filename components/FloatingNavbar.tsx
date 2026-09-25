"use client";

import { useState, useEffect } from "react";
import { Briefcase, FolderGit2, Sparkles, Mail, User } from "lucide-react";

export default function FloatingNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#top", icon: User },
    { label: "Experience", href: "#experience", icon: Briefcase },
    { label: "Work", href: "#work", icon: FolderGit2 },
    { label: "Skills", href: "#skills", icon: Sparkles },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <header
      className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 pointer-events-none`}
    >
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-md border-neutral-300/80 shadow-lg scale-98"
            : "bg-white/70 backdrop-blur-sm border-neutral-200/80 shadow-xs"
        }`}
      >
        <a
          href="#top"
          className="font-mono font-bold text-sm sm:text-base text-neutral-900 px-2 py-1 rounded-lg hover:bg-neutral-100 transition-colors"
        >
          {"{ivy.}"}
        </a>

        <div className="h-4 w-px bg-neutral-200 mx-1" />

        <div className="flex items-center gap-0.5 sm:gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
            >
              <item.icon className="size-3.5 sm:hidden" />
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        <div className="hidden sm:block h-4 w-px bg-neutral-200 mx-1" />

        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 text-white text-xs font-medium hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95"
        >
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
}
