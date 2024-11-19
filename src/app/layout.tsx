import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import NavMenu from "@/components/nav-menu";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Custom Animated Avatars with Make-avatar.",
  description:
    "Design unique, customizable animated avatars for animals and humans with Make-avatar. Change features like eyes, mouth, hair, color, and more. Download as SVG or PNG, or use our API for developers to generate dynamic avatar placeholders. Perfect for games, apps, and creative projects!",
  keywords:
    "custom avatars, animated avatars, animal avatars, human avatars, avatar API",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Create Custom Animated Avatars",
    description:
      "Design unique avatars for animals and humans. Perfect for apps and creative projects!",
    url: "https://make-avatar.vercel.app",
    images: [
      {
        url: "/sample.png",
        width: 1200,
        height: 630,
        alt: "Custom Animated Avatars",
      },
    ],
  },
  twitter: {
    title: "Create Custom Animated Avatars",
    description: "Unique avatars for your projects, available as SVG or PNG.",
    images: ["/sample.png"],
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
        <Analytics />
        <NavMenu />

        <AppSidebar>{children}</AppSidebar>
      </body>
    </html>
  );
}
