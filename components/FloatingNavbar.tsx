"use client";

import { useState, useEffect } from "react";
import { Briefcase, FolderGit2, Sparkles, Mail, User, Sun, Moon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { Locale } from "@/types/i18n";

export default function FloatingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const { locale, setLocale, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

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
    { label: t.nav.about, href: "#top", id: "top", icon: User },
    { label: t.nav.experience, href: "#experience", id: "experience", icon: Briefcase },
    { label: t.nav.work, href: "#work", id: "work", icon: FolderGit2 },
    { label: t.nav.skills, href: "#skills", id: "skills", icon: Sparkles },
    { label: t.nav.contact, href: "#contact", id: "contact", icon: Mail },
  ];

  const languages: { code: Locale; label: string }[] = [
    { code: "es", label: "ES" },
    { code: "ca", label: "CA" },
    { code: "en", label: "EN" },
  ];

  return (
    <header className="fixed top-2 sm:top-4 left-0 right-0 z-50 flex justify-center px-2 sm:px-4 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto flex items-center gap-1 sm:gap-1.5 p-1 sm:px-3.5 sm:py-2 rounded-2xl border transition-all duration-300 max-w-[calc(100vw-0.75rem)] sm:max-w-max shadow-xs ${
          scrolled
            ? "bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border-neutral-300/80 dark:border-neutral-700/80 shadow-md dark:shadow-neutral-950/60"
            : "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-neutral-200/80 dark:border-neutral-800/80"
        }`}
      >
        <a
          href="#top"
          className="font-mono font-bold text-xs sm:text-base text-neutral-900 dark:text-neutral-100 px-1.5 sm:px-2.5 py-1 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shrink-0"
        >
          {"{ivy.}"}
        </a>

        <div className="h-4 w-px bg-neutral-200 dark:bg-neutral-800 shrink-0 mx-0.5 sm:mx-1" />

        <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                title={item.label}
                aria-label={item.label}
                className={`flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-2xs"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                }`}
              >
                <item.icon className="size-4 sm:size-3.5 shrink-0" />
                <span className="hidden md:inline">{item.label}</span>
              </a>
            );
          })}
        </div>

        <div className="h-4 w-px bg-neutral-200 dark:bg-neutral-800 shrink-0 mx-0.5 sm:mx-1" />

        {/* Language Switcher */}
        <div className="flex items-center bg-neutral-100 dark:bg-neutral-800/90 rounded-xl p-0.5 border border-neutral-200/60 dark:border-neutral-700/60 shrink-0">
          {languages.map((lang) => {
            const isCurrent = locale === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => setLocale(lang.code)}
                aria-label={`Switch to ${lang.label}`}
                className={`text-[10px] sm:text-xs font-semibold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg transition-all cursor-pointer ${
                  isCurrent
                    ? "bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white shadow-2xs font-bold"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                {lang.label}
              </button>
            );
          })}
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          title={theme === "dark" ? "Modo claro" : "Modo oscuro"}
          className="p-1.5 sm:p-2 rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shrink-0 cursor-pointer"
        >
          {theme === "dark" ? (
            <Sun className="size-3.5 sm:size-4 text-amber-400" />
          ) : (
            <Moon className="size-3.5 sm:size-4 text-neutral-700" />
          )}
        </button>

        <div className="hidden lg:block h-4 w-px bg-neutral-200 dark:bg-neutral-800 shrink-0 mx-1" />

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all hover:scale-105 active:scale-95 shrink-0"
        >
          {t.nav.letsTalk}
        </a>
      </nav>
    </header>
  );
}
