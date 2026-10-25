import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";

const concreticaFont = localFont({
  src: "./fonts/sk-concretica.ttf",
  variable: "--font-concretica",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ivettesanjurjo.com"),
  title: "Ivette Sanjurjo | IT Project Manager & AI Solutions Specialist",
  description:
    "Portfolio of Ivette Sanjurjo Martínez — Software Developer, IT Project Manager & AI Solutions Specialist building inclusive, accessible digital products with React, React Native, TypeScript, Firebase & Laravel.",
  keywords: [
    "Ivette Sanjurjo",
    "IT Project Manager",
    "AI Solutions Specialist",
    "Frontend Developer",
    "Mobile Developer",
    "React Native",
    "TypeScript",
    "Next.js",
    "Laravel Filament",
    "Tailwind CSS",
    "Barcelona Developer",
    "Safinder",
    "Motia",
    "Find Home",
    "Ran Ramen",
  ],
  authors: [{ name: "Ivette Sanjurjo Martínez" }],
  openGraph: {
    title: "Ivette Sanjurjo | IT Project Manager & AI Solutions Specialist",
    description:
      "Software Developer & IT Project Manager crafting intuitive web & mobile apps with React, React Native, TypeScript, Laravel and AI solutions.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/ivy.png",
        width: 800,
        height: 800,
        alt: "{ivy.} - Ivette Sanjurjo Portfolio",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.png",
  },
};

const themeScript = `
  (function() {
    try {
      var saved = localStorage.getItem('portfolio_theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (saved === 'dark' || (!saved && prefersDark)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${concreticaFont.variable} antialiased selection:bg-pink-100 selection:text-pink-900 dark:selection:bg-pink-900/60 dark:selection:text-pink-200`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
