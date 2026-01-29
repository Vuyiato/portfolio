import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vuyisile Shokane - Full-Stack Web Developer",
  description: "Portfolio of Vuyisile Shokane, a passionate full-stack web developer specializing in creating scalable digital solutions. Explore my projects, skills, and experience.",
  keywords: ["Web Developer", "Full-Stack Developer", "React", "Next.js", "Python", "Portfolio"],
  openGraph: {
    title: "Vuyisile Shokane - Full-Stack Web Developer",
    description: "Passionate full-stack web developer building scalable digital solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
