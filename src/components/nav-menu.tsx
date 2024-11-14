"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavMenu() {
  const pathname = usePathname();

  const showSidebar = pathname.startsWith("/docs"); // Pages to show sidebar

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isInExamplesSection, setIsInExamplesSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const examplesSection = document.getElementById("examples");
      if (examplesSection) {
        const rect = examplesSection.getBoundingClientRect();
        setIsInExamplesSection(
          rect.top <= window.innerHeight && rect.bottom >= 0
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount to check the initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (showSidebar) return null;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-50 shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-emerald-500">
              MAKE-AVATAR
            </span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              href={`/docs`}
              className={`text-sm font-medium transition-colors duration-300 pb-2 text-gray-600 hover:text-emerald-500`}
            >
              Docs
            </Link>

            <Link
              href={`#examples`}
              className={`text-sm font-medium transition-colors duration-300 pb-2 text-gray-600 hover:text-emerald-500 ${
                isInExamplesSection
                  ? "text-emerald-500 border-b-2 border-emerald-500"
                  : ""
              }`}
            >
              Examples
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
