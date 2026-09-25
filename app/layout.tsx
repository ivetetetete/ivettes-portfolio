import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const concreticaFont = localFont({
  src: "./fonts/sk-concretica.ttf",
  variable: "--font-concretica",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ivettesanjurjo.com"),
  title: "Ivette Sanjurjo | Full Stack & Mobile Developer",
  description:
    "Portfolio of Ivette Sanjurjo Martínez — Full Stack & Mobile Developer specializing in React Native, TypeScript, Next.js and building accessible, user-friendly digital experiences.",
  keywords: [
    "Ivette Sanjurjo",
    "Frontend Developer",
    "Mobile Developer",
    "React Native",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Barcelona Developer",
    "Safinder",
    "Motia",
  ],
  authors: [{ name: "Ivette Sanjurjo Martínez" }],
  openGraph: {
    title: "Ivette Sanjurjo | Full Stack & Mobile Developer",
    description:
      "Crafting intuitive web & mobile apps with React Native, TypeScript and Next.js.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${concreticaFont.variable} antialiased selection:bg-pink-100 selection:text-pink-900`}>
        {children}
      </body>
    </html>
  );
}
