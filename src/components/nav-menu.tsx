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
  const [isInOverviewSection, setIsInOverviewSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const examplesSection = document.getElementById("examples");

      if (examplesSection) {
        const rect = examplesSection.getBoundingClientRect();
        setIsInExamplesSection(
          rect.top <= window.innerHeight && rect.bottom >= 0
        );
      }

      const overviewSection = document.getElementById("overview");
      if (overviewSection) {
        const rect = overviewSection.getBoundingClientRect();
        setIsInOverviewSection(
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
            <h2 className="text-5xl relative z-20 font-bold text-center text-black dark:text-white font-sans tracking-tight">
              <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-emerald-500 via-teal-400 to-green-400 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                  <span className="">Make avatar.</span>
                </div>
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-emerald-500 via-teal-400 to-green-400 py-4">
                  <span className="">Make avatar.</span>
                </div>
              </div>
            </h2>

            {/* <span className="text-2xl font-bold text-emerald-500">
              MAKE-AVATAR
            </span> */}
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

            <Link
              href={`#overview`}
              className={`text-sm font-medium transition-colors duration-300 pb-2 text-gray-600 hover:text-emerald-500 ${
                isInOverviewSection
                  ? "text-emerald-500 border-b-2 border-emerald-500"
                  : ""
              }`}
            >
              Overview
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
