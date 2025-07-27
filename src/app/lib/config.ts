import { SiteConfig } from "./types/config";
import { LinksItems } from "./types/links";
import { NavItem, SocialLink } from "./types/nav";

export const siteConfig: SiteConfig = {
  version: "0.0.1",
  title: "Basilite",
  description: "",
  github: "https://github.com/basilite/www",
  npm: "",
  quickLinks: [
    { title: "Customize", href: "/docs/customize" },
    { title: "Examples", href: "/docs/examples" },
  ],
  logo: "/logo.svg",
  logoDark: "/logo-white.svg",
  favicon: "/logo.png",
};

export let navItems: NavItem[] = [
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "Docs",
    href: "https://docs-basilite.netlify.app/",
  },
  {
    title: "Vision",
    href: "/vision",
  },
  {
    title: "About",
    href: "/about",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    href: "https://github.com/basilite",
    icon: "github",
  },
];

export const linksItems: LinksItems[] = [
  {
    image: "/links/feature-request.png",
    link: "https://basilite.featurebase.app/",
    size: {
      rows: 1,
      cols: 2,
    },
  },
  {
    image: "/links/github-background.png",
    link: "https://github.com/basilite",
    size: {
      rows: 2,
      cols: 2,
    },
  },
  {
    video:
      "/links/showreel.mp4",
    size: {
      rows: 1,
      cols: 2,
    },
  },
];
