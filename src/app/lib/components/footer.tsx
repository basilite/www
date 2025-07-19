import Link from "next/link";
import { navItems, socialLinks } from "../config";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex max-md:flex-col gap-6 bg-white border-t border-black/10 py-6 px-4 md:px-20">
      <div className="w-1/2 flex max-md:flex-col gap-4 md:gap-6 font-medium text-xs">
        {navItems.map((item, index) => (
          <React.Fragment key={index}>
            <Link
              href={item.href || "#"}
              className="transition-opacity duration-200 opacity-50 hover:opacity-100"
            >
              {item.title}
            </Link>
            {index < navItems.length - 1 && <span className="max-md:hidden text-black/30">/</span>}
          </React.Fragment>
        ))}
      </div>
      <div className="w-1/2 flex max-md:flex-col justify-end gap-4 md:gap-6 font-medium text-xs">
        {socialLinks.map((item, index) => (
          <React.Fragment key={index}>
            <Link
              href={item.href || "#"}
              className="transition-opacity duration-200 opacity-50 hover:opacity-100"
            >
              {item.title.toLowerCase()}
            </Link>
            {index < socialLinks.length - 1 && <span className="max-md:hidden text-black/30">/</span>}
          </React.Fragment>
        ))}
      </div>
    </footer>
  );
}
