"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();

  const showSidebar = pathname.startsWith("/docs"); // Pages to show sidebar

  if (showSidebar) return null;

  return (
    <nav className="bg-gradient-to-r from-amber-300 to-sky-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-6">
              <NavLink href="/docs">Docs</NavLink>
              <NavLink href="#examples">Examples</NavLink>
              <NavLink href="#how-it-works">How it works</NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition duration-150 ease-in-out"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-8 w-8" aria-hidden="true" />
              ) : (
                <Menu className="block h-8 w-8" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-4 pb-4 space-y-2 sm:px-6 bg-sky-600">
            <NavLink href="/docs" mobile>
              Docs
            </NavLink>
            <NavLink href="#examples" mobile>
              Examples
            </NavLink>
            <NavLink href="#how-it-works" mobile>
              How it works
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({
  href,
  children,
  mobile = false,
}: {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}) {
  const baseClasses =
    "text-white hover:bg-sky-300 hover:text-white transition duration-150 ease-in-out";
  const desktopClasses = "px-4 py-3 rounded-md text-lg font-medium";
  const mobileClasses = "block px-4 py-3 rounded-md text-lg font-medium";

  return (
    <Link
      href={href}
      className={`${baseClasses} ${
        mobile ? mobileClasses : desktopClasses
      } relative group`}
    >
      {children}
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
    </Link>
  );
}
