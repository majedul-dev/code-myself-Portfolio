"use client";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full border-b border-gray-800 z-50 bg-black/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Links - Centered */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm font-medium transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div
            className={`hamburger-menu md:hidden ml-auto flex flex-col items-center justify-center cursor-pointer gap-[6px]`}
            onClick={() => setIsOpen(!isOpen)}
            role="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            tabIndex={0}
          >
            {/* <div
              className={`w-[28px] h-[2px] bg-gray-300 transition-all duration-300 ease-linear ${
                isOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            /> */}
            <div
              className={`hamburger-line w-[30px] h-[2px] bg-current transition-all duration-300 ease-linear [transform-origin:50%_50%] ${isOpen ? "translate-y-[4px] rotate-45" : ""
                } group-hover:opacity-75`}
            />
            {/* <div
              className={`w-[28px] h-[2px] bg-gray-300 transition-all duration-300 ease-linear ${
                isOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            /> */}
            <div
              className={`hamburger-line w-[30px] h-[2px] bg-current transition-all duration-300 ease-linear [transform-origin:50%_50%] ${isOpen ? "-translate-y-[4px] -rotate-45" : ""
                } group-hover:opacity-75`}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex items-center justify-center md:hidden bg-black/60 h-[100vh] backdrop-blur-md border-t border-gray-800 transition-all duration-500 ease-in-out">
          <div className="flex flex-col items-center gap-[1em]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="inline-flex items-center text-gray-300 hover:text-white text-4xl font-medium no-underline cursor-pointer transition-opacity duration-300 hover:opacity-75 md:text-2xl"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
