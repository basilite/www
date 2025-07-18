import { SiteConfig } from "./types/config";
import { NavItem, SocialLink } from "./types/nav";

export const siteConfig: SiteConfig = {
    version: '0.0.1',
    title: 'Basilite Website',
    description:
        'Comprehensive documentation for your project. Built with Svelte 5, MDSvex, Tailwind CSS, and shadcn/ui components.',
    github: 'https://github.com/basilite/www',
    npm: '',
    quickLinks: [
        { title: 'Customize', href: '/docs/customize' },
        { title: 'Examples', href: '/docs/examples' }
    ],
    logo: '/logo.svg',
    logoDark: '/logo-white.svg',
    favicon: '/favicon.png',
};


export let navItems: NavItem[] = [
    {
        title: 'Products',
        href: '/products'
    },
    {
        title: "Docs",
        href: "https://docs.basilite.org"
    },
    {
        title: "Feature",
        href: "https://feature.basilite.org"
    },
    {
        title: "Vision",
        href: "/vision"
    },
    {
        title: 'About',
        href: '/about'
    }
];

export let socialLinks: SocialLink[] = [
    {
        title: 'GitHub',
        href: 'https://github.com/basilite',
        icon: 'github'
    },
];