"use client";

import { useState } from "react";
import { Mail, Check, Copy, Linkedin, Github, MapPin, Send, Heart, Download } from "lucide-react";

export default function ContactBento() {
  const [copied, setCopied] = useState(false);
  const email = "ivettes.business@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section id="contact" className="w-full scroll-mt-20">
      <div className="bg-white border border-neutral-200/80 rounded-3xl p-6 sm:p-10 shadow-xs relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 size-80 bg-gradient-to-tr from-pink-100/70 via-purple-100/40 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-16 -left-16 size-64 bg-gradient-to-br from-stone-100/80 to-transparent rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-pink-50 text-pink-700 border border-pink-200/80 mb-3">
            <Send className="size-3.5 text-pink-600" />
            <span className="uppercase">Get in touch</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Get in touch
          </h2>

          <p className="text-sm sm:text-base text-neutral-700 mt-4 leading-relaxed max-w-xl">
            Feel free to reach out to me via email or connect with me on LinkedIn. I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={handleCopy}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-xs ${
                copied
                  ? "bg-emerald-50 text-emerald-800 border border-emerald-300"
                  : "bg-neutral-900 text-white hover:bg-neutral-800"
              }`}
            >
              {copied ? (
                <>
                  <Check className="size-4 text-emerald-600" />
                  <span>Email Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="size-4 text-neutral-400" />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-neutral-100 text-neutral-800 text-sm font-medium hover:bg-neutral-200/90 border border-neutral-200/80 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail className="size-4 text-neutral-600" />
              <span>Direct Email</span>
            </a>

            <a
              href="/pdf/CV_IvetteSanjurjo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-neutral-100 text-neutral-800 text-sm font-medium hover:bg-neutral-200/90 border border-neutral-200/80 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="size-4 text-neutral-600" />
              <span>Resume (PDF)</span>
            </a>
          </div>

          <div className="mt-10 pt-6 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-500">
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="flex items-center gap-1.5 font-medium text-neutral-700">
                <MapPin className="size-3.5 text-neutral-400" />
                Barcelona, Spain
              </span>
              <a
                href="mailto:ivettes.business@gmail.com"
                className="hover:text-neutral-900 transition-colors underline underline-offset-2"
              >
                {email}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/ivette-sanjurjo-martínez/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-900 transition-colors flex items-center gap-1.5 p-1.5 rounded-lg hover:bg-neutral-100"
              >
                <Linkedin className="size-4 text-neutral-600" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/ivetetetete"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-900 transition-colors flex items-center gap-1.5 p-1.5 rounded-lg hover:bg-neutral-100"
              >
                <Github className="size-4 text-neutral-600" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-8 text-center text-xs text-neutral-500 pb-12 flex flex-col sm:flex-row items-center justify-center gap-2">
        <span className="font-mono font-bold text-neutral-800">{"{ivy.}"}</span>
        <span>— Ivette Sanjurjo Martínez 2026.</span>
        <span className="flex items-center gap-1 text-neutral-500">
          Crafted with care, Next.js & Tailwind CSS
          <Heart className="size-3 text-pink-500 fill-pink-500 inline ml-0.5" />
        </span>
      </footer>
    </section>
  );
}
