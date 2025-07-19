"use client";

import { useState } from "react";
import Link from "next/link";
import { navItems, siteConfig } from "../config";
import Button from "./button";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed z-50 w-full flex items-center justify-between px-6 py-4 md:px-20 md:py-2 max-md:border-b max-md:border-black/10 backdrop-blur-2xl" style={{backgroundColor: menuOpen ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, .6)"}}>
      {/* Logo */}
      <div className="w-1/3">
        <Link href="/">
          <img src={siteConfig.logo} alt="logo" />
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex w-1/3 justify-center gap-8 font-medium text-xs group mix-blend-difference">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href || "#"}
            className="transition-opacity duration-200 group-hover:opacity-50 hover:!opacity-100 text-black"
          >
            {item.title}
          </Link>
        ))}
      </div>

      {/* Desktop CTA Button */}
      <div className="hidden md:flex w-1/3 justify-end">
        <Button>Join to the waitlist</Button>
      </div>

      {/* Hamburger Button (mobile only) */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md px-6 transition-all duration-300 overflow-hidden md:hidden z-50
          ${menuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"}
        `}
      >
        <div className="flex flex-col gap-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href || "#"}
              className="text-sm font-medium w-full"
              onClick={() => setMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <Button className="w-full text-center mt-2">Join to the waitlist</Button>
        </div>
      </div>
    </header>
  );
}
