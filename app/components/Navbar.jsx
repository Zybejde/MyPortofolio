import React, { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";

export const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Dark mode handler → adds/removes `dark` class on <html>
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Background for header */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
        ${
          isScroll
            ? "bg-white dark:bg-darkTheme bg-opacity-50 backdrop-blur-lg shadow-sm dark:shadow-white/20"
            : ""
        }`}
      >
        {/* Logo */}
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt="Logo"
          />
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
          ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Contact me
            </a>
          </li>
        </ul>

        {/* Right side (dark mode + buttons) */}
        <div className="flex items-center gap-4">
          {/* Dark mode toggle */}
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Toggle dark mode"
              className="w-5 h-5"
            />
          </button>

          {/* Contact button (desktop only) */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt=""
              className="w-3"
            />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="block md:hidden ml-3"
            onClick={() => setMenuOpen(true)}
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Open menu"
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen 
          bg-rose-50 dark:bg-darkHover dark:text-white transition-all duration-500
          ${menuOpen ? "right-0" : "-right-64"}`}
        >
          {/* Close Button */}
          <div
            className="absolute right-6 top-6 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close menu"
              className="w-5"
            />
          </div>

          <li>
            <a className="font-Ovo" onClick={() => setMenuOpen(false)} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={() => setMenuOpen(false)} href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={() => setMenuOpen(false)} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={() => setMenuOpen(false)} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={() => setMenuOpen(false)} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
