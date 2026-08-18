"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full z-[100]">
      <nav className="w-full md:w-[95%] lg:w-[92%] xl:w-[90%] max-w-[1400px] mx-auto bg-[#335f92] text-white rounded-b-3xl shadow-lg">
        {/* Desktop + Mobile Top Bar */}
        <div className="flex items-center justify-between min-h-[72px] px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="relative flex items-center shrink-0"
            aria-label="SkillKwiz Home"
          >
            {/* 
              The supplied SVG has a 500x500 canvas with whitespace around
              the actual logo. The wrapper crops that whitespace so the
              logo remains clearly visible in the header.
            */}
            <div className="relative w-[155px] h-[58px] sm:w-[175px] sm:h-[62px] overflow-hidden rounded-md bg-white">
              <Image
                src="/images/skillkwizLogo.svg"
                alt="SkillKwiz - How much do you know?"
                fill
                priority
                sizes="175px"
                className="object-cover"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center ml-auto">
            <Link
              href="/"
              className={`relative group px-4 lg:px-5 py-6 text-sm lg:text-base transition-colors ${
                isActive("/")
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              }`}
            >
              <span>Home</span>
              <span
                className={`absolute left-4 right-4 lg:left-5 lg:right-5 bottom-2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transition-transform duration-300 origin-left ${
                  isActive("/")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>

            <Link
              href="/about"
              className={`relative group px-4 lg:px-5 py-6 text-sm lg:text-base transition-colors ${
                isActive("/about")
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              }`}
            >
              <span>About Us</span>
              <span
                className={`absolute left-4 right-4 lg:left-5 lg:right-5 bottom-2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transition-transform duration-300 origin-left ${
                  isActive("/about")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>

            <Link
              href="/services"
              className={`relative group px-4 lg:px-5 py-6 text-sm lg:text-base transition-colors ${
                isActive("/services")
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              }`}
            >
              <span>Services</span>
              <span
                className={`absolute left-4 right-4 lg:left-5 lg:right-5 bottom-2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transition-transform duration-300 origin-left ${
                  isActive("/services")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>

            <Link
              href="/blog"
              className={`relative group px-4 lg:px-5 py-6 text-sm lg:text-base transition-colors ${
                isActive("/blog")
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              }`}
            >
              <span>Blog</span>
              <span
                className={`absolute left-4 right-4 lg:left-5 lg:right-5 bottom-2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transition-transform duration-300 origin-left ${
                  isActive("/blog")
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>

            {/* Signup */}
            <Link
              href="/services"
              className="ml-3 lg:ml-5 px-5 lg:px-6 py-2.5 rounded-full bg-[#f73c5c] text-white text-sm lg:text-base font-semibold shadow-md hover:bg-[#e62f50] hover:scale-[1.03] transition-all duration-200"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center px-4 pb-5">
            <Link
              href="/"
              onClick={closeMenu}
              className={`relative w-full text-center py-3 text-lg transition-colors ${
                isActive("/")
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className={`relative w-full text-center py-3 text-lg transition-colors ${
                isActive("/about")
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              }`}
            >
              About Us
            </Link>

            <Link
              href="/services"
              onClick={closeMenu}
              className={`relative w-full text-center py-3 text-lg transition-colors ${
                isActive("/services")
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              }`}
            >
              Services
            </Link>

            <Link
              href="/blog"
              onClick={closeMenu}
              className={`relative w-full text-center py-3 text-lg transition-colors ${
                isActive("/blog")
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              }`}
            >
              Blog
            </Link>

            {/* Mobile Signup */}
            <Link
              href="/services"
              onClick={closeMenu}
              className="mt-3 px-8 py-2.5 rounded-full bg-[#f73c5c] text-white font-semibold shadow-md hover:bg-[#e62f50] transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}