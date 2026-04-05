import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

const myFont = localFont({
  src: './fonts/sk-concretica.ttf',
})

export const metadata: Metadata = {
  title: "Ivette Sanjurjo Martínez - Front-end developer",
  description: "Hi! I&apos;m Ivette Sanjurjo Martínez, a passionate front-end developer with 2 years hands-on experience. I love creating multiplatform apps that provide seamless user experiences across devices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${myFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
